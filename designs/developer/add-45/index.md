---
parent: Developer
version: 4.5
---
# Add page

Add is a primary navigation item in the OpenShift Developer perspective.

![Add primary nav](https://openshift.github.io/openshift-origin-design/designs/developer/add/img/Add-AltA.png)

The Add page enables the user to create an application, component or service. Upon clicking a card, the user is brought to the appropriate flow to add the item to their project.

The basic visuals and behavior of this card view is consistent with that of the developer catalog and operator hub.

## Add Flows
There are 6 Add Flows for adding an application, component or service. Each flow has different subsections.

### From Git
Use this option to import an existing codebase in a Git repository to create, build, and deploy an application on OpenShift.
Detailed design documentation for the **From Git** can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add-43/From-Git-43/Import-from-git-43)

### Container Image
Use existing images from an image stream or registry to deploy it on to OpenShift.
Design documentation for the **Container Image** can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add-44/Container-Image-44/Deploy-Image-44)

### From Catalog
Explore the Developer Catalog to select the required applications, services, or source to image builders and add it to your project.
Design documentation for the items **From Catalog** can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add-44/From-Catalog/Add-from-catalog)

### From Dockerfile
Import a dockerfile from your Git repository to build and deploy an application.
Design documentation for the **From Dockerfile** can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add/From-Dockerfile-43/Import-from-Dockerfile-43)

### YAML
Use the editor to add YAML or JSON definitions to create and modify resources.
When clicking on YAML, Add remains selected in the navigation.  The secondary masthead is shown with the selected project, and the YAML editor is displayed.

![Import YAML](https://openshift.github.io/openshift-origin-design/designs/developer/add/img/import-yaml.png)

### Database
See the Developer Catalog to select the required database service and add it to your application.
Design documentation for the **Database** is still tbd

## Common Sections to Add Flows
Add flows have dynamic sections that are displayed when appropriate for the flow:

### General
Design documentation for the General section can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/General-Section)

### Resources
Documentation about this section can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add-43/sections/resources/resources)

### Pipelines
The Pipelines section is available when the Pipelines operator is installed. Design documentation for the Pipelines section found can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add-43/sections/pipelines/pipelines).

### Advanced Options
There are a number of Advanced Options which are available, based on the flow:
- [Routing](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Routing)
- [Health Checks](https://openshift.github.io/openshift-origin-design/designs/developer/add-45/sections/Adv-Health_Checks.)
- [Build Configuration](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Build-Config)
- [Deployment Configuration](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Deployment-Config)
- [Scaling](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Scaling)
- [Resource Limits](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Resource-Limits)
- [Labels](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Labels)
