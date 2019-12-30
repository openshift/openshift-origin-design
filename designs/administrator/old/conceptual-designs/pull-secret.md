---
parent: Administrator
version: 3.11
---

# Create Pull Secret
- To deploy an image from a private registry, a user needs to have a secret with the image registry credentials in their namespace.
- These designs add the option to create a pull secret as part of the Deploy Image flow as well as providing some additional explanation when an image isn't found.

## Use Cases
1. As a user, I want to:
  - Create a pull secret so that I can deploy an image from a private registry

**NB** Currently these designs only cover the in-project case. When initiated from the landing page, the user would also presented with the Select Project option.
- If no project exists, or the user chooses to create a new project, the image search function is not available (limitation of the platform). The option for creating the secret would be hidden in that case as the system cannot find the image regardless whether a secret exists or not.



## Design
- [The Invision prototype linked here includes designs and flows for the use cases described above.](https://redhat.invisionapp.com/share/4QGFRZVYCEK)
