---
parent: Administrator
version: 4.0
---

# Navigation

## Navigation Order

1. **Home**<br/>
  1.1 Overview<br/>
  1.2 Status<br/>
  1.3 Catalog<br/>
  1.4 Search All Resources<br/>
  1.5 Events<br/>
  ––––––––––––<br/>
  1.6 My Super Special CRD<br/>

2. **Operators**<br/>
  2.1 Kubernetes Marketplace<br/>
  2.2 Cluster Service Version<br/>
  ––––––––––––<br/>
  2.3 Catalog Sources<br/>
  2.4 Subscriptions<br/>
  2.5 Install Plans<br/>
  ––––––––––––<br/>
  2.6 My Super Special CRD<br/>

3. **Workloads**<br/>
  3.1 Pods<br/>
  3.2 Deployments<br/>
  3.3 Deployment Configs<br/>
  3.4 Stateful Sets<br/>
  3.5 Secrets<br/>
  3.6 Config Maps<br/>
  ––––––––––––<br/>
  3.7 Cron Jobs<br/>
  3.8 Jobs<br/>
  3.9 Daemon Sets<br/>
  3.10 Replica Sets<br/>
  3.11 Replication Controllers<br/>
  3.12 HPAs<br/>
  ––––––––––––<br/>
  3.13 Virtual Machine<br/>
  3.14 My Super Special CRD<br/>

4. **Networking**<br/>
  4.1 Services<br/>
  4.2 Routes<br/>
  4.3 Ingress<br/>
  4.4 Network Policy<br/>
  ––––––––––––<br/>
  4.5 My Super Istio Special CRD<br/>

5. **Storage**<br/>
  5.1 Persistent Volume<br/>
  5.2 Persistent Volume Claims<br/>
  5.3 Storage Classes<br/>
  ––––––––––––<br/>
  5.4 My Super Special CRD<br/>

6. **Builds**<br/>
  6.1 Builds<br/>
  6.2 Build Configs<br/>
  6.3 Image Streams<br/>
  ––––––––––––<br/>
  6.4 My Super Special CRD<br/>

7. **Service Catalog**<br/>
  7.1 Brokers<br/>
  7.2 Service Instances<br/>
  7.3 Bindings<br/>
  ––––––––––––<br/>
  7.4 My Super Special CRD<br/>

8. **Monitoring**<br/>
  8.1 Metrics<br/>
  8.2 Alerts<br/>
  8.3 Dashboard<br/>
  ––––––<br/>
  8.4 My Super Special CRD<br/>

9. **Extensions**<br/>

10. **Administration**<br/>
  10.1 Roles<br/>
  10.2 Role Bindings<br/>
  10.3 Service Accounts<br/>
  10.4 Projects<br/>
  10.5 Resource Quotas<br/>
  10.6 Limit Ranges<br/>
  10.7 Chargeback<br/>
  ––––––<br/>
  10.8 Cluster Manager<br/>
  10.9 VM Super Admin<br/>

## Design

* The default navigation background should be pf-black-900 (#292E34). When a primary navigation item is hovered or selected, the section background should be pf-black-800 (#393F44).
* Icons should be from the PatternFly library. See below for the complete list of icons.
* The default icon color should be pf-black-600 (#72767B). When a primary navigation item is selected, the associated icon should be pf-blue-300 (#39A5DC).
* The default text color should be pf-black-300 (#D1D1D1). When a navigation item is hovered or selected, the text color should be white (#FFFFFF) and the text should be semibold.
* Primary navigation text should be size 14. Sub navigation text should be size 12.
* Horizontal separators should be used to separate subsections within the same primary navigation section.
* The selected page in the navigation should have a vertical indicator on the left side in pf-blue-300 (#39A5DC).
  * When the nav item is collapsed (Ex: Workloads), the blue vertical indicator spans the entire nav item.
  * When the primary nav item is expanded, the blue vertical indicator is shown only on the specific secondary nav item.
* The fa-angle-down icon should be displayed for primary sections that are in the expanded state.
* When hovering over a collapsed primary nav section, the fa-angle-right icon should be displayed to the right of the name,

#### Icons

| Navigation Item | Icon |
| ----------------|------|
| Home | pficon-home |
| Operators | pficon-on-running |
| Workloads | fa-folder-open-o |
| Networking | pficon-network |
| Storage | pficon-storage-domain |
| Builds | pficon-build |
| Service Catalog | pficon-catalog |
| Monitoring | pficon-screen |
| Extensions | TBD |
| Administration | fa-gear |

![image 1](img/navigation.png)
