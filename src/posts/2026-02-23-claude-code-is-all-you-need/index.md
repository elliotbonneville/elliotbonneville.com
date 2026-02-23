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

I didn't build much else. No agent framework. No orchestration layer, no plugin system, no tool registry, no vector database, no RAG pipeline. Claude Code already has all of it: tool use, persistent memory, skills, MCP servers, project context via CLAUDE.md. BAREclaw just keeps the process alive and routes messages to it.

### The bitter lesson, applied to agents

Rich Sutton wrote [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) in 2019. His argument: 70 years of AI research shows that general methods which scale with computation always beat hand-crafted domain-specific systems. Always. Chess engines that searched deeper beat chess engines stuffed with grandmaster knowledge. Neural networks that learned from raw data beat computer vision systems with hand-coded edge detectors. The builders of the hand-crafted systems were smart. Moore's law didn't care.

Andrej Karpathy bought a Mac Mini a few days ago to [tinker with "claws" over the weekend](https://simonwillison.net/2026/Feb/21/claws/). His take: "just as LLM agents were a new layer on top of LLMs, Claws are now a new layer on top of LLM agents." He liked [NanoClaw](https://github.com/qwibitai/nanoclaw) because its core engine is ~4,000 lines of auditable code and runs everything in containers. He was less enthusiastic about OpenClaw's 400,000 lines of "vibe coded" code with its exposed instances and RCE vulnerabilities.

I think even NanoClaw is building too much. Its core is 4,000 lines of agent framework. BAREclaw's core is ~400 lines of process management. The difference is that BAREclaw doesn't implement an agent. Claude Code *is* the agent. Skills, tool use, memory, MCP, project context, self-modification. It's all there. The 4,000 lines NanoClaw spends on orchestration are 4,000 lines Claude Code already has.

Yohei Nakajima, the creator of BabyAGI, [put it perfectly](https://x.com/yoheinakajima/status/2025235222993010708): "build the simplest thing that can build itself." BAREclaw takes that literally. Claude running through BAREclaw can open its own source code, rewrite the Telegram adapter, commit, and restart. The daemon that builds itself. No framework required.

All the claws are building the thing that already exists.

### Why shell out to the CLI

BAREclaw shells out to `claude -p` instead of using Anthropic's Agent SDK. Sounds hacky. It's the most important design decision in the project.

The Agent SDK bills per API token. Every prompt, every response, metered. The CLI goes through a Claude Max subscription. Flat rate, unlimited. The marginal cost of running BAREclaw is zero dollars.

You'd use the SDK if you were building a product for other people. For your own daemon running on your own machine, the economics answer themselves.

### What ~1,300 lines gets you

Sessions survive server restarts, code deploys, and crashes. Each channel gets its own Claude process with strict FIFO queuing, so messages from Telegram and HTTP don't block each other. Rapid-fire texts get coalesced into a single turn so Claude reads them as one thought instead of three fragments. A heartbeat job fires hourly to keep the daemon alive across reboots. Photos sent via Telegram get forwarded as multimodal input. The agent can message you proactively without waiting for a prompt.

Every feature in that paragraph was added by Claude, through BAREclaw, while I described what I wanted over Telegram.

### The stack

I wrote my [phone-to-Mac SSH setup](/phone-to-mac-persistent-terminal/) a month ago. tmux for session persistence, Tailscale for networking. BAREclaw sits on top. The daemon lives in a tmux session. SSH connection drops, the daemon keeps running. Power goes out (which it did yesterday, during a blizzard), the daemon comes back when the Mac reboots because the heartbeat job reinstalls itself on startup.

I was managing the power outage from my phone. Checking propane, coordinating with my wife, figuring out which circuits to kill. In between, texting Claude on Telegram to fix bugs in BAREclaw's message streaming. Two conversations, same phone, different apps.

I don't know if anyone else will use it. The whole agent framework ecosystem might be solving a problem that doesn't exist anymore. Claude Code is the agent. All it needed was a phone number.
