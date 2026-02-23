---
title: Claude Code Is All You Need
date: 2026-02-23
description: All the claws are building the thing that already exists. BAREclaw is proof.
---

Two days ago this was a bullet point in a note. "What if I could just text Claude from my phone?" Forty-eight hours later I have a daemon running on my Mac that routes Telegram messages into persistent Claude Code sessions. It reads my files. Runs shell commands. Edits its own source code and restarts itself. I'm using it to write this post, from my phone, during a blizzard.

The project is called [BAREclaw](https://github.com/elliotbonneville/bareclaw). ~1,300 lines of TypeScript across 9 commits. One daemon, many mouths, one brain.

The architecture:

```
[Telegram / curl / HTTP / whatever]
    -> thin adapter (translates protocol)
        -> ProcessManager (one queue per channel)
            -> persistent claude -p process
    <- response via same channel
```

Each input channel gets a transport adapter that speaks Telegram or HTTP on one side, and `claude -p` on the other. BAREclaw is the layer in between.

The features I didn't write are more interesting than the ones I did. There's no orchestration layer, no tool registry, no RAG pipeline. Claude Code handles tool use, memory, and project context on its own. BAREclaw is just the plumbing that keeps the process alive and routes messages to it.

### The bitter lesson, applied to agents

Rich Sutton wrote [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) in 2019. The short version: 70 years of AI research shows that general methods which scale with computation always beat hand-crafted domain-specific systems. Chess engines that searched deeper beat chess engines stuffed with grandmaster knowledge. Neural networks that learned from raw data beat computer vision systems with hand-coded edge detectors. The people who built those hand-crafted systems were brilliant, and it didn't matter, because compute got cheaper faster than their cleverness could compound.

Andrej Karpathy bought a Mac Mini a few days ago to [tinker with "claws" over the weekend](https://simonwillison.net/2026/Feb/21/claws/). His take: "just as LLM agents were a new layer on top of LLMs, Claws are now a new layer on top of LLM agents." He liked [NanoClaw](https://github.com/qwibitai/nanoclaw) because its core engine is ~4,000 lines of auditable code and runs everything in containers. He was less enthusiastic about OpenClaw's 400,000 lines of "vibe coded" code with its exposed instances and RCE vulnerabilities.

I think even NanoClaw is building too much. Its core is 4,000 lines of agent framework. BAREclaw's is ~400 lines of process management. BAREclaw doesn't implement an agent because Claude Code already is one. It already has skills, tool use, memory, MCP servers, project context, self-modification. NanoClaw reimplements orchestration that Claude Code ships out of the box.

Yohei Nakajima, the BabyAGI guy, has [this line](https://x.com/yoheinakajima/status/2025235222993010708) I keep thinking about: "build the simplest thing that can build itself." BAREclaw takes that literally. Claude running through BAREclaw can open its own source code, rewrite the Telegram adapter, commit, and trigger a restart. I watched it do this yesterday while I was describing what I wanted over text.

All the claws are building the thing that already exists.

### Why shell out to the CLI

BAREclaw shells out to `claude -p` instead of using Anthropic's Agent SDK, which looks wrong until you think about the billing. The SDK charges per token. The CLI goes through a Claude Max subscription, which is flat rate. I pay the same $200/month whether BAREclaw handles three messages or three hundred.

This also keeps things clean with Anthropic's terms. In February 2026 they [cracked down](https://winbuzzer.com/2026/02/19/anthropic-bans-claude-subscription-oauth-in-third-party-apps-xcxwbn/) on third-party tools that were extracting OAuth tokens from Max subscriptions and routing them through their own API clients. That's token arbitrage, and they were right to shut it down. BAREclaw doesn't do any of that. It calls the actual `claude` binary, Anthropic's own CLI, the way it was designed to be called. Their docs show `claude -p` piping logs and running in CI pipelines. BAREclaw is just another process calling `claude -p` on my own machine. Ordinary individual usage, which is exactly how the Max plan is scoped.

### What ~1,300 lines gets you

Each channel gets its own Claude process. Sessions survive restarts and crashes. If I send three texts in a row while it's thinking, they get coalesced into a single turn instead of three separate ones (this matters more than you'd expect when you're firing off thoughts from your phone). There's a heartbeat that fires hourly and restarts the daemon if it died. I can send it photos. It can message me first.

The server runs with `tsx watch`, so code changes hot reload instantly. Most of this was built by the daemon itself. I'd describe what I wanted over Telegram, watch it edit its own source, and the server would pick up the changes before I finished reading the diff. The snake eats its tail again.

### The stack

I wrote my [phone-to-Mac SSH setup](/phone-to-mac-persistent-terminal/) a month ago. tmux for session persistence, Tailscale for networking. BAREclaw sits on top. The daemon lives in a tmux session. SSH connection drops, the daemon keeps running. Power goes out (which it did yesterday, during a blizzard), the daemon comes back when the Mac reboots because the heartbeat job reinstalls itself on startup.

I was managing the power outage from my phone. Checking propane, coordinating with my wife, figuring out which circuits to kill. In between, texting Claude on Telegram to fix bugs in BAREclaw's message streaming. Two conversations, same phone, different apps.

I don't know if anyone else will use it. I'm not even sure the agent framework ecosystem is solving a real problem anymore. Claude Code is already the agent. The only thing it was missing was a way to reach it from my pocket.
