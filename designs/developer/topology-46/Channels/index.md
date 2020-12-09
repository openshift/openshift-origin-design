---
parent: Developer
version: 4.6
---
# Channels in Topology

## Description

A channel can be connected to Knative services with subscriptions. Subscriptions are represented by the lines to the right of the channel. Channels are Kubernetes custom resources which define a single event forwarding and persistence layer.

![channelex1](img/image5.png)

A channel can also be standalone or only connected to the event sources.

![channelex2](img/image2.png)

![channelex3](img/image13.png)

## In-Context Menu

The user can right click on the channel and the in-context menu will appear.

![incontextmenuchannel](img/image8.png)

## Side panel for channels

When the channel is selected, the side panel appears. The channel will highlight with a blue border. In this view, the event sources and subscribers with their associated subscriptions are listed.

![sidepanelchannel](img/image3.png)

## Actions dropdown for channel

When the user selects the actions dropdown, they have a variety of options available to them, such as adding a subscription or editing the channel.

![actionsddchannel](img/image1.png)

## Drag and Drop

Channels will also have the blue arrow to drag and drop to add subscriptions. Events are delivered to services or forwarded to other channels (possibly of a different type)using subscriptions.

![bluearrow](img/image16.png)

The user can hover the blue plus sign on a Knative service and the tooltip with “Add Subscription” will appear. If the user drops the blue plus on the Knative service the subscription will be added.

![addsub](img/image18.png)

The user can drop the blue plus in open space and the option to add a subscription will appear.

![blueplusaddsub](img/image17.png)

## Add a subscription modal

The user can access the add subscription modal in three ways: by dropping the blue plus in open space, selecting the “Add Subscription” option from the in-context menu on right click, or selecting the “Add Subscription” option from the actions dropdown on the side panel. When the user has selected “Add Subscription” a modal appears, and this is the default form view.

![addsubmodal](img/image9.png)

The user selects the subscriber from dropdown. If there is one subscriber, the form will default to that one subscriber. 

![addsubmodal](img/image12.png)

If there is no subscriber, the user should be notified that no subscriber is available, and the dropdown should be disabled.

![addsubmodal](img/image11.png)

## Subscriptions

On hover, a tooltip will appear saying “Subscription”.

![sub](img/image4.png)

The user can also right click the subscription to access the in-context menu.

![incontextmenusub](img/image14.png)

## Side panel for subscriptions

When the subscription is selected the event sources, associated channel, and subscriber are listed on the side panel.

![subsidepanel](img/image15.png)

## Actions dropdown for subscription

When the actions dropdown is selected, a variety of options are available to the user, such as editing the subscription.

![subactionsdd](img/image7.png)

## Side panel for Knative service

When the Knative service is selected event sources and channels with their associated subscriptions are listed below the other resources. 

![knative](img/image6.png)

## Side panel for event source
When the event source is selected the sink is listed with the associated URI link for the channel. 

![es](img/image10.png)



