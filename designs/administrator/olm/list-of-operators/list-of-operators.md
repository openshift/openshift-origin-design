---
parent: Administrator
version: 4.5
---

# List of Operators

## All-projects view
This is the Installed Operators page where “all-projects” has been selected from the project-selector. Info icons have been added next to the Managed Namespaces column to provide the user more information about what these column titles mean.The user can sort the column via the sort icon (which looks like an arrow). There are a few additions to the flow:

In the Managed Namespaces column there are three different ways the Namespace information can appear.

1. We have introduced the Operator Namespace column. The Operator Namespace column lists the Namespace per Operator where the Operator is installed.

2. In the Managed Namespaces column there are three different ways the Namespace information can appear.

  a. “My-project” is representative of a single Namespace.

  b. “All Namespaces” is a text only link that is associated with the Namespaces that fall across all Namespaces.

  c. Thirdly, there is a multi-project view. For example, the Portworx Operator falls across multiple projects but not all projects, so in this example the Managed Namespaces column will have a popover on click. The Namespace names should be listed underneath as seen in the mockup.

![3scale-all-projects-view1](img/3scale-all-projects-view1.jpg)
On the Managed Namespaces column, when the user clicks the the popover it should read “Operands in these Namespace(s) are managed by the Operator”

![3scale-all-projects-view2](img/3scale-all-projects-view2.jpg)
On this screen the Portworx Operator falls across multiple projects but not all projects, so in this example the Managed Namespace column will have a popover on click.

![3scale-all-projects-view3](img/3scale-all-projects-view3.jpg)
Clicking into the 2 Namespaces field, the popover will appear. The Managed Namespace names should be listed underneath as seen in the mockup.

![3scale-all-projects-view](img/3scale-all-projects-view.jpg)
On the all-projects view when the user clicks into the 3scale Operator they will be taken to the Operator Details page.

![all-projects-operator-details](img/all-projects-operator-details.jpg)
If the user clicked on an Operator in the list view while the project selector is 'all-projects,' the details view would have the project selector = to that Operator's Namespace since we wouldn't have the context of a single Managed Namespace to use. The Namespace field will read Managed Namespace. Zooming in on the interaction of the popover on the CSV Overview section on the Operator Details page:
![all-projects-operator-details1](img/all-projects-operator-details1.jpg)

## Single Project view

![tooltip-my-project-managed-namespace](img/tooltip-my-project-managed-namespace.jpg)
On the single project view, the Namespace column does not appear here because the user who has access to “single project” view doesn’t necessarily have the access to Namespace but will have access to the “Managed Namespaces” column. This is how this view will look on a single-project view:

![3scale-single-project-view](img/3scale-single-project-view.jpg)
Clicking into 3scale Operator, on the my-project Installed Operators page, if the user clicked on an Operator in the list view while the project selector is a single Namespace, the details view would also be that same single Namespace.

![all-projects-operator-details](img/all-projects-operator-details.jpg)
Here is the in-line Managed Namespace field under the CSV information. The ClusterServiceVersion Overview will always show the "Managed Namespace".

## Select Operator with All Namespaces under Managed Namespaces

![Jaeger-my-project-view](img/Jaeger-my-project-view.jpg)
User selects Jaeger Operator

![Jaeger-details](img/Jaeger-details.jpg)
In the second example, when a user clicks into the Jaeger Operator they will be taken to the Operator Details page, and the Namespace field should read Managed Namespace.

## Edge case design - What if there are more than 10 Namespaces

![modal-all-projects-view](img/modal-all-projects-view.jpg)
In the event that there are more than 10 namespaces for an associated Operator in the Managed Namespaces column, the Managed Namespaces should appear in a modal. The PF modal behavior allows for scrolling, so scrolling through the list of Managed Namespaces will suffice for viewing a long list of Managed Namespaces. In this example, we have clicked into the 20 namespaces link associated with the Portworx Operator.
