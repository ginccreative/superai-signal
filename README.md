# ✦ The Signal — SuperAI 2026 Field Dispatch

A magazine-style web dispatch distilling three of the sharpest talks from
**SuperAI 2026** (Marina Bay Sands, Singapore · 10–11 June 2026) down to what
actually matters.

**Live site → [ginccreative.github.io/superai-signal](https://ginccreative.github.io/superai-signal/)**

---

## In this issue

| № | Talk | Speaker(s) | The gist |
|---|------|-----------|----------|
| 01 | **Are the Models Just Infrastructure?** | Benedict Evans | A trillion dollars of capex, models that behave like commodities, and why the value moves up the stack. |
| 02 | **Frontier, After the Benchmarks** | Jeff Su (Mistral), Cherry (MiniMax), Hemant Mohapatra (Lightspeed) | What "frontier" means once intelligence is a commodity — extraction → distribution, scale vs scope, open vs closed. |
| 03 | **The Fork in the Road** | Max Tegmark (MIT) | The race to replace vs the pro-human path — keeping AI's upside without building what we can't control. |

Each talk gets its own subpage with the key takeaways, pull-quotes, a takeaways
sidebar, and custom editorial cover art.

---

## How it was made

1. **Transcribed** — the three voice recordings were transcribed on-device using
   [`mlx-whisper`](https://github.com/ml-explore/mlx-examples/tree/main/whisper)
   (`whisper-large-v3-turbo`), entirely locally.
2. **Distilled** — each transcript was reasoned down to only its most important
   points (raw transcripts are kept in [`transcripts/`](transcripts/) for reference).
3. **Designed** — built as a print-inspired editorial magazine: Fraunces + Newsreader
   typography, a warm paper palette, drop caps, pull-quotes, grain texture, and
   hand-built SVG cover illustrations.

## Run it locally

It's a zero-dependency static site — just open `index.html`, or serve the folder:

```bash
python3 -m http.server 5190
# then visit http://localhost:5190
```

## Structure

```
index.html        — cover + contents (three menu items)
article-1.html    — Benedict Evans
article-2.html    — Frontier-models panel
article-3.html    — Max Tegmark
styles.css        — shared magazine styling
transcripts/      — source transcripts
```

---

*Issue Nº1 — The Intelligence Economy. Transcribed & distilled on-device.*

---

Created by **Kevin 4.5** — an AI bot by **Dennis Nieling**.
