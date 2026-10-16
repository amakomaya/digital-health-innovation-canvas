# The Digital Health Innovation Canvas

## Header: every canvas starts with three facts

Before any section is filled in, every canvas — markdown or JSON — carries three header fields:

| Field | What it captures |
|---|---|
| **Project Name** | The initiative this canvas belongs to |
| **Author By** | Who filled this canvas in, and is accountable for keeping it current |
| **Date** | When it was last filled or revisited — a canvas is a living document, and a stale date is itself a signal |

See [`canvas-template.md`](canvas-template.md) for the fillable version and [`schema.json`](schema.json) for the JSON field keys.

## The problem: pilotitis

Digital health has a well-documented pattern of failure. A pilot is scoped, funded, and built. It runs for 6–18 months in two or three districts. It produces a report showing real improvement. And then it stops — not because it failed, but because nobody ever answered the questions that determine whether a pilot *can* survive past its pilot phase: who owns this once funding ends, which government unit is accountable for it, whether it fits an existing regulatory or data-governance pathway, and whether its value is obvious enough that someone will fight to keep it funded.

Teams discover the gaps in these answers only once the pilot is over. By then, re-engineering the system to be government-owned, regulator-compliant, or interoperable with the national HMIS is far more expensive than it would have been at the start.

The Canvas has two moving parts: a **Governance Spine** that runs underneath everything and is checked continuously, and three **phases** — Discover, Design, Deliver — that move forward in order. The Spine is not a fourth phase. It is the thing that, when skipped, causes pilotitis.

---

## The Governance Spine — Safety, Compliance & Technology Framework

Most digital health teams treat regulation, clinical safety, data governance, and technical architecture as things to sort out once the product works. The Governance Spine inverts that: these four pillars are checked **before** Discover is considered complete, revisited at every phase gate, and never left for "later" — because "later," for a government-facing system, is usually after the point where fixing it is still cheap.

### 1. Regulatory Pathway

- **Classification:** Is this Software as a Medical Device (SaMD — standalone software making a diagnostic, monitoring, or treatment claim), hardware-integrated software (SiMD), or a non-clinical wellness/administrative tool making no such claim? Which risk tier does it sit in — low (administrative tools, general trackers), moderate (clinical decision support with a clinician in the loop), or high (autonomous diagnostic or therapeutic automation)?
- **Regulatory sandbox:** Nepal has no formal digital-health regulatory sandbox equivalent to Indonesia's Kemenkes RI sandbox. **This is a named gap, not a resource to point an innovator toward** — a team building a Class IIa/IIb tool in Nepal today has no dedicated pre-market testing ground and must work directly with the Department of Health Services / Department of Drug Administration on a case-by-case basis.
- **Local-content / procurement rules:** Government procurement law may apply to publicly funded systems, but there is no dedicated "local content" digital-health rule (contrast with Indonesia's TKDN requirement). Also a named gap, not an assumed equivalence.
- **Quality & safety standards:** ISO 13485 (quality management for medical devices), IEC 62304 (software lifecycle processes), and ISO 14971 (risk management) are international standards and apply regardless of jurisdiction — these should be treated as non-negotiable baseline, not optional polish.

### 2. Clinical Governance

- **Protocols:** Which national clinical or treatment protocol governs this (Department of Health Services treatment protocols; maternal, newborn, and child health protocols; relevant WHO guidance adopted in-country)?
- **Patient safety:** What happens when the system is wrong, offline, or gives a result a clinician would disagree with? Who is accountable for that failure mode, and is a human always in the loop before a clinical action is taken?
- **Adverse events:** Is there a defined pathway for reporting a harm or near-miss traced to the system — to whom, on what timeline, with what consequence?
- **Note on local guideline infrastructure:** Nepal does not have a single compiled, digitally indexed clinical-guideline system equivalent to Indonesia's PNPK. Where a project needs to cite "the guideline," it is often held across multiple DoHS documents rather than one canonical digital source — worth stating plainly rather than assuming a lookup exists.

### 3. Data Governance

- **Legal basis:** Nepal's closest general law is the Individual Privacy Act, 2075 (2018); there is **no health-sector-specific data protection law** equivalent to Indonesia's UU PDP. **Name this gap explicitly** in any canvas for a Nepal project — do not present the general Privacy Act as if it were a health-data-specific instrument, because it is not drafted as one.
- **Consent:** How and when is consent captured, in what language and modality (text assumes literacy a target population may not have), and can it be withdrawn?
- **Security and residency:** Where is data stored, who can access it, and does this match any stated organisational policy (e.g. "never publicly available," "DHO and MoHP only")?
- **End-of-project data fate:** What happens to the data if the funding, the organisation, or the government programme hosting it ends? This question is routinely skipped at Design time and discovered the hard way at Deliver time.

### 4. Tech Governance

- **Architecture and interoperability:** Does this integrate with Nepal's existing national digital health infrastructure — DHIS2, the national HMIS, the FHIR R5 interoperability layer (`hmis.gov.np/fhir`) — rather than exist as a data island? What standards does it speak: ICD-10, LOINC, SNOMED CT, or a locally defined terminology set where none of those fit?
- **Cybersecurity:** What controls exist — encryption in transit and at rest, authentication model, audit logging?
- **APIs:** REST/FHIR-based, with what authentication (OAuth 2.0 or equivalent) and transport security (TLS)?
- **Disaster recovery / business continuity:** What is the plan if the system is unavailable — does the underlying health workflow (the paper register, the in-person visit) still function without it, or does the digital layer's failure stop care?

**Gate check for the whole Spine:** can you name a specific answer — including "this is a known gap" where that is the honest answer — for all four pillars, before Discover is considered complete? A canvas that leaves the Spine blank and jumps straight to Discover's "exciting idea" questions is the single most common early step toward pilotitis.

---

## Phase 1 — Discover: understand the need, not the idea

Most failed digital health projects begin with a solution rather than a verified need. Discover forces the need to come first, and sits on top of the Governance Spine rather than ahead of it — the Spine's answers constrain what Discover can honestly propose.

### 1. Health Challenge

- What is the specific health-system problem, in epidemiological or operational terms a Ministry, district health office, or facility-in-charge would recognise — not in technology terms?
- What is the mechanism by which the problem occurs, and what are the barriers to solving it today?
- Does this align with the Nepal Health Sector Strategic Plan and the relevant SDG target, or is alignment unclear?

### 2. User Profiles

- Who are the primary users — patients, health workers, both — and what is their demographic and digital-literacy profile?
- What are their behaviours, motivations, and workarounds today?
- What is the urban/rural split, and does the design assume connectivity or literacy levels that don't hold for the hardest-to-reach users?

### 3. Stakeholder Map

- Which government bodies are relevant (Ministry of Health and Population, Department of Health Services, relevant provincial/local health offices)?
- Which clinical or professional bodies, payers (health insurance programmes), industry, or academic partners are involved?
- Who is the accountable owner, and have they confirmed this as a priority — or is that confirmation still pending?

**Gate to Design:** you can name the owning institution, the existing workflow this problem lives inside, and a measurable definition of success — and you have not skipped the Governance Spine to get here.

---

## Phase 2 — Design: build inside the governance envelope, not around it

### 4. Solution Architecture

- Which pillar does this sit in — a diagnostic tool, a treatment-support tool, a wellness tool, a data-capture tool?
- What risk classification does the architecture itself imply (tying back to the Spine's Regulatory Pathway answer)?
- Is this SaMD, hardware-integrated, or a non-clinical tool — and does the proposed build match the classification already named in the Spine, or has the design quietly drifted into a higher-risk category without revisiting that answer?

### 5. User Experience

- What are the core features, reduced to the minimum that solves the Discover-stage problem?
- Has usability been checked against the target user — not against the design team's own assumptions?
- Is this accessible in the language and modality the target population actually uses (audio/video where literacy can't be assumed; offline-first where connectivity can't be assumed)?

### 6. Enterprise Interoperability

- Does this integrate with Nepal's national platform layer — DHIS2, the national HMIS, FHIR R5 resources at `hmis.gov.np/fhir` — rather than as a standalone system?
- Does it need to exchange with facility-level systems (hospital information systems, laboratory or radiology systems) where those exist?
- What terminology coding applies (ICD-10, LOINC, SNOMED CT), and is bi-directional sync with offline resilience required, given the target users identified in Discover?

**Gate to Deliver:** the solution is designed inside a named governance, interoperability, and ownership model from the Spine — not one to be retrofitted after launch.

---

## Phase 3 — Deliver: evidence, handover, and scale

### 7. Evidence Plan

- What is the evidence pathway — pilot, then a more rigorous study design, then real-world evidence at scale — and what are the clinical or operational endpoints?
- What is the study design and sample size needed to actually answer the Discover-stage success definition, not just to produce a report?
- What are the cost-effectiveness metrics, and who is checking them?

### 8. Scale Strategy

- What is the go-to-market or go-to-government strategy beyond the pilot sites?
- What change management is needed at facility and health-worker level?
- What is the actual pathway to national scale — and who owns the decision to pursue it, or to stop?

### 9. Business Model

- What is the revenue or sustainability model — government budget line, institutional licensing, NGO/INGO partnership, insurance-linked, or some mix?
- Does this rely on a national health insurance reimbursement pathway, and is that pathway realistic for this tool's classification?
- What are the unit economics at scale, including the costs a pilot budget hides (maintenance, support, connectivity, device replacement)?

**Gate to "done":** a named institutional owner who did not build it runs this system, inside the governance model from the Spine, with evidence it changed an outcome — not merely that it was used.

---

## Value Anchor — Five Aims

At every phase, and at the Spine itself, weigh the design against five aims simultaneously. A digital health project that is strong on one and weak on the others is not balanced — it is fragile.

| Aim | What it asks |
|---|---|
| **Health Equity** | Does this work as well for the hardest-to-reach population as it does for the pilot district chosen for its good connectivity and motivated local team? |
| **Population Health** | Does this move a population-level indicator, not just an individual encounter? |
| **Patient Experience** | Is this better for the person receiving care — easier, faster, less confusing, more dignified? |
| **Provider Satisfaction** | Does this reduce or add to the health worker's workload and cognitive burden? |
| **Cost Reduction** | What is the true cost of running this at scale, not the pilot-budget cost? |

A canvas entry that cannot speak to all five is not finished — it has an unexamined blind spot, usually equity or provider burden, and that blind spot is where adoption fails later.

## How to use this

Copy [`canvas-template.md`](canvas-template.md), or start from [`schema.json`](schema.json) if you want a structured, machine-readable version. Fill the header (Project Name, Author By, Date) and the Governance Spine fully before writing anything in Discover. Revisit all of it — Spine included — at every major milestone. See [`initiatives/`](initiatives/) for genuinely filled, real-project canvases, and [`case-notes.md`](case-notes.md) for retrospective illustrations of how the questions apply.
