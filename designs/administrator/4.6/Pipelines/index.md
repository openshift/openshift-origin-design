---
parent: Administrator
version: 4.6
---

# Pipelines

## Description
The Pipelines pages should be updated on the Admin console to be representative of a view that makes sense for the Admin user. Across all pages:
 - The Namespace column appears when the All-projects selection has been made by the user.
 - The kebab on the table functions as it does today.
 - The Tech Preview badge has now been moved next to the title to make room for the Create button on the  right hand side.
 - The Create button should be styled with the dropdown as it shows on the Secrets page.

## Pipelines page

### Pipelines
On the Pipelines page the user can navigate between Pipelines, Pipeline Runs, Pipeline Resources, and Conditions via the tabs on the top of the page.
- From the Create button the user can create Pipelines, Pipeline Resources, and Conditions.
- The main action the user can take on the Pipelines page is creating a Pipeline from the Pipelines page
- The Pipelines page contains the Pipelines Name, Last Run, Last Run Status, and Last Started columns
- On the Pipelines page the user can filter by Status

![Pipelines page](img/1-pipelines.jpg)

### Pipeline Runs
The Pipelines Runs page contains the Name, Status, Started, and Duration columns. On the Pipeline Runs page the user can filter by Status.

![Pipeline runs](img/2-pipeline-runs.jpg)

### Pipeline Resources
The main action the user can take on the Pipelines Resources tab is creating a Pipeline Resource from the Pipeline page. The Pipelines Resources page contains the Name, Created, and Type columns. For filtering the user can filter by Resource type (Git Resource, Pull Request Resource, Image Resource, Cluster Resource, Storage Resource including GCS Storage Resource and BuildGCS Storage Resource, and Cloud Event Resource).

![Pipeline resources](img/3-pipeline-resources.jpg)

### Conditions
The main action the user can take on the Conditions tab is creating a Condition from the Pipelines page. The Conditions page contains the Name and Created columns.

![Condition](img/4-Condition.jpg)

## Tasks page

### Tasks
The main action the user can take on the Tasks page is create a Task, Task Run, and Cluster Tasks.

![Tasks](img/9-task.jpg)

### Task Runs
The user can create a Task Run from the Task Run button. On the Task Runs page the user can filter by Status.

![Task Runs](img/10-task-run.jpg)

### Cluster Tasks
The user can create a Cluster Task from the Cluster Task button.

![Cluster Tasks](img/11-cluster-task.jpg)

## Triggers page

### Event Listeners
The main action the user can take from this page is to create an Event Listener from the Create dropdown. We should determine in the future whether we can filter on Event Listeners or not.

![Event Listeners](img/5-event-listener.jpg)

### Trigger Templates
The main action the user can take from this page is to create a Trigger Template from the Create dropdown.

![Trigger Templates](img/6-Trigger-Templates.jpg)

### Trigger Bindings
The main action the user can take from this page is to create a Trigger Binding from the Create dropdown.

![Trigger Bindings](img/7-Trigger-Bindings.jpg)

### Cluster Trigger Bindings
 The main action the user can take from this page is to create a Cluster Trigger Binding from the Create dropdown.

![Cluster Trigger Bindings](img/8-cluster-trigger-binding.jpg)
