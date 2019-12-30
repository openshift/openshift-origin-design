---
parent: Administrator
version: 4.2
---

# Metrics

![Metrics page with an empty query field](img/metrics-empty.png)
- Navigating to the metrics page presents users with an empty query field and a prompt to enter a query in the box

![Metrics page with too many results to graph](img/metrics-full.png)
- If a query cannot be graphed, the results should still be shown in the table below, but the graph field will be populated by an error message until the issue is resolved or the offending query is switched off.

![Metrics page with un-graphable results](img/metrics-error.png)
- In some cases, we could make specific suggestions about how to improve a given query such as by adding a function

![Query field with autocomplete](img/metrics-autocomplete.png)
- As the user types, matching metrics and functions appear in a list below. Selecting or clicking on one will fill it into the query field

![Query field with specific autocomplete result](img/metrics-autocomplete-2.png)
- Results are narrowed as the entered text gets more specific

![Metrics page with a graph of results](img/metrics-results.png)
- When a valid query is entered, results are graphed and displayed in a table below the query.

![Metrics graph with a hidden series](img/metrics-hide-series.png)
- Clicking on a result row will toggle the visibility of that series in the graph. Hidden rows will have their legend color block replaced by an outline until they are turned back on by clicking the row again

![Metrics graph with two different queries](img/metrics-add-query.png)
- Multiple queries can be graphed at the same time by using the “Add query” action.
- Clicking on the caret by a query will hide and show the table associated with the query
- The option to collapse all query tables is available in the actions menu to help reduce noise from large result sets

![Metrics graph with one query turned off](img/metrics-hide-query.png)
- Toggling a query off will hide all of its series from the graph
- Queries that are turned off will not be run when the `Run Queries` button is pressed or the page is refreshed

![Opened metrics dropdown showing all possible metrics to enter](img/metrics-dropdown.png)
- The metrics dropdown contains a list of all available metrics grouped by their source. Clicking on a metric inserts it into a query field at the current cursor position
- This could also be a good place to add a “copy to clipboard” option to copy the metric name
