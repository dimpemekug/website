---
title: "Security, Biometrics and Trash"
description: "Face ID and Touch ID lock, re-lock after a chosen interval and a Trash that keeps deleted items restorable for 30 days in CodeVault."
project: "codevault"
order: 3
section: "Security"
---

## Biometric Lock (Face ID and Touch ID)

Snippets and notes often contain configuration, deployment scripts or sensitive development data. That is why CodeVault offers an optional lock based on `LocalAuthentication`, which you enable in **Settings › Security › Biometric Lock**:

- **On iPhone and iPad**: unlock with Face ID or Touch ID when the app opens.
- **On Mac**: unlock with Touch ID or Apple Watch.
- **Passcode or password fallback**: if biometrics fail, you can unlock with the device passcode or your Mac password.
- **Re-lock after an interval**: choose when the app asks to unlock again after going to the background: immediately, after 1 minute, after 5 minutes or after 15 minutes.

---

## Trash with Restore

Since version 9 of the data schema, CodeVault does not delete items right away but moves them to the **Trash** (*soft delete*):

- **No accidental losses**: a deleted snippet or note is not removed from the database; it is stamped with its deletion date (the `deletedAt` field) and hidden from the lists.
- **Trash view**: in **Settings › Trash** you find every deleted item and can restore it with one click.
- **Automatic cleanup after 30 days**: when the app launches, items that have been in the Trash for more than 30 days are permanently deleted.
- **Manual emptying**: the **Empty Trash** button deletes everything at once, after a confirmation.
