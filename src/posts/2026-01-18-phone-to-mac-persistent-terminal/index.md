---
title: Seamless Claude Code Handoff: SSH From Your Phone With tmux
date: 2026-01-18
description: How I set up Tailscale and tmux for true device handoff - attach to running Claude Code sessions from anywhere
---

I wanted to SSH into my Mac from my phone. Not for emergencies - for actual work. Run a quick command, check on a build, continue a Claude Code session I left running. The kind of thing that seems simple until you actually try to do it.

The problem is threefold:

1. **Network access** - Your Mac is behind a router, probably on a dynamic IP, definitely behind NAT
2. **Session persistence** - Phone SSH is flaky. WiFi drops, cellular switches towers, apps get backgrounded
3. **Mobile UX** - Tiny keyboard, no modifier keys, scrolling with your thumb

I solved all three with about 80 lines of configuration: Tailscale for networking, tmux for persistence, and some careful keybindings for mobile usability.

## Part 1: Tailscale for Networking

Tailscale creates a private mesh network between your devices using WireGuard. No port forwarding, no dynamic DNS, no firewall rules. It just works through NAT, hotel WiFi, cellular networks - everywhere.

Install it on your Mac, install it on your phone, sign in with the same account, and you can SSH between them using hostnames like `ssh macbook`.

Setup takes 5 minutes:

1. Install Tailscale from [tailscale.com/download](https://tailscale.com/download)
2. Sign in with Google/GitHub/whatever
3. Enable Remote Login on your Mac (System Settings → Sharing → Remote Login)
4. Optional: Enable Tailscale SSH for keyless auth

That's the networking solved. Your Mac is now reachable from anywhere in the world, through any network, with end-to-end encryption. Free for up to 100 devices.

## Part 2: tmux for Persistence

SSH from a phone is unreliable. Connections drop. Apps get backgrounded by iOS. You walk through a cellular dead zone. Without session persistence, you lose everything when the connection dies.

tmux solves this. Your shell runs inside tmux, and tmux keeps running even when you disconnect. Reconnect later and pick up exactly where you left off.

But I didn't want to think about tmux. I wanted every terminal to just be persistent automatically. So I wrote this:

```bash
# ~/.dotfiles/shell/config/tmux.zsh

# Skip if already in tmux, or NOTMUX is set
[[ -n "$TMUX" || -n "$NOTMUX" || ! -o interactive ]] && return
command -v tmux >/dev/null 2>&1 || return

# Generate fun Docker-style names
_tmux_random_name() {
  local adjectives=(brave calm clever cool daring eager fancy gentle happy jolly...)
  local animals=(otter fox panda koala falcon badger lynx wolf raven hawk...)
  echo "${adjectives[$RANDOM % ${#adjectives[@]} + 1]}-${animals[$RANDOM % ${#animals[@]} + 1]}"
}

# fzf picker with option to create new session
_tmux_pick_session() {
  local selection
  if command -v fzf >/dev/null 2>&1; then
    selection=$( (echo "+ new session"; tmux ls -F "#{session_name}: #{session_windows} windows" 2>/dev/null) | \
      fzf --height 40% --reverse --prompt="tmux session> ")
  else
    selection="+ new session"
  fi
  echo "$selection"
}

# SSH: show picker with existing sessions + new session option
# Local: create session that auto-closes when tab closes
if [[ -n "$SSH_CONNECTION" ]]; then
  selection=$(_tmux_pick_session)
  if [[ "$selection" == "+ new session" ]]; then
    exec tmux new-session -s "$(_tmux_random_name)"
  elif [[ -n "$selection" ]]; then
    session=$(echo "$selection" | cut -d: -f1)
    exec tmux attach -t "$session"
  fi
else
  exec tmux new-session -s "$(_tmux_random_name)" \; set destroy-unattached on
fi
```

Now every iTerm tab starts in its own tmux session with a name like `jolly-panda` or `swift-falcon`. When I SSH in from my phone, fzf shows me all my existing sessions plus a `+ new session` option at the top.

The key insight is treating local and SSH sessions differently:

**Local sessions auto-close.** The `destroy-unattached` flag means when you close an iTerm tab, the tmux session dies with it. No orphaned `swift-falcon` sessions piling up in the background.

**SSH sessions persist.** When your phone connection drops (and it will), the session keeps running. Reconnect later and pick up where you left off. You can also create fresh SSH sessions with fun names by selecting `+ new session` from the picker.

The magic: I can start a long-running process in `brave-otter` on my Mac, SSH in from my phone, attach to `brave-otter`, and see exactly where I left off. Close the SSH app, reopen it later, attach again - still there.

This is especially powerful with Claude Code. Normally if you want to continue a session from a different device, you'd need to use `/resume` to reload the conversation context. But with tmux, you're attaching to the *same running process* - Claude Code is still right there, mid-thought, no resume needed. True seamless handoff between devices.

## Part 3: Mobile-Friendly tmux Bindings

Here's where most tutorials stop. But there's a usability problem: tmux's default prefix is `Ctrl+b`, and mobile keyboards make modifier keys painful. Scrolling is especially bad - you need `Ctrl+b` then `[` to enter copy mode, then arrow keys to scroll.

My fix: bind PageUp and F1 directly to copy mode, no prefix required.

```bash
# ~/.dotfiles/tmux/tmux.conf

# Hide status bar (session name is in my shell prompt)
set -g status off

# Mouse mode for scroll gestures
set -g mouse on

# No-prefix bindings - hit these keys directly
bind -n PageUp copy-mode -eu  # PageUp enters scroll mode and pages up
bind -n F1 copy-mode          # F1 enters scroll mode
```

Termius on iOS sends PageUp when you swipe down with two fingers. Now I can scroll through output naturally, without any Ctrl-anything. Press `q` to exit scroll mode.

## The Point

Mobile SSH doesn't have to suck. With the right config, your phone becomes a legitimate terminal into your development machine - like VNC, but faster and works over cellular. Not a toy, not emergency-only - actually usable for real work.

Your Mac is always one tap away.

## Meta: How This Got Built

I vibe coded this entire setup with Claude Code over about an hour. Here's the actual progression of prompts:

1. **"I want to allow SSHing into this terminal from my phone from anywhere. Best way to do that?"** - Claude suggested Tailscale, explained why it beats port forwarding, and wrote the install script changes.

2. **"how can i have a session open on my macbook and my phone at the same time?"** - This led to the tmux auto-session setup. Claude wrote the detection logic for SSH vs local terminals and the fzf picker.

3. **"claude app looks bad when using tmux and ssh in from termius on my phone"** - We debugged terminal compatibility issues, added the `screen-256color` settings.

4. **"how do you scroll up with tmux?"** - I asked this from my phone, struggling with the Ctrl+b prefix. Claude suggested the no-prefix PageUp binding and I said "perfect, add that."

5. **"write a blogpost in my blog about the tmux tailscale setup"** - This post. Written from my phone, over Tailscale, in a persistent tmux session, about the setup we just built.

The fun Docker-style session names (`jolly-panda`, `swift-falcon`)? Claude's idea - I just said I wanted unique names per tab.

When I asked Claude to write this post, I told it to introspect our conversation history. It read the session index at `~/.claude/projects/` and pulled out the actual prompts I'd typed over the past hour. That's how I got the numbered list above - not from memory, but from Claude reading its own logs and reconstructing the journey.

Total time from "I want to SSH from my phone" to writing this post: maybe 90 minutes. Most of that was waiting for Tailscale to install and testing on actual hardware.

The snake is eating its tail and it tastes great.
