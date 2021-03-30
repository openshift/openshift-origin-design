---
parent: Developer
version: 4.7
---

# Form/YAML switcher

## Adding event source
Taking inspiration from the Admin console and installing via YAML/Form with Helm charts, in this design the user can switch between the form view and the YAML view. The form below is an template; the form fields will be dynamic in nature.

![Add page](img/1-create-source.png)

## YAML view (best case scenario)
The user has selected YAML.

![YAML view](img/2-yaml.png)

## YAML view (Invalid YAML cannot be persisted)
In this use case the user has selected YAML and has typed in invalid YAML.

![Invalid YAML](img/3-invalid-yaml.png)

## The event source has been created
On the topology view the user can view the event source that they just created.

![Topology view](img/4-topology-view.png)
