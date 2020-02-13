---
parent: Developer
version: 4.4
---

# -- OpenShift Serverless Operator (4.4)
The developer experience is enhanced when the OpenShift Serverless Operator is installed.

## Knative Services in Topology
Knative Services are visualized as groups.

### Topology side panel

#### KSVC Side panel
When a Knative Service is selected in topology, the side panel Resources tab shows Pods, Revisions and Routes.

![KSVC side panel](img/sidepanel-KSVC.png)

If all of the revisions of a Knative Service are autoscaled to 0, the Pods section says "All Revisions are autoscaled to 0", and in the Revisions section, each deployment shows 0 pods.
![KSVC side panel autoscaled](img/sidepanel-KSVC-autoscaled.png)

#### REV Side panel
When a Knative Revision is selected in topology, the side panel Resources tab shows Pods, Deployments, Configurations and Routes.

![REV side panel](img/sidepanel-REV.png)

If the Revision is autoscaled to 0,  the Pods section says "Autoscaled to 0".

![REV side panel autoscaled](img/sidepanel-REV-autoscaled.png)
