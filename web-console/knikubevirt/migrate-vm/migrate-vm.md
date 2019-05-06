# Migrate VM

Clicking the action button next to any Virtual Machine in the List will present the user with the option to migrate the VM to another host.

![Selecting a VM](img/1-0-list.png)

A modal will be presented where the user can choose which Node the VM should be migrated to. 

![Modal view](img/1-1-modal-info.png)

![Modal migrate](img/1-2-modal-migrate.png)

After the migration is kicked off, the user will see a toast notification letting them know it has started. The state for the VM will also be reflected in the list view.

![Toast migration started](img/1-3-list-notification-started.png)

On error or completion, the user will receive another notification with more details. Again, the state will be updated accordingly.

![Toast migration complete](img/1-4-list-notification-completed.png)