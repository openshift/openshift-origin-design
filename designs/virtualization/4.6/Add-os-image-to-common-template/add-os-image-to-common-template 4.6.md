---
parent: Virtualization
version: 4.6
---
# Add an operating system image to a common template

## About

We strive to provide an off-the-shelf OS image with every common template.
This an ongoing effort.
Hopefully this will provide the user with a much easier experience to creating a virtual machine.
This OS image takes the shape of a disk image(data-volume) and can be attached to the OS template (one of the parameters within the common templates).
These OS images, and common templates in general, won’t be editable for the user.
Today, we don’t have OS images, so we need a temporary solution; offering the user a way to attach a new image that he adds to a common template, making it available on selecting that OS template field.


## Adding an OS image

![Create VM wizard - default](img/Admin-create-4.6-0-0.jpg)

On clicking "Create VM" the user lands on the wizard.
The user enters a VM name and clicks on the operating system dropdown to select an OS.

![OS dropdown](img/Admin-create-4.6-0-1.jpg)

The options with included images will be marked with a "(source available)".
This time, the user selects an OS without an available image/source.

![No OS image available warning](img/Admin-create-4.6-0-2.jpg)

The user will be presented with a warning message notifying that no OS image/source detected.
The user can either click the "Upload and attach..." action to couple a new OS image to the OS selection, or to provide a source on the field below.
A “source” field (previously called “source”) will present itself.

!["Create VM session will be discarded"](img/Admin-create-4.6-0-3.jpg)

On clicking the "Upload & Attach os source..." on the warning message link, the user will be presented with a modal.
This modal will warn the user that the "create VM" session will be discarded and all progress will be lost.
The modal will also mention the benefit of continuing, making this source available for all from now on.

## Selecting an OS with a backed OS images

![Making the new image available](img/Admin-create-4.6-1-0.jpg)

The user browse to the image local file.
All other fields are left to default, making the image an available source when selecting "windows 10 from the OS dropdown".

![New image available](img/Admin-create-4.6-1-1.jpg)
After the Upload and attach complete, the source will be available for "windows 10".

![Adding source status](img/Admin-create-4.6-1-2.jpg)
In case the user has entered the wizard without waiting for the upload and attachment to finish, the "windows 10" option will indicated that a source is currently being added.

![Unchecking "clone"](img/Admin-create-4.6-1-3.jpg)
Unchecking the "Clone..." checkbox will surface the "source" field again below.
