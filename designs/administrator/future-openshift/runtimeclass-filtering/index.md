---
parent: Administrator
version: 4.x
---

# Adding optional column to pods list page for RuntimeClass

## Background
Kata containers are now being used in OpenShift sandbox. Kata containers are an open-source project that offers light-weight containers with the security of VMs. In OpenShift 4.8 the console team added the Runtime Class field to the Workloads details pages. This allows a user to see what workloads are using the kata runtime on both the Admin and Dev perspective.

Why is this information important: Deployments using  Kata containers may require additional information and/or policies. Currently in the console the only way to identify which Pods are using the kata runtime class is by going to the details pages (Deployment, Pods, ReplicaSets, etc.).

## Goal
Add a method to sort pods in the list view by their RuntimeClass. This would give a higher level view of these pods improving visibility.

## Designs for a future release

The pods list page lets users customize the columns shown in the table.

![Adding a new column on pods screen](img/1-pod-columns-view.png "Adding a new column on pods screen")

When clicking on the columns icon a modal will show the available options that can appear in the table. This design adds RuntimeClass to the optional columns category.

![Select RuntimeClass option](img/2-pods-columns-options-modal.png "Select RuntimeClass option")

When applied, the RuntimeClass column will identify any pod with the RuntimeClass name kata on their respective pods. The alphabetical sorting option in the column header will help group all kata container pods in the list.
