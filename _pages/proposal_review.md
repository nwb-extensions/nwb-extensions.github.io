---
title: "Proposal Review Process"
layout: default
excerpt: "Proposal Review Process"
sitemap: false
permalink: /proposal_review
---

# NWB:N Proposal Review Process

* Version: 0.2.0 (DRAFT)
* Authors:
   * Oliver Ruebel
    * Andrew Tritt
    * Benjamin Dichter
    * Ryan Ly
 * Last update: October 16, 2019

## Overview

The purpose of this document is to define the process by which extensions to the NWB:N core schema are proposed,
evaluated, reviewed, and accepted. The goal is to facilitate community engagement while ensuring quality and utility
of the NWB:N data format.

### Definitions

* The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 2119.
* **“Neurodata Extension” (NDX)** refers to an extension to the NWB:N data standard. NDX MUST be described by a formal format specification using the NWB:N specification language.
* **“Internal NDX”** refers to extensions used within a particular lab, organization or project that are not intended for use outside of the particular organization.
* **“Public NDX”** refers to extensions intended for use by the public (or specific larger community).
* **“NDX Catalog”** refers to the public catalog for NDX. The NDX Catalog is implemented via a dedicated public GitHub organization.
* **“NDX-src repository”** refers to the code repository used to manage the sources of the extension.
* **“NDX-record repository”** refers to the Git repository as part of the NDX Catalog used to register the extension with the catalog (this includes metadata about the NDX and information needed for install and deployment).
* **“NWB:N Technical Advisory Board”** (TAB) is a high-level group of technical experts that reviews and plans technical activities regarding NWB:N. The TAB typically does not participate in day-to-day development activities but focuses on higher-level activities.
* **“NWB:N Executive Board”** (EB) is a group of neuroscientists that supervises and coordinates NWB:N-related efforts, including development of NWB:N-related policies, funding, community outreach, and input for major technical decisions to the Technical Advisory Board.

## Standards and metrics for review of NDX

To support the formal review and evaluation of extensions, we will develop a set of format review documents, questionnaires, and rating system to enable the community and working groups to evaluate critical quality metrics of extensions in a formal and reproducible manner. This will help guide the review process and help ensure compliance of extensions with key requirements of the NWB:N data standard. Some relevant quality metrics and standards include:

1. **Rational**: Why do you want the extension and why should we (and others) want the extensions?
  1. **Precision**: Is the proposed extensions precise? I.e., can others easily understand what the extension is suggesting, the changes needed, and how it affects the current NWB:N standard? What changes are needed to: (a) NWB:N data standard, (b) specification language, (c) storage backend, (d) APIs?
  1. **Significance**: Does the extension add significant functionality that is usable by a significantly large subset of end users?  Who is the audience? Is this a general-purpose change? Does it affect one group of NWB:N users more than others? What other standards (if any) provide this feature? (E.g., if an extension serves only the use-cases of 1 (or very few) labs then it should remain a public extension but not be part of the NWB:N core.)
  1. **Innovation**: Does the extension contribute to the innovation of the NWB:N data standard? Does the extension follow best-practices and lessons-learned for similar data from other communities?
  1. **Alternate reasoning**: What reasons could there be for not making the extension? There will be counterarguments and part of the job of the review is to find and evaluation those. Getting ahead of these early on provides and opportunity to put these in perspective. You may use the quality and compliance questions as a guide, e.g., Does the extension affect existing data/code? Is it hard to learn? Does it lead to demands for further extensions? Does it lead to larger or more complex files/APIs/codes? Does it require extensive implementation effort and support? Does the extension meet compliance and quality criteria?
  1. **Alternatives**: Are there alternative ways of providing the feature to serve the need? Are there alternative ways to use the extension (e.g., including possible unintended uses)? Are there possible attractive generalizations of the suggested scheme?	 
1. **Quality**: Does the extension meet important quality metrics?
  1. **Human interpretability**: Does the extension define data in a way that it is easily interpretable by humans? Ultimately, data shared via NWB:N MUST be usable by others. As such it is important that the data be defined in ways that are interpretable.
  1. **Usability**: Is the extension defined in ways that make it usable by others? Beyond interpretation of the data this includes questions of whether the extension addresses common uses cases effectively. Also, what kind of data use and design styles does it support or prevent? Does it ease the design, implementation, or use of the data or APIs? How easy is the extension to document and teach (to novices and experts)?
  1. **Efficiency**: Does the extension define data in ways that the data can be stored, written, and accessed (and searched) in an efficient manner? What difference does the extension have on existing data/code (what does the data/code look like with/without the extensions? What is the effect of not doing the extension?)
  1. **Completeness**: Does the extension capture all data/metadata required for interpretation of the data and does it meet FAIR requirements?
  1. **Maintainability**: Is the extension designed in a way that it is maintainable? In particular, we here need to ensure that the design of the extension does not infer with backward compatibility now and in the future.
  1. **Implementability**: Is the extension implementable on all reasonable target backends, APIs (programming languages), and hardware? Has the extension already been implemented (if so, has it been implemented in the exact form and if not why do you expect results to carry over from “similar” implementations)? Has the implementation been used by anyone other than the implementers? Does the extension lead to demands for new supports tools or API features?
1. **Compliance**:  Is the extension compliant with the NWB:N standard and NWB:N principles?
  1. **Consistency**: Is the extension consistent with NWB:N (e.g., uses common naming conventions, reuses existing neurodata_types where possible etc.).
  1. **Compatibility**: How does the extension affect compatibility with NWB:N. Does the extension break backwards compatibility of the NWB:N data standard? If so, how and why, and can the extension be changed to avoid (or at least minimize) compatibility issues? How does the extension affect existing data and codes?
  1. **Reusability**: Is the extension designed in a way that all (or important parts, e.g., neurodata_types) can be easily reused through the standard composition and inheritance mechanisms?
  1. **Uniqueness**: Does the extension add well-defined, unique capabilities to the NWB:N standard? E.g., is there overlap with functionality from existing features in the NWB:N core? If so, how can these overlaps be eliminated or minimized? Also, is there overlap with existing extensions and can/should a common extension be created to avoid the explosion of similar extensions and create a common standard. I.e., this process will require comparison of extension proposals with existing format components and proposals to avoid replication. The comparison process will be facilitated by the extension archive’s search, comparison, and suggestion tools.

The above list is a collection of the kinds of questions developers and users will commonly ask. The list is not exhaustive and should be expanded to cover points relevant to the specific extension proposal. For points not relevant to the specific proposal ideally indicate that they are not applicable (and why). The list is intended to provide a helpful template and guideline for reviewing extensions, rather than a strict form.

## Tools and methods for review

The public review of NDX proposals for integration with the NWB:N core is facilitated by the NDX registry and corresponding NDX-record repository. As part of the review process, the reviewers will create and maintain review documents (in RST format) as part of a /review folder of the corresponding NDX-record repository. Comments and requests for changes can in this way be submitted and processed via GitHub issues and pull requests on the NDX-record repository. Request for changes created as part of the review process can then be submitted to the developer team via issues on the corresponding NDX-src repository (or email if no issue tracker is available for NDX-src). The NDX Catalog further facilitates the review process by enabling reviewers to search and identify related extensions. For internal discussion, the review teams may also decide to use other mechanism (e.g., Google doc) to prepare review documents and track discussions, however, the main review documents MUST be made public via the NDX-record repository so that they are available for public review.
