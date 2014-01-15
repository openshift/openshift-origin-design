OpenShift Admin Console Provisional Personas
============================================

DJ
--

DJ is a sysadmin at a large enterprise. She and her team of four other people help run the large OpenShift Enterprise installation for the Engineering department. In their installation they have:
* 5 Gear profiles
* 700 Nodes
* 25 Districts

DJ has lots of hardware to run OpenShift Enterprise, and spinning up new nodes is no big deal - when she needs one, she has an IaaS to do the hard work.

The Engineering department is large and very demanding. If they can't create new gears or applications, it could cause a severe drop in productivity, and even cause them to miss delivery deadlines, potentially costing millions of dollars.

DJ has to make sure she's not close to running out of UUIDs or active app capacity for any of the available gear profiles. She's got too many nodes to worry about them, so she just observes capacity at a district level - creating new districts and new nodes as needed.


Stephanie
---------

Stephanie is an IT specialist in a small-to-medium enterprise. Along with one other person, Stephanie runs a small OpenShift Enterprise installation which is used to run business applications and POCs. Her installation has:
* 2 Gear profiles
* 15 Nodes
* 2 Districts

Stephanie doesn't have a lot of hardware or expensive IaaS software, so if she has to spin up a new node, she has to create it with the help of some bash scripts, and potentially requisition new hardware, so it can be a big deal.

She's not likely to hit her District capacity any time soon so, while she needs to be notified if it's getting close, she can and does ignore Districts for the most part.

If Stephanie runs out of capacity for a bit, it'll be inconvenient for a few people, but she's more worried about nodes crashing and taking down their business applications, so she closely monitors the nodes to make sure they're always online and responding. This also means she can catch low-capacity nodes early.


Michelle
--------

Michelle is the sole sysadmin at a small NPO using OpenShift Origin to help run fundraising software, an event planning and invitation system, the NPO's website, and several projects in development. Their install has:
* A single gear profile
* No districts
* 5 Nodes

The overall system capacity is pretty fixed. If Michelle runs out of capacity, she may not be able to create more nodes, instead she may have to force idle apps, and redistribute gears to the applications that need them most, unless she can get extra money or donated hardware.

Node stability is important, since they don't have a lot of them and they rely heavily on their fundraising software, especially during their big quarterly fundraising pushes.

