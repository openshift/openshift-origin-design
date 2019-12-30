---
parent: Virtualization
version: 4.3
---

# VM Details

## Overview Tab

![VM-overview](img/1-0-0.jpg)
The user clicks a VM’s name from the list view and is taken to that VM’s Overview tab.
The user sees detailed information about the VM’s configuration.
![VM-overview - Editing a field](img/1-0-1.jpg)
Editing field will be aligned to the rest of the system. For now, only 'Description' and Flavor' have a pencil icon next to the field name to indicate it is editable. Hitting that pencil will open up a modal.

### Editing the CD-ROM
Via the pencil icon the cd can be edited.
![VM-details edit cd](img/cd-edit.png)

They will then be presented a modal with a type to select from (or an empty state if no CD-ROM has been added).

Depending on the type selected a new input is revealed. These types would be
#### No CD
This is the empty state. They can remove any CD-ROMs attached via the (-) icon next to each row.
![VM-details edit cd modal](img/edit-blank.png)
#### Container
A text field is provided to paste in the path to the container.
![container-type](img/edit-container.png)
#### Persistent Volume Claim
A typeahead field is provided to find the desired Persistent volume claim. 
![PVC-type](img/edit-pvc.png)
#### URL
A text field is provided to paste in the URL to the available CD.
![URL-type](img/edit-url.png)

With each selection a tooltip is provided to describe each type.

### Windows drivers
In the case where a Windows operating system has been chosen in the general step a `Windows drivers` option will be available.
![VM-details edit cd windows drivers](img/edit-container-windows.png)

There is the ability to add more than one CD-ROM if needed (most likely for a Windows VM)
![VM-details edit cd windows drivers](img/edit-container-windows-2.png)


![VM-details cd details](img/cd-field.png)

## YAML

Should be inline with the rest of OpenShift. Can be seen [here](http://openshift.github.io/openshift-origin-design/web-console/future-openshift/code-editor-updates/code-editor-updates)


## Network Interfaces

![VM-network intefaces - add NIC](img/2-0-0.jpg)
This is Network Interfaces tab.


![VM - add NIC modal](img/2-0-1.jpg)
Default modal. The user is notified that activating this upcoming NIC requires a VM restart. 

![VM - add NIC modal - filled in](img/2-0-2.jpg)
User can choose between adding NIC only, or add NIC and restart VM to make it active.

![VM - new NIC](img/2-0-3.jpg)
The new NIC should always appear at the top of the list until the user restarts it. The new nic will have a'Pending VM restart' Link state (as a status).

![VM - New NIC - popover](img/2-0-4.jpg)
Hover on that link state (status) will display more details with a 'Restart VM action in a popover.

![VM - Pending changes notification - view changes](img/2-0-5.jpg)
Whenever a NIC has been added or modified in a way that requires the VM to be restarted, an inline alert should appear below the tab area reminding the user to do so. This notification should persist across all tab views, including the Overview (shown previously).

![VM - Pending changes notification - view changes modal](img/2-0-6.jpg)
Changes pending VM restart can be viewed in a dedicated modal.

### Edit NIC
Editing NIC is equivalent to creating one, with Modal label and actions label changed accordingly.

![VM - NIC item action options](img/2-1-0.jpg)
Edit NIC available in the kebab menu of each NIC list item
![VM - Edit NIC modal](img/2-1-1.jpg)
"Save changes" is equivalent to "Add NIC" on creation modal. The VM must be restarted in order for these changes to be applied.
![VM - Edit NIC saved changes](img/2-1-2.jpg)
Same notification to restart VM if the user selected to save changes only.

## Disks

![VM - Disks tab - adding disk](img/3-0-0.jpg)
The flow for disks is similar to NICs, but adding or editing a disk does not require a VM restart.


![VM - add disk modal](img/3-1-0.jpg)
The user clicks “Add Disk”, and is led to an 'Add Disk' modal.

![VM - disk list item actions](img/3-2-0.jpg)
The user edits each input and clicks the confirm button to finish. The new disk is added to the list and is sorted alphabetically.

The user can edit or delete a list item from its kebab menu for each list item.



## Snapshots

Snapshot designs can be seen [here](https://github.com/openshift/openshift-origin-design/pull/183)


## Events

TBD

## Consoles

![VM - console tab -default](img/4-0-0.jpg)
The Consoles tab allows the user to connect to the virtual machine via an in-browser or desktop-based Graphical and/or Serial console.
![VM - console dropdown options](img/4-1-0.jpg)
The user can change the console type using the dropdown selector. 'Graphical (VNC)' is selected by default. Any currently selected option is disabled in the dropdown.

Two actions are available on the right-hand side. The “Open in new window” action opens a separate browser window dedicated to the console view. The “Expand” action makes the console viewport fill the current window’s full width and height similar to elsewhere in OKD. The “Send Key” dropdown is disabled when disconnected from the console.

The user can start a console session using either the primary 'Connect' action button in the content area or the secondary 'Connect' button next to the console dropdown selector.


### Connecting from a powered off state

![VM - Serial (SPICE)](img/4-2-0.jpg)
If the virtual machine is powered off, the primary action button will allow the user to both start and connect to the virtual machine with one click. If the user wants to power the virtual machine on without connecting a console (an unlikely use case while in this view) they can use the actions dropdown in the top-right as usual.


![VM - connecting to VM](img/4-3-0.jpg)
While the virtual machine is powering on, the console selector dropdown should be disabled to “lock in” the intended console. When the virtual machine finishes powering on, the console will be connected.


### Sending keys

![VM - Send key dropdown options](img/4-4-0.jpg)


The “Send Key” dropdown helps the user send keyboard shortcuts that would ordinarily be captured by the user’s client operating system. The options available will depend on the VM that is running.




### Remote connection settings

![VM - Remote conection settings](img/4-5-0.jpg)

If the user prefers to connect to a VM using their own desktop client or Remote Desktop Viewer, they can find the port and configuration information they need by clicking the “Remote Connection settings” link to reveal a modal.


![VM - Remote conection settings modal](img/4-6-0.jpg)
