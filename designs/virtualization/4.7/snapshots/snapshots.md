---
parent: Virtualization
version: 4.7
---

# VM snapshots

This item will cover updates to vm-snapshots
- Creating a VM snapshot
- Snapshots on the VM details page
- Restoring a VM from snapshot

## Creating a snapshot

![Virtualization - VMs list](img/0-0.jpg)
From the virtual machines menu item, the user selects “Create Snapshot” from a VM item’s kebab dropdown.
The same action can be taken from a VM details Action dropdown.

![Virtualization - turn off VM notification](img/0-1.jpg)
In case the VM is running, the user will be asked to turn it off to make a snapshot

![Virtualization - Create VM snapshot](img/1-0.jpg)
The user enters the Create snapshot screen.
This screen includes:
- Snapshot name field
- Dropdown to selecting Snapshot Class

The snapshot class is auto-selected to the class matching with the disks' pvc's storage class.
The default selection is set to the same snapshot class default when taking a snapshot for PVC on the Storage>PVC>Snapshot screen.
In case no clear storage class is the default, this dropdown will be set to --select--.

### Excluded disks

![Virtualization - "un-snapshotable" disks](img/1-0-b.jpg)
Only disks that are backed by a PVC (or DataVolume).
In case there are some disks who cannot be "snapshotted" an in-line notification will notify that and specify those disks.

### Creating screen

![Virtualization - Creating snapshot](img/2-0.jpg)
After clicking the Create button, the user goes to a transition page, in “Creating mode”.
While the snapshot is being created the user can navigate external to this flow. A text below will mention that, with a link to going back.

## VM details > Snapshots

![Virtualization - Snapshot details page](img/2-1.jpg)
In case creation succeeded, the user will land on the snapshot details page.
The snapshot details page should contain all the data relevant to the VM.
Overview tab is not available.

![VM details - Snapshots list](img/3-0.jpg)
All the columns are sortable within the snapshot table.

![VM details - Snapshots list](img/2-2.jpg)
Snapshots will also be surfaced on the VM details > Overview > Inventory


# Restoring VM from snapshot

![Virtualization - restore from snapshot](img/6-0.jpg)
The user selects the restore action.

![Virtualization - restore from snapshot](img/6-1.jpg)
In case the VM is running, a warning message will mention that restoring for a running VM is not possible and that VM should be stopped first.

![Virtualization - restore from snapshot](img/6-2.jpg)
The user enters a “Review and Restore” screen.
