---
parent: Virtualization
version: 4.6
---
# Upload Image prior to creating a VM

This PR deals with when a user wants to upload an image prior to creating a virtual machine.
It needs to be accomplished via the storage/PVC area.
It should ensure the user understands what the backing PVC does but does not remove the Disk terminology.

The ‘Create PVC’ button will change into a dropdown, so users will be able to select ‘Upload data to Persistent Volume Claim’ from this dropdown.
That will make 2 separate actions for creation, one of them being able to 'Upload data to Persistent Volume Claim'.
By creating a dropdown and adding this new action, we'll highlight this action as a new feature (in an existing form) so the users will be able to easily find it.

![PVC list with drop down button](img/PVC-dropdown.png)

They will get to a new upload screen with an inline info alert that says this PVC will be created using a DataVolume through Container Data importer (CDI).
User chooses an image to upload and fills in the PVC details: Name, size, storage class, access mode. Some of the fields can be filled out but editing will be optional as well.

![browse to upload](img/Upload-data-to-pvc-1.png)

After the user clicks ‘Upload’ they will get to the new installing screen where a spinner symbplyzes the PVC is currently being created.
The status conditions reason and phase are shown and update in real time on the installing screen.
A link is included that allows the user to view the PVCs list.
We chose to use the spinner over the progress bar because we can't really offer progress and there aren't any significant steps to highlight.
We'll show a notification with a request to keep the browser instance/tab open so they won't miss an error state during the upload progress.

![In between states and upload in progress explanation](img/in-between-state2.png)

Once the progress is successfully finished they will be directed to the PVC Details page.

![PVC Details page](img/pvc-details-page.png)

The List view will show an ‘uploading’ status and the popover will include an explanation (The PVC has been created and the file upload is in progress) and an option to cancel the upload process.

![List view with popover](img/PVC-ListViewW_popover.png)

If the CDI fails to create the PVC we'll show an inline error on the creation page.
Until we have toast notifications we don't want to encourage the user to leave the PVC upload flow until something has been successfully created, so we’ll advise the user that in case they navigate away, they might miss the error, and provide a link to the DataVolume for further info.

![List view when upload failed](img/List-error.png)

![error modal](img/Error-modal.png)