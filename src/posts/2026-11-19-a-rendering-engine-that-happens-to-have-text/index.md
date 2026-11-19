---
title: A Rendering Engine That Happens To Have Text
date: 2026-11-19
description: This blog is now a Rust program that simulates a dip pen, a sheet of vellum and a 250-year-old desk, with the words laid over the top.
---

In August of last year I wrote a post about building this blog in 90 minutes with 233 lines of code. I was proud of everything it left out. It used system fonts only, because "your OS spent millions on typography," and it shipped zero bytes of JavaScript.

What you're reading now is a little under 28,000 lines of Rust. The letters are set in fonts made by simulating a dip pen writing each one. A 400 KB WebAssembly program draws the sheet they sit on, and if your screen is wide enough it streams in pictures of a mahogany desk that was modeled starting from the tree it was cut from. I've started thinking of it as a rendering engine that happens to have some text in it.

## How it started

On Tuesday afternoon I typed "i want to redo my blog. i want it to be beautiful and ornate." The first plan used Three.js and I killed it within five minutes, because I didn't want janky 3D. What I did want took a few more messages to put into words, and the one that stuck was "something that doesn't feel digital."

I had a reference. Last week I built a map of the Sword Coast for running D&D, and everything on it is drawn by a simulated dip pen, in Rust compiled to WebAssembly and drawn straight to WebGL with no engine in between. The ink runs dry and gets re-dipped. Pigment pools and granulates. I loved how it came out, so the blog started as a fork of the map's pen.

I didn't write a line of the Rust. Claude Code ran the project and Fable agents did the building, one on the page and the ink and another on the desk. They'd report back with measurements, like the brightest pixel on the desk dropping from 228 to 127, and I'd look and say things like "tine tracks are a bit overdramatic, walk them back somewhat." At one point they kept opening browser windows over whatever I was doing to take screenshots, and I had to type "you keep taking over my screen please stop." About thirty hours after the first message, with a night's sleep in the middle, it was live.

## The pen

Most of what the pen does is go wrong the way a real pen goes wrong. Pressure spreads the tines and the line swells. Every stroke drains the reservoir, so the line greys and starts skipping over the tooth of the sheet, and eventually the film of ink between the tines breaks and the stroke splits into two rails. Then the hand goes back to the well and the next stroke lands dark.

The hand trembles. Short strokes bow along the arc of the wrist, and sometimes it hesitates and leaves a dot.

The ink keeps moving after the nib lifts. It creeps a little way along the fibres of the sheet, and as a stroke dries the pigment migrates to its edge like a coffee ring. The desk slopes toward the scribe, so the lower edge of each stroke collects more than the upper one. Iron-gall ink is partly a dye, so it stains the sheet a hair past where the pen went.

The sheet is calfskin vellum, ruled in faint lines with prick marks down the margin where a scribe would have measured them out. The pen asks the sheet what it's writing on at every point, so a dry stroke breaks on ridges that are really in that sheet, and wet ink gathers in its real hollows.

My main note on all of this was "the ink shouldn't run out QUITE so fast." The first version was re-dipping in the middle of words.

## The fonts

The map's lettering has no font files. Each letter is a skeleton path with a few strokes of a broad-edge nib along it, so the thick and thin parts come from the angle of the pen instead of from an outline someone drew. For the blog, those strokes get exported as real font files, because the browser needs something it can lay out.

A scribe doesn't write a letter the same way twice in a row, so the fonts carry several forms of most letters and choose between them by looking back at up to eight letters before. The map never needed a dollar sign or a percent sign. The blog did, so the scribe learned two new letters.

## The invisible text

The page is real HTML. You can select and search it, a screen reader can read it, and it prints. Turn JavaScript off and you get a plain page of the same text in the same fonts.

When the program runs, it asks the browser where it put every word. Then it draws each word again, in the same font in the same spot, into a texture that a shader turns into ink on vellum. That texture also records how much ink the pen had left at each word, so the load falls off across a run of words and comes back at a dip. Once that's done, the browser's own text is made transparent.

So when you highlight a sentence here, you're selecting invisible words that lie exactly under the ink. The browser still does all the work of laying out the text. It just doesn't get to show it to you.

The page is cut into horizontal strips that get drawn just ahead of wherever you're reading. If you jump down the page fast enough right after it loads, you can sometimes catch a strip before it's drawn and see plain text on a plain sheet, which is more or less the blog I had before.

## The desk

I asked for the wood to be "scarred and beat up, old, 1700s wood." The first attempt looked like a texture, so I asked for it to be modeled from physics the way the ink was, researched instead of hand-generated, and lit by a real lamp.

What came back starts with a tree. It's a solid, with a pith that wanders up the trunk and a growth layer for every year, built on a 2016 paper about simulating the structure of solid wood. Mahogany's grain spirals and reverses direction every few years, and that's in there, along with pores between 90 and 255 microns across, some of them plugged with dark gum. The boards are planes sliced through the tree. The finish is lit with a model from a 2005 SIGGRAPH paper on finished wood, which is where mahogany's ribbon stripe comes from.

Then the desk gets two and a half centuries of use, kept as a list of events, each with a place and a date. Grit dragged under paper leaves families of parallel hairlines. A penknife trimming paper against a rule leaves scores. Things dropped on it leave dents that run further along the grain than across it. People sat at it in a few places, with the inkwell to the right and a candle to the left, and most of the damage gathers around those spots. Old scratches are dark with wax and dust, and newer ones are pale.

There are no wormholes. A comment in the code explains that the furniture beetle goes after sapwood, that a mahogany top is all heartwood, and cites English Heritage. All I'd asked for was an old desk.

It bakes into about 60 MB of image tiles. The page only fetches tiles for the desk that's actually showing beside the sheet, nearest first, and on a phone, where the sheet fills the screen, it fetches none. My notes were mostly about color: "the wood needs to be darker and more subtle, more mahogany than maple," and later, "slightly lower contrast, it detracts a bit from the main post."

## Too much

The block at the top of each post is a vermilion letter on a pale blue ground, with a vine filling the space around it. Each scroll of the vine turns the opposite way from the one it springs from, the way real vines alternate, and where a stem would cross the letter the pen lifts, so it reads as passing behind.

For a while there was a lot more than that. Every section opened with a red or blue letter in a panel of filigree, tendrils ran down the margins, and short lines got little hand-drawn fillers. I told it the page was "a bit overly ornate in places."

What you see now is the moderate setting. Add `?orn=rich` to the address of any post to see the full version, or `?orn=plain` to strip it back. You can change the ink with `?ink=` and one of gall, sepia, walnut, murrey, moss or slate. Sepia is the default.

## The coffer

In February I wrote a post in very bad fake Early Modern English about AI making personal websites strange again. One line in it: "That spare elegance was no aesthetick preference. 'Twas naught but the limitations of one's coffer." I didn't apply that to my own blog, even though I'd written a whole philosophy of minimalism for it six months before. I believed the philosophy. Reading it now, a fair amount of it was a budget.

Some of it held up. The site is still static files. The words are still text, and they still work with nothing running. What changed is that everything around the words got cheap enough to build.

Each post's sheet is aged by how long ago it was written. Older posts get more toning and more specks, on a curve that takes about ninety years to get two thirds of the way to ancient. The 90-minute post is a little over a year old, so you'd need a loupe to see it. The ages are recalculated whenever I rebuild the site, which means every new post makes the old ones a tiny bit older.
