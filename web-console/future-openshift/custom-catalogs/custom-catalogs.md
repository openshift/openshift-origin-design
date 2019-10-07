# Adding custom catalogs to OperatorHub

Admins can create custom catlogs in order to give admin console users the ability to add operators from other sources, beyond the default OperatorHub operator sources.

## Global Configuration

OperatorHub sources are found through: Administation > cluster settings > global configuration > OperatorHub / sources tab.

![global config](img/operatorhub-custom-catalog1.png)

![OperatorHub config](img/operatorhub-custom-catalog2.png)

## Sources

In the OperatorHub configuration, users can see the current default sources that are feeding into OperatorHub. These sources are technically "Operator Sources" and have a resource badge for "OS". Users can also create a catalog source from here, which would create a "catalog source" resource. From a user perspective, both of these sources are accomplishing the goal of populating OperatorHub with operators that they can leverage and keep updated. They will only be able to create catalog sources (not operator sources) from the UI, as the goal is to deprecate the use of operator sources in favor of using catalog sources.

![OperatorHub sources default](img/operatorhub-custom-catalog3.png)

If users "create catlog source" they will see a form to fill out details.

![OperatorHub catalog source form](img/operatorhub-custom-catalog4.png)

After the form is filled out and users select "create", they will see the newly created catalog source in the list.

![OperatorHub catalog source in list](img/operatorhub-custom-catalog5.png)

Once a new catalog source is created, admin users can see the operators from the catalog source from within OperatorHub.

![OperatorHub with custom catalogs](img/operatorhub-custom-catalog6.png)


## Actions

Custom catalog sources can be edited or deleted from the kebab menu in the list.

![edit catalog source](img/operatorhub-custom-catalog7.png)

If users delete a custom catalog source, they must first confirm the deletion by typing the catalog source name. The deletion confirmation step will also inform users that if a source is deleted, any operators already installed from the source will no longer receive updates.

![delete catalog source confirm](img/operatorhub-custom-catalog8.png)

For default operator sources, users cannot delete but only disable (and then re-enable if disabled).

![disable default operator source](img/operatorhub-custom-catalog11.png)

If users disable a default operator source, they must first confirm disabling by typing the operator source name. The disable confirmation step will also inform users that if a source is disabled, any operators already installed from the source will no longer receive updates.

![disable default operator source confirm](img/operatorhub-custom-catalog12.png)

The default operator source will now show the "availability" as "disabled" and users can re-enable through clicking the kebab menu, then selecting "enable."

![list disabled default operator source](img/operatorhub-custom-catalog13.png)


## Operator status for deleted catalog sources

On the installed operators, if a source has been deleted or disabled, the status will indicate the operator cannot receive updates.

![installed operators list status](img/operatorhub-custom-catalog9.png)

The details for the subscription will also indicate why the operator cannot receive updates.

![installed operator subscription status details](img/operatorhub-custom-catalog10.png)



