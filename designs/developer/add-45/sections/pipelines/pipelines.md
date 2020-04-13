---
parent: Developer
version: 4.5
---

# Pipelines section in Add Flows- Updates
* Updates to the Pipelines section of the 'Add' page include moving the Pipelines section below the Resources section. In the Pipeline section, the ‘Show pipeline visualization’ component will remain open even if the user selects a new builder image or resource during their session.

![image](img/pipelines-overview-1.png)

## Import from Git
### No Builder Image Selected
* When no builder image or resource has been selected yet, the Pipelines section will display an Info alert that says “Select a builder image and resource to see if there is a pipeline template available for this runtime.”

![image](img/info-alert-1.png)

### Builder Image Selected and Pipeline Template Exists
* Once a builder image and resource combination have been selected that have an available pipeline, the Pipelines section becomes populated with a checkbox and pipeline visualization.
* To select the pipeline, the user can select the checkbox.
* To view the pipeline visualization the user can click on the caret or the 'View pipeline visualization' label.

![image](img/import-from-git-1.png)

* After the user clicks the caret or 'View pipeline visualization' label, the visualization is expanded and the user can hover over the different sections of the pipeline to see more details.  
* The pipeline visualization label changes to ‘Hide pipeline visualization’ if the pipeline visualization is expanded.

![image](img/import-from-git-2.png)

### Builder Image And Resource Selected But No Pipeline Template Exists
* If a selected combination of a builder image and resource does not support a pipeline an info alert would appear alerting the user of this. 
* This message specifies the builder image and resource type that the user selected.

![image](img/info-alert-2.png)
