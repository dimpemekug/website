---
title: "LaTeX equations in Word documents, on Mac, iPhone and iPad"
description: You write formulas in LaTeX but have to hand in a .docx file? How Word, Pages and LibreOffice handle equations, why a picture isn't enough, and how to end up with equations the recipient can still edit.
seoTitle: "LaTeX equations in Word on Mac, iPhone and iPad"
seoDescription: "How to type equations in LaTeX and save them as real Word or LibreOffice equations on Mac, iPhone and iPad, and which mistakes to avoid when sharing files."
pubDatetime: 2026-11-27T08:00:00Z
related:
  - note-markdown-collegate-mac-iphone
  - local-first-app-offline-sincronizzazione-2026
  - convertire-heic-jpeg-mac-iphone
relatedProjects:
  - documenta
tags:
  - macos
  - productivity
  - mobile
draft: false
---

A thesis with thirty formulas, a lab report, homework to send to a teacher: people who study or work with maths often write equations in LaTeX, because it's fast and precise. Then someone asks for a Word file, and the trouble starts: formulas pasted as pictures that nobody can fix, symbols that vanish when the file opens on another computer, matrices that turn into plain text. The key is understanding how word processors store equations, and picking a route that keeps them editable.

<figure>
  <img
    src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&q=80"
    alt="Close-up of a printed page with a system of four linear equations, the last lines in focus"
  />
  <figcaption class="text-center">
    A printed system of equations: to stay editable, it has to be an equation in the file, not a picture.
  </figcaption>
</figure>

## How a document keeps an equation

LaTeX is a way of writing formulas, not the format a document stores them in. Each program translates what you type into its own format:

1. **Word (.docx)** stores equations as Office Math (OMML), the format of Word's equation editor. An equation stored this way opens, scales and can be corrected in Word like one typed by hand.
2. **LibreOffice (.odt)** stores formulas as MathML, the web standard for mathematics.
3. **A picture** of a formula is just a drawing: you can see it, but you can't search it or fix it, and it often looks blurry when printed or zoomed.

So the right question isn't "can I type in LaTeX?" but "does the file I hand in contain real equations?".

## In Word

In the Microsoft 365 versions of Word, the equation editor accepts LaTeX. You insert an equation with **Insert › Equation** (or <kbd>Alt</kbd> <kbd>=</kbd> on Windows, <kbd>Ctrl</kbd> <kbd>=</kbd> on Mac), choose the LaTeX format in the **Equation** tab and type the formula; the convert command (<kbd>Ctrl</kbd> <kbd>=</kbd> on Windows, <kbd>⌘</kbd> <kbd>=</kbd> on Mac) turns it into the typeset version.

The limits worth knowing:

1. **No environments.** Word doesn't accept `\begin{...}` and `\end{...}`: matrices are written in its own syntax, such as `\matrix{...}`, not with `pmatrix`.
2. **Not all of LaTeX.** Some commands aren't recognized, and you can't define your own macros.
3. **No automatic conversion.** The formula stays in linear form until you ask for the conversion: with many equations, it pays to learn the shortcut.

## In Pages

Pages for Mac has **Insert › Equation**, where you type LaTeX or MathML; double-clicking the equation opens it again for editing. It only accepts part of the LaTeX commands, though. Pages exports to Word, but Apple doesn't say how equations are converted: before handing in an important document, open the exported file in Word and check the more complex formulas.

## In LibreOffice

LibreOffice Math doesn't use LaTeX: it has its own syntax (for example `a over b` for a fraction). To bring in formulas written in LaTeX you need an extra step: convert them to MathML with an external tool and import them with Math's command that reads MathML from the clipboard (in the Tools menu), or use an extension such as TexMaths, which however inserts formulas as pictures. Check the imported result, because MathML and LibreOffice's syntax don't match completely.

## On Mac, iPhone and iPad with Documenta

[Documenta](/en/projects/documenta/), the free word processor for Mac, iPhone and iPad, has an equation editor designed for people who already write LaTeX:

1. **LaTeX with a preview.** Type the formula and see the result right away; templates (fraction, root, sum, integral, matrix, cases…) insert the skeleton to fill in.
2. **Environments included.** `pmatrix`, `bmatrix`, `cases` and `align*` work as in LaTeX.
3. **Real equations in the files.** In a .docx they become Word equations, in an .odt LibreOffice formulas, in Markdown they stay LaTeX between `$` signs; equations in documents you receive open and can be corrected too.
4. **Inline or on their own line.** A formula can sit in the line like a word or, larger, on a line of its own.

The [equations guide](/en/projects/documenta/docs/equations/) lists the supported commands and what happens in each format. As in any program, formats that have no equations (RTF, the old .doc) turn formulas into pictures.

> **Tip:** keep the LaTeX source of the longer formulas in a separate text file. If a trip between programs breaks an equation, you can retype it in seconds instead of rebuilding it symbol by symbol.

## Before you hand in the file

A few checks that save you from nasty surprises:

1. **Open the file where the recipient will open it.** A .docx with equations should be tested in Word, an .odt in LibreOffice: that's where you see whether the formulas are still equations.
2. **Avoid formats without equations.** RTF and .doc turn them into pictures, plain text into code.
3. **Be wary of formulas pasted from websites and chats.** They often arrive as pictures or as loose Unicode characters: better to retype them in LaTeX.
4. **Check matrices and systems.** They're the parts that break most often on the way from one program to another.

## What to keep in mind

LaTeX is still the fastest way to write maths, and word processors no longer ignore it: Word accepts it in its editor, Pages uses it for equations, and other apps translate it straight into Word and LibreOffice formats. What matters is the final file: if it holds real equations, whoever receives it can read them, fix them and carry on with the work.
