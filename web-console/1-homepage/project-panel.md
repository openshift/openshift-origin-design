# Project Panel
- The project panel should cover the right side of the homepage when viewing on a standard desktop screen.
- **NOTE:** In the future the panel size and location may be configurable by the user.

![template](img/OpenShiftMall_Day1-ProjectsBar-1B.png)
- Brand new users will not have any projects upon initial login so the "Getting Started" label will move up to the top with the Create Project button to the right.
- The Guided Tour button and and other Resources will be displayed below.

## My Projects

### Create Project
![template](img/OpenShiftMall_Day1-ProjectsBar-2B.png)
- **Primary Action Button** (optional): The Create project button is displayed by default and will open the new project panel. This button can be optionally hidden or customized. Admin users can provide a custom label and URL to open a new browser instead of the default project panel.
- The default create project button will open an overlay panel with a three-field form inside.
- Once the user has at least one project created, the "My Projects" section will appear at the top of the panel, moving the "Getting Started" section down. The Create Project button (if being used) will remain in the top right corner.

### Project Empty State
![template](img/OpenShiftMall_Day1-ProjectsBar-3B.png)

- Once created, the project will be listed as a card at the top of the projects list, in an "empty state."
- The empty state is defined as a new project which does not have any items and only has a name, date, and description.
- **Kebab Actions:** There are three actions under the kebab menu for projects: edit details, edit membership, and delete.
  - These actions should function as they currently behave today.
  - The delete action opens a confirmation modal and edit will function similar to the create function.
  - The membership action will navigate to another page.
- Once a project has at least one resource, the card is not longer in the empty state.

![template](img/OpenShiftMall_Day1-ProjectsBar-4B.png)
- Any new projects will be added to the top of the project list and will remain in the empty state until items are added.
- Clicking a project will bring the user directly to the project overview page for the particular project.

![template](img/OpenShiftMall_Day1-ProjectsBar-5B.png)

### Getting Started - Guided Tour
- A button labeled "Start Guided Tour" should be displayed under the Getting Started heading. The button launches a quick tutorial to identify key sections of the interface. This button can be optionally hidden.
- The guided tour should automatically begin when a new user logs into Openshift for the first time.
- Users should be able to manually start the guided tour by clicking the button on the right panel.
- Once users have more than one project created, the guided tour button will be hidden from the right panel, but should still be accessible under the help menu in the masthead.
- Admin users can customize the guided tour by overwriting the title and description for any of the steps included.

![template](img/OpenShiftMall_Guided-Tour1.png)

![template](img/OpenShiftMall_GuidedTour2.png)

- All steps should include a cancel button.
- All steps, except for the final one, should include a next button. On the final step, the next button should turn into a "Done" button and will end the tour.
- All steps, except for the first one, should include a back button.
- The current step should point to the corresponding area of the interface.
- Clicking on the dark background will cancel the tour.
- If any of the items are hidden from the UI (such as the create project button), the tour should bypass that step and the numbers should update accordingly.
- The default steps include the following:
  1. **Create Project:** Highlight the action button on the right panel.
  2. **Search Resources:** Highlight the search bar.
  3. **Build Applications:** Highlight the Red Hat Experience catalog including the "What do you want to build" heading.
  4. **Browse Catalog:** Be sure the "All" category is selected and highlight the entire catalog.
  5. **Browse by Category:** Open the Languages section and select a subcatagory. Highlight the entire catalog.
  6. **Filter Resources:** Open the filter panel and highlight this dropdown.
  7. **Configure a Resource:** Open the ordering panel for a particular catalog item and highlight this panel.
  8. **Additional Help:** Point to the Resources section on the right panel and highlight the botton potion of the right panel.
- Descriptions for each step are TBD.
- Low Fidelity Prototype: https://redhat.invisionapp.com/share/6ZAVH8RHW

### Recently Viewed
- Once the user has viewed at least one item in the catalog, a "Recently Viewed" section will appear at the bottom of the panel.
- The Resources section should be removed at this point and the content should be accessible through the help menu in the masthead.
- Recently Viewed items should visually match the way they are represented in the catalog with a name and icon.

### Projects List (More than 2)
![template](img/OpenShiftMall_Day1-ProjectsBar-7B.png)

- Once there are more than two projects, they should display as a list view to save vertical space.
- **NOTE:** In the FUTURE, a summary card will be placed above the beginning of the list to show the total number of projects along with the alerts/status summary.
- Show as many projects as space permits on this page.
- At the top of the list, include a count (the number shown out of the total) along with a "view all" link to navigate to the full projects page.
- Users can navigate to a full projects page via the "View All" link on the homepage or by clicking on the "My Projects" heading.

### Implementation Details
- The **Guided Tour** will use the [Hopscotch framework](http://linkedin.github.io/hopscotch/)
- There is an existing controller and form for the **create project** action already.  We should refactor into a component and move to the common repo so it is available to both console and catalog.
- **Kebab Actions** The edit membership action currently exist today for projects and take the user to a new page. For the initial release, this functionality should remain the same. For the delete and edit, these actions will be implemented to function in context as described in the documentation above.

## Responsive Behavior/ Mobile View
- On a mobile device, the right panel should disappear and move to the bottom of the screen, below the catalog content.

![template](img/Projects-Mobile.png)

![template](img/Projects-Mobile2.png)

- Selecting View All will display the full projects lists on a new screen with the back button available.
- Selecting create project will show a full screen with the form and two action buttons, cancel and create at the bottom.


### Customer Feedback (if applicable)
- TBD


## Future Work - NOT MVP
- Add a "last updated" date to the project cards and sort by most recently updated, not by created date

### Projects - Card View
![template](img/OpenShiftMall_Day1-ProjectsBar-4.png)
- Once a project has at least one resource, utilization metrics (CPU, Memory and Network) should be added to the project card along with the corresponding trendlines.

![template](img/OpenShiftMall_Day1-ProjectsBar-6.png)
- The utilization metrics should be shown on the project cards as space permits (2 projects max).

### Projects - List View
![template](img/OpenShiftMall_Day1-ProjectsBar-7.png)
- The Projects view should change to a list to conserve vertical space once there are more than two projects.
- The summary panel should include a summary of warnings and allow direct link access to a filtered list on the projects page.

### Kebab Actions
- TBD

### Project Summary
- TBD
