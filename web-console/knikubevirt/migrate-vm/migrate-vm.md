# Migrate VM

Clicking the action button next to any Virtual Machine in the List will present the user with the option to migrate the VM to another node.

![Selecting a VM](img/1-0-list.png)

Since the user can't pick a destination node (we just submit a request for migration and this starts a machinery which at some points picks a host), so we just keep the confirmation dialog simple and let the user know that this VM is migrated to another node.

![Modal migrate](img/1-2-modal-migrate.png)

![Modal view](img/1-1-modal-info.png)

When the destination Node has a much longer name than the size of the text box, there are 2 available options:

 After the migration is kicked off, the status of the VM showing that the migration has started will be reflected in the list view.

On error or completion, the user will receive a notification and the status will be updated accordingly.
For a process that is not instantaneous, the user will be notified via notification when it completes.

![Modal view](img/1-4-list-notification-completed.png)
