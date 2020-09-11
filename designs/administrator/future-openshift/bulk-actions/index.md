---
parent: Administrator
version: 4.x
---

# Bulk actions

Bulk actions will be added to a number of list views in the OpenShift console. This feature will allow users to perform an action on multiple resources at once. The list of actions include adding labels, adding annotations and deleting resources.

## Bulk actions in toolbar
The bulk selector will be the first component in the toolbar on pages where bulk actions are available.
**ADD IMAGE GINA**
Users can click the checkbox in the bulk selector to select all items in the list. If all items are selected, the bulk selector checkbox will be filled with a check and the bulk selector will read ‘[#] selected’, informing users that all known items in the list are selected. Clicking the bulk selector checkbox again will deselect all items.
**ADD IMAGE GINA**
Users can also choose to select a group of items by clicking the associated checkboxes next to them. The bulk selector checkbox will be filled in with a ‘-‘ to indicate that some items are selected, and the bulk selector will display the number of items selected (e.g. ‘2 selected’). Clicking the bulk selector checkbox will deselect all items.
**ADD IMAGE GINA**

## Behavior
If no items are selected, the bulk actions dropdown will be enabled, shown as a basic dropdown, but the actions within will be disabled. A tooltip will explain to users that they must select resources in order to take actions.
**ADD IMAGE GINA**
When items are selected, the bulk actions basic dropdown will turn into a primary dropdown, and actions within it will be enabled. 
**ADD IMAGE GINA**

### Item limits and access limits
Depending on the use case, there may be scenarios where users are limited to selecting a certain number of items as well as a certain number of actions to perform on the items. As a general rule of thumb, we will set the max number of items that can be selected at once at 200. Once the user hits that limit, they will not be able to select more items and all other checkboxes will be disadbled. If the user does not have access to perform a specific action after selecting items, that action within the actions dropdown will be disabled.

### Complex selection controls
If a list view does not contain pagination and includes infinite scrolling, when the user uses the bulk selector to select all items, only the items within view would be selected. Once the user scrolls down to load more items, they would have to use the bulk selector to select none then select all again to select all items that have loaded.

If a list view contains filtering, when the user uses the bulk selector to select all items and then filters the list afterward, the selected items will remain selected. They may select additional items from the filtered list and once they do, the item count in the bulk selector will update to reflect the action. 

## Actions
Only specific actions will be available to take on multiple resources. The default bulk actions are `Add Labels`, `Add Annotations` and `Delete Resources`. Additional actions may be added in future depending on the resource type. When taking actions on five resources or fewer, the modal will list out the resource names. When taking actions on more than five resources, the modal will simply list the number (e.g. “Labels for 25 resources.”).

### Add Labels
The `Add Labels` modal allows the user to add labels to multiple resources and notes that existing labels may be replaced if there are duplicates. Users can add labels in the textbox and click ‘Save’ to add the labels to the selected resources. The new labels will appear in the list and the items will remain selected after the modal closes.
**GINA ADD IMAGE**

### Add Annotations
The `Add Annotations` modal allows the user to add annotations to multiple resources and notes that existing annotations may be replaced. Users can add annotations and click ‘Save’ to add the annotations to the selected resources. The items will remain selected after the modal closes.
**GINA ADD IMAGE**

### Delete Resources
The `Delete Resources` modal will list out the resources that are being chosen to be deleted and will be checked by default. There will be a bulk selector above the listed items that will showcase the item count and will act the same way that the bulk selector within the toolbar works. The user may change these checkboxes if desired, but this acts as a “second check” for them. The user must select “Delete” in order to begin the deletion process.

Once the deletion process begins, the messaging will be replaced with the above modal. The progress bar will track the completion progress and all failures will be listed in an inline alert within the modal. If the user decides to navigate away from the modal, either by selecting “Done”, the close “x” button, or navigating away from the page, the modal will close and they cannot reopen it. Once the deletion has finished, the items will be removed from the list (or in the process of being removed) and no longer selected. The items that failed to delete will still remain selected in the list.
**GINA ADD IMAGE**

## Relevant resources
We want the above behavior to be available on the following resource list views:
We want the above behavior to be available on the following resource list views:
- Workloads
  - Pods
  - Deployments
  - Deployment Configs
  - Stateful Sets
  - Secrets
  - Config Maps
  - Cron Jobs
  - Jobs
  - Daemon Sets
  - Replica Sets
  - Replication Controllers
  - Horizontal Pod Autoscalers
- Serverless
- Networking
  - Services
  - Routes
  - Ingress
  - Network Policies
- Storage
  - Persistent Volumes
  - Persistent Volume Claims
  - Storage Classes
- Builds
  - Build Configs
  - Builds
  - Image Streams
- Pipelines
- Compute
  - Nodes
  - Machines
  - Machine Sets
  - Machine Autoscaler
  - Machine Health Check
  - Machine Config
  - Machine Config Pools
- User Management
  - Users
  - Groups
  - Service Accounts
- Administration
  - Namespaces
  - Resource Quotas
  - Limit Ranges
  - Custom Resource Definitions
