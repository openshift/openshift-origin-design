---
parent: Administrator
version: 4.3
---

# Chargeback

## Reports
![](img/reports-list.png)

## Creating a Report
![](img/create-report.png)
- The `Report Query` selector contains a list of the queries that could be used to create a report.
- The namespace could be selected, or potentially filled in automatically depending on the selected query.
![](img/create-report-5.png)
- Checking `Run Immediately` would make the start and end dates required fields if applicable.

![](img/create-report-2.png)
- In addition to creating an unscheduled report, users would be able to choose from a number of available periods or manually enter a CRON expression.

![](img/create-report-3.png)
- Selecting a period provides the relevant fields for describing when the report should be run.

![](img/create-report-4.png)
- Selecting the `CRON` option would provide a text box to enter an expression.
- A link to documents explaining cron syntax would be provided in this case

## Queries
![](img/queries-list-create.png)
- Reports could also be created from the context of a query.

![](img/create-from-query.png)
- In this case, the `query` and `namespace` fields could be automatically populated with the details of the query.
- Ideally, the report name would be automatically updated with the name of the query and the period. Users could override this by typing in the `Report Name` box.
