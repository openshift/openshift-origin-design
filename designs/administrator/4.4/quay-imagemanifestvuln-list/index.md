---
parent: Administrator
version: 4.4
---

# Quay Image Vulnerabilities List & Cluster Dashboard

Users that have installed the Container Security Operator now have direct access to known container image vulnerabilities in their cluster via the new **Image Vulnerabilities** nav item in the Administration section. This nav item lists the vulnerable images on the cluster and each can be viewed to see specific details and the pods that are affected by it. Users can also access this list filtered by pod from a pod's actions menu or filtered by namespace from the Cluster Overview's Image Vulnerability status popover.

Enhancements have been made to the **Image Vulnerabilities** status on the cluster dashboard as well, with clearer labeling and access to the **Image Vulnerabilities** list.

## Image Vulnerabilities List and Details

![ImageManifestVulnerabilities List](img/1imvlist.png)
- A new nav item  **Image Vulnerabilities**  is added to the Administration section.
- An brief overview of the vulnerable image is viewable in the list view with a link to the Quay instance the image is hosted on (for example, Quay.io.)

![ImageManifestVulnerabilities Details Overview](img/2imvoverview.png)
- Opening an Image Vulnerability shows additional details, including the list of Vulnerabilities related to that image and their severity.
- Each vulnerability also includes a link to view more information about it off cluster (such as the Red Hat Product Errata site).

![ImageManifestVulnerabilities Details Affected Pods](img/3imvpods.png)
- The Image Vulnerability also includes a list of **Affected Pods** that conveys which workloads are affected by these vulnerabilities.

## Access from Pods

![Pods List Actions](img/4podlistactions.png)
- Pods' action menus now include a **View Image Vulnerabilities** action that displays the Image Vulnerabilities related to that pod's image(s).

![ImageManifestVulnerabilities List Filtered Pod](img/5filteredimvlist.png)
- The user is taken to the **Image Vulnerabilities** list, with a filter applied to only show the vulnerability(s) that relate to that pod. The list may be empty if no vulnerability exists for that pod's image(s).
- The filter currently applies to the actual resources name, with the intent that it will also search the value that appears in the **Image Name** column.