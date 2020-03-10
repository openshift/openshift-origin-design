---
parent: Developer
version: 4.4
---
# Creating an Operator Backed Service

Upon selecting an operator backed service in the catalog, the side panel will display relevant information.  The markdown of the associated operator so they have a full understanding of the service and its associated operator.

* Clicking Create should default to the YAML editor
* User should be able to switch between the YAML Editor and the form (note that the admin is making changes to this capability in 4.4)
* **Navigate to** a different location after creation, based where the user initiated the action
  * When creating from the **developer catalog**, the user should be brought to **Topology**
  * When ordering from the Installed Operators page, do what they do now

# Operator Backed Services in Topology

## Expanded Operator groupingsExpanded Operator Groupings
* When creating an operator backed service from the Developer Catalog, an operator grouping should be created in topology.  The default state should be expanded.
* Nothing inside of an Operator Grouping can be “moved” or dragged out of it
* Nothing can be “moved” or dragged into an Operator Grouping
* “Edit Application Grouping” is a valid action for expanded operator groupings

![image](https://openshift.github.io/openshift-origin-design/designs/developer/add-44/From-Catalog/img/Topology-OperatorGroupingExpanded.png)

## Collapsing & Expanding Operator Groupings
An option should be added to the Display dropdown in the Topology toolbar which will allow the user to expand or collapse ALL operator groups in the current project

![image](https://openshift.github.io/openshift-origin-design/designs/developer/add-44/From-Catalog/img/Topology-DisplayMenu.png)

* Visualizing an expanded operator grouping
  * The icon associated with the tile in the dev catalog that was selected needs to be shown near the operator grouping node label
  * The icon of each of the workloads inside of the operator backed service should follow this order: runtime, operator backed service, OLM/lightning bolt

## Collapsed Operator Groupings
* Visualizing a collapsed operator grouping
  * The icon associated with the tile in the dev catalog that was selected needs to be shown in the collapsed grouping
* “Edit Application Grouping” is a valid action for collapsed operator groupings

![image](https://openshift.github.io/openshift-origin-design/designs/developer/add-44/From-Catalog/img/Topology-OperatorGroupingCollapsed.png)
