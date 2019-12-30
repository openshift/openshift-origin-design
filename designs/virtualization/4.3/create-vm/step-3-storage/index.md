---
parent: Virtualization
version: 4.3
---

# Create VM Step 3: Storage

## Pre-populating fields

In the 'General' step, we allow the user to select the guest operating system. This could allow us to auto-fill certain fields (like disk bus and network interface).

The 1st screen of the storage section in the wizard flow will show the disks in a table view. The user can add a disk (this could be either a new disk or attach an existing one).

![add disk default](img/Add-disk-default.png)

Once the user clicks the ‘Add disk’ button, a modal will be shown and the user can choose what kind of disk he/she wishes to add and fill in the details. The default selection will be a blank disk. The user is able to choose the type of disk from the Source drop down menu:
- ISO
- URL
- Container
- Attach disk

![add disk modal](img/Add-disk-modal.png)

### ISO
In case the user selects ISO

![Modal with ISO selected](img/Add-disk-modal-ISO-selected.png)

and fills in the details in the additional required input fields that are added upon the type of selection.

![Modal with additional details](img/Add-disk-modal-details-required.png)

The user can also upload a new ISO file that will activate the browser's file picker and then the filename would be shown in this "ISO" field.

![Upload new ISO](img/Upload-new-ISO.png)

Once the user completes the form and clicks apply, the disk is added to the top of the disks list table. Clicking the kebab will open a drop down menu where the disk can be edited in the modal form shown before.

![User can choose to edit disk](img/Edit-disk.png)

![edit disk modal](img/Edit-disk-modal.png)

or get removed

![User can choose to remove disk](img/Remove-disk.png)

Before the disk is removed, the user will be provided with a notification

![User is notified before disk is removed](img/Remove-disk-warning-alert.png)

Any time the list of disks is empty (when no disk is available), the empty state will be shown.

![no disk is available so empty state is shown](img/Empty-state-after-deleting-all-items.png)

### URL

In case the user selects a ‘URL’ from the data source drop down

![URL selected](img/URL-selected-add-disk-modal.png)

![URL selected](img/URL-selected-add-disk-modal-details-required.png)

### Container

In case the user selects a ‘Container’ from the data source drop down

![container selected](img/Container-selected-add-disk-modal.png)

![container selected](img/Container-selected-add-disk-modal-details-required.png)

### Attach

In case the user selects to attach ‘disk’ from the data source drop down

![Attach disk selected](img/Attach-disk-selected-add-disk-modal.png)

![Attach disk selected](img/Attach-disk-selected-add-disk-modal-details-required.png)

![Attach disk selected](img/Attach-disk-selected-add-disk-modal-details-required2.png)
