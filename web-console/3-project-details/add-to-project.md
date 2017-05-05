

# Add to Project in Context

- Users can add items to the current project without changing contexts.
- Adding to the project in context will leverage the [overlay panel component](http://openshift.github.io/openshift-origin-design/web-console/4-patterns/overlay-panel).

## Future

### Import YAML/JSON
![template](img/Import_yaml.png)
- This option brings down an overlay panel with the option to browse for a file, or add a file to an editable text area.

#### Implementation Details
- Functionally, there is no change from the current implementation.

### Deploy Image
![template](img/deploy_image.png)
- This option brings down an overlay panel with the option to specify image stream tags, or to search for and add an image by name.

#### Implementation Details
- Once an image is selected by either method, additional configuration options appear in the panel.
- It may make sense to break this into a wizard-like flow in the future.

### Quick Add
![template](img/order_flow.png)
- Selecting an item from the [quick add search](overview.md/#quick-add-search) will initiate an ordering flow.

#### Implementation Details
- The ordering flow can skip the step step where a user chooses the project to which to add the service.

#### Customer Feedback (if applicable)
- Customer Feedback Received
	- Overview of customer feedback received
- Necessary Customer Feedback
	- Questions to follow up with customers
