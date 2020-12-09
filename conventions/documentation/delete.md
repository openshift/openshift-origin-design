---
parent: Conventions
---

# Deleting


**Example (Project):**

When deleting a resource, a user recieves a [confirmation modal](http://openshift.github.io/openshift-origin-design/conventions/documentation/alerting.html#confirmation-modal) that they must confirm by typing the resource name. After a user confirms deletion, the resource is marked for deletion with an indicator of "terminating."

![deleting project](../images/delete-modal1.png)
![deleting project](../images/delete-modal2.png)
![deleting project](../images/delete-modal3.png)

---

**Example (Pod):**

Some resources do not require a confirmation by typing, but still must be confirmed via a [confirmation modal](http://openshift.github.io/openshift-origin-design/conventions/documentation/alerting.html#confirmation-modal).

![deleting project](../images/delete-modal-alt.png)
