---
title: "Prompt injection: the AI agent vulnerability no patch can close"
description: When an assistant reads emails, web pages, and documents, any text can turn into a command. Why prompt injection has become the main security problem of systems built on language models, and how to limit the damage.
pubDatetime: 2026-09-09T08:00:00Z
tags:
  - cybersecurity
  - llm
  - ai-agents
draft: false
---

Twenty years ago, computing learned an expensive lesson: never mix data and commands. SQL injection existed because a text field typed by a user could end up executed as an instruction by the database. Language models have brought that problem back to center stage, with an awkward twist: for an LLM, instructions and data are by design the same thing. It's all text.

<figure>
  <img
    src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1200&q=80"
    alt="A person wearing headphones in front of two monitors full of code in a dark room"
  />
  <figcaption class="text-center">
    For a language model there's no clean line between the instructions it receives and the text it reads while working.
  </figcaption>
</figure>

## Direct and indirect

The best-known form is **direct**: someone tells the assistant to "ignore previous instructions" and tries to make it do what it shouldn't. It's annoying, but whoever attempts it is talking to the system, and the damage usually stays within their own conversation.

The form that really matters is **indirect**. The attacker never talks to the assistant: they hide their instructions in a web page, an email, a PDF, a comment inside a repository. When the agent reads that content to perform a legitimate task, the instructions enter its context with the same weight as the user's.

## Why agents raise the stakes

- **Access to data.** An assistant that reads your mail, your documents, or your code has exactly what an attacker would want to steal.
- **The ability to act.** Sending emails, calling APIs, editing files, running commands: every tool the agent can use is also a tool a malicious text can try to use.
- **Exit channels.** It doesn't take much to get information out: a link to click, an image loaded from an address with the data embedded in the path, a request to an external service.

When all three are present together — private data, untrusted content, a way to communicate outward — you get what some researchers have called the "lethal trifecta." It's the combination in which a single well-crafted web page can turn an assistant into an exfiltration tool.

## Why there's no patch

Filters that look for suspicious phrases are bypassed by rewording. Models trained to recognize injected instructions keep improving, but their behavior remains probabilistic: a defense that works 99% of the time is a great benchmark result and a terrible security result, where the attacker only needs to win once. It's no coincidence that prompt injection sits at the top of OWASP's list of risks for LLM applications.

## How to limit the damage

1. **Least privilege.** An agent that summarizes web pages doesn't need to be able to send email. Every permission removed is one fewer possible attack.
2. **Human confirmation for irreversible actions.** Payments, sends, deletions, and publications should go through a click from the person using the system, with a clear summary of what's about to happen.
3. **Separate contexts.** The component that reads untrusted content shouldn't, at the same time, have access to sensitive data and to tools that communicate outward.
4. **Close the exit channels.** No automatic rendering of images or links to arbitrary domains, no open network requests unless the task requires them.
5. **Log everything.** Readable logs of the agent's actions don't prevent the attack, but they let you notice it and understand what happened.

> **Tip:** for every agent you use or build, ask three questions. What does it read that you didn't write? What data can it access? How could it get information out? If the answer to all three is "a lot," remove at least one of the three before worrying about any filter.

## What to expect from here

Research is shifting from "make the model more careful" to "design the system so the model's carefulness isn't what stands between you and damage": architectures where a privileged model plans actions without ever seeing external content, and a second, isolated model reads that content without being able to act. It's the same lesson as SQL injection, applied to a new world: the fix isn't teaching the database to be suspicious, it's separating data from commands upstream.
