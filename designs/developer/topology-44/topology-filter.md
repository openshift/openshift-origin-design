---
parent: Developer
version: 4.4
---

# Topology - Filter

## Display Dropdown

The display dropdown in the topology view allows users to expand/collapse grouping and hide/unhide certain items on the topology canvas. The dropdown is located on the top left corner.

### User wants to collapse the application groups in the project

![Filter Trigger](/Users/vemishra/openshift-origin-design/designs/developer/topology-44/img/displaydropdown_access.png)

Click on the display dropdown to access the menu.

![Filter AppGrouping](/Users/vemishra/openshift-origin-design/designs/developer/topology-44/img/displaydropdown_applicationgrouping.png)

Uncheck the Expand >> Application Grouping toggle to collapse all the application groupings in the project.

![Filter AppCollapsed](/Users/vemishra/openshift-origin-design/designs/developer/topology-44/img/displaydropdown_applicationscollapsed.png)
The application groups would collapse into a card with summarized information about the resources contained inside it.

### User wants the pod counts to show in the place of node image

![Filter PodCount](/Users/vemishra/openshift-origin-design/designs/developer/topology-44/img/displaydropdown_podcounttrigger.png)

In the display dropdown menu, check the toggle for showing pod count.

![Filter PodCount](/Users/vemishra/openshift-origin-design/designs/developer/topology-44/img/displaydropdown_podcount.png)

All the node images on the topology graph would be replaced by the pod count of the respective component.
