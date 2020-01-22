---
parent: Conventions
version: 4.2
---

# Resource details

## Details pages & tabs

A resource is an object in the system: Kubernetes objects (Containers, Pods, Deployments, etc), custom objects in OpenShift (Projects), or custom resources created by an installed Operator (Alerting rule). As a general rule, creating a custom object that is an abstraction or expansion of a Kubernetes concept can be confusing and is advised against (for example Projects as an abstraction of Namespaces).

Tabs are generally used to segment content: details and meta information about the resource, configurations, related settings, related objects, and child objects. 

*Resource dashboard:*

![Resource dashboard](../images/resource-details-dashboard.png)


*Resource overview:*

![Resource overview](../images/resource-details-overview.png)


*Resource YAML:*

![Resource yaml](../images/resource-details-YAML.png)


*Resource pods:*

![Resource pods](../images/resource-details-pods.png)


*Resource environment:*

![Resource environment](../images/resource-details-environment.png)


*Resource events:*

![Resource events](../images/resource-details-events.png)


*Resource terminal:*

![Resource terminal](../images/resource-details-terminal.png)


*Resource role bindings:*

![Resource role bindings](../images/resource-details-rolebindings.png)


*Resource workloads:*

![Resource workloads](../images/resource-details-workloads.png)


---


## Details panel

A details panel provides a summary view of the resource and related information.

*Details overview:*

![Panel overview](../images/resource-details-sidepanel-overview.png)


*Details resources:*

![Panel resources](../images/resource-details-sidepanel-resources.png)
