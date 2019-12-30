---
parent: Administrator
version: 4.0
---

# Dashboard

## General
* The dashboard view of the status page will be accessible by clicking the dashboard icon next to the page title, and will include information regarding `Health`, `Resource Quotas`, `Resource Usage`, and project `Details`.

### Resource Quotas

![quotas](img/quotas.png)

* Resource quotas will be shown on the dashboard view in individual sections.
* The card title will be the name of the resource quota, and will link to the resource quota's [details page](http://openshift.github.io/openshift-origin-design/web-console/4.0-designs/resource-quota/resource-quota).
* Four gauges will show CPU Request, CPU Limit, Memory Request, and Memory Limit.
  * If a resource quota does not specify any of these four quotas, the gauge will be shown with a fully green threshold arc and will read "No maximum."
