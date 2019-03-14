# OAuth Global Configuration

- Users may be logged in as temporary administrators until they set up identity providers.
- When this is the case, a blue banner will appear at the top of all pages with a link to the OAuth configuration page, where users can take the necessary action to add an identity provider (IDP).

![1](img/combo-list.png)

- Users can also get to the OAuth configuration page from the Cluster Operators tab on the Cluster Settings page.
- OAuth is one of the [global configuration](http://openshift.github.io/openshift-origin-design/web-console/4.0-designs/global-config/global-config) resources in the list.

![2](img/combo-empty.png)

- General OAuth details are displayed at the top of the Overview tab while the identity providers section is displayed underneath.
- If no identity providers exist, there is an empty state to define what they are and provide a link to documentation.
- The primary `Add` action button provides options to create one of the various IDP types.
- Selecting an IDP type will open a full page form for the user to provide the relevant configuration details.
- Each IDP type will have different fields in the form pertaining specifically to that type. See [IDP forms](/#IDP-Forms) below for details.

![3](img/combo-OAuth.png)

- Once complete, the IDP will be added to the details page in a list view.
- Users can create multiple IDPs of different or of the same type.
- Display name will be used to differentiate between IDPs of the same type.
- All IDPs will appear in the list with the name, type, challenge, and login columns displayed.
- When Edit and Delete actions become available, they will be displayed in the kebab menu on the right side of the list.
- Clicking edit from the kebab menu will open the IDPs YAML.


## IDP Forms
- Each form will have a short description of the IDP the users have chosen to add.
- The four common parameters to all identity providers are `name`, `challenge`, `login`, and `mappingMethod`, and will be the first items in the list.
- Where appropriate, section headers may be used to divide the form into sub sections.

### HTPasswd
![4](img/HTPasswd.png)


### OpenID
![5](img/openID.png)


## IDP Overview pages
![6](img/combo-idp-overview.png)
- The details view of IDPs should have an Overview and a YAML tab, where users can edit the IDPs.
- Breadcrumbs will be shown to help the user navigate back to the OAuth configuration page or the Cluster Operators tab on the Cluster Settings page.
