# Pipelines
The Pipelines section allows the user to enable a pipeline template for their application, component or service.
* A Pipelines section appears in +Add flows (for Import from Git,  Developer Catalog, and From Dockerfile) when the Pipelines operator is installed.
* When the Pipelines operator is not installed, this section is not displayed
* The Pipelines section has a “Dev Preview” badge

## Import from Git
### No Builder Image Selected
* When a builder image has not been selected, the Pipelines option shall display an Info alert that says “Select a builder image to see if there is a pipeline template available for this runtime.”

![Add pipeline](img/+Add_Flow_Pipelines_ImportFromGit_No_Img.png)

### Builder Image Selected and Pipeline Template Exists
* When a builder image has been selected, if a pipeline template is available, the Pipeline section shall be updated to display an “Add pipeline”  checkbox option
* The default state of the Add pipeline checkbox is OFF
* An expandable control with text “Show pipeline visualization” is displayed below the Add pipeline checkbox and is collapsed by default

![Add pipeline](img/+Add_Flow_Pipelines_ImportFromGit.png)


### Builder Image Selected and No Pipeline Template Exists
* When a builder image has been selected, if no pipeline template is available, an Info inline alert shall be displayed within the Pipeline section
* The alert shall say “There are no pipeline templates available for this runtime.”

![Add pipeline](img/+Add_Flow_Pipelines_ImportFromGit_No_Temp.png)


### Developer Catalog

#### Pipeline Template Exists
* When an app, service, or source-to-image builder is added, if a pipeline template is available, the Pipeline section is updated to display an “Add pipeline”  checkbox option
* The default state of the Add pipeline checkbox is OFF
* An expandable control with text “Show pipeline visualization” is displayed below the Add pipeline checkbox and is collapsed by default

![Add pipeline](img/+Add_Flow_Pipelines_ImportFromGit.png)

#### No Pipeline Template Exists
* When no pipeline template is available (which will be determined after the app, service, or source-to-image builder is added), an Info inline alert shall be displayed within the Pipeline section
* The alert shall say “There are no pipeline templates available for this runtime.”

![Add pipeline](img/+Add_Flow_Pipelines_ImportFromGit_No_Temp.png)

## Dockerfile
### Pipeline Template Installed
* When a pipeline template for Dockerfiles is installed, the Pipeline section shall display an “Add pipeline”  checkbox option
* The default state of the Add pipeline checkbox is OFF
* An expandable control with text “Show pipeline visualization” is displayed below the Add pipeline checkbox and is collapsed by default

![Add pipeline](img/+Add_Flow_Pipelines_ImportFromGit.png)

### No Pipeline Template Installed
* When no pipeline template is available and Info alert shall be displayed within the Pipeline section
* The alert shall say “The pipeline template for Dockerfiles is not available at this time.”

![Add pipeline](img/+Add_Flow_Pipelines_Docker_No_Temp.png)



## All + Add flows

### Enabling a pipeline
* To enable the pipeline, the user checks the “Add pipeline” checkbox

![Add pipeline](img/+Add_Flow_Add_Pipe.png)


### Showing/Hiding the pipeline visualization
* To show a pipeline visualization, the user clicks on the “Show pipeline visualization” Expandable component link

![Add pipeline](img/+Add_Flow_Show_Pipe_Viz.png)

* The pipeline visualization is displayed within the Expandable component and the link changes to Hide pipeline visualization
* To hide the visualization once it has been displayed, the user clicks on the “Hide pipeline visualization” Expandable link

![Add pipeline](img/+Add_Flow_Showing_Pipe_Viz.png)
