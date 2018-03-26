# Expand PVC
## Use cases

### To decide whether or not to expand a PVC
- As a user I want to be alerted if I am running out of storage capacity.
- As a user I would like to have an idea when I might run out of capacity. How urgently do I need to increase capacity? How quickly is my storage being consumed?
  - Time-based metrics would be helpful. Prometheus has the ability to [predict](https://www.robustperception.io/reduce-noise-from-disk-space-alerts/) when a user may run out of disk space.
- As a user I want to see what applications are consuming the storage I have been alerted about.
  - This is a gap. To my knowledge we do not currently have a way to see what applications are using a given PVC.

### If I decide to expand a PVC
- As a user I would expect to know how long the operation will take as well as what my next steps should be.
  - This can be very time-consuming for EBS. Unsure about other providers.
- As a user I want to be able to take a snapshot or otherwise backup my PVC before expanding to ensure that I don't lose data.
  - This is not currently possible through the UI.
- As user I want to see what applications will need to be restarted after the expansion is complete. (Perhaps with the option to restart them automatically upon completion.)
  - For most providers, pods need to be restarted to expand the filesystem in order for the expanded capacity to be available. Same gap mentioned above--we currently lack a way to show what applications are consuming a PVC.
- As a user I want to be alerted when the expansion is complete so that I can restart my applications.
  - Because events are ephemeral, and because this operation may take a long time, a user may miss the event.

## Wizard flows
- While several providers support expanding PVCs, CNS is simpler from an end user perspective because it does not require pods to be restarted.
- These designs attempt to create a similar flow while allowing for the differing requirements of different providers.

### CNS
- CNS does not require pods to be restarted after the volume is expanded.

![cns expand 1](https://redhat.invisionapp.com/static-signed/live-embed/126032072/287441524/1/latest/KreJYQMzn98iqB36pSxmlEXTmlEPUl2l0nZhn0YQ0sICR0CsXqunmCAXlEoGOB4aGdFWpmtXZFDUBfDfdnUQr3QdglE/CNS-expand-1.png)
- It would be good to inform users upfront which application(s) would be affected by this change.
- Should we allow users to snapshot or otherwise backup their data before expanding? Or provide some

![cns expand 2](https://redhat.invisionapp.com/static-signed/live-embed/126032072/287441525/1/latest/IRhWBlE2JcV4KlETUJZfVIMQuhevzZL5qHWrizjILDVspCteNHCf3T0jHVKWZG03UGZJwSL0PqAeuvbOvfIOzdZAlE/CNS-expand-2.png)
![cns expand 3](https://redhat.invisionapp.com/static-signed/live-embed/126032072/287441526/1/latest/E0taFDXGur437WDjLztAWh8App87buCYislhp1vkAgQQOVt8I8EbTzY8klzG7lykdYMOZTMEvOW40vasDMLXIQlE/CNS-expand-3.png)

### Other Providers
- For providers other than CNS, pods that have the PVC mounted will need to be deleted and recreated.

![generic expand 1](https://redhat.invisionapp.com/static-signed/live-embed/126032072/287441527/1/latest/s13xgbaQjIvma5GvEzMfy9QQ3LvsMFheCD111o1HxKZ86oqEqtDsrfm07LE4lne9hK9HlvhZj75TJU1SzdKQvglE/Generic-expand-1.png)
![generic expand 2](https://redhat.invisionapp.com/static-signed/live-embed/126032072/287441528/1/latest/04z5JJCo979USgyYyq9xxGjtWzPKDko7ZeIheAzHTMn9HcqMCnSlE7Kr53CbInFrLty9z0tr59rYJzoEMDRxbGglE/Generic-expand-2.png)
- Could we use generic triggers to recreate pods automatically, if a user chose to do so?

![generic expand 3](https://redhat.invisionapp.com/static-signed/live-embed/126032072/287441529/1/latest/xDkE2iFPwAotorblEqlExpLrlEwvI6DyZoxCVYrahkG8IM1TlEuIjcsO0GpgepctgHsPOPLjfkx5DSmMHrFoPNVe0wlE/Generic-expand-3.png)
- We should communicate at this point which applications will require new pods.
- Would we want to give users the option to take that action from this screen?
