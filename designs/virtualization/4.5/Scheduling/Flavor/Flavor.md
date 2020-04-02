---
parent: virtualization
version: 4.5
---

# Flavor

Displaying the VM flavor (CPU and Memory) in the Scheduling section.

![vm page flavor medium](img/Flavor-0-0.jpg)
VM flavor is set on the creation process.
If the flavor is set to any of the sizes which is not custom, that flavor will be locked to changes.
Edit (pencil) button will be removed in this case.

![vm page flavor custom](img/Flavor-2-0.jpg)
If the Flavor was set to Custom during the creation process, the flavor will be editable.

![vm page flavor modal](img/Flavor-1-0.jpg)
Opening the Edit Flavor modal reveals that the flavor is set and locked to Custom.
However, the values of the CPU is editable in dedicated fields below.

![vm page flavor modal](img/Flavor-1-1.jpg)
By clicking 'Switch to full topology', the UI will toggle to display full topology options.
At the bottom of the "full topology" field, there will be a 'CPUs in total' counter in a read only mode.
Clicking the 'CPU only' will toggle back to the previous, collaped mode.