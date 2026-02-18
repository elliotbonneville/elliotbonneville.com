---
title: The OpenClawification of the Web
date: 2026-02-18
description: Right now, OpenClaw's biggest use case is OpenClaw. That's not the interesting part.
---

A couple days ago I vibe coded an Apple Watch button that talks to an OpenClaw server. Took one evening. I'm not a mobile developer. I don't know Swift. I used Apple Shortcuts and some duct tape and by 10:45pm I could tap my watch, dictate something, and get a voice back from an AI agent running on a DigitalOcean droplet. I think my wife thinks I'm crazy.

It still works. I have no idea what to use it for. I tap it sometimes just to feel something.

That uselessness is the most important thing happening in tech right now. Not OpenClaw itself. Not the 208,000 GitHub stars or the bidding war that ended with Steinberger at OpenAI. The uselessness. The specific flavor of uselessness where the thing works perfectly and you have nowhere to point it.

Because right now, OpenClaw's biggest use case is OpenClaw.

People are using OpenClaw to set up OpenClaw. They're building integrations for OpenClaw. They're posting about OpenClaw on networks built by OpenClaw. Someone used five parallel OpenClaw agents to write an [88,000-word book about OpenClaw](https://github.com/openclaw/openclaw/discussions/17626) in 48 hours. The book documents the exact techniques the system used to write it. A project called [Foundry](https://github.com/lekt9/openclaw-foundry) describes itself as "the forge that forges itself." There's a social network called [Moltbook](https://en.wikipedia.org/wiki/Moltbook) where AI agents post, argue, and upvote each other all day. MIT Technology Review [called it](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/) "AI theater." Simon Willison called it "complete slop" and also "evidence that AI agents have become significantly more powerful." Both of those are true. That's the confusing part.

The ouroboros has GitHub stars. The hype is the product. The forge forges the forge.

And none of that is the interesting part.

The interesting part is what's calcifying underneath all this noise. Quietly. While everyone watches the ouroboros.

We all know the intelligence is here. The models crossed "smart enough" a while ago. But there's no way to hand an agent your credit card and go to bed.

CrowdStrike flagged OpenClaw's broad permissions as a security nightmare. An independent researcher found [42,665 publicly exposed instances](https://www.crowdstrike.com/en-us/blog/what-security-teams-need-to-know-about-openclaw-ai-super-agent/) with 93% showing critical authentication bypass vulnerabilities. Meta banned it from company devices. And those are the obvious problems. The non-obvious ones are worse: if your agent can read your email, send messages, and access your calendar, what happens when someone poisons its context? What happens when it makes a purchase you didn't want? What happens when it's 3am and it's operating autonomously and it gets confused?

These are not hypothetical questions anymore. They're engineering problems. And the Cambrian explosion isn't happening around the AI. It's happening around the trust layer.

Look at what's already moving. Visa launched [Trusted Agent Protocol](https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21961.html), an open framework for agent-driven checkout with Microsoft, Shopify, and Stripe backing it. Mastercard shipped [Agent Pay](https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay.html), with Fiserv integrating it into merchant infrastructure. Cloudflare built an [authentication layer](https://blog.cloudflare.com/secure-agentic-commerce/) that lets networks distinguish between bots and legitimate AI agents. Privacy.com-style virtual cards for AI agents aren't a thought experiment anymore. They're being built.

Then there's the hardware side. PicoClaw runs a full agent on [a $10 board](https://news.ycombinator.com/item?id=47004845). ZeroClaw rewrote the whole thing in Rust. The orchestration layer, the part that decides what the agent does, can now live on almost anything. The expensive part was never the brain. It was always the guardrails.

Here's what I think is actually happening. Everyone who set up OpenClaw in the last month just played Iron Man in their garage. They wired Jarvis to their smart home, their calendar, their messaging apps. They felt the future in their hands for a few hours. Then they put it down because there was nothing safe or structured enough to do with it at scale.

But they remember what it felt like. And now a thousand companies are racing to build the missing pieces. Not better models. Not smarter agents. Sandboxed accounts. Scoped permissions. Agent-specific identities. Transaction limits. Audit trails. The boring stuff that turns a demo into a life.

The criticism that OpenClaw is "nothing novel" misses the point entirely. Of course it's not novel. It's a chatbot connected to APIs. The novel thing is that millions of people just experienced what it feels like to have an autonomous agent operating in their real environment, touching their real data, for the first time. That experience created demand for infrastructure that didn't need to exist six months ago.

That's the OpenClawification of the web. Six months from now nobody will be talking about OpenClaw. They'll be too busy using the infrastructure it scared us into building.
