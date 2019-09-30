# Generating Diagnostic Report

Users can download a cluster diagnostic report based on must-gather tool for upload to Red Hat Support or their own diagnostics.

## Accessing 'Generate Report' actions

There are several ways the user can access the `Generate (diagnostics) report` action.

### Via the masthead help menu
![Masthead help click](img/1-1a-clusterdash-startdownload.png)
![Masthead help menu](img/1-1b-clusterdash-startdownload.png)

### Via the cluster dashboard status card kebab menu
![Cluster dashboard status card kebab click](img/1-2a-clusterdash-startdownload.png)
![Cluster dashboard status card kebab menu](img/1-2b-clusterdash-startdownload.png)

### Via a cluster dashboard status card message action
![Cluster dashboard status card message click](img/5-1-clusterdash-CNVerror.png)
- The cluster dashboard will soon support warning messages to notify the user that CNV or OCS are degraded. From these messages the user will be able to immediately `Generate report` using the action link within the message.
- This access point is unique in that when the dialog is launched, it will already be scoped to the related product for which the message it was launched from is related to. In this shown example case, only `Container-native Virtualization` would be checked by default.

## 'Generate Diagnostic Report' dialog
![Generate Diagnostic Report dialog select](img/2-1-reportdialog.png)
![Generate Diagnostic Report dialog select](img/2-2-reportdialog-menu.png)
- The user can select what products and what time period of information should be included in the report and `Generate` it. The default state when launched from masthead help or status card kebab would be all 3 products selected and 8 hour time period.

![Generate Diagnostic Report dialog in progress](img/2-3-reportdialog-generating.png)
- Once generation has begun, the user can `Close` the dialog to return to the context they launched it from, or `View on Dashboard` to immediately be taken to the cluster dashboard.

## Report generation

### Generation in progress
![Cluster dashboard ongoing generation activity](img/3-1-clusterdash-generating.png)
- An ongoing activity appears that conveys the generation is in progress.

### Generation success
![Cluster dashboard generated status message](img/3-2-clusterdash-complete.png)
- Upon successful generation of the report, an informational status message appears with a `Download report` link that begins the download process in the user's browser.

![Cluster dashboard generated status message kebab](img/3-3-clusterdash-complete.png)
- The user may `Delete` the report and message via the message kebab menu. It will otherwise be automatically deleted and the message cleared after 24 hours from generation.

### Generation failure
![Cluster dashboard failed status message](img/3-4-clusterdash-failed.png)
- If the report generation fails, a message appears with a `Retry` link to restart generation.

![Cluster dashboard failed status message](img/3-5-clusterdash-failed.png)
- User may `Clear` the failure message via the kebab or this message will automatically be removed after 12 hours.

## Out of scope for 4.3
- Narrowing report generation by Project or Operator
- Only include non-healthy components in report
- Generate and immediately attach to (existing or new) support case
- Option to turn on automatic case open for certain number of severe alerts and attach report
- Some sort of method that doesn’t involve user downloading/uploading file from local machine, somehow file goes straight to support