---
parent: Virtualization
version: 4.7
---
# Snapshots - updates

## Adding a ‘Last restored’ column to the list view

We'll add a ‘Last restored’ column to the snapshots list
that will show which snapshot was restored most recently, so the latest snapshot would be at the top of the list and indicate the time when it was last restored from.

![List view](img/Snapshots-list.png)

## Restore VM from a snapshot

After the user clicked to ‘Restore’ VM from a snapshot we will show in the status column that the VM is currently being restored from this snapshot.
Restore can be done either from the kebab menu or from the secondary button at each row.

![Restoring](img/Restore-from-kebab.png)

### Restoring popover

![Restore popover](img/Restoring.png)

## Restore completed

![Restore completed](img/Completed.png)

## Restore failed

![Restore failed](img/Failed.png)

In case the Restore failed the users can either go to the snapshot details page (by clicking the snapshot name) to see the inline warning alert and continue the investigation from the link.

![Details page](img/Details-page.png)

Or click the ‘Try again’ and create a new one and continue the restore procedure.

![Modal](img/Modal.png)

## Adding a description

 We will add the option for the user to add a description to the Snapshot modal so they will remember what this snapshot contains when they will restore from it.
 The description for the VM Snapshot will be added to the Details Page as well.

![Create Snapshot Modal](img/snapshot-modal.png)

The details page will also include the status of the snapshot and the last restored time.

![Snapshot Details page](img/Snapshot-details-page.png)

## A Restore action is added to the Actions menu

![Restore from Actions Menu](img/details-page-actions.png)

When a user decides to delete a VM, we'll let them know that all snapshots of this VM will be deleted as well.

![delete-vm-modal](img/delete-vm-modal.png)