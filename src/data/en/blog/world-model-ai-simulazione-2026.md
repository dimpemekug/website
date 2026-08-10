---
title: "World models: the AI that tries to understand the world instead of just describing it"
description: A language model predicts the next word. A world model tries to predict what happens next in a real scene. It's a precise technical difference, and it's why robotics is looking elsewhere than chatbots.
pubDatetime: 2026-08-07T08:00:00Z
tags:
  - world-models
  - robotics
  - generative-ai
draft: false
---

A language model is trained to predict the next word in a piece of text. That works surprisingly well for generating coherent sentences, but it never had to know that a spilled glass tips over because of gravity, or that an object behind another one stays there even after it leaves the frame. A world model exists to fill exactly that gap: it's trained to predict how a scene evolves — visually, physically, spatially — given its current state and a possible action. It doesn't generate plausible text, it generates the plausible consequence of an event in the world.

<figure>
  <img
    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80"
    alt="A small humanoid robot sitting on a wooden bench while looking at a sheet of paper"
  />
  <figcaption class="text-center">
    Predicting the next move on a chessboard is one problem. Predicting what happens if you move the chair is another.
  </figcaption>
</figure>

## Why a bigger language model isn't enough

You might assume a large enough language model, trained on enough text and images, would eventually work out how the physical world behaves on its own. In practice that doesn't happen: text describes the world, it doesn't simulate it. Knowing that "water makes things wet" isn't the same as predicting the trajectory of a liquid poured under specific conditions. World models are trained differently — often on video, on physics simulations, on a robot's real interactions with its environment — precisely because the goal isn't to generate a plausible description but a prediction useful for acting.

That's why robotics is pushing harder in this direction than chatbots are: a robotic arm that needs to pick up an object has to predict the physical effect of a movement before executing it, not describe it well in words.

## Where the difference already shows

- **Simulation for robot training.** Letting a robot practice in a realistic simulated world, thousands of attempts per second, before it ever touches a real object — an accurate world model makes the simulation faithful enough to transfer to the physical world.
- **Planning physical actions.** Predicting not just the next frame but the consequence of an action over several steps, to choose the one with the desired outcome before actually executing it.
- **Autonomous driving.** Predicting the plausible trajectory of a pedestrian or a nearby vehicle is, at its core, a world-model problem: what happens next in a real physical scene.
- **Video generation that stays coherent over time.** A generated video that respects physics — an object falling believably, a shadow moving consistently with the light — is a direct byproduct of a model that has learned a representation of the world, not just of pixels.

## The limits that remain open

1. **Generalization outside training is still fragile.** A world model trained mostly on urban scenes or common objects struggles with rare situations — exactly where reliability would matter most.
2. **It needs data that isn't written down anywhere.** Unlike text, the physical behavior of the world has to be observed or simulated: video, sensors, real interactions — data collection far more expensive than scraping the web.
3. **The line between correlation and physics.** A model can learn that "objects thrown upward usually come back down" without ever having represented gravity as a concept — it works in typical cases, and fails unpredictably in atypical ones.
4. **Validation is harder.** With text, an error is something you read. With a wrong physical prediction driving a real robot, the error surfaces once the action has already been executed.

> **Tip:** if you read that a system "understands the physics of the world," ask what it was validated on — scenes similar to its training data, or genuinely novel situations. The difference between the two is, today, the most honest measure of how much to trust it.

## What to expect from here

World models won't replace language models — they're the natural complement for anything that involves acting in the physical world rather than talking about it. Robotics, autonomous driving, and high-quality video generation all depend, in different ways, on how well these models learn to predict not just what looks plausible, but what actually happens.
