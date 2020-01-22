---
parent: Virtualization
version: 4.3
---

# Clone VM

![Offline VM List View](img/3-0-vms.jpg)

Cloning a VM allows the user to quickly create an identical copy of a virtual machine while powered off.

![VM List View - VM item in kebab menu options](img/3-1-vm-list.jpg)

Cloning is accessed from the VM List View. all item filters should be turned off by default, ensuring that all VMs are shown to the user.

The Clone option should appear in the kebab menu whether the source is online or offline.

![VM modal with still running notice](img/3-2-modal.jpg)

If the VM is powered on, a warning will appear at the top of the Clone Virtual Machine modal. Running VMs will be shut down automatically if the user proceeds with a clone and then turned back on once the clone finishes.

The only required field is the name, which is pre-filled based on the source VM's name and appended with “-clone”. The user can add a description and change the new VM's Namespace (which is the same as the target by default). They can also turn off the option to start the virtual machine after the cloning process finishes.

Because all required fields are filled in by default, the "Clone Virtual Machine” button is active. If the user deletes the Name field this button will become inactive.

Details of the source VM's configuration are displayed for the user’s reference. These options cannot be modified here prior to cloning.

The user would then click “Clone Virtual Machine”.

If the source VM fails to shut down properly, an error notification would be displayed. The user would then need to power off the VM manually and re-open the Clone modal to try again.

![VM item under cloning](img/3-4-0-vm-list-cloning.jpg)

If the cloning process starts successfully, the source VM will display a new status: "Off" icon followed by "Cloning (#%)".

![Source VM popover](img/3-4-1-vm-list-cloning-source-popover.jpg)
The VM status is clickable, displaying a popover specifying the upcoming clone name, progress bar and a "Stop Cloning" action

If the "In Process" filter is inactive when the user clicks "Clone Virtual Machine", it should be activated automatically to ensure that the newly-cloned VM appears in the list. This filter matches all “in between” states, including powering up, shutting down, or paused.

![Source VM Options](img/3-4-2-vm-list-cloning-source-options.jpg)

While the clone is in progress, the source VM's actions are all disabled, expect the clone which is doggled to `Stop Cloning`.

![Stop Cloning confirmation modal](img/3-4-3-vm-list-cloning-source-stop.jpg)

'Stop Cloning' will be followed by a confirmation modal
