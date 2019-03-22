# Console Customizations

![breadcrumbs](img/breadcrumbs.png)

## Background
* Cluster admins will be given the ability to customize certain aspects of the web console for all cluster user.
* Some of the customizations include:
  * Adding links to the megamenu
  * Adding banners above and below the Console
  * Changing download links for CLI tools
  * Etc.
* The console will enable these customizations via CRDs.

## Design
* A **Console Customizations** navigation item should appear under the **Administration** main navigation section.

![main nav](img/main-nav.png)

* The **Console Customizations** page should list out all instances of customizations with the columns `name`, `type`, and `created`.
* The list of customizations should be filterable by name via text input, or by type via toggle filters.
* _Open question:_ Is filtering actually necessary?
![customizations list](img/customizations-list.png)

* Users will create new customizations by selecting the desired customization from the **Create** dropdown selector.
* Specific customization options TBD.
![create selector](img/create-selector.png)

* After selecting the customization from the dropdown selector, users will be presented with the YAML for that customization which they can then edit.
* If no customizations exist, users will see the standard empty state.
![customization yaml](img/customization-yaml.png)

### Multiple instances of customizations
* Whether or not users may have multiple instances of a customization will be determined on a per customization basis.
  * For some customizations, like customizing the branding, it does not make sense to allow more than one option.
  * While for others, such as console notifications, it may be reasonable to have more than one.
* Likewise, behavior and precedence when there are multiple instances will be determined per customization.
