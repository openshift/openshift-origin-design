# PVC/PV Snapshots
 
## Main use cases
Create snapshot (from where PVC is)
List / View related snapshot(s) for a given PVC
Delete snapshot(s)
Create new PVC from a snapshot (import/restore snapshot)
 
## User Stories
- As a Developer, I want to be able to create a snapshot (from where PVC/PV is) to make a point-in-time copy of my data.  
- As a Developer, I want to create a new PVC/PV from a snapshot (import/restore snapshot)
- As a Developer, I want to delete 1 or more snapshot(s) when I no longer need to use the snapshot(s).
- As a Developer, I want to be able to list and view my snapshots for a given PVC/PV.
- As a Developer, I want to modify the schedule of a previously-scheduled snapshot.
- As a Developer, I want to know how much capacity the snapshots are taking. [Dashboard support for snapshots]
- As a Developer, I want to see recent snapshot-related events/activities. 

## PVC/PV Snapshot Workflow 
### List Pages 
![PVC List Page](img/PVC-List-01.png)
![PVC List Kebab Menu](img/PVC-List-02.png)

In the list pages for PVC/PV, we added a “Create Snapshot” action to the kebab menu. 
  
### Snapshot Modal 
The snapshot light modal should include: 
- A field for the snapshot name
- A dropdown to select between: 
  - Single snapshot
  - Weekly snapshot
  - Monthly snapshot 
  - Cron scheduler  

![Snapshot Modal-Single](img/PVC-List-03-copy.png)

### Schedule section includes:
#### For Monthly/Weekly:
- Time zone selection
- Day in month/week, hour, minutes and seconds fields
- Keep (history) How many instances of the scheduled snapshot the user wants to keep. (I think we should set a limit to how much versions users can save)

![Snapshot Modal-Mothly](img/PVC-List-04-copy.png)
![Snapshot Modal-Mothly](img/PVC-List-05.png)
![Snapshot Modal-Weekly](img/PVC-List-11.png)

#### For Cron: 
- Text field for the cron format
- Keep (history) 

![Snapshot Modal-Cron](img/PVC-List-12.png)

### Status Indication 
While snapshotting is in progress, the status indication shown is “Creating snapshot”. Clicking on the status indicator will show a popover with the progress indication. 
![PVC List Page](img/PVC-List-06.png) 
![PVC List Page](img/PVC-List-07.png)


While a snapshot is in progress the only available action in the kebab menu will be “Stop Snapshot”. 
![PVC List Page](img/PVC-List-08.png)


### Failure Scenario: 
If a PVC is not bound to a PV the snapshot action will fail. In that case snapshot action in the kebab menu will be disabled
![PVC List Page](img/PVC-List-10.png)


### Details Pages

We added the Snapshots to the PVC Details page.  
![PVC Details Page](img/PVC-Details-Overview-01.png)
![PVC Details Page](img/PVC-Details-Overview-02.png)

#### Snapshots list:
The snapshot list is located under the PVC/PV. A tab item in the horizontal navigation will be dedicated for snapshots. The snapshot list is ordered by name as a default. For scheduled, a date will display the next snapshot. The list itself can be filtered to show "Taken" snapshots, "scheduled" snapshots or both (default).
![PVC Details Page](img/PVC-Details-Snapshots-01.png)
 
Clicking on the snapshot name will open the details page.
![PVC Details Page](img/PVC-Details-Snapshots-02.png)

#### Snapshot actions
The action available in the kebab menu are: 
- for old snapshot  
  - Restore
  - Create new PVC
  - Delete
- For future snapshots
  - Remove
  - Edit - Modify VolumeSnapshot schedule, cancel/pause/unpause?

![PVC Details Page](img/PVC-Details-Snapshots-03.png)


##### Restore
Clicking restore will open a popup showing the snapshot details and the restore button. 
![PVC Details Page](img/PVC-Details-Snapshots-04.png)

##### Delete
For old snapshot :
![PVC Details Page](img/PVC-Details-Snapshots-06-copy.png)

For Scheduled Snapshots
![PVC Details Page](img/PVC-Details-Snapshots-06.png)

##### Edit Scheduled Snapshot
![PVC Details Page](img/PVC-Details-Snapshots-07.png)