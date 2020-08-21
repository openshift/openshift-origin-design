---
parent: Virtualization
version: 4.x
---

# Templates

Updating the templates designs to align with what we currently have with the new in page wizard approach will make the 'create VM from a template' flow consistent.

### Virtual Machine Tab

From the Virtualization left nav item the user goes to the Virtual machines tab and from the dropdown selects the option to create a VM from a template.

![User selects to create VM from template](img/Dropdown_CreateTemplate.png)

They will get to the list of templates where they can select a template to create the VM from. Once the user clicks 'Select' they will go immediately to next required step (the 'General' step) to give the VM a name, then review the settings and create the VM.

![Listoftemplates](img/select-t-from-wizard-list.png)

In case a user selects a template that has required info missing, an inline alert will be shown and indicate via a clickable link which info is missing and where it is located, so the user can quickly complete the required info and then create the VM.

![Back to wizard to complete info](img/Step-1-basic-template-3.png)

Once the info is completed the user will be able to create the VM.

![Requiredinfocompleted](img/CompletesReqiredInfoTemplate.png)
