# Operator-defined Namespace

Operator bundles can define what namespace they should be installed to, so that namespace is recommended to the user. The user can still change the installation namespace if desired.

The installed namespace is always conveyed to the user for understanding of the underlying behavior.

## No operator-defined namespace (existing behavior)

![Operator namespace not defined all](img/1-1-notarget-all.png)
- Namespace selection is read-only and fixed to openshift-operators.

![Operator namespace not defined single](img/1-2-notarget-single.png)
- All operators are available for installation.

## Operator-defined namespace - already exists

![Operator namespace defined all](img/2-1-targetExists-all.png)
- Namespace selection defaults to operator-defined namespace with option to change to openshift-operators.

![Operator namespace defined single](img/2-2-targetExists-single.png)
- Namespace selection defaults to operator-defined namespace with option to change to any other namespace.

## Operator-defined namespace - does not exist

![Operator namespace not created all](img/3-1-targetNotExist-all.png)
- Namespace selection defaults to operator-defined namespace with option to change to openshift-operators.
- When the not yet created operator-defined namespace is selected, the user is alerted that the namespace will be created.

![Operator namespace not created single](img/3-2-targetNotExist-single.png)
- Namespace selection defaults to operator-defined namespace with option to change to any other namespace
- When the not yet created operator-defined namespace is selected, the user is alerted that the namespace will be created.

## Operator-defined namespace - does not exist, monitoring recommended

![Operator namespace not created monitor all](img/4-1-targetNotExistMonitor-all.png)
- Namespace selection defaults to operator-defined namespace with option to change to openshift-operators.
- When the not yet created operator-defined namespace is selected, the user is alerted that the namespace will be created.
- Checkbox toggle is presented to enable monitoring on newly created namespace (selected by default.)

![Operator namespace not created monitor single](img/4-2-targetNotExistMonitor-single.png)
- Namespace selection defaults to operator-defined namespace with option to change to any other namespace
- When the not yet created operator-defined namespace is selected, the user is alerted that the namespace will be created.
- Checkbox toggle is presented to enable monitoring on newly created namespace (selected by default.)