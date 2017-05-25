

# Provisioned Services in the Overview

- Provisioned Services are those services provisioned from the Service Catalog.
- Provisioned Services need to be shown in the Project Details Overview along with other project resources and would use the same expandable list as the rest of the Overview.



## Collapsed State

![template](img/provisioned_service_collapsed_1.png)
- In the collapsed state, show the display name for the service class with the service instance name underneath.
- If the provision service has a binding, it is listed under the label "Bindings."
- If the service has nothing bound to it, indicate that and include an action to create a binding.


#### Implementation Details
- Provisioned Services should have their own category heading in all views of the overview (i.e. view by application, pipeline and resource).


![template](img/provisioned_service_use_cases.png)
- If a provisioned service has more than one thing bound to it, show the first item by name followed by “n others,” which expands the row.
- If a service has been provisioned, but is not yet available, that should be indicated between the name and bindings area on desktop. Other warnings or alerts would be placed similarly.
- The View Console action should open the link in a new browser window/tab.
- The indication that a service is not yet available should be followed by an animated ellipsis.


![template](img/provisioned_service_fail.png)
- If the provisioning is in a permanently failed state, we should include an action to delete it.
- The placement of warnings on Provisioned Services should be similar to that of other resources in the Overview.


## Expanded State

![template](img/provisioned_service_expanded_state_1.png)
- In the expanded view there may be two sections: Description and Bindings.
- The Description includes the service class description if one exists, as well as a link to documentation.
- The Bindings section includes the option to create a binding.
- Configuration details for individual bindings are not shown in this view, but should be available from a details page.


#### Implementation Details
- If the service is not available yet, show an inline alert message in the expanded state. Other warnings/alerts from the service would be shown inline as well.
- Include a link to more information, if any is available.
- In the event that the provisioning of a service instance is in a failed state, include an action to delete that service from the project.

## Kebab Actions

![template](img/provisioned_service_kebab.png)
- The kebab menu should include actions for create binding, delete binding and deprovision.


## Unbindable Services

![template](img/unbindable_collapsed.png)
- In the collapsed state there should be an indication that the service is unbindable with a link to documentation that explains what that means.

![template](img/unbindable_epxanded.png)
- The expanded state maintains the "Bindings" section, but that section includes a message that the service is unbindable,Why as well as a link to relevant documentation.

![template](img/unbindable_kebab.png)
- The "Create binding" and "Delete binding" actions are disabled in the kebab menu.



#### Customer Feedback (if applicable)
- Customer Feedback Received
	- Overview of customer feedback received
- Necessary Customer Feedback
	- Questions to follow up with customers
