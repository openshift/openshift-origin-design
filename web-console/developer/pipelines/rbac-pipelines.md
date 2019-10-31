# Pipeline experiences when user has view only access of a project#

 _user cannot add, edit and delete any annotations, labels, parameter, and resources & user cannot start, stop, restart, edit and delete any pipeline tasks of a project when user has view access to that project_

### Pipelines List View ###

When a user has view only access for a project then the kebab and all associated actions will be disabled. So that user cannot start or stop or delete any of the pipelines and pipeline Runs

![Pipelines List View](img/RBAC-PL-ListView.png)

### Pipelines Details Page / Overview ###

When a user has view only access for a project then the `action` button will be hidden. So that user cannot start, restart, modify and delete any of the pipeline runs.

![Pipelines Overview tab](img/RBAC-PL-Details-Overview-Actions.png)

### Pipelines Details Page / YAML ###

When a user has view only access for a project then the `action` and `save` buttons will be hidden to prevent YAML edit.

![Pipelines YAML tab](img/RBAC-PL-Details-YAML.png)

### Pipelines Details Page / Pipeline Runs ###

When a user has view only access for a project then user can view all the pipeline runs and their's statuses but user can not edit, delete and start any action using the `action` button (will be hidden) and kebab menu (will be disabled)

![Pipelines Pipeline Runs tab](img/RBAC-PL-Details-PLR-Actions.png)

### Pipelines Details Page / Parameters tab

When a user has view only access for a project then `action`, `save` buttons, `add/remove icons & link` options of hidden and `input fields` are disabled.

![Pipelines Parameters tab](img/RBAC-PL-Details-Overview-Actions.png)

### Pipelines Details Page / Resources tab  
When a user has view only access for a project then `action`, `save` buttons, `add/remove icons & link` options of hidden and `input fields` are disabled.

![Pipelines Resources tab](img/RBAC-PL-Details-Resources.png)

### Pipeline Runs Details view ###

When a user has view only access for a project then `action` will be hidden

**Note:** _No action allowed in YAML and Logs taps_

![Pipelines Runs Details](img/RBAC-PLR-Details-Actions.png)
