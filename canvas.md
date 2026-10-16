# The Digital Health Innovation Canvas

## The problem: pilotitis

Digital health has a well-documented pattern of failure. A pilot is scoped, funded, and built. It runs for 6–18 months in two or three districts. It produces a report showing real improvement. And then it stops — not because it failed, but because nobody ever answered the questions that determine whether a pilot *can* survive past its pilot phase:

- Who owns this system once the project funding ends?
- Which government unit is accountable for it, and did they ask for it?
- Does it fit inside an existing regulatory or data-governance pathway, or does it need one invented from scratch?
- Is the value it creates obvious enough that someone will fight to keep it funded?

Teams discover the gaps in these answers only once the pilot is over and the next funding cycle doesn't materialise. By then, re-engineering the system to be government-owned, regulator-compliant, or interoperable with the national HMIS is far more expensive than it would have been at the start.

The Canvas forces these questions to the front, before design work begins — not as paperwork, but as design constraints.

## The three phases

The Canvas moves through three phases. Each phase has a gate: you should not be able to answer "yes, let's move on" to the next phase until you can answer every question in the current one.

### 1. Discover — understand the need, not the idea

Most failed digital health projects begin with a solution ("let's build an app for X") rather than a verified need. Discover forces the need to come first.

**Questions this phase must answer:**

- What is the specific health system problem, stated in terms a Ministry, a district health office, or a facility-in-charge would recognise — not in technology terms?
- Who experiences this problem today, and what do they currently do about it (including informal workarounds)?
- What existing system, register, or workflow does this problem live inside? (A new system that ignores the paper register or DHIS2 workflow already in use will not get adopted — see the case notes.)
- Who is the accountable government or institutional owner for this problem space, and have they confirmed it as a priority?
- What would "no longer a problem" look like, in a measurable way?

**Gate to Design:** you can name the owning institution, the existing workflow you are changing, and a measurable definition of success — all before any UI, data model, or technology choice exists.

### 2. Design — build the solution inside its governance envelope

Design is where most teams start, and where the Canvas insists on finishing second. By the time you reach Design, the constraints from Discover already bound what a "good" solution looks like.

**Questions this phase must answer:**

- What is the minimum system that solves the Discover-stage problem, for the owning institution, inside their existing workflow?
- What standards must this system speak to be interoperable with what already exists (e.g., does it need to exchange data with DHIS2, a national HMIS, or a FHIR-based exchange layer, rather than exist as an island)?
- What is the data governance model — who can see what, where is data stored, what happens to it if the project ends, and does this satisfy the country's own health data protection rules?
- What is the clinical or operational safety model — what happens when the system is wrong, offline, or unavailable, and who is accountable for that failure mode?
- Who is actually building and maintaining this, and is that arrangement sustainable past the pilot's funded lifetime?

**Gate to Deliver:** the solution has been designed to run inside a named governance, interoperability, and ownership model — not a model to be retrofitted later.

### 3. Deliver — evidence, handover, and scale

Deliver is where "did it work in the pilot districts" becomes "can this run everywhere, under someone else's ownership, without us."

**Questions this phase must answer:**

- What evidence exists that this solution improves the measure defined in Discover — not just that it was used, but that it changed an outcome?
- What has to be true structurally — staffing, budget line, regulatory approval, data-exchange agreement — for the owning institution to run this without the original project team?
- Has that handover actually happened, with documentation, training, and a named accountable owner — or is it still "in progress" at the point the project ends?
- What is the plan if adoption stalls at pilot scale — is there a decision point and an owner for that decision?
- Is the evidence and the system itself reusable by another team facing the same problem elsewhere?

**Gate to "done":** the system has a named institutional owner who did not build it, running it inside the governance model from Design, with evidence that it changed an outcome — not merely that it was used.

## The five aims

At every phase, weigh the design against five aims simultaneously. A digital health project that is strong on one and weak on the others is not balanced — it is fragile.

| Aim | What it asks |
|---|---|
| **Population health** | Does this move a population-level indicator, not just an individual encounter? |
| **Patient / client experience** | Is this better for the person receiving care — easier, faster, less confusing, more dignified — not just better for the system collecting data about them? |
| **Provider / health worker satisfaction** | Does this reduce or add to the health worker's workload and cognitive burden? Systems that make health workers' jobs harder get worked around, not adopted. |
| **Cost efficiency** | What is the true cost of running this at scale, including the parts a pilot budget hides — maintenance, support, connectivity, device replacement? |
| **Health equity** | Does this work as well for the hardest-to-reach population as it does for the pilot district that was chosen because it had good connectivity and a motivated local team? |

A canvas entry that cannot speak to all five aims is not finished — it has an unexamined blind spot, usually equity or provider burden, and that blind spot is where adoption fails later.

## How to use this with `canvas-template.md`

Copy [`canvas-template.md`](canvas-template.md) for your own project. Fill in Discover fully before writing anything in Design. Revisit all three phases, and the five-aims table, at every major project milestone — not just once at the start. A canvas filled in once at proposal stage and never revisited is a proposal document, not a working canvas.
