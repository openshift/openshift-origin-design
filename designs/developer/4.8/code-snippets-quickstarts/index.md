---
parent: Developer
version: 4.8
---

# Code snippets in Quick Starts

## Overview

![Inline code snippet in Quick Starts](img/1-inline-code-snippet.png)

![Inline code snippet in Quick Starts](img/2-block-code-snippet.png)
In the 4.8 release, code snippets will be added to quick starts. Inline and block code snippets will be supported. The inline and block code snippets will live inside of the quick start and support inline actions. By default, the user will be able to click a clipboard icon to copy the code snippet to their clipboard. Depending on if the user has the Web Terminal operator installed, the user will also be able to click a play button to run the code snippet in the Web Terminal.

## Inline
### Single action

![Inline code snippet single action hover](img/3-inline-code-snippet-single-action-hover.png)
If the user hovers over the copy to clipboard icon, a ‘Copy to clipboard’ tooltip appears.

![Inline code snippet single action click](img/4-inline-code-snippet-single-action-click.png)
If the user clicks the copy to clipboard icon, a ‘Successfully copied to clipboard!’ tooltip appears.

### Two actions

![Inline code snippet two actions](img/5-inline-code-snippet-two-actions.png)
The inline code snippet can feature two actions. In this scenario, copy to clipboard and run in the Web Terminal are the two available actions.

![Inline code snippet two actions hover](img/6-inline-code-snippet-two-actions-hover.png)
If the user hovers over the play button icon, a ‘Run in Web Terminal’ tooltip appears.

![Inline code snippet two actions click](img/7-inline-code-snippet-two-actions-click.png)
If the user clicks the play button icon, a ‘Running in Web Terminal’ tooltip appears and the Web Terminal immediately opens and the user can see the code snippet running in the Web Terminal.  

![Inline code snippet two actions clicked](img/8-inline-code-snippet-two-actions-clicked.png)
After the ‘Run in Web Terminal’ action has been run once, the play button icon turns to a checkmark to indicate that the action has been run already.

## Block
### Single action

![Block code snippet single action hover](img/9-block-code-snippet-one-action-hover.png)
The block snippet follows the same interaction pattern as the inline code snippet, if the user hovers over the copy to clipboard icon, a ‘Copy to clipboard’ tooltip appears. A horizontal divider separates the clipboard icon from the code snippet.

### Two actions
![Block code snippet two actions](img/10-block-code-snippet-two-actions.png)
Same as the inline code snippet, the block code snippet can feature two actions and they appear in the upper right hand corner of the code snippet. A horizontal divider separates the actions from the code snippet.
