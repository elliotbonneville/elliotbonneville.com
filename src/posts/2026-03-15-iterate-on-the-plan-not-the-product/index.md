---
title: Iterate on the Plan, Not the Product
date: 2026-03-15
description: The first draft an LLM produces is more internally consistent than what you end up with after iterating on it. The fix belongs in the spec, not the artifact.
---

The first draft of something an LLM produces is often more internally consistent than what I end up with after pushing and pulling ideas into and out of the product — whether a blog post, a game, a website, or something else. The initial un-tainted output from the model before I ask it to produce anything is better than what I find myself with after a bunch of iterating on that first output.

The model is good at turning a vision into something coherent, but once you start futzing with the output you lack the context the model had during generation and end up breaking things. The model held the whole design in its head at once. I'm patching it locally, one edit at a time, without that holistic view.

The better workflow: iterate on the *plan*, not the *artifact*. Stay at the 10,000-foot level. When I notice something wrong with the output, most of the time it's me realizing a constraint on the design — not a defect in the execution. The right move is to update the spec and regenerate, not to surgically fix the artifact. The initial generation step feels expensive, so it feels easier to iterate on the output instead, but that's not strictly true in the long run. The accumulated cost of patching a coherent artifact into incoherence is higher than regenerating from a better plan.

There's a related but separate problem where the model flattens *your* voice during multiple passes — smoothing out weirdness, regressing toward its statistical mean. But this is about the opposite direction: *you* disrupting the *model's* coherence by intervening at the wrong level of abstraction. Both are real, and they compound. Each iteration both smooths out your weirdness and breaks the model's internal logic.

The key distinction: **iterate on the plan, not the product.**

The right workflow is closer to "spec, generate, evaluate, revise spec, regenerate" than "generate, edit, edit, edit." The sunk cost of the first generation is a trap. Regeneration from a better plan is almost always cheaper than patching.
