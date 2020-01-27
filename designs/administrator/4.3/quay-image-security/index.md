---
parent: Administrator
version: 4.3
---

# Quay Image Security Integration

Users can now install the Container Security Operator  to bring Quay and Clair metadata into OpenShift. Installing this operator enables cluster administrators to monitor known container image vulnerabilities in pods running on their Kubernetes cluster. After deployment, there is no additional configuration for the operator to start querying the container registry for vulnerability data. If the registry supports image scanning, like Quay, then the vulnerabilities found will be exposed to the user by populating the **ImageManifestVuln resource** list and surfacing it on the cluster dashboard.

## Vulnerability details on the cluster dashboard

![Cluster dashboard security card 1](img/image1-73.png)
- A link to the Red Hat Marketplace is provided for users to browse and purchase operators from the Red Hat Marketplace directly.
- Detailed text in OperatorHub is updated to now include a link to Red Hat Marketplace.
- Marketplace operators are displayed with a **Marketplace** badge.