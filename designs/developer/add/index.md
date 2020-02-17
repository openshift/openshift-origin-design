---
parent: Developer
version: 4.2
---

# Add page

Add is a primary navigation item in the OpenShift Developer perspective.

![Add primary nav](https://openshift.github.io/openshift-origin-design/designs/developer/add/img/Add-AltA.png)

The Add page enables the user to create an application, component or service. Upon clicking a card, the user is brought to the appropriate flow to add the item to their project.

The basic visuals and behavior of this card view is consistent with that of the developer catalog and operator hub.

## Add Flows
There are 6 Add Flows for adding an application, component or service. Each flow has different subsections.

### From Git
Design documentation for the From Git scenario when creating a source secret can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add/From-Git/Import-from-git.md)

### Container Image
Design documentation for the Container Image git can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add/Container-Image/Deploy-Image.md)

### From Catalog
Design documentation for the items From Catalog can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add/From-Catalog/Add-from-catalog.md)

### From Dockerfile
Design documentation for the From Dockerfile can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add/From-Dockerfile/Import-from-Dockerfile.md)

### YAML
When clicking on YAML, Add remains selected in the navigation.  The secondary masthead is shown with the selected project, and the YAML editor is displayed.

![Import YAML](https://openshift.github.io/openshift-origin-design/designs/developer/add/img/import-yaml.png)

### Database
Design documentation for the Database is still tbd

## Common Sections to Add Flows
Add flows have dynamic sections that are displayed when appropriate for the flow:

### General
Design documentation for the General section can be found [here](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/General-Section.md)

### Advanced Options
There are a number of Advanced Options which are available, based on the flow:
- [Routing](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Routing.md)
- [Build Configuration](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Build-Config.md)
- [Deployment Configuration](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Deployment-Config.md)
- [Scaling](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Scaling.md)
- [Resource Limits](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Resource-Limits.md)
- [Labels](https://openshift.github.io/openshift-origin-design/designs/developer/add/sections/Adv-Labels.md)
