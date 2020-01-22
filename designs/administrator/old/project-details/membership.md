---
parent: Administrator
version: 3.11
---

# Membership

## Membership Page
![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/277164988/5/latest/6OZFnCR4v0QtzC6YQnJo790lEJAKKsxn42Oth8cJQA9ZlEXC8iLLVE1ObKFGMBEQzlEYjiNgjVVJYHWoj3FWygWaQlE/membership-1-2x.png)
  - The membership page should be organized similarly to the "other resources" page, with a table of objects and a dropdown to select which types of items to display
  - Initially all types of objects would be shown sorted by object type (Groups, Users, Service Accounts) and alphabetically within each of those groups.

![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/277164986/3/latest/KE78KlElDOGxKLLaLE53HYdlEw32qZW9JHGD4clEnRrm6h5QlEB74DkSohUeV5y2lEIQhwLleaLICHfkJMINKOZ2VLQlE/membership-3-2x.png)
  - Hovering over a role should show its description in a tooltip if it has one.
  - Clicking on a role should link to the role details page for that role.

## Adding and Editing Membership
![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/277164987/3/latest/jwmd75sLQOjixgJ4TilEHkU9UxbB7kbqoWbNONa6yDEEbQMLPG4WYesBukK7Y11kcsm6jNpBWNj3jSD5UqzcTbAlE/membership-4-2x.png)
  - Selecting edit from an object's kebab menu brings up a modal that shows all the roles currently attached to that object and enables users to remove them and attach more.
  - When applicable, role descriptions should be shown in the "add roles" dropdown with the associated role

![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/277164985/3/latest/Jhon0qLYlEeyp9etVI71ZeDXMY16lE0Qv0FDhgFI9IJghnaP8YYhb2zulULBok0zb7C5GiOJ6JeGCTtV7Q1AXYjglE/membership-5-2x.png)
  - Adding a new object behaves similarly to editing an object's roles but with an additional field for choosing which group or user to add (or two fields in the case of service accounts)
  - If more than one "member" object is added, all listed roles will be added to each object

## Roles List
![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/278002331/1/latest/vYEyS5r4Eac8uuUNl61ZNC7pH3B3hLY8SwU12laLirR0JtSVn07FKlEj9A2WPGtUnylrt5zk3AnvlA3lQE8x4AlE/membership-9-2x.png)
  - Cluster roles should be viewable from this page so that people can view their details without having to have them assigned to a users first and clicking through. They could be automatically hidden and exposed with a checkbox, or they could be omitted entirely if showing them does not make sense.
  - Clicking on a role should link to the details page for that role.


## Role Details
![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/277164991/4/latest/TuHaWwq4fb3hSw08huTa8NtrGjm8HFqmx3GzB973O7WmYD4GniVZYwJwXtrYqxVYc7kBFy2jVvQjlENZ3Ru5PkAlE/membership-6-2x.png)
  - The details tab for a role displays the description of the role as well as a list of the groups, users, and service accounts that have that role.

![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/277164992/4/latest/gMZchDbYpXYCVv9P5DO1cSapENi60KxGAjvzbJV7Vw8eklEkkw1VDqXAW0mYFKXEMjpZhxRbVSUxUF0lfpaRwOQlE/membership-7-2x.png)
  - The permissions tab contains a table of all the resources that the role can act on and which permitted actions the role has for that resource.
  - an "All Actions" chip should be used when a resource has full permissions. The list of all permissions can be viewed on hover.
  - Resources should be grouped by API group and sorted alphabetically.
  - Only resources that the current role can act on should be displayed in this table.
![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/282362985/3/latest/WKulE8GE5xO6KAWNigk1y9VUZrI23HY2CrxppHNtT0GMvS0ahYHGSEZXDZPmWinP3qIioO9HlEPvpolTfFQsbKewlE/membership-10.png)
  - In the special case that all resources have all permissions, only a single row will be shown in the table

## Responsive States
![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/277164990/5/latest/SovCyHYlOswF9qIzywAmJv4Ead1vi1MoqYtt2VdwSuR8KyEkHkaICwQehgtGdSLWHxzLlEvg9xYibtlmPPBmGOglE/membership-2.png)

![](https://redhat.invisionapp.com/static-signed/live-embed/14678702/277164989/4/latest/thpeAMlEtH5GSMCUDL5fM4ZpAeyvExUaWSjlEuFjdy14i8w8a4DzPhZ2f5lEpPPbITCGqEgshIQg6LslEKAxbVEhxglE/membership-8-2x.png)
