# Quick Reference: Image Insertion Map

## Chapter 1 (1 image)
| Image | Line | xml:id | Caption |
|-------|------|--------|---------|
| fig-1-13.png | 2185 | fig-boxplot-classes | Boxplot showing test scores for classes A through E |

## Chapter 2 (4 images)
| Image | Line | xml:id | Caption |
|-------|------|--------|---------|
| fig-1-2-1.png | 2436 | fig-corr-coeff-examples | Examples of scatterplots with various correlation coefficients |
| fig-1-2-2.png | 2380 | fig-scatter-shape-examples | Examples of scatterplot shapes |
| fig-1-2-3.png | 2363 | fig-scatter-strength-examples | Examples of strong and weak associations |
| fig-1-2-4.png | 2327 | fig-scatter-basic-example | Basic scatterplot example |

## Chapter 3 (1 image)
| Image | Line | xml:id | Caption |
|-------|------|--------|---------|
| fig-1-3-1.png | 2651 | fig-residuals-illustration | Illustration of residuals |

## Chapter 4 - Venn Diagrams (12 images)
| Image | Line | xml:id | Caption |
|-------|------|--------|---------|
| fig-2-1-1.png | 3467 | fig-venn-sample-space | Rectangle representing sample space |
| fig-2-1-2.png | 3471 | fig-venn-single-event | Event E within sample space |
| fig-2-1-3.png | 3475 | fig-venn-labeled-elements | Venn diagram with labeled elements |
| fig-2-1-4.png | 3479 | fig-venn-complement | Event E and its complement |
| fig-2-1-5.png | 3485 | fig-venn-disjoint | Disjoint events A and B |
| fig-2-1-6.png | 3489 | fig-venn-overlapping | Overlapping events A and B |
| fig-2-1-7.png | 3493 | fig-venn-overlap-labeled | Overlapping events with labels |
| fig-2-1-8.png | 3499 | fig-venn-union-intersection | Union and intersection operations |
| fig-2-1-9.png | 3505 | fig-venn-prob-single | P(A)=0.4 |
| fig-2-1-10.png | 3509 | fig-venn-prob-complement | P(A)=0.4 and P(A^c)=0.6 |
| fig-2-1-11.png | 3519 | fig-venn-example-setup | Example setup |
| fig-2-1-12.png | 3523 | fig-venn-prob-complete | Complete probability diagram |

## Chapter 4 - Continuous RVs (5 images)
| Image | Line | xml:id | Caption |
|-------|------|--------|---------|
| fig-2-1-13.png | 4090 | fig-density-area | Density function with shaded area |
| fig-2-1-14.png | 4120 | fig-uniform-bus | Uniform distribution for bus waiting |
| fig-2-1-15.png | 4158 | fig-triangle-dart | Triangular density for dart distance |
| fig-2-1-16.png | 4164 | fig-triangle-bullseye | Bull's-eye probability |
| fig-2-1-17.png | 4174 | fig-triangle-complement | Complementary event |

## Chapter 4 - Normal Distribution (11 images)
| Image | Line | xml:id | Caption |
|-------|------|--------|---------|
| fig-2-1-18.png | 4205 | fig-normal-17-3 | Normal with μ=17, σ=3 |
| fig-2-1-19.png | 4250 | fig-normal-17-1 | Normal with μ=17, σ=1 |
| fig-2-1-20.png | 4254 | fig-normal-17-5 | Normal with μ=17, σ=5 |
| fig-2-1-21.png | 4258 | fig-normal-comparison | Three normals compared |
| fig-2-1-22.png | 4270 | fig-standard-normal | Standard normal N(0,1) |
| fig-2-1-23.png | 4345 | fig-empirical-rule | 68-95-99.7 Rule illustrated |
| fig-2-1-24.png | 4379 | fig-normal-symmetry | Symmetric tail probabilities |
| fig-2-1-25.png | * | * | * |
| fig-2-1-26.png | * | * | * |
| fig-2-1-27.png | * | * | * |
| fig-2-1-28.png | * | * | * |

**Note**: Images 25-28 - No additional placeholders found in Chapter 4. These images may be:
- Intended for the exercises section (no placeholders there currently)
- Redundant/alternative versions of existing diagrams
- For future use/other sections not yet converted

## Format Template
```xml
<figure xml:id="UNIQUE-ID">
  <caption>Caption text</caption>
  <image source="images/fig-X-Y-Z.png" width="75%"/>
</figure>
```
