---
parent: Administrator
version: 4.6
---

# Connect cluster operators to workloads

When viewing a cluster operator in the console, it isn't clear what resources on the cluster relate to it. There is an existing **RelatedObjects** field in the YAML that can be used to convey these.

## Cluster Operator Related Resources

![Cluster Operator Related Resources](img/0-1-clusterOperator-relatedResources.png)
- Cluster operators will have a new **Related Resources** tab that list out the **RelatedObjects** for that operator.
- An OwnerRef column was considered but because the value will usually be blank, was not included.