---
parent: Virtualization
version: 4.x
---

# VM snapshots

This item will cover updates to vm-snapshots launched for 4.7
- Removing the "Turn off VM before attempting snapshot"
- Include memory checkbox
- Disks included dropdown


## Creating a snapshot

![Virtualization - turn off VM notification](img/0-1.jpg)
The previous implementation and design included this modal.
In a future implementation, the snapshots can be taken on a live VM and include its memory.
So this modal will be obsolete.

![Virtualization - Create VM snapshot](img/1-0.jpg)
Updates to this screen includes:
- Save memory content
- Disks included multi-select drop-down


### Selecting disks

![Virtualization - "un-snapshotable" disks](img/1-0-b.jpg)
Only disks that are backed by a PVC (or DataVolume).
In case there are some disks who cannot be "snapshotted" an in-line notification will notify that and specify those disks.

![Virtualization - disks dropdown](img/1-1.jpg)
Selecting a disk. All disks are selected by default.
The "Un-snapshotable" disks will also be previewed within the disk multi-select drop-down, at a separate section at the bottom of the dropdown as a read only.

![Virtualization - Selecting a disk](img/1-2.jpg)
Selecting a specific disk will add that disk to a multi-select preview within the field.

## Virtualization > Snapshots list - Parent filter

![Virtualization - Snapshots list - filters](img/5-01.jpg)
Multi-select filter (like we have on the search page)
