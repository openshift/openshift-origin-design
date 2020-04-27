---
parent: virtualization
version: 4.5
---

# Fine Grained CPU Features

Enabling fine grained features for VM, including:
- Hyper-v - includes sub features that will all be enabled on enabling this parent feature
- ACPI- enables/disables ACPI insidejsondata guest. Defaults to enabled
- APIC - includes sub features that will all be enabled on enabling this parent feature
- SMM - enables/disables System Management Mode

All the above at this point can be summarized as CPU propertires required by the VM as a must have properties from the host.
additional info included here:
https://kubevirt.io/api-reference/v0.26.0/definitions.html#_v1_features

![VM page CPU features default](img/CPU-features-0-0.jpg)
CPU Features is placed in the Scheduling section of the VM Details tab.

![CPU features modal](img/CPU-features-1-0.jpg)
Currently, these features will be available to be included or excluded.
By checking the checkbox, the user selects which features to include in the CPU requirement for this VM.

![VM page CPU features customized](img/CPU-features-2-0.jpg)
Customized display in-page.

