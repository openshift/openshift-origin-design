---
parent: Developer
version: 4.3
---

# Add page (4.3)

Add is a primary navigation item in the OpenShift Developer perspective.

![Add primary nav](img/Add-AltA.png)

The Add page enables the user to create an application, component or service. Upon clicking a card, the user is brought to the appropriate flow to add the item to their project.

The basic visuals and behavior of this card view is consistent with that of the developer catalog and operator hub.

## Add Flows
There are 6 Add Flows for adding an application, component or service. Each flow has different subsections.

### From Git
- Git (via repo URL)
- Builder (images)
- General
- Resources
- Advanced Options

### Container Image
- Image (2 options to select one)
- General
- Resources
- Advanced Options

### From Catalog
- Builder (images)
- Git (via repo URL)
- General
- Resources
- Advanced Options

### From Dockerfile
- Git (via repo URL)
- Dockerfile
- General
- Resources
- Advanced Options

### YAML
When clicking on YAML, Add remains selected in the navigation.  The secondary masthead is shown with the selected project, and the YAML editor is displayed.

![Import YAML](img/import-yaml.png)

### Database
Design documentation for the Database is still tbd


## Common Sections to Add Flows
Add flows have dynamic sections that are displayed when appropriate for the flow.

### General

### Pipelines
The Pipelines section of the form is available when the Pipelines operator is installed. 

### Resources
Documentation about this section will be added in the future.

### Advanced Options
tbd