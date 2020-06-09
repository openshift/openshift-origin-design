---
parent: Administrator
version: 4.x
---

# Resource relationships

On resource details pages, add an expandable tree to show related resources under the `Owner` field. This could apply to any resource with an `ownerRef` field in its YAML, but would also be useful for Nodes/Hosts/Machines/MachineConfigs based on whichever fields they use to tie themselves together.

The tree should be linear and only show resources that go up the tree (i.e., owner references). The tree will only show on a subset of resources’ details pages including:
* Deployments
* Replica Sets
* Stateful Sets
* Pods
* Machine Sets
* Machines
* Nodes

CSVs can be a part of the tree, but the tree will not be shown on the CSV's details page.

## Design

In an expandable component, show the owner tree with each child resource indented below its owner. Where applicable, show the resource's status badge next to the resource name as well as the date created. The resource whose Details page the user is on should not be a link and should be bolded.

Example
![one](img/example1.png)

Example in context
![two](img/example2.png)
