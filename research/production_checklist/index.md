---
parent: Research

---
# Production Checklists

*Date: August 2020*

*Internal link: [Slide deck](https://docs.google.com/presentation/d/1muZX1LbAFvyxZdIen61sWnJIoASLyfEB-rMPGHczevs/edit?usp=sharing)*

## Background

[Previous investigations](https://docs.google.com/document/d/1DXMMByTSLBnL5b3xfCDNCEjJAxfmdyCLnwyNrtF4NoM/edit?usp=sharing) (internal link) have driven a need for a checklist to help users get a new cluster up and running. This checklist will exist in the notification menu and guide users to completing critical actions with their new cluster. Our research was conducted to ensure we show items that are truly important to cluster operators and that they fit into a typical workflow. Here is a list of the research goals:

- Explore participants’ cluster organizations
- Learn about the differences between each type of cluster
- Understand common frequencies of starting/ending clusters of a type
- Validate the production checklist for post installation items
  - Use the worksheet to validate existing items and add new ones
  - If participants don’t need/use a certain item, learn why

### Method
We used a structured interview approach with a worksheet (internal link) to discuss about 25 possible items for getting started. For each item, we asked if users complete the item, and if not, why that is the case. We also captured basic impressions about ease-of-use for the item and how they would rank that item’s importance of getting started.
Our participants’ backgrounds varied but were all platform engineers or consultants. The verticals primarily included government, technology, and finance.

## Findings

### Checklist items

#### The most critical alerts

Setup IDP and setup valid default wildcard certificates were both clearly the most critical items. Setup IDP was always ranked as the first thing to set up for a cluster operator. Setup valid default wildcard certificates was consistently ranked in the top 3. Getting the certificates often involved getting the certificates from another group and using automation to complete the task.

#### Moderately critical alerts

Delete kubeadmin, configuring registry, logging, creating infrastructure nodes, setup storage, creating alert receivers,and RBAC were all chosen within the top 3-5 as a priority, but without the consistency of our most critical items. Kubeadmin was done by all but one participant that kept it as a backdoor. Another external group simply recreated it under a different name.

Configuring registry was done on all environments. Some used third party tools and others had to contend with usability issues of doing this with a disconnected environment. Both situations had a notable lack of documentation.

Logging was set up on all environments, except one version 4 cluster that existed just to test new installation procedures. Once again, many used third party tools for their logging setups.

Creating infrastructure nodes was commonly done for logging, registry, storage, and monitoring. This was mostly done across all environments, but one internal participant only used it on production to save resources.

Storage was set up on all environments. Interestingly, two externals used the same third party tool (Trident + NetApp for version 4). Once again, an external noted a lot of difficulty here in relation to documentation support for third party tools.

Creating alert receivers was done less consistently than our other moderately critical alerts. It was not set up in contexts where production environments were not yet built. It was set up in production environments. For version 4 specifically, some customers are taking time to learn about alerting before they implement. This is likely because version 3 clusters had an entirely separate alerting stack. New version 4 users may need extra support for this item.

RBAC was always set up, and may have been confused with a distinction from IDP in some cases. Two participants noted that automation is applied to complete this step.

#### Novel items

Some participants brought up items we didn’t already have on our list. These were not as essential as the other items above, but are noteworthy. One internal and one external brought up customization of web console graphics. The same internal group brought up changing the custom default template, building a certificate authority, and displaying a user license agreement.

Two externals testing version 4 noted that they customized machine configs. Three different groups (two external) brought up cron jobs, often tailored around pruning images across all environments.

#### Less essential items
The following items were done by some participants, but with little thematic similarity across different participants. Extra details on these items are available in the full deck linked at the top.

- Configure Corporate Proxy
- Network policy (controlling pod traffic)
- Cluster node AutoScalers
- Cluster pod autoscalers
- Quotas & Limits
- Configure Operator catalog source
- Configure metering
- Attach Subscription
- Configure Liveness and Readiness probes
- Service Accounts
- Machine Sets
- Machine Health checks
- Creating a GPU Node (eg, AI/ML)
- Node health checks
- CI/CD, seed apps into cluster

### Environments

All participants had a multi-cluster environment, moving from development to production. There was quite a bit of variation within that general trend. Two externals had special test/lab clusters for version 4 (one of which being just for upgrade testing). A consultant noted that larger finance environments tended to have a disaster recovery cluster beside production. Only one participant did not touch production environments; their consulting role only set up sandbox, development, and quality assurance clusters.

Overall, development and production environments would closely resemble each other, having the same version but configuring minor details differently (eg: alert receivers point to different channels). Sandbox environments could be more distinct, testing out new versions entirely and not having logging or third party integrations enabled. Based on our small sample, it seems that deprioritizing alerts, logging, and general third party integration in a sandbox environment could be warranted.

Conclusions

With the caveat of our small sample, some themes were strongly emergent or important enough that the small sample is enough to show their worth:

- Setup IDP and default wildcard certificates are critical for cluster set up, across all environment types
- Other important items (storage, logging, registry, etc) should include information about third party integrations, as many users rely on third party tools with their Openshift Deployments
- Logging and alerting may be less critical in sandbox environments without developer workloads

These results were used in a [new design](https://github.com/openshift/openshift-origin-design/pull/432) for an upcoming version of OpenShift. The findings can also be used more generally to understand what a typical user may have set up on their development/production clusters versus a sandbox cluster.
