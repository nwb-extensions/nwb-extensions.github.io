---
title: "Sharing Guidelines"
layout: default
excerpt: "Sharing Guidelines"
sitemap: false
permalink: /sharing_guidelines
---

# Guidelines for sharing NWB:N extensions (NDX)
* Version: 0.3.0 (DRAFT)
* Authors:
   * Oliver Ruebel
   * Andrew Tritt
   * Benjamin Dichter
   * Ryan Ly
* Last update: October 16, 2019


## Overview
The purpose of this document is to define the requirements and strategy for sharing format extensions for NWB:N, so called Neurodata Extensions (NDX).

### Definitions

* The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).
* **“Neurodata Extensions” (NDX)** refer to extensions to he NWB:N data standard. NDX MUST be described by a formal format specification using the NWB:N specification language.
* **“Internal NDX”** refer to extensions used within a particular lab, organization or project that are not intended for use outside of the particular organization.
* **“Public NDX”** refer to extensions intended for use by the public (or specific larger community).
* **“NDX Catalog”** refers to the public catalog for NDX. The NDX Catalog is implemented via a dedicated public GitHub organization at [https://github.com/nwb-extensions](https://github.com/nwb-extensions).
* **“ndx-src”** repository refers to the (typically user-owned) code repository used to manage the sources of the extension.
* **“ndx-record”** repository refers to the Git repository as part of the NDX catalog used to register the extension with the catalog (this includes basic metadata about the NDX and information needed for install and deployment).

## Requirements for sharing extensions
Public NDX MUST follow the rules outlined below in order to be considered compliant. Internal NDX are also highly  RECOMMENDED to follow the same rules outlined below as much as possible.

1. Releases of extensions MUST minimally include:
   1. The complete YAML(JSON)  source and namespace files for the NDX, which MUST be compliant with the NWB:N specification language. In addition to “name”, and “schema”,  the namespace specification further MUST include the “author”, “contact”, and “version” of the namespace. The version number MUST follow the <a href="{{ site.url }}{{ site.baseurl }}/versioning_guidelines">NWB:N semantic versioning rules</a>.
   1. LICENSE file detailing the licence for the NDX. Permissive licenses SHOULD be used if possible. BSD licence is RECOMMENDED. In particular for release via the NDX Catalog (see Sec. 4ii), the licence MUST include language giving permission to members of the GitHub organization to distribute the extensions.
   1. Release notes detailing the changes between extension versions. Release notes MAY be included in the detailed RST documentation or as a separate RELEASENOTES.md/rst file.
   1. Requirements file detailing dependencies on other NDX and where they can be installed from. This is required as the namespace.yaml only includes the names of namespaces that are being included.
1. Releases of extensions SHOULD further include:
   1. Source for generating the YAML specfication using the PyNWB/HDMF extensions APIs. By sharing the sources eases maintenance, testing, and reuse of the NDX.
   1. Additional documentation in Sphinx RST format describing the NDX, credits, legal, and acknowledgements.
   1. README file with additional details about the NDX.
1. Releases of NDX MAY further include:
   1. Custom Python plugins (e.g., Container classes for neurodata_types) for PyNWB. This is RECOMMENDED to make the NDX accessible to end users and has the advantage that custom functionality for interacting with the data can be defined.
   1. OPTIONAL custom Matlab plugins for MatNWB for representing neurodata_types.
1. Performing releases:
   1. To ensure compliance with the semantic versioning rules, public NDX MUST be released in a persistent fashion (i.e., sources of a particular version MUST not be modified after release and MUST remain accessible).
   1. Public NDX MUST register with the NWB:N extensions catalog. To register with the catalog, a public NDX MUST create a ndx-record Git repository as part of the NWB:N extension GitHub organization. An ndx-record repo contains the descriptions needed for the catalog and deployment, i.e. the sources of the extension MAY be hosted in a different public ndx-src repository.
   1. Public ndx-src repositories SHOULD use Git tags to ensure compliance with (4i) and NDX SHOULD follow sharing strategies outlined in the NDX Catalog's guidelines and strategies for sharing extensions. Note, software versions managed via Git tags may differ from the version of the extensions namespace. However, both MUST follow semantic versioning rules.
1. Naming namespaces and repositories:
   1. The **name key** of the namespace for the extension SHOULD generally follow the following naming conventions:
      1. Use the naming schema “ndx-myname”, e.g., “ndx-cortical-surface”
      1. Use short and descriptive names
      1. Use only lower-case ASCII letters (no special characters)
      1. Use “-” to separate different parts of the name (no spaces allowed)
   1. The **namespace YAML file** with the specification of the namespace SHOULD have the same name as the name key of the main namespace. Here the ndx prefix MAY be ommitted and the ``namespace.yaml`` SHOULD be added. E.g., if the name of the namespace is "ndx-cortical-surface", then the YAML file would be called "ndx-cortical-surface.namespace.yaml".
   1. The **ndx-record repository** as part of the NDX Catalog MUST have the same name as the name key of the main namespace of the NDX i.e., “ndx-myname”)(e.g., “ndx-cortical-surface”). This strategy helps ensure that there are no name conflicts between public NDX namespace names.
   1. The **ndx-src repository** of an extension SHOULD generally follow the following conventions:
       1. Have the same name as the name key of the main namespace of the NDX (i.e., “ndx-myname”)(e.g., “ndx-cortical-surface”)
       1. Use GitHub (preferred) (or other public Git hosting service)
       1. Include a description and URL
       1. Specify at least the following GitHub topics: ndx-extension
   1. The python package for the NDX SHOULD have the same name as the name key of the main namespace of the NDX, where hyphens are replaced with underscores (i.e., “ndx_myname”)(e.g., ``from ndx_cortical_surface import CorticalSurface``)
