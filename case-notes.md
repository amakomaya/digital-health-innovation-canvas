# Case Notes

These are retrospective illustrations, not historical artifacts — the Canvas did not exist when these projects were delivered. They show how the Canvas's questions would have applied to real Nepali health-informatics work, to make the framework concrete rather than abstract.

## 1. Calendar support in a national data-capture system

**The situation:** A national data-capture platform used by health workers across Nepal needed to support the Bikram Sambat calendar — the calendar health workers actually use, with variable month lengths set by national authority rather than computed — not just the Gregorian calendar the underlying software shipped with.

**How Discover would have framed it:** The problem was not "our software doesn't support BS dates." It was "health workers enter dates in the calendar their paper registers use, and a system that forces Gregorian entry will be worked around with guessed conversions, corrupting the data silently." The existing workflow — the paper register, dated in BS — was the fixed point; the software had to bend to it, not the reverse.

**How Design would have framed it:** The fix needed to work across online capture, offline Android capture, and aggregate reporting — including BS fiscal-year-based reporting — not just one entry screen. A narrower fix (one web form) would have solved Discover's problem in one channel and silently reintroduced it in every other channel health workers actually use.

**How Deliver would have framed it:** The relevant evidence is not "the calendar picker shows BS dates." It is "health workers stopped needing to mentally convert dates, and downstream reports stopped carrying conversion errors." The reusability angle matters too: calendar engineering of this kind applies to any of the dozens of countries running the same underlying platform on a non-Gregorian calendar — a Discover-stage problem that is specific to Nepal has a Deliver-stage answer that is not.

## 2. A counselling programme built on an existing national data platform

**The situation:** A maternal and child health counselling programme needed structured data capture — enrolment, data elements, indicators — at a scale of tens of thousands of enrolled clients.

**How Discover would have framed it:** The accountable owner and the existing workflow both already existed: the national data-capture platform already in use for other health programmes, not a bespoke new system. Building the counselling programme as an island application — technically simpler, faster to ship — would have passed Discover's letter while failing its intent: the owning institution's existing workflow is the one that has to absorb this, not a parallel one.

**How Design would have framed it:** Because an external partner organisation needed scoped access to parts of the same programme, the governance question was not abstract — it needed an actual multi-tenant access model inside the shared platform, decided before enrolment began, not retrofitted once a partner organisation asked for data they should not have seen.

**How Deliver would have framed it:** Enrolment numbers answer "was it used." They do not answer "did this change an outcome for mothers and children," which is the harder, more honest question the Canvas insists Deliver keep asking even when the easier metric is sitting right there.

## 3. Web-based HMIS registers replacing paper at scale

**The situation:** Facility, district, and provincial-tier paper registers needed a digital equivalent aligned to an existing national health-sector strategy and an existing HMIS data structure held since well before the project began.

**How Discover would have framed it:** The multi-year-held HMIS data-structure alignment is exactly the kind of fact Discover exists to surface: the problem was never "design a new data structure," because one already existed and already had institutional buy-in. A team that skipped Discover and designed a cleaner, better data structure from scratch would have built something technically superior and institutionally unusable.

**How Design would have framed it:** The system had to mirror the paper forms health workers already used — the project's own long-held engineering principle — because adoption follows familiarity. A better-organised digital form that broke from the paper layout would have been Design optimising for its own aesthetic sense over the provider-satisfaction aim.

**How Deliver would have framed it:** "Live" is not the same as "sustained." The Deliver-stage question that matters for a donor-funded register system in particular is what happens to it when the current funding period ends — and whether that answer was decided at Design time or left for a future team to discover the hard way.
