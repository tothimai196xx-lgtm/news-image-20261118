# World News in One Image — 18 November 2026

[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/c/news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/tothimai196xx-lgtm/news-image-20261118/rank.svg)](https://make.fun/c/news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/tothimai196xx-lgtm/news-image-20261118/reward.svg)](https://make.fun/c/news-image-20261118)

Built with [make.fun](https://make.fun/r/wxz47nrz)

## The entry

A single 1024×1024 front-page image that sums up the world news of
**Wednesday, 18 November 2026** in four illustrated panels, each with a
short headline caption:

1. **Crimean Bridge hit** — Ukraine strikes the Kerch link to Crimea for a
   second day; Russia hits bridges in Kyiv in reply.
2. **Gulf flashpoint** — Iranian drones target a US base in Bahrain; the US
   strikes back at a missile site on Qeshm Island.
3. **Quad meets in Manila** — Trump arrives in the Philippines for Quad
   talks ahead of his visit to China, on the sidelines of the ASEAN summits.
4. **Cyclone Akvan** — the storm builds over the Bay of Bengal, putting
   India's east coast on alert.

The illustration was generated fresh in this session and the date and
headlines were overlaid with PIL, so the image reads on its own at any size.

## How it runs

`main.ts` (Node 22, standard library only) copies the bundled `entry.png`
into `MAKEFUN_OUTPUT_DIR` (default `/output`). No network, no randomness —
two runs write byte-identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
