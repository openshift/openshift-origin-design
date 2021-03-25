---
parent: Conventions
---

# Quick start guidelines

## Goal
A number of teams are interested in contributing quick starts to the OpenShift console. If you’re creating quick starts, follow these guidelines to maintain a consistent user experience across all quick starts.

## What is a quick start?
![quick starts gif](../images/quickstarts.gif)
A quick start is a guided tutorial with user tasks. In the OpenShift console, you can access quick starts under the **Help** menu. They’re especially useful for getting up and running with a product.

### Designs
See the links below to view the latest quick start designs. New designs will be posted here each release.

**Quick starts in 4.6**
* [Admin side](http://openshift.github.io/openshift-origin-design/designs/administrator/4.6/quick-starts/)
* [Dev side](http://openshift.github.io/openshift-origin-design/designs/developer/4.6/quick-starts/)

**Quick starts in 4.7**
* [Navigation hints](http://openshift.github.io/openshift-origin-design/designs/developer/4.7/quick-starts-navigation-hints/)
* [Catalog page](http://openshift.github.io/openshift-origin-design/designs/developer/4.7/quick-starts-catalog/)

## How does a quick start work?
See [documentation](https://docs.openshift.com/container-platform/4.7/web_console/creating-quick-start-tutorials.html).

## How do I write a quick start?
See [documentation](https://docs.openshift.com/container-platform/4.7/web_console/creating-quick-start-tutorials.html).

## How do I contribute a quick start?

This section goes over the following:
* [Internal contributions](#internal-contributions)
  * [Phase 1: Planning](#phase-1-planning)
  * [Phase 2: First draft](#phase-2-first-draft)
  * [Phase 3: CCS review](#phase-3-ccs-review)
  * [Phase 4: UXD content review](#phase-4-uxd-content-review)
  * [Phase 5: Implementation](#phase-5-implementation)
  * [Phase 6: QE](#phase-6-qe)
* [External contributions](#external-contributions)

### Internal contributions

#### Process goals:
* To provide user-centric, functional quick starts for OpenShift users across a wide range of product areas
* To create a successful collaboration across teams (UXD, CCS, PM, etc.) for every quick start
* To define which teams are involved at each step of the quick start effort so that the end result is organized, clean, and in final form for users
* To respect the bandwidth and input of each team

#### Phase 1: Planning
Step 1:
Determine which product area needs a quick start.
  * Identify stumbling blocks or complex areas where we can enable user success with as little friction as possible. This information will be gathered from:
    * UXD user research.
    * Pain points shared from internal feedback sessions (Solution Architects, Technical Marketing, CEE/Customer Support, etc.).
    * Product Management input.
    * OpenShift or Kubernetes documentation.
    * Features we want to highlight or push more to entice users to try.
    * Areas we want to offer more opinionated views or flows. For example, there are likely cases where there are multiple ways for users to accomplish a task, but we’re recommending a method or suggesting how to get up and running with XYZ.
  * Note that regardless of where the quick start idea originates, quick starts should always be a part of an epic.

  * **Team responsible:** Product Management; UXD Design; possibly UXD Research
  * **Time frame:** Before epic prioritization
  * **Definition of done:** Product Management, UXD Design, UXD Research, and any other groups in this step agree on the product area to prioritize for a quick start. Epics are created in the relevant development project.

Step 2:
Plan user flows and interaction design.
  * UXD Designer, UXD Content Strategist, and CCS Content Strategist and/or Writer meet with Product Manager to determine the quick start’s goal and where we need to reduce friction or confusion in completing some tasks.
  * Collaborate on what the ideal user flow would look like. For example, what are the tasks and the sub tasks that users need to do in order to complete the quick start?
  * Work with Abi to figure out who we work with in CCS and tag in JIRA story.
    * Track prioritizations in JIRA.
    * UXD Content and CCS may not have bandwidth to review quick starts for external teams. If a full editorial review isn't possible, they might be able to provide a quick review and high-level feedback, or the external team can do a self-review using the writing guidelines in this doc as a reference.
  * (Optional) At this point, the UXD Designer is putting designs into Sketch and Marvel and getting feedback on interactions (not content yet). These will not be hi-fi designs.

  * **Team responsible:** UXD Design (including Dev Tools UXD); Product Management; UXD Content Strategy; CCS
  * **Time frame:** Conceptual design story (Sprint 1)
  * **Definition of done:**
    * UXD Designer creates interaction designs (not hi-fi) in Sketch and Marvel.
    * Product Manager reviews the interactions and provides feedback.
    * Stakeholder review (by Product Management and Dev Lead) is complete and all feedback is applied.

#### Phase 2: First draft
The contributing team writes the first draft of the quick start, using the following as references:
* Interaction design plans (to align with user flow)
* Technical documentation (to avoid contradiction and duplication of effort)
* Red Hat brand standards/PatternFly UX writing style guide (to align with brand voice and UX writing best practices)
* CCS style resources (to align with docs best practices)
Quick start [writing guidelines](#part-iii-how-do-i-write-a-quick-start) (to maintain consistency)

* **Team responsible:** Contributing team; UXD team
* **Time frame:** After conceptual design story (Sprint 2)
* **Definition of done:**
  * All steps, descriptions, messaging, and other content is completely written.
  * A draft has been reviewed by a UXD Designer and is ready for CCS review.

#### Phase 3: CCS review
CCS Technical Writer conducts a review of the draft.

During this step, have a checkpoint/feedback loop with CCS to give UX feedback on existing documentation. A smaller group can work together and identify what it will take to make existing documentation consumable for quick starts.

* **Team responsible:** CCS Technical Writing; UXD Design
* **Time frame:** Sprint 2
* **Definition of done:**
  * CCS Technical Writer reviewed all content and left edits/comments.
  * UXD Designer addressed all feedback.

#### Phase 4: UXD content review
Abi conducts a content review of the draft.

* **Team responsible:** UXD Content Strategy; UXD Design
* **Time frame:** Sprint 3
* **Definition of done:**
  * Abi reviewed all content and left edits/comments.
  * UXD Designer addressed all feedback.
  * Stakeholder review (by Product Management and Dev Lead) is complete and all feedback is applied.
  * The quick start was tested in a live console using ConsoleQuickStart CRD.

#### Phase 5: Implementation
UXD Developer implements the quick start design and written content in OpenShift.

* **Team responsible:** UXD Design; UXD Development; Product Management
* **Time frame:** Initial Development Sprint (Sprint 4)
* **Definition of done:**
  * Implementation addresses the main goals of the design and quick start draft.
  * #quickstart-ux-content team is tagged on GitHub for final review of content.
  * PR is reviewed by UX and PM and approved to be merged.

#### Phase 6: QE
QE does a review. UXD reviews and files bugs as needed.

* **Team responsible:** QE; UXD Design; UXD Development
* **Time frame:** Before feature freeze
* **Definition of done:**
  * High-severity bugs are resolved.
  * Low-severity bugs are triaged for following release.

#### Post-release: User testing (if prioritized)
If we have the time and resources for user testing, UXD Research will conduct testing.

#### Ongoing: Maintenance and localization
Quick starts are localized as part of [UXD's localization efforts for OpenShift](https://docs.google.com/document/d/1LnussSddUj9NVkQ2nQ61w42Hj9wAkzWEn1_qmyUXbo8/edit).

NOTE: There needs to be a flag and QE process to review and sign off on quick starts for each release to make sure they still work.

### External contributions
* External teams may contribute quick starts to the console through a CR in 4.7 and later versions of OpenShift.
* The teams should contribute their quick start to the relevant quick start GitHub repo.
* The GitHub should have the required tag to get UX feedback.
