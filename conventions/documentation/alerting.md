---
parent: Conventions
---

# Alerting

## Inline Alerts
Inline Alerts can be used throughout the console to notify users in context that something is happening, happened, or needs their attention.

### Inline Alerts in Details Views

#### Above navigation tabs
Inline alerts can appear above the navigation tabs when there is an important piece of information that applies to the entire resource, and the user should be made aware of regardless what tab they are looking at.

![inline alert details above tabs](../images/alerting-inline-details-above.png)
- Generally, these should be warning or error level alerts.
- The alert should appear immediately above the navigation tabs.


#### Below navigation tabs
Inline alerts can appear at the top of an individual navigation tab when there is a particular piece of information that applies to that one tab, and is not severe enough to surface at all times in the resource.

![inline alert details below tabs](../images/alerting-inline-details-below.png)

![inline alert details below tabs 2](../images/alerting-inline-details-below2.png)

- Generally, these should be info or neutral alerts.
- If a warning or error level alert is not severe enough to surface at all times in the resource, it can also be surfaced only in the tab it relates to.
- The alert should appear immediately below the tabs.

#### Bottom of page
For actions taken inside of a page, resulting errors and success messages in the form of an inline alert are shown at the bottom of the page, near the action buttons that were used to initiate the action.

![inline alert details bottom](../images/alerting-inline-details-bottom.png)

#### In Slideover
When a Details View appears as a Slideover, the location of the inline alert should match how it appears as a standalone Details View.

![inline alert details slideover](../images/alerting-inline-details-slideover.png)

### Inline Alerts in Modals

#### At top of modal
If a modal is loaded with an inline alert already in place, the alert would show at that top of the modal.

![inline alert modal top](../images/alerting-inline-modal-top.png)

#### At bottom of modal
If the user can take an action that causes an inline alert to appear, it should appear near the control they modified or more generally at the bottom of the modal, above the buttons.

![inline alert modal bottom](../images/alerting-inline-modal-bottom.png)

## Alerting with Modals
Some actions benefit from additional confirmation or alert that something is going to happen, and modals can be used for this purpose. Many [delete](http://openshift.github.io/openshift-origin-design/conventions/documentation/delete.html) cases use confirmation modals.

### Confirmation Modal
![modal confirm](../images/alerting-modal-confirm.png)
- A warning icon can be included to the left of the title.
- Buttons appear on the right side of the modal until the console fully transitions to PatternFly 4.

## Alerting near Controls
Sometimes alert messages are needed directly near a particular control they relate to.

### Control Confirmation
UI interactions that need user confirmation before affecting the backend can use warning icons with links.

![control confirm](../images/alerting-control-confirm.png)

### Control Error
If an error occurs that relates to a particular control, red text can be surfaced near that control to convey the error.

![control confirm](../images/alerting-control-error.png)