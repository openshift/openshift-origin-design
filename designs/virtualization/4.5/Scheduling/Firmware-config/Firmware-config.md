---
parent: virtualization
version: 4.5
---

# Firmware Config

Exposing Firmware Config for VM.

![VM page](img/Firmware-0-0.jpg)
Firmware Config is placed in the Scheduling sction of the VM details tab.
The default value of this field is "Default"

![Config modal](img/Firmware-1-0.jpg)
This modal is composed of three fields:
- Bootload (Selection): BIOS (Default) and EFI
- Serial (string): [The system-serial-number in SMBIOS]
- UUID ( string): [UUID reported by the vmi bios. Defaults to a random generated UID]

![Config modal](img/Firmware-1-1.jpg)
Changing the Bootload to EFI

![VM page](img/Firmware-2-0.jpg)
Changing the default configuration will reflect in the field value specified in-page.
In case strings removed from the string fields, the value in-page will be 'None'.