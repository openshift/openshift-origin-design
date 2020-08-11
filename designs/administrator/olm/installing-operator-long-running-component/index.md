---
parent: Administrator
version: 4.7
---

# Operator Installing with Long Running Component

Shortly after the new screen to Convey an operator is installing was developed, it was realized that other actions in the console could make use of a similar interaction. This design conveys a more generic version of the operator installing screen, and examples of perhaps how other actions could use a similar interaction.

## Operator Installation

### Installing an operator
![Install operator](img/longRun-1-1-installing.png)

![Installed operator](img/longRun-1-2-installed.png)

### Installing an operator with required custom resource

![Install operator CR](img/longRun-1-3-installingCR.png)

![Installed operator CR](img/longRun-1-4-installedCR.png)

### Manual approval required

![Install operator manual approval](img/longRun-1-5-manApprove.png)

### Error occured

![Install operator error](img/longRun-1-6-error.png)

## Long Running Component

### Component Elements
- Spinner, progress bar, or status icon
- Title
- Message text
- Inline alerts (as needed)
- Primary and secondary actions (as buttons or links, max 2 per line)

### Other Full Page Examples

![Full page upload](img/longRun-2-1-upload.png)

![Full page create](img/longRun-2-2-create.png)

![Full page icon](img/longRun-2-3-icon.png)

![Full page table](img/longRun-2-4-table.png)
- Table could be separate from component.

### Modal Examples

![Modal bar](img/longRunModal-3-1-bar.png)

![Modal spinner](img/longRunModal-3-2-spinner.png)

![Modal icon](img/longRunModal-3-3-icon.png)