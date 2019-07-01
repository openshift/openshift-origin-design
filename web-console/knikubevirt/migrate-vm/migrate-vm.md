# Migrate VM

Clicking the action button next to any Virtual Machine in the List will present the user with the option to migrate the VM to another node.

![Selecting a VM](img/1-0-list.png)

A modal will be presented where the user can choose which Node the VM should be migrated to.

![Modal migrate](img/1-2-modal-migrate.png)

![Modal view](img/1-1-modal-info.png)

When the destination Node has a much longer name than the size of the text box, there are 2 available options:

* adding 3 dots at the end of the text

![Modal view](img/1-2-modal-migrate-longname.png)

* adding 3 dots at the middle of the text

![Modal view](img/1-2-modal-migrate-longname.png)

Clicking on the name will show a popover with the full destination Node name and some explanatory text.

After the migration is kicked off, the status of the VM showing that the migration has started will be reflected in the list view.

On error or completion, the user will receive a notification and the status will be updated accordingly.
For a process that is not instantaneous, the user will be notified via notification when it completes.

![Modal view](img/1-4-list-notification-completed.png)
