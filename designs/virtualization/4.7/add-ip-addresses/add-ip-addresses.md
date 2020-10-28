---
parent: Virtualization
version: 4.7
---
# Add V4 and V6 IP Addresses

## Adding a ‘Last restored’ column to the list view

Currently we only show IPv4 IP addresses but with the addition of IPv6 we should consider how these strings should surface in the list/details view of the virtual machine.
Currently we would not be able to show both types together though.

## List view

The column header will change to IP address(es) to match multiple addresses.

![List view](img/VM-list.png)

In cases where a Virtual Machine has more than one IP address, we will show the first IP address and the +X more action and add a popover that will include all the IP addresses for that VM.

## Popover

![Popover](img/VM-list-long-IP-list.png)

That will also reflect in the Virtual Machine's details page

![VM Details page](img/VM-details.png)

and in the Virtual Machine's Overview page as well.

![VM Overview page](img/VM-overview.png)
