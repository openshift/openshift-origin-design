# Deploying Kubevirt on OCP using UI

## Pre-Installation

![BasSeaching for HCO on the OperatorHub](img/name.png)
On the OperatorHub, get a match for searching “KubeVirt HyperConverged/CNV/virt/virtualization…” etc (we currently have only a hit with “Hyperconverged…”)

![Installing Operator](img/name.png)
After viewing details, including a list of the APIs, the user clicks ‘Install’



## Installation

# General

![General step - default](img/name.png)
The subscription channel has only one option, therefore it is disabled, but visible in order for the user to know which channel this operator exist on  (is it necessary for the user to know that?)
The user toggles to “A specific project” on the project field

![General step - next step](img/name.png)
The user leaves all to default and goes to the next step

# Custom resources

![CR step - default](img/name.png)
Creating Custom resources as a part of the Operator installation.
The user uncheck the “Create custom resource instances” checkbox

![CR step - uncheck "Create CR instances"](img/name.png)
The supporting text below the checkbox changes to alert, notifying the user that the HCO will not be functional until instances will be created and that the user can do it manually later on.
The user decides to check the box again.

![CR step - re-check "Create CR instances"](img/name.png)
Instead, the user clicks the ‘Edit Yaml’ button to make some modifications to the first CR.

![CR step - editing YAML](img/name.png)
The user modifies the YAML and clicks “Save” to return to the screen.

![CR step - YAML edited](img/name.png)
The link to edit the YAML changes to indicate that a change has occurred and the user can reset that change (‘Reset’ button available within the modal). 
The user clicks the install button.

# "Success" screen
![Operator installed](img/name.png)
There is a “Success” phase, letting the user know that she accomplished something and she should be happy. Also including a popover with a badge to alert the user that a new item appeared on the side menu. It will be available until the user enters ‘Virtual machines’ for the first time.
This screen suggests to the user the following options: To create VM or to go to the operator page