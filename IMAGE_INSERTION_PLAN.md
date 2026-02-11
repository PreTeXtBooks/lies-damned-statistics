# PreTeXt Image Insertion Plan

## Overview
This document outlines the detailed plan for inserting PNG images into the PreTeXt file main.ptx. The plan identifies specific line numbers, image filenames, suggested captions, and xml:id values based on the surrounding content.

---

## Chapter 1: Univariate Statistics (1 image)

### Image 1: fig-1-13.png
- **Line number**: 2185
- **Context**: Exercise about interpreting boxplots showing test scores for classes A through E
- **Current placeholder**: `[Figure: Boxplot showing test scores for classes A through E - placeholder for converted figure]`
- **Suggested xml:id**: `fig-boxplot-classes`
- **Suggested caption**: Boxplot showing test scores for classes A through E
- **Action**: Replace placeholder text with proper figure element

---

## Chapter 2: Bi-variate Statistics: Basics (4 images)
**Chapter range**: Lines 2193-2532

### Image 1: fig-1-2-1.png
- **Line number**: 2436 (after line 2435)
- **Context**: After discussing correlation coefficient facts, there's a placeholder for scatterplots showing various correlation coefficients
- **Current placeholder**: `[Figure: Scatterplot range showing various correlation coefficients - placeholder for converted figure]`
- **Suggested xml:id**: `fig-corr-coeff-examples`
- **Suggested caption**: Examples of scatterplots with various correlation coefficients
- **Action**: Replace placeholder with figure element

### Image 2: fig-1-2-2.png
- **Line number**: After 2380 (following discussion of positive/negative/direction definitions)
- **Context**: After defining shape, strength, and direction of scatterplots, before the correlation section
- **Suggested xml:id**: `fig-scatter-shape-examples`
- **Suggested caption**: Examples of scatterplot shapes showing linear and amorphous patterns
- **Action**: Insert new figure element

### Image 3: fig-1-2-3.png
- **Line number**: After 2363 (following strength definition)
- **Context**: After defining strength of association (strong vs weak)
- **Suggested xml:id**: `fig-scatter-strength-examples`
- **Suggested caption**: Examples of strong and weak linear associations in scatterplots
- **Action**: Insert new figure element

### Image 4: fig-1-2-4.png
- **Line number**: After 2327 (following scatterplot definition)
- **Context**: Right after defining what a scatterplot is, before describing qualitative characteristics
- **Suggested xml:id**: `fig-scatter-basic-example`
- **Suggested caption**: Basic scatterplot showing independent and dependent variable relationship
- **Action**: Insert new figure element

---

## Chapter 3: Linear Regression (1 image)
**Chapter range**: Lines 2532-3301

### Image 1: fig-1-3-1.png
- **Line number**: 2651 (after line 2650)
- **Context**: After discussing residuals definition, there's a placeholder for residual illustration
- **Current placeholder**: `[Figure: residual.eps - placeholder for residuals illustration]`
- **Suggested xml:id**: `fig-residuals-illustration`
- **Suggested caption**: Illustration of residuals showing the vertical distance between data points and the regression line
- **Action**: Replace placeholder with figure element

**Note**: Lines 2731 and 2749 also have placeholders (scatter1.eps and scatter2.eps) but these are within an example and may be intended for different images or may be handled separately.

---

## Chapter 4: Probability Theory (28 images)
**Chapter range**: Lines 3301-4596

### Venn Diagram Series (11 images: fig-2-1-1 through fig-2-1-11)

#### Image 1: fig-2-1-1.png
- **Line number**: 3467 (after line 3466)
- **Context**: Basic Venn diagram showing rectangle representing sample space
- **Current placeholder**: `<p><em>[Figure: Rectangle representing sample space]</em></p>`
- **Suggested xml:id**: `fig-venn-sample-space`
- **Suggested caption**: Rectangle representing the sample space in a Venn diagram
- **Action**: Replace with figure element

#### Image 2: fig-2-1-2.png
- **Line number**: 3471 (after line 3470)
- **Context**: Venn diagram with one event circle E inside rectangle
- **Current placeholder**: `<p><em>[Figure: Rectangle with one circle labeled E inside]</em></p>`
- **Suggested xml:id**: `fig-venn-single-event`
- **Suggested caption**: Venn diagram showing event E within the sample space
- **Action**: Replace with figure element

#### Image 3: fig-2-1-3.png
- **Line number**: 3475 (after line 3474)
- **Context**: Venn diagram with specific elements labeled
- **Current placeholder**: `<p><em>[Figure: Rectangle with circle A containing points a and b, and points c and d outside the circle]</em></p>`
- **Suggested xml:id**: `fig-venn-labeled-elements`
- **Suggested caption**: Venn diagram with sample space S={a,b,c,d} and event A={a,b}
- **Action**: Replace with figure element

#### Image 4: fig-2-1-4.png
- **Line number**: 3479 (after line 3478)
- **Context**: Two diagrams showing complement of event E
- **Current placeholder**: `<p><em>[Figure: Two diagrams side by side - left showing filled circle E, right showing filled exterior region representing E^c]</em></p>`
- **Suggested xml:id**: `fig-venn-complement`
- **Suggested caption**: Venn diagrams illustrating an event E and its complement E^c
- **Action**: Replace with figure element

#### Image 5: fig-2-1-5.png
- **Line number**: 3485 (after line 3484)
- **Context**: Disjoint events A and B
- **Current placeholder**: `<p><em>[Figure: Rectangle with two non-overlapping circles A and B]</em></p>`
- **Suggested xml:id**: `fig-venn-disjoint`
- **Suggested caption**: Venn diagram showing disjoint (mutually exclusive) events A and B
- **Action**: Replace with figure element

#### Image 6: fig-2-1-6.png
- **Line number**: 3489 (after line 3488)
- **Context**: Overlapping events A and B
- **Current placeholder**: `<p><em>[Figure: Rectangle with two overlapping circles A and B]</em></p>`
- **Suggested xml:id**: `fig-venn-overlapping`
- **Suggested caption**: Venn diagram showing overlapping events A and B
- **Action**: Replace with figure element

#### Image 7: fig-2-1-7.png
- **Line number**: 3493 (after line 3492)
- **Context**: Overlapping circles with specific elements
- **Current placeholder**: `<p><em>[Figure: Rectangle with two overlapping circles, A containing a and b, B containing b and c, with b in the overlap]</em></p>`
- **Suggested xml:id**: `fig-venn-overlap-labeled`
- **Suggested caption**: Venn diagram with labeled elements showing intersection
- **Action**: Replace with figure element

#### Image 8: fig-2-1-8.png
- **Line number**: 3499 (after line 3498)
- **Context**: Four diagrams showing union and intersection
- **Current placeholder**: `<p><em>[Figure: Four diagrams showing - left: filled circle A, middle-left: filled circle B, middle-right: both circles filled for A∪B, right: only overlap filled for A∩B]</em></p>`
- **Suggested xml:id**: `fig-venn-union-intersection`
- **Suggested caption**: Venn diagrams illustrating union (A∪B) and intersection (A∩B)
- **Action**: Replace with figure element

#### Image 9: fig-2-1-9.png
- **Line number**: 3505 (after line 3504)
- **Context**: Venn diagram with probability labeled in circle
- **Current placeholder**: `<p><em>[Figure: Rectangle with circle A labeled with .4 inside]</em></p>`
- **Suggested xml:id**: `fig-venn-prob-single`
- **Suggested caption**: Venn diagram showing P(A)=0.4
- **Action**: Replace with figure element

#### Image 10: fig-2-1-10.png
- **Line number**: 3509 (after line 3508)
- **Context**: Venn diagram with probabilities for A and A^c
- **Current placeholder**: `<p><em>[Figure: Rectangle with circle A showing .4 inside and .6 outside]</em></p>`
- **Suggested xml:id**: `fig-venn-prob-complement`
- **Suggested caption**: Venn diagram showing P(A)=0.4 and P(A^c)=0.6
- **Action**: Replace with figure element

#### Image 11: fig-2-1-11.png
- **Line number**: 3519 (after line 3518, within example eg-probnumsinVDs)
- **Context**: Simple overlapping circles without probabilities
- **Current placeholder**: `<p><em>[Figure: Two overlapping circles A and B]</em></p>`
- **Suggested xml:id**: `fig-venn-example-setup`
- **Suggested caption**: Venn diagram setup for probability example
- **Action**: Replace with figure element

### Additional Venn Diagram Image
#### Image 12: fig-2-1-12.png
- **Line number**: 3523 (after line 3522, within example eg-probnumsinVDs)
- **Context**: Venn diagram with all probabilities filled in
- **Current placeholder**: `<p><em>[Figure: Venn diagram with .3 in A only, .1 in overlap, .4 in B only, .2 outside both circles]</em></p>`
- **Suggested xml:id**: `fig-venn-prob-complete`
- **Suggested caption**: Complete Venn diagram with probabilities for disjoint regions
- **Action**: Replace with figure element

### Continuous Random Variable Images (5 images: fig-2-1-13 through fig-2-1-17)

#### Image 13: fig-2-1-13.png
- **Line number**: 4090 (after line 4089)
- **Context**: Probability density function showing area under curve
- **Current placeholder**: `<p><em>[Figure: A probability density function showing the area under the curve between <m>a</m> and <m>b</m> representing <m>P(a&lt;X&lt;b)</m>]</em></p>`
- **Suggested xml:id**: `fig-density-area`
- **Suggested caption**: Probability density function with shaded area representing P(a&lt;X&lt;b)
- **Action**: Replace with figure element

#### Image 14: fig-2-1-14.png
- **Line number**: 4120 (after line 4119, within example eg-unifdistr1)
- **Context**: Bus waiting time uniform distribution
- **Current placeholder**: `<p><em>[Figure: Bus waiting time uniform distribution showing shaded area from 0 to 10 minutes]</em></p>`
- **Suggested xml:id**: `fig-uniform-bus`
- **Suggested caption**: Uniform distribution for bus waiting time with shaded area for P(0&lt;X&lt;10)
- **Action**: Replace with figure element

#### Image 15: fig-2-1-15.png
- **Line number**: 4158 (after line 4157, within example eg-triangleDistr)
- **Context**: Triangular density function for dart throwing
- **Current placeholder**: `<p><em>[Figure: Triangular density function for dart hitting distance]</em></p>`
- **Suggested xml:id**: `fig-triangle-dart`
- **Suggested caption**: Triangular probability density function for dart hitting distance
- **Action**: Replace with figure element

#### Image 16: fig-2-1-16.png
- **Line number**: 4164 (after line 4163, within example eg-triangleDistr)
- **Context**: Dart hitting bull's-eye probability
- **Current placeholder**: `<p><em>[Figure: Dart hitting bull's-eye probability shown as shaded trapezoid]</em></p>`
- **Suggested xml:id**: `fig-triangle-bullseye`
- **Suggested caption**: Shaded trapezoid showing probability of hitting bull's-eye
- **Action**: Replace with figure element

#### Image 17: fig-2-1-17.png
- **Line number**: 4174 (after line 4173, within example eg-triangleDistr)
- **Context**: Complementary event showing triangular region
- **Current placeholder**: `<p><em>[Figure: Complementary event showing triangular region]</em></p>`
- **Suggested xml:id**: `fig-triangle-complement`
- **Suggested caption**: Complementary event for bull's-eye probability
- **Action**: Replace with figure element

### Normal Distribution Images (11 images: fig-2-1-18 through fig-2-1-28)

#### Image 18: fig-2-1-18.png
- **Line number**: 4205 (after line 4204)
- **Context**: Normal distribution with mean 17 and standard deviation 3
- **Current placeholder**: `<p><em>[Figure: Normal distribution with mean 17 and standard deviation 3]</em></p>`
- **Suggested xml:id**: `fig-normal-17-3`
- **Suggested caption**: Normal distribution with μ=17 and σ=3
- **Action**: Replace with figure element

#### Image 19: fig-2-1-19.png
- **Line number**: 4250 (after line 4249)
- **Context**: Normal distribution with mean 17 and standard deviation 1
- **Current placeholder**: `<p><em>[Figure: Normal distribution with mean 17 and standard deviation 1]</em></p>`
- **Suggested xml:id**: `fig-normal-17-1`
- **Suggested caption**: Normal distribution with μ=17 and σ=1 (narrow peak)
- **Action**: Replace with figure element

#### Image 20: fig-2-1-20.png
- **Line number**: 4254 (after line 4253)
- **Context**: Normal distribution with mean 17 and standard deviation 5
- **Current placeholder**: `<p><em>[Figure: Normal distribution with mean 17 and standard deviation 5]</em></p>`
- **Suggested xml:id**: `fig-normal-17-5`
- **Suggested caption**: Normal distribution with μ=17 and σ=5 (wide peak)
- **Action**: Replace with figure element

#### Image 21: fig-2-1-21.png
- **Line number**: 4258 (after line 4257)
- **Context**: Three normal distributions superimposed
- **Current placeholder**: `<p><em>[Figure: Three Normal distributions with mean 17 and standard deviations 1, 3, and 5 superimposed]</em></p>`
- **Suggested xml:id**: `fig-normal-comparison`
- **Suggested caption**: Comparison of Normal distributions with μ=17 and σ=1, 3, and 5
- **Action**: Replace with figure element

#### Image 22: fig-2-1-22.png
- **Line number**: 4270 (after line 4269)
- **Context**: Standard Normal distribution
- **Current placeholder**: `<p><em>[Figure: Standard Normal distribution with mean 0 and standard deviation 1]</em></p>`
- **Suggested xml:id**: `fig-standard-normal`
- **Suggested caption**: Standard Normal distribution N(0,1)
- **Action**: Replace with figure element

#### Image 23: fig-2-1-23.png
- **Line number**: 4345 (after line 4344)
- **Context**: The 68-95-99.7 Rule illustrated
- **Current placeholder**: `<p><em>[Figure: The 68-95-99.7 Rule illustrated on a Normal distribution curve]</em></p>`
- **Suggested xml:id**: `fig-empirical-rule`
- **Suggested caption**: The 68-95-99.7 Rule (Empirical Rule) illustrated on a Normal curve
- **Action**: Replace with figure element

#### Image 24: fig-2-1-24.png
- **Line number**: 4379 (after line 4378, within example eg-use68-95-99-7-1)
- **Context**: Symmetric shaded areas showing equal tail probabilities
- **Current placeholder**: `<p><em>[Figure: Symmetric shaded areas showing equal tail probabilities]</em></p>`
- **Suggested xml:id**: `fig-normal-symmetry`
- **Suggested caption**: Symmetric tail probabilities in the Normal distribution
- **Action**: Replace with figure element

#### Images 25-28: fig-2-1-25.png through fig-2-1-28.png
- **Potential locations**: After line 4400 onwards (continuation of Normal distribution examples and applications)
- **Context**: Additional examples using the 68-95-99.7 Rule, z-scores, or Normal probability calculations
- **Action**: Review content after line 4400 to identify specific insertion points for remaining 4 images
- **Note**: Need to view lines 4400-4596 to identify exact placement

---

## Format Template

For each insertion, use this PreTeXt figure format:

```xml
<figure xml:id="fig-UNIQUEID">
  <caption>Caption text here</caption>
  <image source="images/fig-X-Y-Z.png" width="75%"/>
</figure>
```

---

## Next Steps

1. Review and approve this plan
2. Make the insertions in the specified order
3. Verify all xml:id values are unique
4. Test the PreTeXt build to ensure images display correctly
5. Adjust captions if needed based on actual image content

---

## Notes

- All image files are confirmed to exist in `/home/runner/work/lies-damned-statistics/lies-damned-statistics/source/images/`
- Some placeholders are within `<p><em>[...]</em></p>` tags and need to be replaced with proper figure elements
- The width attribute is suggested as 75% but can be adjusted per image
- Lines 4400-4596 need to be reviewed to identify placement for images fig-2-1-25 through fig-2-1-28
