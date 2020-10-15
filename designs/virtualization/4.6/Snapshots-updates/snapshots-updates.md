---
parent: Virtualization
version: 4.6
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

In case the Restore failed the users can either go to the snapshot details page (by clicking the snapshot name) to see the inline warning alert and continue the investigation from the link

![Details page](img/Details-page.png)

Or click the ‘Try again’ and create a new one and continue the restore procedure.

![Modal](img/Modal.png)