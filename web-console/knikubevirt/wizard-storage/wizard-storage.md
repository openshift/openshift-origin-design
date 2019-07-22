# Create Virtual Machine Wizard - Storage Step

https://jira.coreos.com/browse/CNV-2378
This doc is based on the flow described [here](https://docs.google.com/document/d/1D4X6IKHfTU-_OtV_RZU11NMBvknuX8JE2K8hz7NS7rc/edit#) with updates to PF4.

The 1st screen of the storage section in the wizard flow will show the disks in a table view. The user can add a disk (this could be either a new disk or attach an existing one).

![add disk default](Add-disk-default.png)

Once the user clicks the ‘Add disk’ button, a modal will be shown and the user can choose what kind of disk he/she wishes to add and fill in the details. The default selection will be a blank disk.

![add disk modal](Add-disk-modal.png)

In case the user selects ISO

![Modal with ISO selected](Add-disk-modal-ISO-selected.png)

and fills in the details in the additional required input fields that are added upon the type of selection.

![Modal with additional details](Add-disk-modal-details-required.png)

The user can also upload a new ISO file that will activate the browser's file picker and then the filename would be shown in this "ISO" field.

![Upload new ISO](Upload-new-ISO.png)

Once the user completes the form and clicks apply, the disk is added to the top of the disks list table. Clicking the kebab will open a drop down menu where the disk can be edited in the modal form shown before.

![User can choose to edit disk](Edit-disk.png)

![edit disk modal](Edit-disk-modal.png)

or get removed

![User can choose to remove disk](Remove-disk.png)

Before the disk is removed, the user will be provided with a notification

![User is notified before disk is removed](Remove-disk-warning-alert.png)

Any time the list of disks is empty (when no disk is available), the empty state will be shown.

![no disk is available so empty state is shown](Empty-state-after-deleting-all-items.png)

In case the user selects a ‘URL’ from the data source drop down

![URL selected](URL-selected-add-disk-modal.png)

![URL selected](URL-selected-add-disk-modal-details-required.png)

In case the user selects a ‘Container’ from the data source drop down

![container selected](Container-selected-add-disk-modal.png)

![container selected](Container-selected-add-disk-modal-details-required.png)

In case the user selects to attach ‘disk’ from the data source drop down

![Attach disk selected](Attach-disk-selected-add-disk-modal.png)

![Attach disk selected](Attach-disk-selected-add-disk-modal-details-required.png)

![Attach disk selected](Attach-disk-selected-add-disk-modal-details-required2.png)
