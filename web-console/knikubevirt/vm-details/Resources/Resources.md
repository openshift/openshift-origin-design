# VM details - Devices-and-resources

### Virtual machine

## From VM details page
![VM details - Overview tab - default](img/VM-2-0.jpg)
Within the VM details > overview tab > overview section, a click on the ‘Resources’ field will pop up the correlated modal.

![Resources modal - default](img/VM-3-0.png)
The ‘Resources’ modal currently contains only the Resources Policy. This may expand in the future. The modal is titled this way, instead of  ‘Workload isolation’, in order to align with the implementation on the pod’s side.

A sub-text below the title mentions that the scheduler will attempt to achieve the following settings. In case it is not possible, the VM will be scheduled in the best way it can (the same thing applies for pods, where this modal has more settings).

The user selects ‘Dedicate resources...’ radiobutton on the policy field.

![VM details - Overview tab - workload isolation enabled](img/VM-4-0.jpg)
The preview on the ‘Resources’ us updated to reflect the changes.

## From VM creation wizard
![Create VM - Advanced - Virtual hardware](img/Create-VM-4-2-00.png)
Under ‘Create VM > Advanced step > Virtual hardware, the user can now enable workload isolation. New section titles are added to separate from the CD-ROMs and the Resources section.

## From pod details page
![pod details - Overview tab - default](img/Pod-2-0.jpg)
Within the Pod details > overview tab > overview section, a click on the ‘Resources’ field will pop up the correlated modal.

![Resources modal - default](img/Pod-3-0.png)
This modal will display a CPU and Memory request, followed by a ‘policy’ field which offers the user a toggle between setting CPU and Memory limit, or workload isolation.

![Resources modal - workload isolation](img/Pod-3-1.png)
Selecting the workload isolation option will hide the Limit fields.

![Resources modal - 'limit' provided options](img/Pod-3-2.png)
The limit dropdowns offer values that are higher than the request. 

![Resources modal - 'limit' error message](img/Pod-3-3.png)
In case the user enters the ‘Limit’ values first and enters higher ‘Request’ values later, the modal will provide an error message for the limit fields.

![pod details - Overview tab - edited](img/Pod-4-0.jpg)
Back to the pod page, the field will reflect the settings on the modal.
