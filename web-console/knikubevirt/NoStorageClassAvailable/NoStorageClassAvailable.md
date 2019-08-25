# Storage class isn’t defined

Currently in our designs we have a default storage class used when a disk is added in the Create VM flow, but we do not cover the absence of a default storage class.
This design covers the state of no storage class selected and determines how the user should be notified.

During the process of creating the VM, in the Storage step, the user needs to add a disk.

![Add disk action](img/Add-disk-default.png)

Clicking the ‘Add disk’ button will open a modal, where the user is asked to fill in the disk’s details.
Since the Storage class isn’t available, and also no PVC that matches their requirements, the user will be notified with a red note below the Storage class dropdown that no storage class is available and they need to create one.

We want to allow the user to set the Storage class within the wizard, with no need to be taken out of it.

![Fill in disk details](img/Add-disk-modal-details-required.png)

![Add disk modal with create storage class](img/Add-disk-modal-with-create-sc.png)

Clicking the ‘Create Storage class and add disk’ button at the bottom will add the disk to the list view.

Even when a user didn’t define a storage class, or doesn't have one available, they can still create a VM.
In cases when the user didn’t define any Storage class, the Storage class will be shown in the table view as ‘Empty’ with a warning icon.
Clicking on the ‘Empty’ Storage class will show a popover with more info and an action link which will take the user to the ‘Create Storage class’ modal.

![Empty Storage class popover](img/Popover.png)

'Create Storage class’ modal

![Create storage class modal](img/Create-storage-class-modal.png)

Once the user creates the Storage class, it will be reflected in the VM list view (after the VM has been created), and show the VM in a pending status with warning icon and a pop over explanation saying the VM has been scheduled and waiting for the requirements to be assigned.

![vmlist with popover](img/vmlist.png)

After that, the storage class will be created successfully and the VM will spin up.
