# Create from YAML

A Create from YAML button will be added to the project selector bar, making it accessible from every page within the console.


**Create from YAML button**
![button](img/YAML-Button.png)

* The Create from YAML button will be in the project selector bar
* The Create from YAML button opens the embedded YAML editor

**Create page**
![create](img/YAML-Create.png)

* Users can create resources using YAML or JSON by dragging and dropping a file, pasting in code, or browsing their directory to upload
* The button bar allows users to Create or Cancel
  * The Create button will be disabled until code is entered and there are no errors
  * Cancel will bring the user back to the page they were previously on

**Error example**
![error](img/YAML-Error.png)

* If there are errors, the Create button will be disabled
* Errors are shown with an icon on the corresponding line
  * Users can hover over the icons to see details of each error
* An inline notification will appear below the editor summarizing the number of errors
  * Users can click the Show Details link to view all error details in one place

**Success page**
![success](img/YAML-Success.png)

* When the resource is successfully created, the user is redirected to the overview page of the resource
