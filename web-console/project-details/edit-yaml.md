# Edit YAML

## YAML Tab on Detail Pages
- A `YAML` tab should be added on all object-detail pages that currently have the `Edit YAML` option in the actions menu.
  - This includes object types such as Deployments, Services, Pods, Stateful Sets, Routes, Builds, Pipelines, Images, Config Maps, Secrets, Storage, and any others which are visible with the Edit YAML action.
- The `Edit YAML` option can be removed from the actions menu.
- Users can navigate to the YAML tab to edit contents directly in the editor.
- Save and cancel buttons should be added to the bottom left of the page below the editor.
  - Save should be on the left with cancel on the right.
  - Save should be disabled until changes are made and it becomes a primary action.
![yaml-1](https://redhat.invisionapp.com/static-signed/live-embed/123952085/282671561/1/latest/wuYf6pFVtrOgKDc1aN5RZWf5dEbuKLVYMJv3P3V5JjzSc2dPXdg7SV1YLMC0KZq6lU1qmkFEr2QrGjCeOeB1WwlE/Embedded-YAML-02A.png)

## Actions
- Add an action bar of links above the top right corner of the editor (similar to what is done for Logs).
- Display an icon to the right of the action labels.

#### Download
- `Download` action should be the left most and should use the fa-download icon.
- Clicking the link would download the YAML as a text file as the logs do today.

#### Expand and Collapse
- `Expand` or `Collapse` action should be the right most and should use the fa-expand-alt icon when in the default state.
- In the expanded state, this action should say Collapse and should use the fa-compress-alt icon.
- Clicking Expand will expand the editor to take up the entire page, in the current window. Expand will not open a new browser.
![yaml-2](https://redhat.invisionapp.com/static-signed/live-embed/123952085/282673271/1/latest/aQBgEc2rWAiCG8XQCoyuYq3aoi2a6UfQpuZUlMD3ERhLsYaylUDI0hvBPdFxKiTpKaQmoWtM5XByOikzf8NHeQlE/Embedded-YAML-02B.png)
- **Note** Expand should use the Native API functionality for full-screen mode.

## Errors
- Errors should be indicated above the top left corner of the editor.
- The pficon-error-circle-o icon is displayed next to an `Errors` link in these cases.
![yaml-3](https://redhat.invisionapp.com/static-signed/live-embed/123952085/282671553/1/latest/1jNZKMj7HlE4xxrC2KlE8cqpBERGBpPFcauQsHUL3zjjRNgCFPLBcglEVGE8zlEA5gMolEthB6b5v57WOHWYftVfjQlE/Embedded-YAML-Error.png)


## Future Changes and Impacted Pages
- The goal is for the (1)`Logs` (2)`Terminal` and (3)`YAML` pages to match the design detailed above for YAML tabs.
  - The Expand/ Collapse functionality should match for all three, using the native API, expanding in the same window, not in a new browser.
  - The actions bar should change on the Logs pages to match the YAML tab as follows:
    - The current Save link above the logs should change to `Download`.
    - The current icon used for Expand should be replaced by the fa-expand-alt icon.
  - The Errors link should move from the top right to the top left.
