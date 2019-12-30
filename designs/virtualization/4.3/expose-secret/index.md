---
parent: Virtualization
version: 4.3
---

# Expose Secret, Config Maps and Service Accounts as Disks

Kubernetes Secrets, Config Maps, and Service Accounts can be exposed as VM disks allowing better integration of Virtual Machines with Kubernetes resources.

A similar process already exists when attaching Secrets or Config Maps to a deployment config. This happens in the “Environment” section under deployment and deployment config. The Secret/Config Map can be added as an environment variable or as a volume.
The idea is to be consistent by doing similar processes in the same way across the tool. To support that, we added an “Environment” tab under the VM to handle the attached Secrets, Config Maps and Service Accounts.

## Add “Environment” tab to handle the attached Secrets, Config Maps and Services Account

![added environment tab](img/environment-tab.png)

The user can add more Secrets/Config Maps/Service Accounts:

![add](img/add.png)

![add dropdown open](img/add-dropdown-open.png)

## Expose From Secrets/Config Maps/Service Accounts Lists

![expose from accounts list](img/expose-from-accounts-list.png)

![add to workload](img/add-to-workload.png)

The "Add to Workload" kebab menu action brings up the "Add to Workload" modal.

![add to workload popup](img/add-to-workload-popup.png)

![add to workload popup open dropdown](img/add-to-workload-popup-open-dropdown.png)

In OpenShift, there were two ways for attaching Secrets or Config Maps to a workload: 1) as an environment variable 2) as a volume.
We added a third option to support VMs that is called “Disk”. This option will be available only when selecting a VM in the workload dropdown.

![add as disk open dropdown](img/add-as-open-dropdown.png)

![add as disk](img/add-as-disk.png)

When selecting a VM in the workload dropdown the selection in the “Add as” menu will automatically change to “Disk”. The “Disk” option won’t be available for Deployment or Deployment Config workload.

## Expose From Secret/Config Map/Service Account Detailed Page

The process is practically the same as adding from the list, only now we are doing it from the detailed page of the Secret/Config Map/Service Account.

![exposing from detailed page](img/expose-from-detailed-page.png)

Clicking the “Add Secret to Workload” button will open the same menu we saw in the lists section above.

![exposing from detailed page-popup](img/expose-from-detailed-page-popup.png)
