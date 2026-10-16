# Filled Canvas: Aamako Maya — Reproductive, Maternal & Child Health, Nepal

**This is a genuine filled-in canvas for a live product**, not a retrospective illustration like the entries in [`case-notes.md`](../case-notes.md). It is maintained by Amakomaya, the product's owner, and will be revisited as the product changes — see the note on canvas dates below.

**Project:** Aamako Maya (आमाको माया — "Mother's Love") — mother-facing app, toll-free midwife counselling service, FCHV/ANM field tool, and a national DHIS2-based counselling programme
**Domain:** Reproductive, maternal, and child health (RMNCH), Nepal
**Date filled:** 2026-10-16
**Filled by:** Amakomaya

---

## Phase 1 — Discover

**Health system problem, in terms a Ministry or district health office would recognise:**
Nepal has largely solved the first two of the "Three Delays" in maternal mortality (delay in deciding to seek care; delay in reaching a facility) — 57% of maternal deaths now occur *inside* health facilities (Nepal Maternal Mortality Study, 2021). The remaining risk has moved upstream and into the gaps between clinical visits: hypertensive disorders, anaemia and nutrition, mental and financial stress in migration-affected households, climate disruption to ANC/PNC attendance, and an information environment where unverified advice outpaces clinical guidance. The problem is not "mothers can't reach a facility" — it is "mothers are unsupported in the weeks between facility visits, and often unreachable by the health system in that gap."

**Who experiences this problem today, and what do they currently do about it:**
Pregnant and postpartum women — especially rural, low-income, low-literacy women without smartphones or reliable connectivity — currently rely on FCHVs (Female Community Health Volunteers), family elders, and informal/online advice between scheduled ANC/PNC visits. Danger signs between visits are frequently missed or acted on too late.

**Existing system, register, or workflow this problem lives inside:**
The national ANC/PNC schedule and the FCHV/ANM field workflow, both of which already exist and are government-defined. Aamako Maya was built to extend that existing schedule into the gaps, not replace it — content is timed against the mother's own LMP-derived calendar, matching the ANC schedule she is already on.

**Accountable government/institutional owner, and confirmation this is a priority:**
MoHP and District Health Offices are the accountable tier; Makwanpur District Government provided budget for the product in its 2013/14 district plan — direct evidence a palika will fund this, not merely endorse it. The DHIS2-based Counselling programme sits inside the national data-capture platform rather than as an island system.

**Measurable definition of "no longer a problem":**
**Not yet fully defined, and this is the single most honest thing to say about this canvas entry.** The product has reach metrics (app downloads, daily engagement, counselling notes) but, by its own internal record, **no outcome data on its own beneficiaries in fifteen years**. A measurable "no longer a problem" state — e.g., reduction in late-presenting danger signs, or closed-loop referral completion — has not been established and is the stated priority of the 2026–2030 strategic plan.

**Gate check:** Partial pass. Owning institution and existing workflow are both clearly named. The measurable success definition is not yet in place — Discover is not fully closed, and Design work proceeded historically without it. That gap is revisited honestly below rather than concealed.

---

## Phase 2 — Design

**Minimum system that solves the Discover-stage problem, inside the existing workflow:**
A mother-facing app built around her own LMP date, delivering ANC/PNC-synchronised content in audio/video/text (literacy is not assumed), designed offline-first (content pre-downloaded; historically distributed by micro-SD card or shared device where a mother has no device of her own), plus a toll-free, ANM-staffed counselling line for the gap no app can fill — "an app cannot hear worry in a voice, and a mother alone at 2 a.m. with bleeding needs a person, not a notification."

**Interoperability requirements:**
The counselling programme runs on the national DHIS2-based data-capture platform already used for other national health programmes (19,699 enrolled, 160 data elements, 27 indicators) rather than a standalone database. A four-tier access model (mother / FCHV / health post / District Health Office) defines read/write scope, including scoped third-party access granted to at least one external partner organisation.

**Data governance model:**
Stated policy: mother data is available only to the DHO, the Government of Nepal, the related health post and management — **never publicly available**. This is treated as a founding value ("the mother's privacy comes first"), not a compliance afterthought, and is explicitly checked against before any data or analytics partnership is offered commercially.

**Clinical/operational safety model:**
Danger-sign identification is triaged by a human (a trained Auxiliary Nurse Midwife on the counselling line), not by the app alone, specifically because automated detection without a safe referral pathway is judged unsafe. This logic is applied consistently elsewhere in the product: three maternal risk scores (PRAMS, SORS, WHO Risk Score) have been collected inside the DHIS2 programme since 2024 but deliberately **do not yet compute or triage automatically**, because a positive screen requires a referral pathway to exist first, and mental health screening has been withheld for the same reason. This is the opposite failure mode from most digital health projects — not building ahead of safety, but visibly holding back a built capability until safety catches up.

**Who builds and maintains this, and is it sustainable past any single funded period:**
Built and maintained by Amakomaya (legal entity Aamako Maya Apps Pvt. Ltd.), not a time-limited project team. The free-to-mother / institutions-pay model (government programmes, NGO/INGO partnerships, platform licensing — One Heart Worldwide, 2023 — and health-system integration) is the sustainability mechanism, distinct from most pilot-funded RMNCH tools that have no model beyond the grant period.

**Gate check:** Strong pass on interoperability, data governance, and safety sequencing — these are unusually disciplined for a 15-year-old product. Weaker on the "measurable success" link from Discover, which flows through as the main open item into Deliver below.

---

## Phase 3 — Deliver

**Evidence this changed the outcome defined in Discover — fully candid:**
This is the canvas's most important finding for this product. The honest record states: reach is well-evidenced (100,000+ downloads, ~1,600 mothers engaged daily, 1,798 counselling notes Jan–Jul 2025, 48 danger-sign cases identified and referred), but **outcome evidence is not**. The referral loop — the handoff from "danger sign identified" to "mother actually received facility care" — is recorded closed in only **4% of events (69 of 1,727)**. Structured follow-up after a counselling call is a documented capability gap, not a measured-and-fixed one. The number sometimes cited publicly as "lives potentially associated with timely referral" (19–20, Jan–Jul 2025) is explicitly an estimate of association derived from danger-sign counts using global mortality risk estimates — the product's own documentation states the rule "never write lives saved," and this canvas follows that rule.

**What must be true structurally for sustained, government-owned operation:**
Budget-line precedent exists (Makwanpur District Government, 2013/14) and institutional licensing precedent exists (One Heart Worldwide, 2023), both outside the founding organisation's own funding — evidence the sustainability model has worked at least twice, not just in theory.

**Has handover actually happened:**
Partially, and unevenly. Government co-funding and partner licensing both demonstrate real handover of *funding* responsibility in specific instances. Full operational handover — a government tier running the system without Amakomaya — is not evidenced at national scale; the organisation remains the operator of the core app and counselling line today.

**Plan and decision owner if adoption stalls or the evidence gap persists:**
Named in the product's own strategy: closing the 15-year outcome-evidence gap is stated as the top priority for 2026–2030, and "switching on" the already-collecting risk scores (rather than building something new) is named as the single highest-value available technical act. This is a decided, owned next step — not an open question with no owner.

**Reusability by another team facing the same problem elsewhere:**
High, on two specific sub-components regardless of the outcome-evidence gap in the whole: (1) the offline-first, audio/video-first, LMP-anchored personalisation pattern is directly reusable by any low-literacy, low-connectivity maternal-health context; (2) the "collect the risk score before you have a referral pathway, don't compute on it until you do" sequencing is a transferable safety pattern for any AI-adjacent screening feature in a resource-constrained health system.

**Gate check:** Does not fully pass. A named, resourced, government-level owner runs some components (DHO/MoHP data custodianship, DHIS2 platform integration) but not the core app and counselling service, which Amakomaya still operates. Outcome evidence — as opposed to reach evidence — does not yet exist. Both are openly named as the current priority rather than retrofitted into a success narrative.

---

## Five Aims Check

| Aim | Assessment |
|---|---|
| **Population health** | Reach is large (100,000+ downloads) and the risk-upstream framing ("Beyond the Three Delays") is well-evidenced at a national-statistics level. Population-level outcome attribution is the stated evidence gap — not yet demonstrable. |
| **Patient / client experience** | Strong by design: offline-first, audio/video for low literacy, Nepali-language, free at point of use, and a real human on a toll-free line for the moments an app cannot handle. This is the product's most consistently strong aim. |
| **Provider / health worker satisfaction** | FCHV/ANM tooling (Aamako Maya Care) is explicitly built to mirror field workflows (door-to-door registration, missed-visit reminders) rather than impose a new one — consistent with the product's long-held "mirror the health worker's existing forms" principle. |
| **Cost efficiency** | Free-to-mother, institutions-pay model has two real funding precedents outside the founder's own capital. Full cost-per-outcome is not calculable without outcome data — the same gap as population health. |
| **Health equity** | The strongest explicit design target: devices provided where mothers have none, content designed for zero literacy, family (not just the mother) addressed after 28 weeks because decisions are rarely made by the mother alone in this context. The unresolved equity question is whether the 4% referral-closure rate is evenly distributed, or concentrated in the hardest-to-reach mothers the product exists to serve — this has not been analysed. |

**Weakest aim right now, and what's being done about it:**
Not one aim in isolation — it is the evidence layer underneath all five. Reach and design intent are strong across the board; outcome measurement is the gap, named as the organisation's own top priority for 2026–2030 (closing the 15-year outcome-evidence gap, and activating the already-collected risk scores for triage). This canvas entry will be revisited when that work lands.

---

*Canvas filled honestly, including unresolved gaps, in the spirit of [`canvas.md`](../canvas.md)'s Discover-stage principle: surfacing a hard question before design work compounds it is cheaper than discovering it after a pilot ends. A canvas that only records strengths is not a canvas — it is a brochure.*
