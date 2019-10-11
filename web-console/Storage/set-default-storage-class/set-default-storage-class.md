# Set Default Storage Class
- Users with appropriate privileges can set a Default Storage Class and this is part of Storage section.
- THERE ARE TWO WAY USER CAN SET A DEFAULT STORAGE CLASS

### OPTION-1: Kebab menu option:

1. Login to OpenShift > Admin > Storage (menu) > Storage classes (sub-menu)
2. User can see list of ‘Storage classes' [list view] & there will be a label that indicates `default` storage class

3. Click on the kebab menu > select `Set as Default Storage Class`

 ![Set a Default Storage Class using kebab menu](img/stroage-opt1-start-1.png)

4. Pop-up opens with confirmation message.
5. User clicks on 'Confirm' button to make the change

 ![Popup menu with confirmation](img/stroage-opt1-popup-confirm-1.png)

6. Successfully modified ‘Default Storage class” [list view]
 
 ![Modified default storage class](img/stroage-opt1-done.png)

- NOTE: If user clicks on the kebab menu of the existing `default` then the menu in kebab `Set as Default Storage Class` will be disabled

 ![Popup menu with confirmation](img/stroage-opt1-start-1-disable.png
  )

### OPTION-2: Change the ‘default’ option from storage class detail page:

1. Login to OpenShift > Admin > Storage (menu) > Storage classes (sub-menu)
2. Click on a storage class name link and view details of the storage

 ![Set a Default Storage Class using edit ](img/stroage-opt2-start.png)

3. SC details are shown as below
4. Click on 'pencil icon' near the ‘default class status’

 ![Set a Default Storage Class using pencil icon](img/stroage-opt2-details.png)

5. Pop-up opens with a list of ‘SC’ and message shown below

 ![Popup menu to select a different Default Storage Class](img/stroage-opt2-popup-select.png)

 **Message:**
`Current default storage class will be changed to false when you
choose a different storage class from the list below.`

6. User can choose any SC as a default storage class and click on `Confirm` button.

 ![Popup menu with confirmation](img/stroage-opt2-popup-confirm.png)

7. Successfully modified ‘Default Storage class” [list view]

 ![Set a Default Storage Class using kebab menu](img/stroage-opt2-done.png)
