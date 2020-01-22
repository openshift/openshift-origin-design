---
parent: Administrator
version: 4.0
---

# Resource Statuses
The status of resources is primarily displayed on pages such as Summary and Details pages.

Summary Page
![nodes](img/nodes.png)

Details Page
![deployment](img/deployment.png)

## Icon Usage
When displaying status in the console, use the appropriate icon for the associated status.

Icon | Status(es)
--- | ---
pficon-ok<br>![ok](img/pficon-ok.png) | Accepted<br>Active<br>Bound<br>Complete<br>Completed<br>Enabled<br>Ready<br>Up to date
pficon-error-circle-o<br>![error](img/pficon-error-circle-o.png) | ContainerCannotRun<br>CrashLoopBackOff<br>Critical<br>Error<br>Failed<br>InstallCheckFailed<br>Lost<br>Rejected
pficon-in-progress<br>![progress](img/pficon-in-progress.png) | ContainerCreating<br>Updating<br>Upgrading<br>In Progress
pficon-warning-triangle-o<br>![warning](img/pficon-warning-triangle-o.png) | Warning
pficon-unknown<br>![unknown](img/pficon-unknown.png) | Unknown
fa-ban<br>![ban](img/fa-ban.png) | Expired<br>Cancelled<br>Not Ready<br>Terminating
fa-refresh<br>![running](img/fa-refresh.png) | Running
pficon-off<br>![offline](img/pficon-off.png) | Off<br>Offline
pficon-maintenance<br>![maintenance](img/pficon-maintenance.png) | Under Maintenance
fa-hourglass-1<br>![new](img/fa-hourglass-1.png) | New
fa-hourglass-half<br>![pending](img/fa-hourglass-half.png) | Pending

The following statuses do not require icons:
* X of X pods
* True
* False

If a status has a recommended icon, show the status with both the icon and the associated status text. For cases where a status does not have a recommended icon, only show the status text.

Note: Icons should never be animated in a list view.

#### Icon Colors
* **pficon-ok**: pf-green-400 #3F9C35
* **pficon-error-circle-o**: pf-red-100 #CC0000
* **pficon-warning-triangle-o**: pf-orange-400 #EC7A08
* **All other icons**: pf-black-900 #292E34

#### Spacing
* Dependent on context and element sizes
* Icon and text should never touch

#### Text
* [Sentence style](https://www.patternfly.org/styles/terminology-and-wording/)
  * In cases where a status is a reason string condition, the status may remain in camel case with no spaces.
* [Color](https://www.patternfly.org/styles/color-palette/)
  * **Black**: pf-black #030303
  * **Blue**: pf-blue-400 #0088CE (for links only)

## Status Popovers

If additional information about a status is available, a popover should be used to provide context and one or more suggested actions. This is based on the [Infopop pattern](/web-console/future-openshift/contextual-help/contextual-help.md#infopop-pattern) that can be used to provide contextual help in other areas of the console.

Statuses with popovers should be styled in the same way as inline link buttons to indicate interactivity.

![Status popover in table](img/status-popover-table.png)

Status popovers can include internal links, external links (with an external link icon), progress bars, and dynamically-updated content.

Contextually relevant actions should generally be placed within the footer of the popover, but can be included within the body when it makes sense to do so.

![Status popover examples](img/status-popover-examples.png)
