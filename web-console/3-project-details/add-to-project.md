
# Add to Project in Context
![Navigation 1](img/SecondaryMasthead.png)
- Users can add items to the current project without changing contexts.
- Adding to the project in context will leverage the [overlay panel component](http://openshift.github.io/openshift-origin-design/web-console/4-patterns/overlay-panel).

### Add To Projects with Quick Search
![template](img/QuickSearch.png)
- A search box will be added to the secondary masthead to the left of the "Quick Add" dropdown.
- This search feature will behave like [Search](https://github.com/openshift/openshift-origin-design/blob/master/web-console/1-homepage/search.m) on the landing page.
- Selecting an item from the search will initiate the ordering flow on the [Overlay Panel](http://openshift.github.io/openshift-origin-design/web-console/4-patterns/overlay-panel) on the projects detail page.
- The Project selection step should be hidden from the ordering panel in this case since the user is adding from within the console and we know what Project.

### Browse Catalog
![project browse](img/project-browse-01.png)
- Selecting `Browse Catalog` from the dropdown or clicking the link to view more search results will bring up a version of the catalog in a modal.
- A filtered view of the catalog will be brought up if the quick search bar is used to trigger the catalog.
- Selecting a catalog item should replace the browse modal with the ordering overlay.
- Clicking the X button, or the `Return to Project` link will close the modal and take the user back to where they were when they opened the catalog.
- Closing the ordering overlay should cancel the `Browse Catalog` action.



### Import YAML/JSON
![template](img/Import_yaml.png)
- This option brings down an overlay panel with the option to browse for a file, or add a file to an editable text area.

### Deploy Image
![template](img/deploy_image.png)
- This option brings down an overlay panel with the option to specify image stream tags, or to search for and add an image by name.

#### Implementation Details
- Once an image is selected by either method, additional configuration options appear in the panel.
- It may make sense to break this into a wizard-like flow in the future.
