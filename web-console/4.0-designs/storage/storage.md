# Storage

## Create Storage Class

![Storage class page with create button](img/create-storage-class.png)
- Users with appropriate privileges can click to create a new Storage Class.

![create storage class form](img/storage-class-form.png)
- They are presented with a form that enables them to define the name, description, type of storage, reclaim policy, and provisioner for this storage class.

![create storage class form](img/storage-class-parameters.png)
- The `What should I enter here?` link should preferably direct the user to a list of parameters for the selected provisioner, but if that is not possible, linking to the Kubernetes documentation is acceptable.

![create storage class form](img/storage-class-parameters-2.png)
- Parameter rows can be added by clicking the `Add Parameter` button and removed with the minus button.
- Rows are not draggable.

![dynamic parameter fields](img/storage-class-generated-fields.png)
- If it is feasible, selecting a provisioner should dynamically create fields for parameters rather than requiring that users specify them. In this case, additional parameters could still be added as needed.

## Attach Storage

![deployment detail page with add storage item](img/add-storage.png)
-  Deployment pages will contain a new `Add Volume` option within the actions dropdown.

![form for adding storage](img/add-storage-create.png)
- The user can either add existing storage or choose to `Create Storage` from within the dropdown.

![form for adding and creating storage](img/create-storage-form.png)
- Selecting `Create Storage` exposes fields for Storage Class, Name, Access Mode, Size, and the label selector checkbox.
- Only access modes that are compatible should be available to select in this form.
