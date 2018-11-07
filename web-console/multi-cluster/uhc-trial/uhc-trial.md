# Trial Flow from try.openshift.com

- First time users navigating to try.openshift.com will get a trial version of the multi-cluster manager interface.
- Since no clusters exist, users will see the instructions for creating a self-managed cluster in full screen view (not in a side panel).
- Users land directly to this page in the trial flow.

![03](img/cluster-trial-3.png)

- The left navigation pane will be hidden because the only action users can take at this time is creating a new cluster through the installer.
- The blue informational box will appear at the top of the page, above the installer information to welcome the first time user to the platform. (Note, the exact content is TBD for this section)
- Once users complete the external installation steps and the cluster installation is in progress, the instructions will be replaced by the cluster details on the same page.

![04](img/cluster-trial-4.png)

- An empty state will appear while remaining data is still loading.

![05](img/normal-08B.png)

- Users can navigate to the Nodes tab to watch as individual nodes get installed.

![06](img/cluster-trial-5.png)

- Once all the data has finished installing and loading on the page, the full cluster details will appear.
- The left nav is still hidden for users who went through the trial case.
- Notice the "Upgrade" action in the top right corner of the page. This will allow users to transition to the full cluster-manager view that will make the left nav become visible.
