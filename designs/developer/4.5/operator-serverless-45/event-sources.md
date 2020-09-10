---
parent: Developer
version: 4.3
---

# Serverless Topology

When the OpenShift Serverless operator is installed, the regular topology view is enhanced.

## Event Sources

In 4.3, the console will visualize a subset of the event source types in the topology view.  This list includes:
    KafkaSource
    CamelSource
    CronJobSource
    ContainerSource
    ApiServerSource

The documentation about the event source types that are supported can be found [here](https://knative.dev/docs/eventing/)

Event Sources have a sink connector to the Knative service.

![event source top](img/EventSource.png)

When the event source is selected, the side panel is displayed on the right side.

The side panel displays the Overview of the selected Event Source.
![event source overview](img/EventSource-Overview.png)

The side panel displays the Resources associated with the selected Event Source.
![event source resources](img/EventSource-Resources.png)

The side panel contains an Actions dropdown menu. 
![event source dropdown](img/EventSource-Overview_actionsdropdown.png)

There is filter support in the Topology view to show and hide event sources.
![event source filter support](img/EventSource-Filter.png)

An Event Source can have three different placements in the Topology view.  An Event Source can be inside of the application with the associated Knative service, inside another application, or unassigned not in an application.

Inside the application of the associated Knative service:
![event source top](img/EventSource.png)

Inside another application:
![event source top](img/EventSource-inanotherapp.png)

Unassigned:
![event source top](img/EventSource-unassigned.png)