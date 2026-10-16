# Digital Health Innovation Canvas (DHIC)

**An open-source framework for taking a digital health idea from pilot to sustained, governed, national-scale use.**

Maintained by [Amakomaya](https://amakomaya.com), a Nepali health informatics company. Released as a free, open-source resource for any team — government, NGO, startup, or health facility — building digital health tools in a low-resource or public-health setting.

## Why this exists

Most digital health pilots never make it past the pilot. A funded proof-of-concept runs for a year, gets a nice report, and then quietly stops when the grant ends, the champion leaves, or the Ministry asks "who owns this now?" We call this **pilotitis**: the innovation stalls right at the point where it should start scaling.

Pilotitis is not a technology problem. It is a governance, ownership, and value problem that technical teams discover only after the pilot ends — by which point it is expensive to fix. The Canvas puts a **Governance Spine** — regulatory pathway, clinical governance, data governance, and tech governance — first, checked before Discover even starts, rather than retrofitted once a pilot is already running.

This framework is adapted for the Nepali and South Asian public health context from the broader family of value-based digital health innovation canvases used in academic and donor-funded digital health programmes (notably Monash University's work with Indonesia's Ministry of Health, and its live canvas tool). Amakomaya's version is written from the inside of national HMIS, DHIS2, and FHIR delivery work — not as a generic strategy template, but as the checklist we wish we'd had before every pilot we've seen stall. Where Nepal has no equivalent to an Indonesia-specific mechanism (a regulatory sandbox, a health-specific data law), this version names that as a gap rather than papering over it.

## What's in this repo

| File | Purpose |
|---|---|
| [`canvas.md`](canvas.md) | The full framework: the Governance Spine (first), the three phases, the Value Anchor five aims, and the questions each forces you to answer. |
| [`canvas-template.md`](canvas-template.md) | A blank, fillable copy of the canvas for your own project — header fields (Project Name, Author By, Date) plus every section. Copy it, don't edit the original. |
| [`schema.json`](schema.json) | The same template as a JSON Schema, for teams that want a structured/machine-readable canvas instead of (or alongside) the Markdown version. |
| [`case-notes.md`](case-notes.md) | Retrospective illustrations from real Nepali health-informatics projects, showing how the canvas questions would have applied — not genuine filled canvases. |
| [`initiatives/`](initiatives/) | Genuine, fully filled-in canvases (Markdown + JSON) for real, named projects — including their unresolved gaps, not just their strengths. Start with [`initiatives/aamako-maya-nepal.md`](initiatives/aamako-maya-nepal.md). |

## How to use it

1. Copy `canvas-template.md` (or start from `schema.json` for a structured version) into your own project repo or document store.
2. Fill the header — **Project Name**, **Author By**, **Date** — then the **Governance Spine** fully, before writing anything in Discover. If you can't answer a Spine question, name it as a gap; don't skip it.
3. Revisit the canvas at every major milestone — it is a living document, not a one-time form.
4. Use `case-notes.md` to see how the questions apply to real HMIS/DHIS2/FHIR-style projects, not abstract ones.
5. Read [`initiatives/aamako-maya-nepal.md`](initiatives/aamako-maya-nepal.md) for what a genuinely, candidly filled canvas looks like end to end — including the parts that don't flatter the product.

## License

Framework text is released under [CC BY 4.0](LICENSE) — reuse, adapt, and redistribute freely, with attribution. No code is included; this is a methodology, not software.

## Attribution

This Canvas draws on the general concept of value-based digital health innovation canvases as a category of framework, independently written and adapted by Amakomaya for its own delivery context, with its own Nepal-specific governance questions and gaps. It is not an official Monash University publication and carries no endorsement from Monash or any Ministry of Health. For the original Monash/Indonesia Ministry of Health Value-Based Digital Health Innovation Canvas and its live tool, see [monash.edu/it/digital-health/research/vdhic](https://www.monash.edu/it/digital-health/research/vdhic).

## Contributing

Issues and pull requests welcome — especially real-world filled canvases from other teams who've used the framework, added to `initiatives/`. Open an issue first if you want to propose a structural change to the canvas itself.
