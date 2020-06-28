---
parent: Virtualization
version: 4.x
---
# VNC in new window

## In the Administrator console

In order to add an option to open the VNC console in a new window, we’ll add a new button ‘Open Console’. The default will be set to open the console in a new window.

![open from the new button](img/Open-console-1c.png)

Another way to open the VNC Console can be done via the kebab dropdown menu.

![open from the kebab menu](img/Open-console2.png)

## In the Developer console

In the developer console we’ll have the same option to open the console of the topology view.

![open from the topology view](img/vm-topology-actions-open-console.png)

As well as from the Actions dropdown menu.

![open from the actions drop down](img/helm-release.png)

# Design a VNC detached console

When users click the ‘Open Console’ button, they will get a detached window that represents another OS (no toolbar).
If they want to go back to their original OpenShift cluster they will simply close that window and get back.

![detached window ](img/Detached3.png)