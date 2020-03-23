---
parent: virtualization
version: 4.5
---

# Dedicated resources

Enabling dedicated resource for a VM workload.

![vm page](img/Dedicated-resources-0-0.jpg)
'Dedicated resources' requirement is placed in the Scheduling section of the VM details tab. The default is 'No dedicated resources applied'

![Dedicated resources modal](img/Dedicated-resources-1-0.jpg)
This feature is available only for nodes with the label 'cpumanager=true'
It is specifed within the modal.
On landing on the modal, the nodes checker already checked for matching nodes.

![Dedicated resources modal - no nodes found](img/Dedicated-resources-1-1.jpg)
In case no mathcing nodes found, the Nodes checker will warn that.
Applying this feature is still possible.

![vm page](img/Dedicated-resources-2-0.jpg)
Preview of this feature enabled in-page.