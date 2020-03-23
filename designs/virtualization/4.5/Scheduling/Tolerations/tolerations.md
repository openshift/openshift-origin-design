---
parent: virtualization
version: 4.5
---

# VM Tolerations

Mananging VM tolerations for tainted nodes

![image name](img/Tolerations-0-0.jpg)
Within the VM page, Details tab, the Tolerations field is placed under the Scheduling section.

![image name](img/Tolerations-1-0.jpg)
The modal presents the same placement as Node-selector.
The differences are as follows:
- An additional 'Effect' field for each row.
- The 'Add toleration row', and not 'Add label row'
- The 'Nodes checker' checks for expressions including the 'Effect' field, meaning node taints.

![image name](img/Tolerations-1-1.jpg)
Matching nodes found.
Same function as in Node-selector.

![image name](img/Tolerations-2-0.jpg)
Results in-page.