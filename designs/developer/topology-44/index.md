---
parent: Developer
version: 4.4
---

# Topology
The Topology page is a primary navigation item in the OpenShift Developer perspective.

## Topology
The Topology view would be used in OpenShift Dev-Console to show semantic aggregated metadata about related pods, deployments, builds of application components in a namespace.  

![Topology View](../topology-43/img/Topology_View.png)

### No Project in Context
When no project is selected, Topology View will prompt users to select from a given list of projects.  

![No project in context](../topology-43/img/no_project_exists.png)

#### No Workload Exists
When no workload exists, the topology view redirects users to the add flows to start creating new workloads to be shown on the topology canvas.
![Topology View](../topology-43/img/no_workload_exists.png)  

### Application selector
Users could choose to select either one of the applications or all the applications from the application selector.

## Topology View


### 1. Navigation item:
'Topology' under the Developer perspective of OpenShift.

### 2. Masthead
The masthead in topology view includes the project and application selector.

### 3. Topology Canvas
This is the area where the workloads are visually placed in the Topology view.

### 4. Toolbar
The toolbar consists of the following controls:
Zoom-in
Zoom-out
Fit to Screen
Reset View

### 5. Side Panel
On selecting any workload, connectors or application group on Topology View, their respective details appear on a side panel on the right hand side.

### 6. Nodes
![Node design](../topology-43/img/node_design.png)

Resources of type Deployments, Deployment Configs & Image Streams & Stateful Sets are shown as circle nodes in the topology view.

The circle node can include a pod status indicator, an image,  decorators and a node label.  

#### Pod Donut

![Pod Status](../topology-43/img/pod_status.png)

The pod donut represents the current status of the pods associated with the workload. If there are pods with different statuses, the pod donut is broken up into segments representing the status of the pods.

The pod donut is segmented by status. Between each segment there’s a space of 3px.

The name label contains a badge before the name, that denotes the type of resource.  

#### Node Image
The node image consists of the build image for the resource.  

#### Decorators

##### Route Decorator
Clicking on the decorator opens the application in a new browser tab.

##### Code Decorator
The code decorator is located on the bottom right quadrant of the node.
Go To GitHub or CHE Workspace  ** NEW IN 4.3

![Pod Status](../topology-43/img/che_icon.png)    If CHE workspace is available, CHE icon should be used

![Pod Status](../topology-43/img/github_icon.png)
If not, determine	the git client associated and use that icon

![Pod Status](../topology-43/img/git_alt.png)  If git couldn’t be determined, use git-alt icon from font-awesome


##### Build Decorator
The build decorator in the topology view is located in the bottom left of the node.  The decorator has six options: new, pending, running, completed, failed, and cancelled. When the decorator is hovered on, the status of the build will appear. The build decorator provides a one click action to view the build logs.

![Pod Status](../topology-43/img/build_status.png)  

##### Pipeline Decorator ** NEW IN 4.3
The pipeline decorator in the topology view is located in the bottom left of the node.  The decorator has four options: running, completed, failed, and pending.  When the decorator is hovered on, the status of the pipeline will appear. The pipeline decorator provides a one click action to view the pipeline run logs.

![Pod Status](../topology-43/img/pipeline_status.png)  

##### Node Label
The label would consist of a resource badge followed by the name of the component.

![Pod Status](../topology-43/img/node_label.png)  

### 7. Application group
#### Unselected State
Application Group - hello-openshift-app

![Application Groups](../topology-43/img/application_group.png)  

#### Hover State
![Application Hover](../topology-43/img/application_hover.png)  

#### Selected State
![Application Selected](../topology-43/img/application_select.png)  

#### Side panel content for Application Groups
![Application Side Panel](../topology-43/img/application_delete_menu.png)  

#### Name Label
Name of the app label on the basis of which the grouping has been done would appear as group name.

### 8.connectors
#### Unselected State
![Connector Unselected](../topology-43/img/connector_unselected_state.png)

#### Selected State
![Connector Selected](../topology-43/img/connector_selected_state.png)

#### Hover State
![Connector Hover](../topology-43/img/connector_hover.png)

#### Hover on Delete Button
![Connector Delete Tooltip](../topology-43/img/connector_delete_tooltip.png)

#### Hover on Arrow
![Connector Move Toolip](../topology-43/img/connector_move_tooltip.png)


#### On Selection
![Connector Move Toolip](../topology-43/img/select_connector.png)

**Not sure if this will be a real resource or just an element in the graph**

Click on a connector to select it.
Side panel opens with the details of the connector.

## Actions
### 1. Actions for nodes
##### User wants to edit Application grouping
![Select Node](../topology-43/img/node_sidepanel.png)

Select the component to be added to a new application group.  

![Edit Application Grouping](../topology-43/img/application_edit_grouping.png)

The side panel opens with the details of the selected node. From the Actions dropdown in the side panel, select ‘Edit Application Grouping’.

![Select Application Grouping](../topology-43/img/Select_app_group.png)

A modal opens up allowing the user to select an application from a dropdown menu.

![Create Application Grouping](../topology-43/img/Edit_app_grouping_new.png)

Users get an option to select from a list of pre-existing application, or create a new one to add the component to.
To create a new application, select the option ‘Create Application Group’

![Create Application Grouping](../topology-43/img/Edit_application_grouping_dialogue.png)

A new field appear to allow users to enter a name for the new application group to be created.  

![Connector Created](../topology-43/img/connector_created.png)

On clicking on ‘Save’’ the component gets added to the newly created application group.  

##### User wants to delete a component

Delete using action menu on the side panel

![Side Panel Menu](../topology-43/img/application_editgrouping_menu.png)

On selecting a node, the side panel appears with information about the node. The actions dropdown on the side panel include node specific actions.  

![Delete Component](../topology-43/img/delete_component.png)

Select Delete Component
Or, hit ‘Delete’ key after selection.  

![Delete Confirmation](../topology-43/img/node_delete_confirmation.png)

A delete confirmation is displayed.  

![Node Deleted](../topology-43/img/image69.png)

Upon confirming, the node and any associated connectors disappear  

##### User wants to add a component node to an application group using drag and drop

![Click to drag](../topology-43/img/node_select.png)

Click and drag the node to the desired application.  

![Drag to move](../topology-43/img/node_drag_newapp.png)

While dragging, the other components become faded in appearance and the App group in contact with the moving node gets a hover state.

![Drag to move](../topology-43/img/moved_node.png)

On release the component gets added to the application group.

##### User wants to move a component node from one app to another

![Drag to change application](../topology-43/img/image68.png)

Click and drag the node to the desired application.

![Drop over new application](../topology-43/img/application_change_grouping.png)

Drop the component node inside another app by releasing the click.

![Confirm Action](../topology-43/img/node_move_dialogue.png)

On dropping the node, a dialogue box appears to confirm the action of moving Node1 from App1 to App2.

![Node Moved](../topology-43/img/image39.png)

Once confirmed, the component node becomes a part of the new application group and the group elements rearrange themselves to accommodate the change.Exception: Moving from inside an application group to no group.  

### 2. Actions For Application Groups
#### Delete Application Group


![Delete Menu Item](../topology-43/img/delete_application_group.png)

From the actions dropdown on the right top corner of the details panel, select ‘Delete Application group’  

![Confirm Deletion](../topology-43/img/application_delete.png)

A confirmation message appears warning the user of the various resource types that would be deleted along with the application group.

![Confirm Deletion](../topology-43/img/application_deleted.png)

On confirming the action, the Application Group gets deleted and disappears from the view.  

### 3. Actions For Connectors

#### User wants to create a new connection

![Connection handle](../topology-43/img/connector_hover_dangler.png)

On Hover, a dangling arrow appears around the node.

![Click and drag](../topology-43/img/connector_clickndrag.png)

![Drag and drop](../topology-43/img/connector_dragndrop.png)

Click and drag on the arrow towards another node with which connection has to be created. On hovering over any other node while dragging the arrow, they would appear in hover state.

![Connection created](../topology-43/img/connector_dragconnected.png)

On release, new connection shows.

#### User wants to move the connections - origin of the connection being the same

![Hover on arrowhead](../topology-43/img/connector_move_tooltip.png)

On hover, the arrow of the connector gets highlighted.

![Hover on arrowhead](../topology-43/img/connector_dragnmove.png)

Drop the arrow of the connector over the desired node to move the connection to.

![Hover on arrowhead](../topology-43/img/connection_created.png)

On release a connection is created to the new node.

#### User wants to delete a connection

![Hover on arrowhead](../topology-43/img/connector_delete.png)

When user hovers over or selects a connection, delete button appears.

![Hover on arrowhead](../topology-43/img/connector_delete_tooltip.png)

![Hover on arrowhead](../topology-43/img/connection_delete.png)

On clicking the icon, a delete confirmation is displayed. Or, select the connector and hit ‘Delete’ key.

Topology is enhanced when the OpenShift Serverless operator is installed.
