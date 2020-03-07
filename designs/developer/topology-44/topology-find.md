---
parent: Developer
version: 4.4
---

# Topology - Find
### User wants to find a component on the topology view by name

The find feature in the topology view provides the user a way to search for resources by name or labels, by highlighting the matches on the canvas.

![Find Trigger](/Users/vemishra/openshift-origin-design/designs/developer/topology-44/img/find_starttyping.png)

To find the components by name, type the name in the text input field of the find component.


![Find Results](/Users/vemishra/openshift-origin-design/designs/developer/topology-44/img/find_resulthighlighted.png)

The component nodes with names matching the input would have the characters highlighted in their name-label and also get a highlight. All the non-matches would appear with a lighter opacity

### View matches outside the visible area

![Find Tooltip](/Users/vemishra/openshift-origin-design/designs/developer/topology-44/img/find_tooltip.png)

If the topology canvas is not set to fit to screen, few matches for the ‘Find query’ may lie outside the visible area. The info icon placed next to the find component displays a warning as well as a clickable shortcut to fit to screen all the components in the project.
