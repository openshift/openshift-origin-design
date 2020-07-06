---
parent: Virtualization
version: 4.x
---

# VM snapshots

This item will cover updates to vm-snapshots
- Creating a VM snapshot
- Snapshots on the VM details page
- Virtualization snapshot list
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
- Save memory content (future implementation)
- Disks included multi-select drop-down (future implementation)
- Dropdown to selecting Snapshot Class
- A summary of the VM details on the right-side column
- A summary of the size of the snapshot (above the primary action)

### Selecting disks (future implementation)

![Virtualization - "un-snapshotable" disks](img/1-0-b.jpg)
In case there are some disks who cannot be "snapshotted" an in-line notification will notify that and specify those disks.

![Virtualization - disks dropdown](img/1-1.jpg)
Selecting a disk. All disks are selected by default.
The "Un-snapshotable" disks will also be previewed within the disk multi-select drop-down, at a separate section at the bottom of the dropdown as a read only.

![Virtualization - Selecting a disk](img/1-2.jpg)
Selecting a specific disk will add that disk to a multi-select preview within the field.

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


## Virtualization > Snapshots list

![Virtualization - Snapshots list page](img/5-0.jpg)
This list will include Parent (VMs).

![Virtualization - Snapshots list - filters](img/5-01.jpg)
Multi-select filter (like we have on the search page)

# Restoring VM from snapshot

![Virtualization - restore from snapshot](img/6-0.jpg)
The user selects the restore action.

![Virtualization - restore from snapshot](img/6-1.jpg)
In case the VM is running, a warning message will mention that restoring for a running VM is not possible and that VM should be stopped first.

![Virtualization - restore from snapshot](img/6-2.jpg)
The user enters a “Review and Restore” screen.

![Virtualization - restore from snapshot](img/6-3.jpg)
The user can choose to backup the current VM with an additional snapshot. This will open the rest of the fields below.
