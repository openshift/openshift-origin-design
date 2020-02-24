---
parent: Conventions
---

# Badges

There are a variety of badges that are leveraged across the OpenShift platform.



## Resource badges

+ Colored badges are added to the left of all Kubernetes resources (including Custom Resources) in the console
+ Badges help users quickly identify resource type with a 1-3 letter abbreviation
+ There are custom resource definitions that exceed 3 letter abbreviations but we try to avoid this for general pre-defined resources
+ Resource names are typically shown as links (There are some exceptions to this rule if there is no detail page to display but majority of the time there is a link).
+ Full descriptive resource type name is shown on delayed hover of badge

![resource badge](../images/indicators-resource.png)

### Table of resource badges

Dev variables can be seen [here](https://github.com/openshift/console/blob/8334a4b7249674b46b8ed7ef3034dc2e230ce122/frontend/public/style/_vars.scss).

|  Resource badge |  Variable color |
|---|---|
|  ![custom resource](../images/custom-resource.png)Custom resource| $color-pf-blue-300;  |
| ![Alertmanager](../images/Alertmanager.png) Alertmanager | $pf-color-orange-600;|
| ![ConfigMap](../images/ConfigMap.png)  ConfigMap | $pf-color-purple-600; |
| ![Node](../images/Node.png) Node  | $pf-color-purple-400;  |
| ![Pod](../images/Pod.png) Pod  | $pf-color-cyan-300;  |
| ![Namespace](../images/Namespace.png) Namespace  | $pf-color-green-600;  |
|  ![Ingress](../images/Ingress.png) Ingress |  $pf-color-purple-700;   |
|  ![RBAC binding](../images/RBAC-binding.png) RBAC binding | $pf-color-light-blue-500;  |
|  ![Service](../images/Service.png) Service |   $pf-color-light-green-500; |
|  ![RBAC role](../images/RBAC-role.png) RBAC role | $pf-color-gold-600;  |
| ![Secret](../images/Secret.png) Secret  |   $pf-color-orange-400;  |
| ![Pod overload](../images/pod-overlord.png) Pod overlord  |  $pf-color-blue-500; |
| ![Project](../images/Project.png) Project  |   $pf-color-green-600;|
| ![Pipelines](../images/Pipelines.png) Pipelines  | $pf-color-green-400;  |
| ![Eventing](../images/Eventing.png) Eventing  |  $pf-color-red-300; |
| ![Serving](../images/Serving.png) Serving     | $pf-color-cyan-400;|


---

## Status badges

A status badge is a Patternfly badge that includes both a status icon and status label which can be used on a details view title.  Having a status badge in the details view title allows the user to see the status of the resource in context, regardless of which tab is selected.
To view status badges in the [OpenShift Sketch Library](https://sketch.cloud/s/mwdww) visit the symbols page [here](https://sketch.cloud/s/mwdww/p/symbols).


*Examples of status badges shown in OpenShift:*

![status badges](../images/indicators-statusbadges.png)

---

## Tech preview badge

A tech preview badge indicates when a feature is new and may still be in-progress on the development side. This can be Dev or Tech preview, and the same color is utilized for both. To view the tech preview badge in the [OpenShift Sketch Library](https://sketch.cloud/s/mwdww) visit the symbols page [here](https://sketch.cloud/s/mwdww/p/symbols).


*Example of tech preview badge on feature*

![tech preview badges](../images/indicators-techpreview.png)
