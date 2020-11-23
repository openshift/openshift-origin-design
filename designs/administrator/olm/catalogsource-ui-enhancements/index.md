---
parent: Administrator
version: 4.7
---

# Catalog Source UI Enhancements

Enabling and disabling default catalog sources (which appear in the OperatorHub as Provider Types) is now available from the Details tab of the OperatorHub settings resource.

Users have been able to configure custom curated catalog sources as of OpenShift 4.4 with metadata like “Display Name”, “URL of Image Registry”, and the Registry Poll Interval.” Those custom sources now have their full details conveyed in the web console.

## OperatorHub settings

![OperatorHub settings](img/1-1.png)
- The user opens the OperatorHub settings page.

![OperatorHub settings](img/1-2.png)
- The user can now enable/disable default sources from the OperatorHub Details tab.

![OperatorHub settings](img/1-3.png)
- A modal is opened that reflects the enabled/disabled state for the 4 default sources using switches.

![OperatorHub settings](img/1-4.png)
- If 1 or more default sources are disabled, an inline alert appears reflecting ramifications.

![OperatorHub settings](img/1-5.png)
- The source’s status is updated.

![OperatorHub settings](img/1-6.png)
- The Sources tab list view now includes 2 new columns for the Catalog Sources: **Status** and **Registry Poll Interval**.
- The user opens the action menu(s).

![OperatorHub settings](img/1-7.png)
- For default sources: Only the existing **Disable** and **Edit CatalogSource** actions are available, since any other delete or edit will immediately be reverted by the cluster operator. **Disable** becomes **Enable** when the source is disabled.
- For custom sources: The menus match the Actions menu in the Catalog Source.

## Catalog Source details view

![Catalog Source details](img/2-1.png)
- The details view of the Catalog Source now includes the new fields: Status, Display Name, Publisher, Availability, Endpoint, Registry Poll Interval (editable), Number of Operators.

![Catalog Source details](img/2-2.png)
- Editing the registry poll interval allows the user to select from a dropdown list.

![Catalog Source details](img/2-2.5.png)
- Possible selections are: 10m, 15m, 30m, 45m, 60m.

![Catalog Source details](img/2-3.png)
- The user navigates to a new **Operators** tab.
- The actions menu would also match the Sources list in the OperatorHub settings resource, with the different sets of actions for custom and default sources.

![Catalog Source details](img/2-4.png)
- The Operators tab lists out the PackageManifests that the Catalog Source contains.

## Catalog Source list view

![Catalog Source list](img/3-1.png)
- The catalog source list view would also match the Sources list in the OperatorHub settings resource, with the different sets of actions for custom and default sources.