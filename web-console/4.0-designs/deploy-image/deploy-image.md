# Deploy Image

The deployment config page Create button will be a dropdown with two creation options: Create from Image and Create from YAML. The following documents how a user can create a deployment config from an image. In future, we may investigate whether this action should be available in additional places in the console.



**Deployment Config page**
![deployment config](img/deployment-config.png)

* The Create button will be a dropdown with two options: From Image and From YAML
* The Create from Image link opens the embedded deploy image creation page

**Deploy Image**
![deploy image](img/deploy-image.png)

* Users can deploy an existing image from an image stream tag or image registry
* The button bar allows users to Deploy or Cancel
  * The Deploy button will be disabled until a user has completed the form without any errors
  * Cancel will bring the user back to the Deployment Configs page

**Error examples**
![warning](img/deploy-image-warning.png)
![error](img/deploy-image-error.png)

* If there are errors, the Deploy button will be disabled
* Inline notifications will be used to indicate to a user that there is an error in the form
* An empty state pattern will be used when the image metadata cannot be loaded

**Success page**
![success](img/deploy-image-success.png)

* When an image has successfully deployed, the user is redirected to the overview page of the deployment config they just created
