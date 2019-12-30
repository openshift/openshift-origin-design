---
parent: Virtualization
version: 4.4
---

# List View

## VM List

The VM list contains columns for the following:

* Name
* Namespace
* Status
  * Running, Off, Error (with custom messages), Cloning, Migrating, Snapshotting, Importing, Warning, Pending (with changes that will apply after restart), Unknown
* Created
  * Date formatting should follow OpenShift’s console
  * If possible, a tooltip should appear on hover with the exact creation date, including year.
* Node
* IP Address

### Max number of columns and prioritization

We set 6 columns to be the max number we will display in list views. We also determined priorities/usefulness of each column and set the priority order from left to right.

![VM list six columns](img/vmlist.png)

### Status Popovers and Icons

[The Resource status](http://openshift.github.io/openshift-origin-design/web-console/4.0-designs/status/status)

Statuses should be colored blue to indicate that they can be clicked/tapped.
Hovering should only underline the blue status text.
Clicking on a blue status should display a status popovers with a brief description of the issue or underlying process.
Clicking on the "Learn more" with the external link icon (seen below in the Guest Agent example) should bring the user to external documentation for further details.
“View details” without the external link icon would be more appropriate if the status is an error, for example, and clicking would bring the user to the Events page.
The status popovers are replacing the status tooltips because they're significantly more accessible on mobile and easier to copy/paste from and they also provide actions that the user can take upon.
A popover is used to provide contextual information for another component on click. The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body.

![status popovers instead of tooltips](img/statuspopovers.png)

We replaced the old lightning bolt icon for ‘Running’ with fa-refresh icon.
An asterisk can be appended to the status to highlight a potential issue that the user should be aware of. For example, when the IP address is unavailable because of missing guest agent, the ‘Running’ status will be appended with an asterisk.

## Filtering

### Item filters

The predefined filters in the filter bar can be used to narrow the VM list by most statuses. The user clicks each filter to toggle it on and off.

![Filter only the VMs with errors](img/itemfiltererror.png)

### Search filter

The generic search filter allows the user to filter results by any text string in any column. This could enable users to quickly find a VM by IP address or possibly other fields in the future. Multiple filters could be delineated by a comma in the search query.

![Search filter](img/searchfilter.png)

## Sorting

Sorting by columns is possible for any data table variation. Enabling the component within a table eases the ability to scan and read through the content. This option is favored over adding sorting functionality to the toolbar.

![Sorting](img/sorting.png)

1. **Sorted column** when a column is being sorted, the column header will turn blue and the sort icon will represent the direction of the sort. Subsequent clicks on the sortable column header will toggle the direction of the sort.
2. **Hovered sort** when a column is sortable, the sort icon will appear to the right of the column header. Upon hover, the icon will change to a darker grey indicating that the icon is actionable.
3. **Sortable column** when a column is sortable, the sort icon will appear to the right of the column header in a light grey color. Sorting will not become active until the user selects the column header. This triggers the arrow to point upwards and the content to be sorted in ascending order.

![Sorting with examples](img/sorting2.png)

## States and Actions

When a VM is off, the actions kebab contains options to Run, Edit, Migrate, Clone, Create template, Take snapshot, and Delete the VM.

![Dropdown when the vm is off](img/vmlistdropdownoff.png)

When a VM is running the Run option is replaced with two dropdowns for Power and Connect to Console.

![Dropdown when the vm is running](img/dropdownpower.png)

The Power dropdown contains options to Suspend, Restart, or Shut down the VM. Because these are potentially destructive actions, clicking any of these options will display a modal for the user to confirm.

![Confirmation modal](img/confirmationmodal.png)

The modals for Restart and Shutdown include an additional button to “Force” the action. They also include warnings about the possibility for data loss.

![Restart modal](img/restartmodal.png)

![Shutdown modal](img/shutdownmodal.png)

The Connect to Console dropdown contains quick links to the consoles that are enabled for the VM.

![Connect to console dropdown](img/connecttoconsoledropdown.png)

When a VM is in a transitional state (cloning, migrating, taking a snapshot, etc.) any unavailable actions in the kebab are disabled and the original action (“Clone”) is replaced with a cancel action (“Cancel Clone”).

![Vm in transitional state the original action is replaced w_cancel action](img/transitionalstatemenu.png)
