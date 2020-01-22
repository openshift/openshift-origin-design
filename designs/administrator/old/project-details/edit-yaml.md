---
parent: Administrator
version: 3.11
---

# Edit YAML

## In-page YAML Editor
- A `YAML` tab should be added on all object-detail pages that currently have the `Edit YAML` option in the actions menu.
  - This includes object types such as Deployments, Services, Pods, Stateful Sets, Routes, Builds, Pipelines, Images, Config Maps, Secrets, Storage, and any others which are visible with the Edit YAML action.
- The `Edit YAML` option can be removed from the actions menu.
- Users can navigate to the YAML tab to edit contents directly in the editor.
- Save and Reload buttons should be added to the bottom left of the page below the editor.
  - Save should be on the left with Reload on the right.
  - Reload should be disabled until changes are made and it becomes active as an option to cancel the changes and refresh the code back to where it started.
  - Save should be disabled until changes are made and it becomes as a primary action.
![yaml-1](https://redhat.invisionapp.com/static-signed/live-embed/123952085/282671561/3/latest/8HhvHg6llE9eyB6Mfb6QL24zcUpr7SNQ8FwdqP9l9e3OwvVa9eEULr9IkwT5RikPA2Er0zCwNMzlEkUtyEJy9pXQlE/Embedded-YAML-02A.png)

### Actions
- Add an action bar of links above the top right corner of the editor.
- Display an icon to the left of the action labels.

##### Download
- `Download` action should be the left most and should use the fa-download icon.
- Clicking the link would download the YAML as a text file as the logs do today.

##### Expand and Collapse
- `Expand` or `Collapse` action should be the right most and should use the fa-expand-alt icon when in the default state.
- In the expanded state, this action should say Collapse and should use the fa-compress-alt icon.
- Clicking Expand will expand the editor to take up the entire page, in the current window. Expand will not open a new browser.
![yaml-2](https://redhat.invisionapp.com/static-signed/live-embed/123952085/282673271/3/latest/jcolEpbdIE3yfaQhtQZjV1jRkmriYlcbUeo2NHJ3lEFm8tXxFdNejIVq8cyXWgyn1gUagxzddtFC4jYlEsD6RyVwlE/Embedded-YAML-02B.png)
- **Note** Expand should use the Native API functionality for full-screen mode.

### Errors
- Code errors should be indicated above the top left corner of the editor.
- The pficon-error-circle-o icon is displayed to the left of an `Errors` link in these cases.
![yaml-3](https://redhat.invisionapp.com/static-signed/live-embed/123952085/283896635/1/latest/3lE7BBxkts1buk7C2OMVve0yie18V4RcAHeA1BAuc8vMlEHe7OIgkzulEmIQQmYrDzppxOco8XuibcjDQ8FqJszQlE/Embedded-YAML-02-Error.png)

### Resource Changes
- When a resource changes in the background as a user is actively editing, conflicts may arise.
- In this case we should show the warning that the resource changed and disable the save button.
- Current Implementation can be seen [here](https://github.com/spadgett/origin-web-console/blob/d46fab60493a70137bdf8aa5768c45f7d84c66c2/app/views/edit/yaml.html#L11-L17).
- **Note:** we would like to improve this experience in the future. See "Future Changes and Impacted Pages" section for details.

## Modal - Import YAML Editor
- The modal editor case should follow the design provided for the in-page YAML editor.
- Actions for download and expand should be available in the top right, with errors shown in the top left.
- Clicking expand will open ONLY the editor section to a full-screen state for easier manipulation. Clicking collapse would revert back to the small editor inside the modal, allowing a user to complete the wizard.
![yaml-4](https://redhat.invisionapp.com/static-signed/live-embed/123952085/283896634/1/latest/XlEplEUoJPWlqNFfnO1gPlEVEzB2PSO1OLMqbywnCyplE3OkpxaHVUqush69nP8w90wPGaXlEpmQwH4BzElEHkBMlECdAlE/In-Modal-YAML-02.png)

## Future Changes and Impacted Pages
- The goal is for all (1)`Logs Pages` (2)`Terminal Pages` (3)`YAML Pages` and (4)`YAML Modals` to match the design detailed above for YAML tabs.
  - The Expand/ Collapse functionality should match for all three, using the native API, expanding in the same window, not in a new browser.
  - The actions bar should change on the Logs pages to match the YAML tab as follows:
    - The current Save link above the logs should change to `Download`.
    - The current icon used for Expand should be replaced by the fa-expand-alt icon.
  - The Errors link should move from the top right to the top left.
- **Note:** In the future we would like to provide a better experience when resource conflicts arise.
  - Ideally, we would like to merge changes automatically and give the user a way to merge manually if there are conflicts the system cannot resolve.
  - A notification could display to explain the conflicts while providing a link to manually resolve.
  ![yaml-5](https://redhat.invisionapp.com/static-signed/live-embed/123952085/283896636/1/latest/PpDlEK84AlEQDErs0di9dyQOZugGqaeshqx8pcAMBc40nb2HmC8kX3atlEHjZiDcwzlzjuBdXEGVOMrvONIHjYLeQlE/Embedded-YAML-02-Conflicts.png)
