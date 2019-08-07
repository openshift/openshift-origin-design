# Deploying Kubevirt on OCP using UI

## Pre-Installation

![BasSeaching for HCO on the OperatorHub](img/1-01.png)
On the OperatorHub, get a hit for searching any of the following:
 - “KubeVirt
 - "HyperConverged"
 - "CNV"
 - "Virtualization”
 - "Virtual"
 - "Machines"

![Installing Operator](img/1-02.png)
After viewing details, including a list of the APIs, the user clicks ‘Install’



## Installation

### General

![General step - default](img/2-00.png)
The subscription channel has only one option, therefore it is disabled, but visible in order for the user to know which channel this operator exist on.
The user toggles to “A specific project” on the project field

![General step - next step](img/2-01.png)
The user can uncheck the “Create custom resource instances” checkbox.

### Custom resources

![CR step - default](img/2-10.png)
This screen offers the user a way to create Custom resources as a part of the Operator installation by default.
The user uncheck the “Create custom resource instances” checkbox

![CR step - uncheck "Create CR instances"](img/2-11.png)
The supporting text below the checkbox changes to alert, notifying the user that the HCO will not be functional until instances will be created and that the user can do it manually later on.
The user decides to check the box again.

![CR step - re-check "Create CR instances"](img/2-12.png)
The user clicks the ‘Edit Yaml’ button to make some modifications to the first CR.

![CR step - editing YAML](img/2-13.png)
The user modifies the YAML and clicks “Save” to return to the screen.

![CR step - YAML edited](img/2-14.png)
The link to edit the YAML changes to indicate that a change has occurred and the user can reset that change (‘Reset’ button available within the modal). 
The user clicks the install button.

### "Success" screen
![Operator installed](img/2-20.png)
There is a “Success” phase, letting the user know that she accomplished something and she should be happy.
Also including a popover with a badge to alert the user that a new item appeared on the side menu.
It will be available until the user enters ‘Virtual machines’ for the first time.
This screen suggests to the user the following options: To create VM or to go to the operator page