---
parent: Virtualization
version: 4.x
---

# create VM dropdowns

This item will cover various updates to the VM creation wizard
- Adding descriptions to the dropdown fields (using this pattern https://github.com/patternfly/patternfly-design-kit/issues/218)
- Renaming fields
- Reordering fields
- Adding 'Operating System source' step


![Create VM - General-default](img/1-0.jpg)
Landing on the General step, Default mode.
Section titles added, and fields reorgenized and renamed.
Any OS image source related fields are mofed to the next step.

'General' section:
- 'Name'
- 'Description'
'Resources & configuration' section'
- 'Operating system'
- 'Workload type' (previously Workload profile)
- 'Flavor (CPU and Memory)' (previously only 'flavor')


## General step

![Create VM - General](img/1-1.jpg)
Upon selecting an operating system, the Workload type and Flavor (CPU and Memory) fields will be enabled and their defaults will be selected.

![Create VM - General - Workload type](img/1-1-1.jpg)
Workload type options
Server is the default

![Create VM - General - flavor](img/1-1-2.jpg)
Flavor options.
Medium is the default


## Operating system source step (new)

![Create VM - General](img/1-2.jpg)
Operating system source step,landing mode.

![Create VM - General](img/1-2-1.jpg)
'Boot operating system via' field options

![Create VM - General](img/1-2-2.jpg)
Selecting an option from the 'Boot operating system via' field will expose below all the fields required to upload the image and create the correlating disk/NIC.
For example: on selecting the 'URL' option, additional fields will appear below.
These fieldss are required in order to point to the desired URL asl well as creating a disk via PVC that will containt the image on that URL.
The fields are basically mapped 1:1 to the Disk modal, with the URL option selected for 'Disk content' field.

An Advanced (settings) drawer is available here as well, containing the same options as the Advanced options on the disk modal.

![Create VM - OS disk on list](img/1-3.jpg)
Once the user clicks next, the disk containing the OS image from the URL is added. This disk will be available on the Storage step and will appear as the first item on the list.
This disk cannot be deleted bu can be modified to some extent.

![Create VM - OS disk modal](img/1-3-1.jpg)
Editing that disk will display an info notification within the edit modal, mentioning the link between this disk and the one created omn the OS source step.
The fields related to the OS source, in this case, the URL, will be locked.

## Netwroking step

![Create VM - Networking -list](img/2-0.jpg)
NIC list.
For any VM source selection (with the exception of PXE) a default NIC will be added.
This NIC exposes the VM to the cluster.

![Create VM - Networking -Default](img/2-1.jpg)
On editing this default NIC, an info alert will remind the user that modifying this NIC might break that 'exposing to cluster' configuration.

![Create VM - Networking -Add](img/2-2.jpg)
Add NIC modal.
The Advanced drawer is closed by default, as seen in the previous image.
All fields have moved into the advanced drawer, except the Name and Network fields.
Network field does not require description for each option since these options are created and managed by the user.

![Create VM - Networking -Model](img/2-3.jpg)
'Model' dropdown options.
ViritIO marked as (recommended)

![Create VM - Networking -Binding](img/2-4.jpg)
'Binding method' dropdown options (previously 'Type')

## Storage

![Create VM - Storage -list](img/3-0.jpg)
Disks list.
In case no disk type OS image source selected in the General step, a default disk will be created in order to make the VM operational.

![Create VM - Storage -Default disk](img/3-0-0.jpg)
Editing the default disk will present an info box notification.

![Create VM - Storage -list](img/3-1.jpg)
The Add/Edit modal has been modified.
- Name
- Type changed to 'Disk content'. This will change the configuration below
- Advanced drawer added containing: 
    - Interface
    - Volume mode
    - Access mode (should be automatically selected and locked to the Storage class default)
    - Make disk bootable checkbox (new)

![Create VM - Storage -list](img/3-2.jpg)
Disk content dropdwon options.

## Review & create

 ![Create VM - Advanced -drawers](img/5-0.jpg)
The name of this step has changed to correlate better with the 'Create and review action' that is available along previous steps.

The 'Start VM on creation' and 'Create template from this VM' checkboxes had been removed from the General step and placed in this step at the bottom of the page.