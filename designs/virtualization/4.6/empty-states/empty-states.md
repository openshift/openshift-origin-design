# Virtualization Default Empty States
Foday Kargbo - UXD
## Background
Virtualization is being introduced to the console. Virtualization will be accessed via the main left navigation panel. Once the user navigates to Virtualization, they will see 2 tabs, one for the Virtual Machines screen, and one for the Virtual Machine Templates screen. The Virtual Machines tab will be selected by default.
## Objectives
Users who have not created virtual machines or virtual machine templates will not be able to see any data on these screens. 
TBD: Do we want to create an empty state screen for the virtualization dashboard?

The goals of this task:
- Create empty state screens when there is no data to show
- Inform the user about the current state
- Educate the user about what they will see when data is available
- Guide the user to take action
- Explore any useful content that might help the user be contextually productive?
## 1. Virtual machine default empty state screen
![Virtual machines empty state screen](img/virtual-machines-empty-state.png "Virtual machines empty state screen")
## UI Inventory
1. Tabs
2. Graphic (Icon)
3. Title text
4. Body text
5. Call to action button
6. Secondary call to action (optional)

## Discussion
1. Tabs: Are we ok with the title on this tab? Yes (Resolved)
2. Graphic: We should use an image with context 
3. Title text: Are we ok with this title?
4. Body text: Are we ok with this text?
5. Call to action button: On click/tap it opens a dropdown menu with 3 options:
    - Create via option 1
    - Create via option 2
    - Create via option 3
6. Secondary call to action: (optional) Is there a need for this? We could use this as an opportunity to educate the user. Alternatively, we could use this to present a secondary option when creating a virtual machine.

## 2. Virtual machine templates default empty state screen
![Virtual machine templates empty state screen](img/virtual-machine-templates-empty-state.png "Virtual machine templates empty state screen")
## UI Inventory
1. Tabs
2. Graphic (Icon)
3. Title text
4. Body text
5. Call to action button
6. Secondary call to action (optional)

## Discussion
1. Tabs: Are we ok with the title on this tab?
2. Graphic: We should use an image with context 
3. Title text: Are we ok with this title?
4. Body text: Are we ok with this text?
5. Call to action button: This is not a standard call to action button on PF. Can we use it? On click/tap it opens a dropdown menu with the pertinent options
6. Secondary call to action: (optional) Is there a need for this? Suggestion: We could use this as an opportunity to educate the user. Alternatively, we could use this to present a secondary option when creating virtual machine templates.
## Observations
**Note:** While researching this task, I noticed that we have empty state design conventions both in PatternFly and OpenShift Design. This empty state convention is not being utilized on the console currently. We should implement it as a default for all full screen empty state instances across the console for empty states.
