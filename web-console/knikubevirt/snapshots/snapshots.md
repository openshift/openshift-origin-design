# Virtual Machines Snapshots

Snapshots allow users to create a copy of the VM disks and memory, mainly for restore and backup purposes. The snapshots are taken live or offline depending on if the VM is running or not. 
This document describes the snapshot design flow.  




## From VM List 

![Offline VM list - snapshot action from a single VM kebab](img/1-00.jpg)
When clicking on the kebab menu in the VM list, the user will be able to take a snapshot of the VM, meaning he will copy the disks, memory content, and metadata for restoring, backup, creating templates and cloning VMs.

![Offline Snapshot modal - default](img/1-01.jpg)
In the basic modal, the snapshot will take all current configuration and selected parameters.
The user must add a descriptive name.
![Offline Snapshot modal - selecting disks](img/1-02.jpg)
In the disks field, the user will be able to decide if to include all disks or just some of them and if to include memory as part of the snapshot or not.
![Offline Snapshot modal - disks customization](img/1-03.jpg)
![Offline Snapshot modal - disks customized](img/1-04.jpg)

![Offline Snapshotting status indication](img/1-05.jpg)
![Offline Snapshotting status indication on click and kebab mode](img/1-06.jpg)

Any virtual machine that has a snapshot in progress will show this in the state:
When in this progress mode all actions would be disabled and the “Stop snapshot” would be available.


## VM page - snapshots tab

![Offline Shanpshot tab](img/2-00.jpg)
The snapshot list is located under the VM. A tab item in the horizontal navigation will be dedicated for snapshots. The list is ordered by the creation date as a default. 
The user can sort the list by name or date, clicking on the title will allow the user to switch sorting and decide if it's ascending or descending.  
![Offline Snapshot - same modal as in VM list](img/2-01.jpg)
Same modal as in VM list - Snapshot action
![Offline Snapshot tab - expanded item](img/2-02.jpg)
List item drawer. The user clicks any place on the row in order to expand the row for more information. 

![Offline Snapshot tab - kebab actions](img/2-03.jpg)
Kebab actions.
Clicking on the kebab menu on each row will open an action menu with several options:
- Create VM Template
- Create VM
- Restore
- Delete
![Offline Snapshot tab - restoring action](img/2-04.jpg)
Restoring VM from snapshot modal. When clicking the restore option in the action menu it opens the restore popup. I tried keeping the restore popup similar to the cloning and template popups.


## Scheduled snapshots

This will be added in the future

![Offline Schedule Snapshot - scheduled sub tab](img/3-00.jpg)
A dedicated sub-tab for veiwing, editing and creating scheduled snapshots.
![Offline Schedule Snapshot - modal default](img/3-01.jpg)
On clicking the 'Schedule snapshot' action, the same modal will appear, but with different defaults for 'Event' field. 
![Offline Schedule Snapshot](img/3-02.jpg)
When selecting a date, the 'Repeat' field will update it's selection according to the selected date, mentioning the selected day.
![Offline Schedule Snapshot](img/3-03.jpg)
'Repeat' field options
![Offline Schedule Snapshot](img/3-04.jpg)
Selecting 'None' for 'Repeat' field will disable the backup instances


## Warning remarks

![Offline Create snapshots notification](img/4-0.jpg)
There are some warning remarks that alert the user about the status of the snapshot he’s going to create. In all cases, the user can still create a snapshot. 
The current alerts are:
- 'No available disk'
- 'Missing guest agent' is still under discussion