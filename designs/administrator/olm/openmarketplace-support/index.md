---
parent: Administrator
version: 4.4
---

# Red Hat Marketplace Support

Users can now install operators from the Red Hat Marketplace from within OpenShift Web Console via OperatorHub. Users will be linked to the Red Hat Marketplace to purchase operators and then are able to complete installation in OperatorHub.

## OperatorHub supports Red Hat Marketplace Operators

![Cluster dashboard status card message click](img/1-1-linktomarketplace.png)
- A link to the Red Hat Marketplace is provided for users to browse and purchase operators from the Red Hat Marketplace directly.
- Detailed text in OperatorHub is updated to now include a link to Red Hat Marketplace.
- Marketplace operators are displayed with a **Marketplace** badge.
- **Marketplace** is a new **Provider Type** filter to show only marketplace operators.

## Purchasing and Installing a Marketplace Operator

![Cluster dashboard status card message click](img/1-2-purchasemarketplace.png)
- Operators from Red Hat Marketplace will have a hint similar to the Community operator hint that describes this operator is from the Red Hat Marketplace and can be purchased.
- A **Purchase** button will now also be present for marketplace operators that links to Red Hat Marketplace for purchasing of that operator. At this time the UI is not able to determine when the operator has already been purchased so both the **Purchase** and **Install** buttons will always appear for marketplace operators that have not been installed.
- The buttons will be numbered to convey the expected flow of first purchasing and then installing the operator.

![Cluster dashboard status card message click](img/1-3-purchasemarketplace-installed.png)

- Once installed, marketplace operators still display the purchase button in case the user had not purchased the operator before installing it. The numbering is no longer icluded in the button labels.