---
title: How to Nerd Snipe Hacker News
date: 2026-02-19
description: I built a free signature maker. It hit #7 on Hacker News under the title "Famous Signatures Through History."
---

I needed a PNG of my signature. I was writing a manifesto for [Kith](https://joinkith.com) and I wanted to sign it at the bottom. My actual handwriting. A real person standing behind real words.

So I googled "free signature maker" and found what you'd expect. Five SaaS products fighting for my email address before I could draw a single line. Canva loading 47 scripts. Something that watermarks your own signature and charges $12/month to remove it. Every one of them was a funnel shaped like a tool.

I built [Signatory](https://signatory.app) in an evening. One page. You draw your signature. You download it as PNG or SVG. No account, no backend, no ads.

Then I posted it to Hacker News and it went to #7.

The title wasn't "Show HN: I Built a Signature Maker." It was ["Famous Signatures Through History."](https://news.ycombinator.com/item?id=47073684)

### The nerd snipe

[XKCD 356](https://xkcd.com/356/). You present something so interesting that a specific type of person cannot walk away from it. The setup looks innocent.

Signatory has a gallery of 70 historical signatures. Napoleon's jagged scrawl. Sitting Bull's pictographic self-portrait. Charlemagne's monogram, because he could barely write. King Ferdinand VII of Spain, who signed documents with just "Yo el Rey." I, the king.

That last one surfaced in the HN comments within the first hour. I found the SVG on Wikimedia Commons and added it live. When someone mentioned Lucas Cranach the Elder signed his paintings with a tiny winged dragon, I added that one too.

Historical signatures are irresistible to the HN crowd. Every one has a story that tells you something about the person who made the mark. You open the page meaning to glance and you're still scrolling three minutes later reading about how Houdini's signature evolved throughout his career.

And while you're there, you notice the drawing canvas at the top of the page. The one that uses velocity-sensitive strokes to make your mouse feel like a fountain pen. You try it. You draw your name. You draw it again because it actually feels kind of nice.

The interesting thing and the useful thing were on the same page. I only linked to the interesting one.

### The audience

Hacker News has strong opinions. A link titled "Famous Signatures Through History" is going to get clicked at 2pm on a Tuesday by people who should be working. "Show HN: I Built a Free Signature Maker" isn't. That title sounds like every other Show HN drowning in the new queue. I know, because I searched: at least two other signature makers have been posted to HN in the past year. Neither broke 15 points.

Same product. The headline is the only variable.

The other thing HN people do is participate. When commenters suggested additions, I didn't say "great idea, we'll add that to the roadmap." I added them. In the thread. While the thread was still active. The post kept breathing because it was a conversation, not an announcement.

### The thing underneath

Here's what I actually care about. "Free signature maker" gets 9,600 searches a month. "Online signature maker" gets 19,000. Signaturely, the company that currently owns most of those keywords, drives 180,000 organic visitors per month to their tool page. That traffic is worth an estimated $370,000 per year.

All of it goes to a product that's deliberately worse than it needs to be, because the business model requires an upgrade.

Signatory has nine variant landing pages generated from the same canvas: `/cursive-signature-maker`, `/signature-maker-for-pdf`, `/draw-signature-online`, each targeting a different keyword cluster with different meta tags and a paragraph of contextual copy. The Canva playbook, except the tool loads in under a second and there's nothing to upsell.

The domains I'm competing against have thousands of backlinks and years of authority. I have a fast page and zero ads. Google says it rewards that. I'll find out if Google means it.

### The technical bait

The drawing engine uses a 3KB library called [perfect-freehand](https://github.com/steveruizok/perfect-freehand) that simulates pen pressure from mouse velocity. It measures speed from the distance between pointer events and maps that to stroke width. Draw fast, the line thins out. Draw slow, it thickens. The physics of a fountain pen, approximated in a browser.

That's a nerd snipe too, by the way. "Velocity-sensitive stroke width derived from inter-event distance as a proxy for pen pressure" is the kind of sentence a certain type of person reads and immediately needs to see working.

Nobody had built the beautiful version of this. The whole space is tools that do the job while making you feel like you're being processed. Signatory exists because I needed a signature and got annoyed, and then I realized that annoyance was shared by roughly 19,000 people a month, and none of the results respected their time.

The HN traffic is a nice spike. The real bet is whether nine clean pages can chip away at a market where every incumbent is actively hostile to their own users. I'll check back in six months. If you got here by googling "free signature maker," I guess I have my answer.
