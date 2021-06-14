---
parent: Conventions
---

# Action menus

## Kebab and resource Actions menus

- A resource's Actions menu is accessible from a number of places, such as:
  1. List view kebab
  2. Details page actions dropdown
  3. Topology side panel
  4. Topology right-click action on a resource
- By default, submenus will open to the right of the main menu. In cases where there is no space to the right, they can open to the left.

**List view kebab**
![action menus kebab](../images/action-menus-kebab.png)

**Details page actions dropdown**
![action menus actions](../images/action-menus-actions.png)

**Topology side panel**
![action menus topology panel](../images/action-menus-topology-panel.png)

**Topology right click action on a resource**
![action menus topology](../images/action-menus-topology.png)

- Actions dropdowns are styled as primary blue dropdowns.
- Exceptions are acceptable in cases where a different action(s) has been identified as the view's primary action. In these cases, the primary action(s) is usually pulled out of the dropdown and is styled as a primary button or dropdown to the left of the Actions dropdown, which will thus have secondary styling (e.g., Secrets details pages).

## Organization of Actions menu items

**Basic action menus**

<img src="../images/action-menus-1.png" alt="Action menus order" width="294"/>

The majority of resource action menus will be a basic action menu. These menus have "universal" actions and the `Delete {resource_type}` action separated by a horizontal divider.

**Complex action menus**

Some resource action menus will have more actions than those included in the basic action menu. The following documentation uses a Deployment as an example, but the logic to each section should be applied to any other complex action menu.

<img src="../images/action-menus-2.png" alt="Action menus order" width="1239"/>

Action menus are separated into multiple sections. The ordering of sections and actions in the menu should adhere to the following pattern:
1. **Resource specific actions**
  * This section includes both standalone actions and flyout actions with submenus (see below for submenu guidance). Standalone actions are listed first, ordered alphabetically by default. Next, flyouts are listed, also alphabetically by default.
  * Exceptions are acceptable in the cases where an action may be dynamic (e.g., `Pause rollouts` becomes `Resume rollouts`, but the action should not move from its original position).
2. **"Universal" actions**
  * These actions are available for every resource in the console. These are listed in the following order:
    1. `Edit labels`
    2. `Edit annotations`
    3. `Edit {resource_type}`
3. **Delete resource action**
  * The last section of each Actions menu has the `Delete {resource_type}` action.
4. **Submenus**
  * In this example, the resource has two or more actions that are Edit actions, and are thus put into an Edit submenu.
  * Resources may have multiple submenus.
  * The default logic for ordering these actions is alphabetical.
  * If multiple actions relate directly to one topic, they can go in their own submenu. For example, dynamic actions relating to HorizontalPodAutoscalers will be listed in an "Autoscale" submenu.
    * If the resource doesn't yet have a HorizontalPodAutoscaler, the only action in the submenu will be `Add HorizontalPodAutoscaler`. If one exists already, the Add action will be replaced by `Edit HorizontalPodAutoscaler` and `Delete HorizontalPodAutoscaler`. (In the future, VerticalPodAutoscalers may be added to this submenu, with the same dynamic actions used for HPAs – Add, Edit, and Delete.)

<img src="../images/action-menus-3.png" alt="Action menus order" width="329"/>

5. **Additional Edit action**
  * In cases where a resource was created via an import flow, they may have an additional Edit action.
  * The Edit action is listed below the default `Edit {resource_type}` action.
  * The Edit action name will reflect the import flow used to create the resource. The following are the possible Edit labels for this action:
    * `Edit JAR import`
    * `Edit Git import`
    * `Edit Container import`

Naming of actions:
- Actions for resources do not need to include the resource’s name they affect, unless many resource types can be affected in the actions menu (e.g. taking action on HorizontalPodAutoscalers from Deployment action menu).
- Create, Edit, Delete are the exceptions in that they always include the full name of the resource they affect.
- Action labels should follow the [capitalization convention](http://openshift.github.io/openshift-origin-design/conventions/documentation/capitalization.html).

---

## Bulk Actions Menu

- This is a convention that hasn’t yet been implemented in the console. [Learn more here](http://openshift.github.io/openshift-origin-design/designs/administrator/future-openshift/bulk-actions/)
- List views of resources may support multi-select and a bulk “Actions” menu.

![action menus bulk](../images/action-menus-bulk.png)

Actions in the menu should follow the following pattern:
- Unique bulk actions to that resource should appear above default bulk resource actions
- Add Labels (when present)
- Add Annotations (when present)
- Delete [Resource Name(s)]

---

## Hiding and disabling actions
The decision of whether to hide or disable an unavailable action is a complicated one to make, and the answer is usually "it depends". The goal of this convention is to provide guidelines and questions that designers can ask themselves to aide in their decision, and document recommendations based on current interactions in the console.

1. If an action isn’t recommended or encouraged, but the action technically can be performed, **use a modal** to ask the user “Are you sure?” and explain the potential consequences rather than hide or disable the action.
  * Example: *A user wants to start maintenance on a master node*
2. If an action isn’t available because a user doesn’t have the correct RBAC, **disable** those actions.
  * Example: *A user with view-only privileges looks at a Pod’s details page and the options within the Actions dropdown are disabled*
3. If an action isn’t available because the user needs to do something else in the UI first, **disable** the action with a tooltip explaining what they need to do to enable the action. This aids in discoverability of actions within the console.
  * Example: *A user can’t perform bulk actions until they select resources in the list*
4. If an action is dependent on a condition or status in the console, **disable** the action with a tooltip explaining why the action currently is unavailable.
  * Example: *A user cannot view past logs because this container hasn’t restarted*
5. If an action cannot be taken because of a product / K8s constraint or rule, **hide** the action.
  * Example: *A user can’t delete a Red Hat template or remove an Environment variable from a managed resource*
  * Exception: *Environment variables themselves should be shown but disabled, so that users can see a read-only view of the related variables*
