---
parent: Administrator
version: 4.x
---

# Cron Jobs

## Create Cron Job
![](img/cron-job-list.png)
- Clicking the `Create Cron Job` button launches the creation form.

![](img/create-cron-job.png)
- Users are prompted to enter a name for the Cron Job, a schedule, and an image and command to run.
- By default, users are presented with a cron expression field and a link to documentation explaining the syntax.
- For more advanced use cases, clicking `Edit YAML` takes the user to an editor to manually configure the cronjob.

![](img/create-cron-job-2.png)
- Alternatively, users may select a period which presents the relevant fields for stating when the report should be run

## Suspend Cron Job
![](img/cron-job-suspend.png)
- A cron job can be run immediately by clicking the `Run Job` button.
- Jobs can also be temporarily suspended by selecting `Suspend Jobs` from the actions menu.

![](img/cron-job-suspended.png)
- When cron job has been suspended, a banner appears at the top of the page explaining the state and proving a button to resume normal activity.

![](img/cron-job-resume.png)
- The job schedule may also be resumed from the `Actions` menu.

## Jobs List
![](img/cron-job-jobs.png)
- The `Jobs` tab will contain a list of the jobs created by the selected cron job.
