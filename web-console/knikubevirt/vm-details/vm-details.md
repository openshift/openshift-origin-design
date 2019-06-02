# VM Details



## Overview Tab

![VM-overview](img/1-0-0.jpg)
The user clicks a VM’s name from the list view and is taken to that VM’s Overview tab.
The user sees detailed information about the VM’s configuration.


## TAML

TBD - should be inline with the rest of Openshift.


## Network Interfaces

![VM-network intefaces](img/2-0-0.jpg)
This is Network Interfaces tab.


![VM - add NIC](img/2-1-0.jpg)
New NICs cannot be saved until the user fills out all required fields/dropdowns (including Name). The new NIC should always appear at the top of the list until the user saves it.

![VM - add NIC modal - default](img/2-2-0.jpg)
The user can either cancel adding/modifying a NIC or confirm changes by clicking the primary action button.


![VM - network intefaces - restart VM notification](img/2-3-0.jpg)

![VM - network intefaces - restart VM notification](img/2-4-0.jpg)

![VM - network intefaces - restart VM notification](img/2-5-0.jpg)

Whenever a NIC has been added or modified in a way that requires the VM to be restarted, an inline notification should appear below the tab area reminding the user to do so. This notification should persist across all tab views, including the Overview (shown previously).


## Disks

![VM](img/1-0-0.png)
The flow for disks is very similar to NICs.

### Add disk

Note: The create/edit flow of this area and Network Interfaces is still being actively worked on. See Matt Carleton’s Storage Step doc to see current progress within the Create VM flow, which will probably be very similar to what gets designed here.

![VM](img/1-0-0.png)
The user clicks “Add Disk”. Like adding a new NIC, the new disk with blank fields is prepended at the top of the list. The confirm button is disabled.

![VM](img/1-0-0.png)
The user edits each input and clicks the confirm button to finish. The new disk is added to the list and is sorted alphabetically.

### Edit disk

![VM](img/1-0-0.png)
The user clicks the kebab and clicks “Edit Disk”.

![VM](img/1-0-0.png)
They make adjustments and hit the confirm button to save.


## Snapshots

WIP available here


## Events

TBD

## Consoles

![VM](img/5-0-0.png)
The Consoles tab allows the user to connect an in-browser or desktop-based Graphical and/or Serial console to the virtual machine.

![VM](img/5-1-0.png)
The user can change the console type using the dropdown selector. Serial (SPICE) is selected by default and disabled in the dropdown. Graphical (RDP/VNC) open in separate windows, designated by the fa-external-link icon.

Two actions are available on the right-hand side. The “Open in window” action opens a separate browser window dedicated to the console view. The “Expand” action makes the console viewport fill the current window’s full width and height similar to elsewhere in OKD. The “Send Key” dropdown is disabled.

The user can start a console session using either the primary Connect action button in the content area or the secondary Connect button next to the console dropdown selector.


### Connecting from a powered off state

![VM](img/5-2-0.png)
If the virtual machine is powered off, the primary action button will allow the user to both start and connect to the virtual machine with one click. If the user wants to power the virtual machine on without connecting a console (an unlikely use case while in this view) they can use the Actions dropdown in the top-right as usual.


![VM](img/5-3-0.png)
While the virtual machine is powering on, the console selector dropdown should be disabled to “lock in” the intended console. When the virtual machine finishes powering on, the console will be connected.


### Sending keys

![VM](img/5-4-0.png)


The “Send Key” dropdown helps the user send keyboard shortcuts that would ordinarily be captured by the user’s client operating system. The options available will depend on the VM that is running.

For reference: RHEV “Send Key” options


### Remote connection settings

![VM](img/5-5-0.png)

If the user prefers to connect to a VM using their own desktop client or Remote Desktop Viewer, they can find the port and configuration information they need by clicking the “Remote Connection settings” link to reveal a modal.



![VM](img/5-6-0.png)


