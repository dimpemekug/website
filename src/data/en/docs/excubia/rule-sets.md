---
title: "Rule sets"
description: "Excubia's rule sets, such as Home and Office: rules that apply only while the set is active, chosen by hand or automatically by network and time of day."
project: "excubia"
order: 6
section: "Rules"
---

A rule set groups rules that apply only in certain situations: at home, at work, on public Wi-Fi. Rules in a set apply only while the set is active; rules without a set always apply.

## Creating a set

At the top of the **Rules** page, in the **Rule sets** bar, press **Create…** (or **Edit…** if you already have some). In the editor:

- the list of sets is ordered with **Move up** and **Move down**: the order matters for automatic switching;
- **Name**;
- **Networks**: for each network, the **Connection** (**Wi-Fi** or **Wired**) and the **Router**. **Use current network** fills them in. The network is recognised by the router's address; leave it empty for any network of that type. Excubia doesn't use the Wi-Fi network name;
- **Times**: the days of the week, **From** and **To**. A new time starts as Monday to Friday, 9:00 to 18:00. A range that crosses midnight belongs to the day it starts on.

To put a rule in a set, choose the set in the rule's editor, under **Rule set**.

## Which set is active

The menu in the **Rule sets** bar offers:

- **Automatic**: the first set in the list that matches the network or the time is active; if none matches, no set. The filter checks again when the network changes and every 30 seconds, even with the app closed;
- **No rule set**;
- one of the sets, chosen by hand.

The same choice is in the mode menu of the menu bar panel, and in [Shortcuts and Focus filters](/en/projects/excubia/docs/shortcuts-focus-and-widget).

## Removing a set

Removing a set also deletes its rules: Excubia asks for confirmation and tells you how many there are.
