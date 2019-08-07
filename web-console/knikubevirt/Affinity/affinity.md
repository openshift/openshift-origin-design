# Affinity

### About Affinity
Affinity allows the user to create a relationship between two resources when scheduling them on the cluster.
There are two high level relationship types:
Affinity - attaching a group of resources together, making them run together in the same environment.
Anti-affinity - creating a rejection relationship between a group of resources, thus avoiding scheduling any of them in the same environment.

Besides defining if we want to attach or reject resources to one another, we can choose to "force" this rule we are creating.
"Forcing" a rule means that the conditions of this rule must met, even if it means that some resources just won't be scheduled at all.

### Technical Definitions
Affinity rules are pod properties, written in the pod deployment file. When a pod is scheduled, the deployment file states that there is an affinity rule condition which needs to be met.
Applying an affinity rule to a resources is done via labels. Objects in OpenShift are ephemeral, and the way to target the same object which keeps crashing and regenerating is by its label.


## Affinity rules - list page

![Affinity list](img/D2-0-0.jpg)
All affinity rules within the system can be viewed and managed from this page. It is located in the main navigation, under 'Workloads' 

## Creating an Affinity rule from Affinity Rules page

Clicking on the "Add affinity rule" button at the top of the affinity list will open up the "Add affinity rule" modal.

![Affinity rule modal - default](img/D2-1-0.jpg)
Going top to bottom, the user will choose to create an affinity (attachment), which is pre-selected, or change to Anti-affinity (rejection).
Then, the user will select the resources he wishes to apply that rule to by adding their representative labels to the "Select resources by label" field.


![Force rule](img/D2-1-1.jpg)
Before applying, the user can check the "Force this rule" checkbox, making this rule a required condition when scheduling the resources targeted by the added labels above.
![applying rule](img/D2-1-2.jpg)
The user hit "Apply rule".
![Rule added to list](img/D2-1-3.jpg)
The user now returns to the Affinity rules list.

# Affinity rules list on a resource details page

![VM details page - overview tab - Affinity section](img/D1-0-0.jpg)
Affinity rules can be viewed and managed per resource as well. The list is located in the resource details page, on the overview tab in Affinity rules section under 'Services' if those exist.

## Creating an Affinity rule from a resource details page

![Affinity rule modal - default](img/D1-1-0.jpg)

Clicking on the "Add affinity rule" button at the top of the affinity list will open up the "Add affinty rule" modal.
It is the same as the modal from the Affinity Rules list page except one thing: The resource itself is already added to the "Select resources by label" field.
The resource will be mentioned by it's name. 
Technically, this "direct selection" of this resource is not actually a direct selection. We already mentioned that selecting a resource directly is not the best way since that resource could crash and regenerate multiple times. Instead, behind the scenes, that selection will provide a new, unique label to the specified resource. 

![Affinity rule modal - selecting labels](img/D1-1-1.jpg)
User enters a label to point to other resources.
The rule is ready to be applied. The user clicks 'Apply' and returns to the resource details page, where he left off.