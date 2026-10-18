# Filled Canvas: Aamako Maya — Reproductive, Maternal & Child Health, Nepal

**This is a genuine filled-in canvas for a live product**, not a retrospective illustration like the entries in [`case-notes.md`](../case-notes.md). It is maintained by Amakomaya, the product's owner, and will be revisited as the product changes. A structured JSON equivalent is at [`aamako-maya-nepal.json`](aamako-maya-nepal.json).

**Project Name:** RMNCH Program
**Author By:** Aamako Maya (आमाको माया — "Mother's Love")
**Date:** 2026-10-16

---

## Governance Spine — Safety, Compliance & Technology Framework

### 1. Regulatory Pathway

The core mother-facing app is informational and educational — scheduling, content, reminders — with no automated diagnostic or treatment claim, which places it as a **non-clinical wellness tool**, not SaMD, in its current form. The toll-free counselling line performs triage, but by a trained human (an Auxiliary Nurse Midwife), not by the software — this keeps the triage function outside automated clinical decision support today.

That classification is **live, not fixed**: three maternal risk scores (PRAMS, SORS, WHO Risk Score) are already being collected inside the DHIS2 programme, and the product's own strategy names "switching on" automated triage against those scores as its highest-value next technical act. The day that triage is automated, the classification question reopens — the system would move toward Class IIa clinical decision support, and the Governance Spine would need to be re-walked before that switch is flipped, not after.

**Named gap:** Nepal has no formal regulatory sandbox or SaMD classification framework equivalent to Indonesia's Kemenkes RI sandbox, and no ISO 13485 / IEC 62304 / ISO 14971 certification is evidenced in the organisation's own records. This is not a criticism specific to this product — it reflects the absence of a national digital-health regulatory pathway for any Nepali team to plug into — but it means the day automated triage is switched on, this organisation would be establishing its own quality and safety practice without a national framework to anchor it to, and should plan for that rather than assume one exists.

### 2. Clinical Governance

Danger-sign identification is triaged by a human on the counselling line, specifically because automated detection without a safe referral pathway is judged unsafe — the product has deliberately withheld automated triage and mental health screening for the same reason. This is the opposite failure mode from most digital health projects: not building ahead of safety, but visibly holding a built capability back until safety catches up.

**Named gap:** no single national, digitally indexed maternal/newborn clinical protocol repository exists to formally cite as "the governing protocol" (Nepal does not have a PNPK-equivalent); the content design is informed by DoHS guidance and WHO maternal/newborn care guidance but a formal adverse-event or near-miss reporting pathway specific to this product is **not evidenced in the organisation's own documentation** and should be treated as an open item, not assumed to exist.

### 3. Data Governance

Stated policy: mother data is available only to the DHO, the Government of Nepal, the related health post and management — **never publicly available**. This is treated as a founding value ("the mother's privacy comes first"), not a compliance afterthought, and is explicitly checked against before any data or analytics partnership is offered commercially.

**Legal basis — named gap:** Nepal's closest general law is the Individual Privacy Act, 2075 (2018); there is no health-sector-specific data protection law. The product's privacy commitment currently rests on its own stated policy and founding values rather than a health-data-specific statute, which is a real gap in the surrounding regulatory environment, not a weakness unique to this product.

**Consent model:** not formally documented in the organisation's own records at the level of detail this canvas would want (how consent is captured, in what language/modality, whether and how it can be withdrawn) — named as an open item.

**Data fate:** not evidenced — what happens to mother-level data if the organisation or a specific programme funding stream ends is not addressed in current documentation.

### 4. Tech Governance

The counselling programme runs on the national DHIS2-based data-capture platform (19,699 enrolled, 160 data elements, 27 indicators) rather than a standalone database, with a four-tier access model (mother / FCHV / health post / District Health Office) and scoped third-party access granted to at least one external partner organisation. The organisation separately maintains FHIR R5 interoperability work (16 profiles, `hmis.gov.np/fhir`) at the company level, though this canvas does not have evidence that the Aamako Maya product specifically consumes or exposes FHIR resources today, as distinct from the organisation's other HMIS work — worth distinguishing rather than implying by proximity.

The product is engineered offline-first by necessity (historically distributed by micro-SD card or shared device where a mother has no device of her own) — this is itself a resilience design, though a formal disaster-recovery/business-continuity statement for the platform side (DHIS2 programme uptime, backup policy) is **not evidenced** and is named as an open item rather than assumed.

**Gate check for the Spine:** Data governance values and the safety-sequencing discipline (collect first, trigger only once a pathway exists) are genuinely strong. Regulatory classification is correct for today's build but explicitly fragile the moment automated triage ships. Three sub-items — adverse-event reporting, formal consent documentation, and disaster-recovery policy — are named gaps rather than assumed to exist, consistent with this canvas's commitment to candour over brochure copy.

---

## Phase 1 — Discover

### 1. Health Challenge

Nepal has largely solved the first two of the "Three Delays" in maternal mortality (delay in deciding to seek care; delay in reaching a facility) — 57% of maternal deaths now occur *inside* health facilities (Nepal Maternal Mortality Study, 2021). The remaining risk has moved upstream and into the gaps between clinical visits: hypertensive disorders, anaemia and nutrition, mental and financial stress in migration-affected households, climate disruption to ANC/PNC attendance, and an information environment where unverified advice outpaces clinical guidance. The problem is not "mothers can't reach a facility" — it is "mothers are unsupported in the weeks between facility visits, and often unreachable by the health system in that gap." This aligns with the Nepal Health Sector Strategic Plan's shift toward continuity of care, though no formal SDG-indicator mapping is cited in the organisation's own documentation.

### 2. User Profiles

Primary users: pregnant and postpartum women — especially rural, low-income, low-literacy women without smartphones or reliable connectivity — who today rely on FCHVs (Female Community Health Volunteers), family elders, and informal/online advice between scheduled ANC/PNC visits. Danger signs between visits are frequently missed or acted on too late. The design deliberately includes the family: content is addressed to husbands and mothers-in-law after 28 weeks, because pregnancy decisions in this context are rarely made by the mother alone.

### 3. Stakeholder Map

MoHP and District Health Offices are the accountable government tier; Makwanpur District Government provided budget for the product in its 2013/14 district plan — direct evidence a palika will fund this, not merely endorse it. Clinical/academic partners include Tribhuvan University Institute of Medicine and Patan Academy of Health Sciences; international partners include WHO Nepal and UNICEF Nepal; community partners include FCHV networks and Mothers' Groups. **Measurable definition of "no longer a problem" is not yet established** — the single most honest finding in this canvas: the product has reach metrics but, by its own internal record, no outcome data on its own beneficiaries in fifteen years. Closing this is the stated priority of the 2026–2030 strategic plan.

**Gate check:** Partial pass. Owning institution, stakeholder map, and existing workflow are all clearly named. The measurable success definition is the open item carried into Deliver below.

---

## Phase 2 — Design

### 4. Solution Architecture

A mother-facing app and a toll-free, human-staffed counselling line, consistent with the "non-clinical wellness tool plus human-triaged service" classification named in the Governance Spine. The architecture has not drifted into automated clinical decision support — the deliberate withholding of automated risk-score triage is itself an architectural decision, not an oversight.

### 5. User Experience

Built around the mother's own LMP date, delivering ANC/PNC-synchronised content in audio/video/text so literacy is not a precondition, designed offline-first. Content schedule — first content from ~12 weeks, new content every two weeks to 28 weeks, then content addressed to the family — was designed in 2012 and has not changed, a sign of a stable, user-validated design rather than neglect, though it also means it has not been re-tested against a changed user base in over a decade.

### 6. Enterprise Interoperability

Integrates with the national DHIS2-based platform for the counselling programme (not a standalone database), with a four-tier access model. **Named gap:** no evidenced integration with facility-level hospital information systems, laboratory, or radiology systems — referral handoff today appears to rely on the ANM's direct action rather than a system-to-system data exchange, which is consistent with the low referral-loop closure rate noted in Deliver below.

**Gate check:** Strong pass on matching the Governance Spine's classification and on interoperating with the national platform rather than existing as an island. Facility-level interoperability is a named gap, directly relevant to the referral-closure problem.

---

## Phase 3 — Deliver

### 7. Evidence Plan

**This is the canvas's most important finding for this product.** Reach is well-evidenced: 100,000+ downloads, ~1,600 mothers engaged daily, 1,798 counselling notes (Jan–Jul 2025), 48 danger-sign cases identified and referred. **Outcome evidence is not.** The referral loop — the handoff from "danger sign identified" to "mother actually received facility care" — is recorded closed in only **4% of events (69 of 1,727)**. The number sometimes cited publicly as "lives potentially associated with timely referral" (19–20, Jan–Jul 2025) is explicitly an estimate of association derived from danger-sign counts using global mortality risk estimates — the organisation's own rule is "never write lives saved," and this canvas follows that rule. No formal study design, sample size, or cost-effectiveness metric exists yet for closing this gap; it is named as the top strategic priority for 2026–2030 rather than already underway.

### 8. Scale Strategy

Budget-line precedent (Makwanpur District Government, 2013/14) and institutional licensing precedent (One Heart Worldwide, 2023) both demonstrate the sustainability model has worked outside the founder's own capital, at least twice. Full operational handover — a government tier running the system without Amakomaya — is not evidenced at national scale; the organisation remains the operator of the core app and counselling line today. The named decision owner for closing the outcome-evidence gap and activating risk-score triage is the organisation's own 2026–2030 strategy, not an unassigned open question.

### 9. Business Model

Free at the point of use for mothers, always — held as a non-negotiable value since 2012. Institutions pay: government programmes, NGO/INGO partnerships, platform licensing, and health-system integration. No national health insurance reimbursement pathway is evidenced or claimed for this product; the model relies on institutional and donor funding rather than an insurance-linked revenue stream.

**Gate check:** Does not fully pass. A named, resourced, government-level owner exists for some components (DHO/MoHP data custodianship) but not for the core app and counselling service, which Amakomaya still operates. Outcome evidence — as opposed to reach evidence — does not yet exist. Both are openly named as current priorities rather than retrofitted into a success narrative.

---

## Value Anchor — Five Aims

| Aim | Assessment |
|---|---|
| **Health Equity** | The strongest explicit design target: devices provided where mothers have none, content designed for zero literacy, family addressed after 28 weeks. The unresolved equity question is whether the 4% referral-closure rate is evenly distributed or concentrated in the hardest-to-reach mothers — this has not been analysed. |
| **Population Health** | Reach is large and the risk-upstream framing ("Beyond the Three Delays") is well-evidenced at a national-statistics level. Population-level outcome attribution is the stated evidence gap. |
| **Patient Experience** | Strong by design: offline-first, audio/video for low literacy, Nepali-language, free at point of use, and a real human on a toll-free line. This is the product's most consistently strong aim. |
| **Provider Satisfaction** | FCHV/ANM tooling is explicitly built to mirror field workflows rather than impose a new one, consistent with the organisation's long-held "mirror the health worker's existing forms" principle. |
| **Cost Reduction** | Free-to-mother, institutions-pay model has two real funding precedents outside the founder's own capital. Full cost-per-outcome is not calculable without outcome data — the same gap as Population Health. |

**Weakest aim right now, and what's being done about it:** Not one aim in isolation — it is the evidence layer underneath all five. Reach and design intent are strong across the board; outcome measurement is the gap, named as the organisation's own top priority for 2026–2030. This canvas entry will be revisited when that work lands.

---

*Canvas filled honestly, including unresolved gaps, in the spirit of [`canvas.md`](../canvas.md)'s Governance Spine principle: naming a gap is cheaper than discovering it after a pilot ends. A canvas that only records strengths is not a canvas — it is a brochure.*
