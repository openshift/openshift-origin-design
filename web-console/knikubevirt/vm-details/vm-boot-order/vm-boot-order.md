# VM details - boot order

## Entering edit mode
![VM details - Overview tab](img/C1-0-0.jpg)
From the VM details page > Overview tab, the user views the list of resources the Vm will attempto to boot from, by order.
Clicking the pencil icon will pop up the boot order modal.

## Default source list
![Modal - default](img/C1-1-0.jpg)
The modal pops up, displaying the listed items by order of boot attempt.
This order was automatically set on the VM creation (currently set only to one source).

Each item will be displayed in the following format:
[drive Type] [# of created]: [drive name]
CD-ROMs are included in this list.

## Adding source items
![Adding item](img/C1-1-2.jpg)
The user clicks the '+ add source' button at the bottom of the list.
A new item at the bottom of the list will appear, marking its location on the list. 

This item will also contain a type-ahead dropdown, which is already in focus, ready for the user to select an available item from the dropdown menu or filter the list by typing.

In case the item added has only one option, that item will be already selected to that option.

## Removing source items
The user can remove an item from the list by clicking on the 'remove' icon at the left of each item. By doing so, the user will be adding it to the available sources inventory.
The 'Remove' icone will be available for all items.

## Drag & drop source items
![Add available source](img/C1-2-0.jpg)
The user grabs an item by clicking and holding the 'drag-drop' icon.

![Source added](img/C1-2-1.jpg)
While holding the item between other items on the list, a blue Separator will mark the place where that item will land on the list after releasing it.

## Empty state
![VM page - no source](img/C2-0-0.jpg)
An empry state occures when the VM is created via YAML, without specifying any boot order priority.
It is also achieved when the lasg item on the Boot-order modal is removed.
With an empty state, the colsole will notify the user that "No sources selected", and "Boot from disks by order of appearance in YAML file"

![VM page - show disks by order of apperance on YAML](img/C2-0-1.jpg)
From the VM page the user will be able to see the disk list by order of appearance on the YAML

![VM page - no sources modal](img/C2-1-0.jpg)
An empty state within the modal.
Viewing the disks by order of apperance is not available as it is not a desired state.


## Drag & drop accessibility
This section specifies the drag-drop behavior using a screen-reader. The copy specifies outlines that behaviour, it is not the final copy.

![screen-reader - dragdrop icon](img/C1-3-0.jpg)
The user scans the page with a screen reader, hover over the drag-drop icon

![screen-reader - grab item list](img/C1-3-1.jpg)
The user grabs that item

![screen-reader - move item with up/down arro](img/C1-3-2.jpg)
The user moves that item with up/down arrow (the screen reader reads the potential slot)

![screen-reader - drop item list](img/C1-3-3.jpg)
The user drops that item on the selected spot
