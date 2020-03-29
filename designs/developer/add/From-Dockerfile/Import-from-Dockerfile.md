---
parent: Developer
version: 4.2
---
# Import from Dockerfile
The user lands on the **Import from Dockerfile** form by selecting the **From Dockerfile** card from the **Add** page.

![Importfromgit42](img/Importfromdockerfile42.png)


The **Import from Dockerfile** form has the following sub sections:
## Git
This section is where the users enter the Git repository URL for the codebase they want to use to create an application. It also has an advanced options section associated with the **Git repository URL** field.

User can click **Show Advanced Git Options** to add details such as:
* **Git Reference** to point to code in a specific branch, tag, or commit to be used to build the application.
* **Context Dir** to specify the subdirectory for the application source code you want to use to build the application.
* **Source Secret** to create a Secret Name with credentials for pulling your source code from a private repository.
  
## Dockerfile

The **Dockerfile** sub sections has Dockerfile Path and Container Port fields.
* **DockerFile Path**-This field has the helptext- Allows the build to use a different path to locate your Dockerfile, relative to the Context Dir field
* **Container Port**-This field has the helptext-Port number the container exposes

## General 
The General section has ‘Application’ and Name’ fields.


This is a common section available in all the add flows.You can find the detailed documentation of General section  [here](https://openshift.github.io/openshift-origin-design/designs/developer/add/Container-Image/Deploy-Image)

## Advanced Options 
The Advanced section has the ‘Create Route’ checkbox checked by default.


This is a common section available in all the add flows.Basen on the form some of the options available under Advanced section varies.You can find the detailed documentation about Advanced section **here**
