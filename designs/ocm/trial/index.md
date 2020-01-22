---
parent: OCM
version: 4.0
---

# Trial Flow (try.openshift.com)

- Users navigating to try.openshift.com will get a trial version of the multi-cluster manager interface.
- Users will first be prompted to login, then they will see the instructions for creating a self-managed cluster.
- For the trial page, the instructions are displayed in a full screen view (not in a side panel).

![03](img/new-3-steps.png)

- The left navigation pane will be hidden because the only action users can take at this time is creating a new cluster through the installer.
- The blue informational box will appear at the top of the page, above the installer information to welcome the first time user to the platform. (Note, the exact content is TBD for this section)
- Once users complete the external installation steps and the cluster installation is in progress, users will need to follow the link shown in step 3 to see the cluster details on cloud.openshift.com.
- Regardless of how many clusters the user already has installed, arriving at try.openshift.com will always load this instructional page to "try it."
