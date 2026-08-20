# LPC — Site Mascot Design Brief

## Concept
A pond spirit — an axolotl/humanoid fusion who feels like she belongs to the lotus pond rather than someone dressed to match it. Friendly, calm, a little whimsical. Built to be modeled in VRoid and/or Blender without excessive part count.

## Species Fusion
- Base: humanoid (anime-proportioned), not full chibi.
- **Gills, not ears.** External gill-fronds where ears would sit — frilly/branching like a real axolotl's, but stylized into a lotus-petal silhouette. Gradient color: pink at the base fading to green at the tips. This one feature carries both the "axolotl" and "lotus" read at once, so it's doing double duty — no separate ear treatment needed.
- Optional: a small tail-fin shape worked into a hemline or a low-profile back-fin, rather than a full tail. Skip if it complicates rigging more than it's worth.
- Face: soft, a little wide-set round eyes; gentle/calm expression (axolotls read as perpetually smiling — worth leaning into subtly).

## Color Palette
Pull directly from the site's `:root` variables in `css/style.css` so she's provably "on-brand," not just "on-vibe":

| Use | Variable | Hex |
|---|---|---|
| Gill/hair base | `--Pink` | `#ff96cc` |
| Gill/hair highlight | `--Pink2` | `#ffbbde` |
| Gill tips / outfit half | `--Green` | `#88b088` |
| Sash / trim / metal tone | `--Yellow` | `#ffe18d` |
| Soft cream accents | `--LogoTypeYellow` | `#fff4d6` |
| Eyes | `--Teal` | `#32a5a5` |
| Tiara sunset gradient | `--Yellow` → `--SunsetOrange` (`#ffb12b`) → `--SunsetRed` (`#ff6767`) | matches the site's existing `--SunsetGradient` exactly |

Using the exact `--SunsetGradient` stops for the tiara means any future site-side rendering of her (icons, illustrations) can reuse the same CSS gradient variable and stay perfectly in sync.

## The Tiara
Built as a 1:1 translation of the logomark (arched stained-glass window, lotus centered, sunset behind it) into headwear, not a generic flower crown:
- A thin arced frame across the head, echoing the logo's pointed-arch top.
- The lotus sits front-and-center as the "jewel."
- A row of small graduated gems (or enamel inlay) behind/above the lotus, fading through the sunset gradient stops above.
- Frame material: the yellow tone (`--Yellow`), reading as soft gold rather than harsh metallic.

## Outfit
Two-tone split (pink / green) as the base rule, but more structured than a plain sundress:
- Wrap-style dress or tunic, asymmetric hem.
- Sash or obi-style belt in `--Yellow`, closed with a small lotus-shaped clasp.
- Collar or shoulder detail echoing the gill-frond shape again in fabric — ties the axolotl motif into the clothing, not just the head.
- Optional trim detail: the wavy line pattern from the Home page hero background (`#start` in `css/index.css`) worked into the sash/hem stitching as a subtle woven texture. Quiet nod, no lore commitment required.

## Water Nod
- Eyes in `--Teal` (#32a5a5) — the brand's brighter water tone, not the darker navy `--WaterBlue` shades, so they stay expressive rather than reading as near-black.
- Optional: faint ripple detailing at the ankles/feet, bare feet or simple sandals.

## Modeling Notes
- You're comfortable in both VRoid and Blender, so "simple" here means *deliberate part count*, not bare-minimum — avoid stacking independent accessories (necklace + earrings + multiple hair clips + belt charms all at once); let the gills + tiara + sash clasp carry the "detail budget."
- Gradient coloring (gills, tiara gems) does a lot of visual work for very little modeling cost — lean on it before adding geometry.
- Keep hair/gill physics groups minimal if rigged for VTuber-style use later.

## Parked for Later
- Deeper site tie-in / lore (e.g. "keeper of the pond" framing, connecting her to the draggable lotus canvas on the Home page). Revisit once the base design is locked.
