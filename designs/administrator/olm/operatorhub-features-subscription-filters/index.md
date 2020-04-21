---
parent: Administrator
version: 4.5
---

# OperatorHub 'Infrastructure Features' and 'Valid Subscriptions'

OLM provides a list of attributes that the operator developer can tag their operator with (or the operator is tagged with automatically), that describe its infastructure features, including ‘disconnected’, ‘FIPS mode’, and 'proxy'. This list is dictated by OLM as far as what attributes are available. There is also an attribute that designates which subscriptions (if any) the operator requires.

These new feature attributes should be surfaced in OperatorHub so that the admin can filter by them, as well as displayed on the Operators install page, along with the existing attributes, for awareness. Because a user likely wouldn't filter based on an operator requiring a subscrption (and not operators they already have a subscription to,) this attribute will just be surfaced in the operator install details for now.

## OperatorHub Filtering

![OperatorHub filters](img/1-1-OH-functionality.png)
- OperatorHub now has the new facet filter **Infrastructure Features**.
- Existing filtering functionality will be used for this new filter, where if any operator matches one of the selected facets, it will be displayed.
- In the future when the UI can detect what subscriptions the user has, we will likely surface a filter for "subscribed operators" or similar.

![OperatorHub filters](img/1-2-OHdeets-funcationality.png)
- The list of capabilities (if any) are conveyed in the details, if no features are specified the heading does not appear.
- The exact subscriptions that are valid (if any) is conveyed in the details, if no subscription is required the heading does not appear.
