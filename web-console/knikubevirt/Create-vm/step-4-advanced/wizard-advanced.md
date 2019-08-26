# Create A Virtual Machine

## Step 4: Advanced

The “Advanced” setting step of the create VM wizard includes 2 sections:

- Cloud-Init / Sysprep (The difference between the cloud-init and the sys-prep is basically the difference between windows and other OSs)
- Virtual hardware

### Cloud-Init / Sysprep

The user chooses the "Use cloud-init/Sysprep" checkbox at the top of the form and sees the settings.

- SSH Authorized Keys: Enter a comma-separated list of public SSH keys that can be used for authentication.
- NIC: Select the NIC that should communicate with the DNS servers.
- DNS Servers: Enter a comma-separated list of DNS server IP addresses.
- DNS Search Domains: Enter a comma-separated list of DNS search domain IP addresses.

![empty form](img/form-empty.png)

The user checks the “Use Cloud-Init/Sysprep” checkbox in order to enable and fill out the fields below.
![form empty](img/ssh-keys.png)

### Virtual hardware

![Mount this guest agent installer is on](img/guest-agent-installer-on.png)

![Mount this guest agent installer is off and alert notification](img/alert-notification.png)
