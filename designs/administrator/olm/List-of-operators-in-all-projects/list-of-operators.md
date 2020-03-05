
---
parent: Administrator
version: 4.5
---

# List of Operators

## All projects view

- When a user has selected the All Projects view from the context selector on the Installed Operators page, here they can view all of their Installed Operators. The goal of this design is to simplify how a user views the namespaces and associated operator(s) when they have selected to view the Installed Operators under All Projects.

- When a user clicks the link in the table, “View 8…”, an anchor link takes the user to the Namespaces in the body of the Operator Details page. In this flow, we opt for a filterable experience in which the user can later filter by namespace or project under tabs such as Provided APIs or Events. (Scroll to view experience)

- In an alternate path, if a user were to click into the Operator itself, it would take the user to the top of the Operator Details page rather than the anchor link in the body of the page. 

![list-of-operators](img/list-of-operators.jpg)

## Operator Details Page


Here you can see the Namespaces in the body of the Operator Details page:

![operator-details-page](img/operator-details-page.jpg)

Here is the anchor link view:

![namespaces-view](img/namespaces-view.jpg)

Clicking into the kebab menu, the user can access a dropdown from kebab, and click “View Operator in this Namespace” to view this particular Namespace’s Operator.

![menu-option](img/menu-option.jpg)

## Filtering on Events Page
On the Events page the user can filter by Namespace or Project. In this view they are not in a unique Namespace’s Operator’s events and are instead viewing all Events for all Namespaces that they can filter by. The events & API tabs now show values for all Namespaces.

![events-with-filter](img/events-with-filter.jpg)


**Note:** The YAML tab will now no longer live in the context of the Operator view. Instead the user will now access the ability to edit the YAML within the view of the Namespace as it exists currently.

