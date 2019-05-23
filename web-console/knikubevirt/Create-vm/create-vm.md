# Create A Virtual Machine

## Launching the Wizard

![Create VM](img/Create-vm.png)

When no virtual machines exist, the Virtual Machines section of the UI will include quick access to the Create Virtual Machine wizard in its empty state.


## Step 1: Basic

![Basic step](img/Step-1-basic-template.png)

The wizard has 5 steps: Basic, Networking, Storage, Advanced, and Review.

The first (alphabetical) template is selected by default if available. Provision Source, Operating System, Flavor, and Workload Profile are pre-filled by the template, but only Flavor can be modified between either the predefined option or custom. The user can switch to a different template, or choose the top-most “None” option to not use a template at all.

The “Start virtual machine on creation” checkbox will do exactly that. The “Create new template from configuration” checkbox will be enabled if the user changes the Provision Source, OS, Flavor, or Workload Profile fields.

Once a name is provided the user can create the VM via the "Create virtual machine" action. Clicking this button will immediately bring them to the “Review” step and initiate the creation/import process.

If the user modifies the OS, Flavor, or Workload profile, the “Create new template from configuration” checkbox will no longer be disabled.


## Fields

## Namespace field

![No namespace](img/Step-1-basic-namespace.png)

If the user initializes this wizard while viewing “All Projects” without a specific namespace selected, a new required Namespace field should appear above the template dropdown.

## Template Field

### Template selected

![template chosen](img/Step-1-basic-template.png)

Template automatically loads the first (alphabetical) template and fills in the Provision Source, Operating System, Flavor, and Workload Profile. Only Flavor can be changed by the user between the template-defined default (Medium in this case) or Custom.

### Template error

![template error](img/Step-1-basic-template-2.png)

Every template should be shown within the Template dropdown. If the selected template will not be able to run on the cluster (because the CPU family is incompatible or a Machine Type is unavailable) a warning message should be shown with a link to relevant documentation.

### No Template State

![No template](img/Step-1-basic-no-template-chosen.png)


If no templates are available the Templates field should be disabled with inner text of “No templates available”.

Because a Provision Source has not been chosen, the OS, Flavor, and Workload Profile dropdowns should be disabled.

As soon as the OS, Flavor, or Workload profile fields are modified, the “Create new template from configuration” checkbox will no longer be disabled.

## Provision Source Field

### Import

![Import](img/Step-1-basic-import-1.png)

Virtual machines can be imported from a curated list of supported providers.

#### VMWare vCenter

![VMWare](img/Step-1-basic-import-2.png)

The user chooses Import as the Provision Source and then selects VMWare as the Provider.

![vCenter](img/Step-1-basic-import-3.png)

If VMWare is chosen, a new “vCenter instance” field appears. The user clicks it to see a list of previously-connected vCenter instances that have been stored as Kubernetes Secrets. The user selects one.

![vCenter-2](img/Step-1-basic-import-4.png)

When a vCenter instance is selected, the first (alphabetical) virtual machine along with its OS, Flavor, and Workload Profile are automatically selected and filled in but remain disabled.

![vCenter Connection issues](img/Step-1-basic-import-5.png)

If the wizard cannot connect to the vCenter instance using the credentials stored within its Secret, an error message will be displayed. The user will need to fix the Secret’s credentials before continuing.


![vCenter new instance](img/Step-1-basic-import-6.png)

The user can also connect to a new vCenter instance by clicking Connect to new instance from within the dropdown.

![Checking credentials](img/Step-1-basic-import-7.png)

New fields for vCenter URL, vCenter Username, vCenter Password, and VM to import appear along with a checkbox to “Remember vCenter credentials” that is unchecked by default.

The vCenter URL field should include a syntax hint with the desired formatting. The user is likely to paste a variety of URLs, so any FQDN the user submits should be validated and automatically corrected before being used to communicate with vCenter’s API.

When the user clicks the “Check” button a text string appears below the button with a spinner to indicate that the credentials are being checked.

If the wizard fails to connect to vCenter using the provided credentials, an error similar to the one above for an invalid vCenter instance should be displayed directly below the vCenter Password field.


![vcenter connected](img/Step-1-basic-import-8.png)

If the connection to vCenter succeeds, the first (alphabetical) VM along with its OS, Flavor, and Workload Profile are automatically selected and filled in as usual. The “Remember vCenter credentials” checkbox also becomes enabled to allow the user to save them as a new Kubernetes Secret.

With the target virtual machine selected, the user can either quickly skip to Step 5 “Review” by clicking the “Import Virtual Machine” secondary action button, or click “Next” to proceed through the rest of the wizard.


### ISO

![ISO](img/Step-1-basic-ISO.png)

ISO enables the user to install an Operating System from existing installation media within ContainerDisk.

![ISO selected](img/Step-1-basic-ISO-2.png)

The user must select an ISO and then manually specify the OS, Flavor, and Workload Profile. None of those fields can be automatically pre-filled.

### Image

![Image](img/Step-1-basic-Image-1.png)

Image enables the user to deploy an appliance or OS from an existing OVF file from ContainerDisk.

![Image selected](img/Step-1-basic-Image-2.png)

With an OVF selected, the OS is automatically filled and locked. The user will still need to choose a Flavor and Workload Profile, and can customize the image via cloud-init.

### Appliance

![appliance](img/Step-1-basic-appliance-1.png)

Appliance enables the user to deploy an appliance or OS from an existing Appliance within ContainerDisk.

![appliance selected](img/Step-1-basic-appliance-2.png)

With an appliance selected, the OS is automatically filled in and locked. The user will still need to choose a Flavor and Workload Profile.

### PXE

![PXE](img/Step-1-basic-PXE-1.png)

PXE enables the user to install an OS and configure it over a network. PXE depends on DHCP to find the PXE Server on an L2 Network. If one is detected, it will automatically be selected in the Networking step (see Networking section) and a note will be displayed below Provision Source.

If a PXE-capable NIC cannot be found, one will be automatically created with the name “PXE” and selected by default.

## Operating System Field

Recommended minor version editing

![OS](img/Step-1-basic-Operating-system-1.png)

Only major version numbers are shown in the OS dropdown. The user selects one.

![OS minor version](img/Step-1-basic-Operating-system-2.png)

In situations where the minor OS version could be important (like versions of RHEL), a new dropdown for the minor version should appear next to the major version dropdown.

The latest recommended version should be pre-selected.

![OS error](img/Step-1-basic-Operating-system-3.png)

If the user changes the minor OS version to something else, a warning appears with a link to relevant documentation about what functionality may not be supported in earlier versions of the OS.

## Flavor Field

![Flavour](img/Step-1-basic-Flavour.png)

The user can choose from four flavors:

* Small - 2 vCPU, 4 GB Memory
* Medium - 4 vCPU, 8 GB Memory
* Large - 8 vCPU, 16 GB Memory
* Custom
* Tiny (default)

The “Custom” flavor allows the user to define Memory and vCPU manually.

## Workload Profile Field

![OS](img/Step-1-basic-workload-profile.png)

The user can choose from three workload profiles:

* High Performance
* Server
* Desktop

## Step 2: Networking
## Step 3: Storage
## Step 4: Advanced
## Step 5: Review


