# Windows VMs 2

This is following the Windows end to end flow PR and will explain the current constraints in Windows licensing registration that a user needs to be aware of, along with setting up their user profile once the VM has spun up.

At this point, it seems that we can't predetermine the licensing before a VM gets created because no Sys-Prep is available in CNV.
This means that users will first need to spin up the VM and only then provide the info.

Kubevirt offers a limited version of Windows so it allows users to get some shareable links to the evaluation images that are available, so they can download the images and then start using them, but subsequently, users will have to purchase the licenses. Until they do that, the system will keep nagging them that the license isn't activated. So for longer running VMs, there should be a longer-term solution.
Windows VMs in Kubevirt expires in 40 days.

This also affects the Windows guest tools. Now it will no longer be as an optional checkbox, so the user will be notified that the Windows guest tools are available and mounted as a disk.

## Windows guest tools are mounted

![user is notified that the guest tools are available](General1.png)
