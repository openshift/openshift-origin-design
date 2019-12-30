---
parent: Administrator
version: 3.11
---

# Catalog

- The Catalog section is found at the bottom of the web console homepage.
- The Catalog contains catalog items and provides the means to browse, sort, and filter them.


## Browse Catalog

![catalog](img/Browse-1.png)
- Initially, upon arriving on the page, the `All` section is highlighted, underlined and expanded, with the catalog items sorted alphabetically by name.

![catalog](img/Browse-3.png)
- Any tabs that have subcategories of catalog items will have those subcategories displayed as tiles.
- These tabs should also contain an a `All` tile for catalog items from all subcategories.
- Clicking on a subcategory tile will open a panel that contains the catalog items.
- By default, the `All` tile should be collapsed.
- If a category contains only a single subcategory
	- The subcategory should be expanded by default
	- No `All` tile should exist for that category

![catalog](img/Browse-2.png)
- Clicking on an expanded tile should collapse that tile.

![catalog](img/Select-01.png)

- Deploy Image,  Import YAML, and Select from Project links are available on the right side of the catalog primary categories bar. These links are collapsed into a dropdown on smaller viewports

### Deploy Image,  Import YAML, and Select from Project
- These three options are available to the far right of the  "Browse Catalog" row and displayed in white text.
- Clicking either link will trigger the relevant [overlay panel actions](../patterns/overlay-panel.md).
- **Note:** When adding from the catalog through one of these methods, users are prompted to select which project to add to. This option does not appear when adding from the console

#### Deploy Image

![Deploy](img/Deploy.png)

- Deploy Image will bring down an overlay panel with the option to specify image stream tags, or to search for and add an image by name.

#### Import YAML/JSON

![Import](img/Import.png)

- Import YAML will bring down an overlay panel with the option to browse for a file, or add a file to an editable text area.

#### Select from Project

![Select](img/Select-02.png)

- Select from project will bring down an overlay panel with the option to select a project

![Select](img/Select-03.png)

- If the selected project has no templates or images, an empty state pattern will be shown.

![Select](img/Select-04.png)

- Once a project has been selected, the user can choose a builder image or template from that project to order as usual.

### Selection and Hover States
![hover](img/Browse-4.png)
- The selected primary category will be blue with an underline.
- On hover, the primary categories are highlighted in a lighter blue.
- The selected subcategory icon will be a darker shade of the remaining unselected icons (light grey).
- On hover, the subcategory text and icon will be blue.
- Deploy Image and Import YAML are highlighted in a lighter blue on hover.
- On hover, catalog items will have a blue circle around the icon and  blue text.

### Implementation Details
- Administrators should have the ability to determine which catalog items are available to users.
- Disabled catalog items should not appear.    
- The `All` category should be the first primary category and it should always be displayed.
- For remaining primary category tabs, if no catalog items exist, the tab should be hidden.
- Initially, category tabs will be limited to the defined list shown, with the addition of an `Other` category for customers to place resources that don’t fit in an existing category.
	- **Note:** Eventually, customers will have the capability to add their own custom category tabs.
- Some primary categories will have a secondary level of categorization available.
- For secondary levels of categorization, there should again be an `Other` category if there are items to display (not shown in mockup).


### Responsive States

![catalog](img/Browse-5.png)

![catalog](img/Browse-6A.png)

- On smaller viewports the tiles may need to wrap.
- Expanding a tile will always display the white caret with the catalog contents below the tile.

![catalog](img/Browse-7A.png)

#### Mobile
- On mobile, the catalog tabs should stack with arrows to the right.
- If subcategories exist, selecting the primary category will bring users to another screen to view subcategories.
- On mobile, the subcategories will have the same visual representation as the primary categories.
- Clicking back will bring users back to the home page with all primary tabs listed.
- Selecting a subcategory will bring users to another screen to view catalog items by scrolling.
- **Note:** When subcategories do not exist for a tab, selecting a primary category will bring the user directly to scroll through the catalog items.

![mobile-1](img/MOBILE-Catalog.png)
