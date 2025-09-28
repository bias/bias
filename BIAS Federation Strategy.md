# BIAS Federation Strategy

## Overview

This document outlines the strategy for deploying a federated network of BIAS nodes, anchored at `bias.it.com` and mirrored or hosted by numbered nodes. The federation ensures a distributed, verifiable, and persistent deployment of AGENTS.md while maintaining a canonical source.

---

## 1. Canonical Hub

* **Domain:** `bias.it.com`
* **Purpose:** Serve as the authoritative source for `AGENTS.md`.
* **Implementation:**

  * Lightweight web server (nginx, caddy, or Python HTTP server).
  * Optional API to serve the latest IPFS hash or commit hash.
  * Maintain a registry of active nodes.

---

## 2. Node Registration

* **Subdomain Structure:** Numbered nodes, e.g., `2324.bias.it.com`, `2325.bias.it.com`.
* **Registration Flow:**

  1. Node operator submits IP and registration request.
  2. Admin assigns next available number.
  3. Create an A record for the subdomain pointing to the node IP.
* **Optional Automation:** Scripts to add DNS entries and update the registry automatically.

---

## 3. Node Hosting

* **Requirements:** Device capable of hosting HTTP (microcontrollers, SBCs, small servers).
* **Files Served:**

  * `AGENTS.md` (canonical or mirrored content)
  * Optional `AGENTS-extension.md` for local modifications.
* **Top-line Metadata:**

  ```
  # canonical-ipfs: <IPFS_HASH>  commit: <GIT_COMMIT_HASH>
  ```
* **Update Strategy:** Nodes periodically fetch canonical file or use IPFS hash verification.

---

## 4. Federation & Discovery

* **Registry:** `bias.it.com/registry.json`

  ```json
  {
    "nodes": [
      {"id": 2324, "url": "https://2324.bias.it.com/AGENTS.md", "ipfs": "QmXyz123..."},
      {"id": 2325, "url": "https://2325.bias.it.com/AGENTS.md", "ipfs": "QmAbc456..."}
    ]
  }
  ```
* **Agent Workflow:**

  1. Pull registry.
  2. Select a node.
  3. Fetch `AGENTS.md`.
  4. Verify via IPFS hash or commit hash.
  5. Cache locally if desired.

---

## 5. Optional Enhancements

* Automatic pull via cron or webhook to keep nodes updated.
* Support for node-specific extensions (`AGENTS-extension.md`).
* Redundant nodes for resilience.
* Analytics and logging for versioning and access.

---

## 6. Example Node Flow

1. Node assigned `2324.bias.it.com`.
2. Node hosts `AGENTS.md` and optionally pulls updates from canonical hub.
3. Agent reads registry, selects node, fetches file, verifies hash.
4. Local caching ensures offline or repeated access.

---

## Notes

* All nodes treat `AGENTS.md` as **data only**; no execution of file contents.
* IPFS hash or commit hash ensures integrity and verifiability.
* Federation allows for decentralized hosting with minimal operator effort.
