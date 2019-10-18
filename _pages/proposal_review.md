---
title: "Proposal Review Process"
layout: default
excerpt: "Proposal Review Process"
sitemap: false
permalink: /proposal_review
---

# NWB Proposal Review Process

* Version: 0.2.0 (DRAFT)
* Authors:
  * Oliver Ruebel
  * Andrew Tritt
  * Benjamin Dichter
  * Ryan Ly
* Last update: October 18, 2019

## Overview

The purpose of this document is to define the process by which extensions to the NWB core standard are proposed,
evaluated, reviewed, and accepted. The goal is to facilitate community engagement while ensuring quality and utility
of the NWB data format.

### Definitions

* The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.
* **“Neurodata Extensions” (NDX)** refers to extensions to the NWB data standard. NDX MUST be described by a formal format specification using the NWB specification language.
* **“Internal NDX”** refers to extensions used within a particular lab, organization or project that are not intended for use outside of that group or context.
* **“Public NDX”** refers to extensions intended for use by the public (or specific larger community).
* **“Community Proposals”** refers to public NDX that are proposed to be integrated into the NWB core standard.
* **“NDX Catalog”** refers to the public catalog for NDX. The NDX Catalog is implemented via a dedicated public GitHub organization at [https://github.com/nwb-extensions](https://github.com/nwb-extensions) and website [https://nwb-extensions.github.io/](https://nwb-extensions.github.io/).
* **“ndx-custom** refers to the code repository used to manage the sources of the extension. This repository lives in the user's own Git space and is NOT part of the nwb-extensions organization.
* **“ndx-custom-record** refers to a specific record repository for deploying a particular extension as part of the NDX Catalog. This repo is part of the “nwb-extensions” GitHub organization.
* **“NWB Technical Advisory Board”** (TAB) is a high-level group of technical experts that reviews and plans technical activities regarding NWB. The TAB typically does not participate in day-to-day development activities but focuses on higher-level activities.
* **“NWB Executive Board”** (EB) is a group of scientists that supervises and coordinates NWB-related efforts, including development of NWB-related policies, funding, community outreach, and input for major technical decisions to the Technical Advisory Board.

## Lifecycle of extensions
Data standards are not static but evolve to adapt to changing requirements, clarify ambiguities, and fix bugs among others. The typical life-cycle of format extensions is outlined below.
<img alt="NDX Lifecycle" src="images/nwbn_extension_lifecycle.png" width="800" class="center-block">

## Main stakeholders of NWB extensions and their roles in the extension lifecycle
During active use of an extension, the main stakeholders of the extension include the developers of the extension, the NWB core development team, and the end-users using the extension. Review of extensions for acceptance to the NWB core data standard are led by the NWB Technical Advisory Board (TAB), the NWB Executive Board (EB), and the community review working group with comments, requests for changes, and updates provided by the other stakeholders (i.e., the extension developers, users, and the core developer team).
<img alt="NDX Stakeholders" src="images/nwbn_extension_stakeholders.png" width="800" class="center-block">

## Phases of the review of extensions
To guide and clearly communicate progress in the review and acceptance process, we use a multi-phased process for acceptance. As “Lab Extensions” have not entered the review process yet, they MAY either be internal or public NDX. NDX in review (i.e., NDX in any other phase than lab extension) MUST be public NDX.
<img alt="NDX Review Phases" src="images/nwbn_extension_review_phases.png" width="800" class="center-block">


## Process for creation, review and acceptance of extension
<img alt="NDX Review Flowchart" src="images/nwbn_extension_review_process.png" width="800" class="center-block">

The flow-chart above illustrates the main process for creation, review, and acceptance of extensions as part of the NWB core data standard. The process begins with a development team creating a new extension. During initial development, this will often be an internal NDX. Once a working draft of the extension exists, the team will submit the extension to the NDX Catalog by creating a pull request on the staged-extensions repository. The NWB core development team tests compliance of the extension with NWB standards (typically via automated tests). Once accepted to the NDX Catalog, the extension becomes a public NDX with “Lab Extension” status.

### The Community Proposal stage

To initiate the review of the extension for integration with the NWB core, the creators/owners of the extension submit the extension for review to the NWB Technical Advisory Board (TAB). A proposal for creating a Community Proposal may be submitted to the TAB at any time and MUST contain a public NDX and SHOULD include basic drafts of the additional documents required for review. One (or more) members of the TAB will conduct an initial review of the proposal. At this point, the TAB may: 1) request changes to the proposal, or 2) accept the proposal for review. If the proposal is accepted for review, the TAB will initiate the community review process and create a working group that is responsible for leading the community review. The working group may consist of members of the TAB, EB, developers, users, and experts from the community. The developers of the extension MAY contribute to the working group to facilitate the review, but MUST NOT lead the review and decision-making process.

At this point, the NDX is now a Community Proposal. The goal of the Community Proposal review phase is to complete the base technical review and associated review documents and to provide the community the opportunity to contribute to the review. All main review documents MUST be public via the NDX-custom-record repository to ensure the community can submit comments during the review. Comments and input are typically submitted directly as part of discussions of the working group or via GitHub issues and PRs on the NDX-custom-record repo (and NDX-custom repo if appropriate).

As a result of the community review phase, the working group may: 1) request changes to the NDX to address issues identified in the review, 2) reject the proposal (so that the NDX would remain a regular lab extension), or 3) submit the proposal to the TAB for acceptance.

### The NWB Core Proposal stage

If the NDX is accepted by the TAB, the working group may submit a proposal for creating an NWB Core Proposal. This proposal MUST contain a public NDX and MUST include the completed review documents from the Community Proposal review. One (or more) members of the TAB will conduct an initial review of the proposal and may: 1) request changes, or 2) accept the proposal for review as an NWB Core Proposal. If accepted for review, the extension is now an official “NWB Core Proposal.”

The “NWB Core Proposal” review phase is targeted at review of the technical merits and compliance with NWB standards and metrics. Depending on the results of this review, the TAB may decide to either: 1) reject the proposal (so that the NDX would remain a regular lab extension), 2) submit a request for changes to the working group (while, depending on the changes requested, either maintaining the core proposal status or changing status again to Community Proposal), or 3) accept the proposal and request integration with the NWB core. If deemed necessary, the TAB may also submit the proposal for approval to the NWB Executive Board (EB). The NWB community (including all users, developers, members of the NWN:N EB, TAB, and the broader community) may submit comments and requests for changes throughout the proposal review process. If accepted, the TAB will submit a request for integration of the extension to the NWB developer team. This is typically done by creating an issue on the corresponding repositories for the NWB core specification and APIs (e.g, PyNWB, MatNWB, nwb-schema, etc.).

If the integration is successful, the extension becomes officially part of the NWB core standard. If issues are identified as part of the integration process with the core, the developer team may submit requests for changes by creating corresponding issues on the NDX-custom-record repository. The additional changes must be reviewed and approved by the TAB and the review documents updated accordingly.

## Standards and metrics for review of NWB proposals

To support the formal review and evaluation of extensions to be integrated into the NWB core, we will develop a set of format review documents, questionnaires, and a rating system to enable the community and working groups to evaluate critical quality metrics of extensions in a formal and reproducible manner. This will help guide the review process and help ensure compliance of extensions with key requirements of the NWB data standard. Some relevant quality metrics and standards include:

1. **Rational**: Why do you want the extension and why should we (and others) want the extensions?
  1. **Precision**: Is the proposed extensions precise? i.e., can others easily understand what the extension is suggesting, the changes needed, and how it affects the current NWB standard? What changes are needed to the: (a) NWB data standard, (b) specification language, (c) storage backend, (d) APIs?
  1. **Significance**: Does the extension add significant functionality that is usable by a significantly large subset of end users?  Who is the audience? Is this a general-purpose change? Does it affect one group of NWB users more than others? What other standards (if any) provide this feature? (e.g., if an extension serves only the use-cases of one (or very few) labs, then it should remain a public extension but not be integrated into the NWB core.)
  1. **Innovation**: Does the extension contribute to the innovation of the NWB data standard? Does the extension follow best-practices and lessons-learned for similar data from other communities?
  1. **Alternate reasoning**: What reasons could there be for not making the extension? There will be counterarguments and part of the job of the review is to find and evaluation these. Getting ahead of these early on provides an opportunity to put these in perspective. You may use the quality and compliance questions as a guide, e.g., Does the extension affect existing data/code? Is it hard to learn? Does it lead to demands for further extensions? Does it lead to larger or more complex files/APIs/codes? Does it require extensive implementation effort and support? Does the extension meet compliance and quality criteria?
  1. **Alternatives**: Are there alternative ways of providing the feature to serve the need? Are there alternative ways to use the extension (e.g., including possible unintended uses)? Are there possible attractive generalizations of the suggested scheme?	 
1. **Quality**: Does the extension meet important quality metrics?
  1. **Human interpretability**: Does the extension define data in a way that it is easily interpretable by humans? Ultimately, data shared via NWB MUST be usable by others. As such it is important that the data be defined in ways that are interpretable.
  1. **Usability**: Is the extension defined in ways that make it usable by others? Beyond interpretation of the data this includes questions of whether the extension addresses common use cases effectively. Also, what kind of data use and design styles does it support or prevent? Does it ease the design, implementation, or use of the data or APIs? How easy is the extension to document and teach (to novices and experts)?
  1. **Efficiency**: Does the extension define data in ways that the data can be stored, written, and accessed (and searched) in an efficient manner? What difference does the extension have on existing data/code (What does the data/code look like with/without the extensions? What is the effect of not doing the extension?)
  1. **Completeness**: Does the extension capture all data/metadata required for interpretation of the data and does it meet [FAIR principles](https://www.go-fair.org/fair-principles/)?
  1. **Maintainability**: Is the extension designed in a way that it is maintainable? In particular, we need to ensure that the design of the extension does not interfere with backward compatibility now and in the future.
  1. **Implementability**: Is the extension implementable on all reasonable target backends, APIs (programming languages), and hardware? Has the extension already been implemented (if so, has it been implemented in the exact form, and if not why do you expect results to carry over from “similar” implementations)? Has the implementation been used by anyone other than the implementers? Does the extension lead to demands for new support tools or API features?
1. **Compliance**:  Is the extension compliant with the NWB standard and NWB principles?
  1. **Consistency**: Is the extension consistent with NWB (e.g., uses common naming conventions, reuses existing neurodata_types where possible, etc.).
  1. **Compatibility**: How does the extension affect compatibility with NWB? Does the extension break backwards compatibility of the NWB data standard? If so, how and why, and can the extension be changed to avoid (or at least minimize) compatibility issues? How does the extension affect existing data and codes?
  1. **Reusability**: Is the extension designed in a way that all (or important parts, e.g., neurodata_types) can be easily reused through the standard composition and inheritance mechanisms?
  1. **Uniqueness**: Does the extension add well-defined, unique capabilities to the NWB standard? e.g., is there overlap with functionality from existing features in the NWB core? If so, how can these overlaps be eliminated or minimized? Also, is there overlap with existing extensions and can/should a common extension be created to avoid the explosion of similar extensions and create a common standard. i.e., this process will require comparison of extension proposals with existing format components and proposals to avoid replication. The comparison process will be facilitated by the extension archive’s search, comparison, and suggestion tools.

The above list is a collection of the kinds of questions developers and users will commonly ask. The list is not exhaustive and should be expanded to cover points relevant to the specific extension proposal. For points not relevant to the specific proposal ideally indicate that they are not applicable (and why). The list is intended to provide a helpful template and guideline for reviewing extensions, rather than a strict form.

## Tools and methods for review

The public review of NDX proposals for integration with the NWB core is facilitated by the NDX Catalog and the corresponding ndx-custom-record repository. As part of the review process, the reviewers will create and maintain review documents (in RST format) as part of a /review folder of the corresponding ndx-custom-record repository. Comments and requests for changes can in this way be submitted and processed via GitHub issues and pull requests on the ndx-custom-record repository. Requests for changes created as part of the review process can then be submitted to the developer team via issues on the corresponding ndx-custom repository (or email if no issue tracker is available for ndx-custom). The NDX Catalog further facilitates the review process by enabling reviewers to search and identify related extensions. For internal discussion, the review teams may also decide to use other mechanisms (e.g., Google Docs) to prepare review documents and track discussions; however, the main review documents MUST be made public via the ndx-custom-record repository so that they are available for public review.
