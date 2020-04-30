---
parent: Conventions
---

# Editing

## Edit inline

Users can edit some details directly inline, like the pod count.

![edit inline](../images/edit-inline.png)

---

## Edit inline forms

Users can edit forms inline directly, like on the "Environments" tab.

*Default view shows editable fields:*

![edit inline form 1](../images/edit-inline-form.png)


*When users edit and save, a success appears inline:*

![edit inline form 2](../images/edit-inline-form2.png)


*When users edit and save while having an error, an error message appears inline:*

![edit inline form 3](../images/edit-inline-form3.png)


*When users go to a view where they could typically edit, but the inputs are being controlled through another resource, a message appears inline explaining this and pointing to the source:*

![edit inline form 4](../images/edit-inline-form4.png)

---

## Edit links

Some details / field inputs link to modals for editing information.

*Field inputs that can be edited are links and show an "edit" icon (pencil):*

![edit link](../images/edit-link.png)


*An edit modal appear and allow users to edit within the modal:*

![edit link modal](../images/edit-link-modal.png)

![edit link modal 2](../images/edit-link-modal2.png)

---

## Edit in YAML tab

Most resources have backing YAML that can be edited directly in their YAML tab.

**Editing with YAML only:**

*Some resource types can only be edited via YAML in their YAML tab:*

![edit yaml tab yaml only](../images/edit-yaml-tab-yaml-only.png)

---

**Editing with free switching between Form & YAML:**

*Some resource types can be edited in their YAML tab with both a form and YAML editor:*

![edit yaml tab form or yaml](../images/edit-yaml-tab-form-and-yaml1.png)

The user is able to freely switch between the two editors and changes are preserved across them. The YAML view is generally the default to allow for quick reference of the more complete YAML for read only tasks like status checking.

![edit yaml tab form or yaml 2](../images/edit-yaml-tab-form-and-yaml2.png)

---