# Virtual Machines Snapshots

Snapshots allow users to create a copy of the VM disks and memory, mainly for restore and backup purposes. The snapshots are taken live or offline depending on if the VM is running or not. 
This document describes the snapshot design flow.  




## From VM List 

![Offline VM list - snapshot action from a single VM kebab](img/1-00.jpg)
When clicking on the kebab menu in the VM list, the user will be able to take a snapshot of the VM, meaning he will copy the disks, memory content, and metadata for restoring, backup, creating templates and cloning VMs.

![Offline Snapshot modal - default](img/1-01.jpg)
In the basic modal, the snapshot will take all current configuration and selected parameters.
The snapshot name is auto-generated to the current date of creation. The user can add a descriptive name.
![Offline Snapshot modal - selecting disks](img/1-02.jpg)
In the disks field, the user will be able to decide if to include all disks or just some of them and if to include memory as part of the snapshot or not.
![Offline Snapshot modal - disks customization](img/1-03.jpg)
![Offline Snapshot modal - disks customized](img/1-04.jpg)

![Offline Snapshotting status indication](img/1-05.jpg)
![Offline Snapshotting status indication on click and kebab mode](img/1-06.jpg)
Any virtual machine that has a snapshot in progress will show this in the state:
When in this progress mode all actions would be disabled and the “Stop snapshot” would be available.

![Offline Restoring from snapshot status](img/1-07.jpg)
Any virtual machine that is undergoing a restoration process will show a "Restoring" indication on the status, with more details and a "Stop restoring" action on a popover. 


## VM page - snapshots tab

![Offline Shanpshot tab](img/2-00.jpg)
The snapshot list is located under the VM. A tab item in the horizontal navigation will be dedicated for snapshots. The snapshot list is ordered by name as a default.
The user can sort the list by name or date, clicking on the title will allow the user to switch sorting and decide if it's ascending or descending. For shceduled, date will display the next snapshot.
The list itself can be filtered to show "Taken" snapshots, "sheduled" snapshots or both (default).  
![Offline Snapshot - same modal as in VM list](img/2-01.jpg)
Same modal as in VM list - Snapshot action
![Offline Snapshot tab -  snapshot item details](img/2-02a.jpg)
The user clicks the snapshot's name to view more information. 
![Offline Snapshot tab - snapshot item details](img/2-02.jpg)
Details view.

![Offline Snapshot tab - kebab actions](img/2-03.jpg)
Kebab actions.
Clicking on the kebab menu on each row will open an action menu with several options:
- Create VM Template
- Create VM
- Restore
- Delete
![Offline Snapshot tab - restoring action](img/2-04.jpg)
Restoring VM from snapshot modal. When clicking the restore option in the action menu it opens the restore popup. The restore popup aligned to the [cloning](http://openshift.github.io/openshift-origin-design/web-console/knikubevirt/clone-vm/clone-vm) and [template](http://openshift.github.io/openshift-origin-design/web-console/knikubevirt/vm-templates/vm-templates) popups.


## Scheduled snapshots

The scheduled snapshots are located at the top of the list of the taken spanpshots, sharing the same columns.

![Offline Schedule Snapshot - scheduled sub tab](img/3-00.jpg)
On checking 'Schedule snapshot for...' checkbox, addintional fields will appear for that task.
![Offline Schedule Snapshot - modal default](img/3-01.jpg)
Default mode.
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