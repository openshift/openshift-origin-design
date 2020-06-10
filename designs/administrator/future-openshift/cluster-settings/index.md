--
parent: Administrator
version: 4.6
---

# Cluster Settings 

Users complete upgrades in cluster settings. The following design focuses on making improvements to the current upgrade experience in cluster settings to ensure upgrading is as simple and transparent as possible. Specific improvements include adding more information around recommended upgrade paths and notifying users when new versions and channels become available. 

## Adding Alerts to the Notification Drawer

![Alerts - Available Updates](img/notifications-updates.png)
- Today, available updates appear in the message section of the notification drawer. 
- Three new alerts will be added to (1) inform users if a new patch becomes available, (2) a new minor release becomes available, and/or (3) if new channels become available. 
- All three messages send users to the cluster settings section of the console to take further action.

## Channel visualization and in context help

The new channel visualization provides users with more transparency into recommended upgrade paths, informs users what changes happen in each release, and guides users to the correct channel. 

In addition to the visualization, field level help text was added for channels and a new Manage Subscription field was added with a link to OpenShift Cluster Manager.

![Channel help text](img/channel-help.png)
- Clicking on the Channel field surfaces a popover that provides context as to what a channel is along  with a link to documentation to learn more about channels in OpenShift.

![Channel visualization](img/channel-visualization.png)
- The blue line signifies the current channel you are on. The current version and recommended version (if available) are both marked with blue dots. 
- The gray line signifies the next available channel. To surface recommended versions in the next available channel, users must switch to the channel by clicking the pencil icon next to the channel field. If no other channels are available the gray line will not be visible. At this time the visualization only supports surfacing one additional channel. 

![Channel visualization - recommended version popover](img/recommended-channel.png)
- Clicking on the recommended version (marked with a blue dot on the right), will surface a popover with recommended minor/patch release information and a direct link to documentation.

![Channel visualization - “+ more” popover](img/more-channels.png)
- Clicking on the “+ more” oval will surface a popover that lists out all versions (between the current version and recommended version) in a table with direct links to documentation. 

![Channel visualization - “+ more” modal](img/more-channels.png)
- X

## Updating a channel, in progress checklist

It was important to provide more transparency to the user when an update is in progress. The mockups below illustrate the steps a user takes to update to a minor release in their current channel, and surfaces the in progress checklist that allows users to see the status of the update in real time.

![Channel visualization - “+ more” modal](img/more-channels.png)
- Clicking the update button will allow the user update to the recommended minor release in their current channel.

