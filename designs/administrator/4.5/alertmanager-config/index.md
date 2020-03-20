---
parent: Administrator
version: 4.5
---

# Alertmanager Configuration

![](img/alertmanager-first-time.png)
- The default alertmanager configuration will ship with 3 receivers, two of which need to be configured to correctly function.

![](img/alertmanager-editing-default.png)
- The default receiver will continue to display an informational alert when it is configured explaining its purpose.

![](img/alertmanager-incomplete-critical.png)
- When only one receiver remains unconfigured, the text of the notification should change from plural to singular.

![](img/alertmanager-editing-critical.png)
- When the Critical receiver is edited, an informational alert explains the purpose of the receiver.
- Once the receiver has been edited or deleted, this message no longer appears.

![](img/alertmanager-all-configured.png)
- Once all receivers except Watchdog are fully configured the notification is no longer necessary.

![](img/alertmanager-editing-watchdog.png)
- If the Watchdog receiver is edited, an informational alert explains the purpose of the alert and receiver.
- Similar to the Critical alert message, if the Watchdog receiver is edited, this message will no longer appear.
