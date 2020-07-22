---
parent: Administrator
version: 4.6
---

# Column Management

## Behavior
Column management will live in the toolbar as a column icon on the Pods page on desktop. It will be hidden on mobile. Clicking on the icon will open a modal that lists all column names with checkboxes.
![column-management-toolbar](img/column-management-toolbar.png)
If the user is looking at “all projects”, then the checkbox next to “name” as well as “namespace”  in the modal will be shown as checked and disabled. Hovering over it will bring up a tooltip that explains that the columns may not be edited.
![column-management-disabled-check](img/column-management-disabled-check.png)
The modal will have an informational alert by default that reads “You can select up to 7 columns”. If 7 columns have already been selected, then all checkboxes will be disabled. Once the user deselects a checkbox, the other checkboxes will return to default state (rather than disabled). 
![column-management-check](img/column-management-check.png)
Deselecting a checkbox will remove that column from the table view. Selecting a checkbox will add that column to the table view. Clicking “Save” will save the changes that the user has made in the modal. Clicking “Restore default columns” will restore the default settings of the columns in the pods table.
![column-management-save](img/column-management-save.png)
If the page **does not** include a project selector **or** the project selector is set to anything other than “all projects”, then the “namespace” column will be hidden on the table **and** displayed in the modal below all of the table columns, unchecked.
![column-management-namespace-hidden](img/column-management-namespace-hidden.png)
In this case, the modal shows that 7 columns have already been selected, so all checkboxes are disabled. The user must deselect one of the selected checkboxes in order to add a separate column.
![column-management-namespace-hidden-uncheck](img/column-management-namespace-hidden-uncheck.png)
The user has deselected “Memory”, removing it from the table.
![column-management-namespace-hidden-check](img/column-management-namespace-hidden-check.png)
The user has selected “Node”, adding it to the table.
![column-management-namespace-hidden-save](img/column-management-namespace-hidden-save.png)

## Relevant Resources
We want the above behavior to be available on the following resource table views:
- Pods
- Nodes
- Projects
- Namespaces
- Virtual Machines
- Virtual Machine Templates
- Pipelines
- Pipeline Runs
- Pipeline Resources
- Helm Releases
- Helm Releases Resources
- Helm Releases Revision History
- Installed Operators
- Deployments
- Deployment Configs
- Stateful Sets
- Cron Jobs
- Replica Sets
- Services
- Secret
- Config Maps
- Persistent Volumes
- Persistent Volume Claims

## Future Resources
We will explore adding the behavior to be available on the following resource table views:
- Custom Resource Definitions
- Explore API Resources
