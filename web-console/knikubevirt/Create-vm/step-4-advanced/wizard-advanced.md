# Create A Virtual Machine

## Step 4: Advanced

The “Advanced” setting step of the create VM wizard includes:

- Cloud-Init / Sysprep - determines the contents of these settings based on the OS that is selected. (The difference between the cloud-init and the sys-prep is basically the difference between windows and other OSs)
- Virtual hardware

### Cloud-Init / Sysprep

The user chooses the "Use cloud-init/Sysprep" checkbox at the top of the form and sees the settings.

- SSH Authorized Keys: Enter a comma-separated list of public SSH keys that can be used for authentication.
- NIC: Select the NIC that should communicate with the DNS servers.
- DNS Servers: Enter a comma-separated list of DNS server IP addresses.
- DNS Search Domains: Enter a comma-separated list of DNS search domain IP addresses.

![empty form](img/form-empty.png)

The user checks the “Use Cloud-Init/Sysprep” checkbox in order to enable and fill out the fields below.
![user fills form](img/ssh-keys.png)

### Virtual hardware

Windows guest agent installer is located in this section and it needs to include information about the drivers to improve virtual machine performance, enable resource monitoring, and provides graceful power control options.

![Mount this guest agent installer is checked](img/guest-agent-installer-on.png)

![Mount this guest agent installer is unchecked and alert notification](img/alert-notification.png)
