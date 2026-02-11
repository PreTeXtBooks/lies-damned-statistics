# Image Insertion Plan Summary

## Total Images: 34
- Chapter 1: 1 image (fig-1-13.png)
- Chapter 2: 4 images (fig-1-2-1.png through fig-1-2-4.png)
- Chapter 3: 1 image (fig-1-3-1.png)
- Chapter 4: 28 images (fig-2-1-1.png through fig-2-1-28.png)

## Key Findings

### Chapter 1 - Univariate Statistics
✓ One placeholder found at line 2185 for boxplot (fig-1-13.png)

### Chapter 2 - Bi-variate Statistics: Basics (Lines 2193-2532)
✓ Found 4 appropriate insertion points:
  - Line 2436: Correlation coefficient examples (fig-1-2-1.png) - PLACEHOLDER EXISTS
  - Line 2380: Scatterplot shape examples (fig-1-2-2.png) - NEW
  - Line 2363: Strength of association (fig-1-2-3.png) - NEW
  - Line 2327: Basic scatterplot (fig-1-2-4.png) - NEW

### Chapter 3 - Linear Regression (Lines 2532-3301)
✓ One placeholder found at line 2651 for residuals (fig-1-3-1.png)
⚠ Additional placeholders exist at lines 2731 and 2749 but may be for other images

### Chapter 4 - Probability Theory (Lines 3301-4596)
✓ All 28 images mapped to specific placeholders:
  - Venn diagrams (12 images): Lines 3467-3523
  - Continuous RV/density functions (5 images): Lines 4090-4174
  - Normal distributions (11 images): Lines 4205-4379

## Image Insertion Structure

All images should be inserted using this format:
```xml
<figure xml:id="fig-unique-id">
  <caption>Descriptive caption</caption>
  <image source="images/fig-X-Y-Z.png" width="75%"/>
</figure>
```

## Placeholder Types
1. **Text placeholders**: Lines wrapped in brackets like `[Figure: ...]`
2. **Paragraph placeholders**: `<p><em>[Figure: ...]</em></p>`

Both types need to be replaced with proper `<figure>` elements.

## Recommendations

1. **Priority Order**: 
   - Start with Chapter 1 (simplest, 1 image)
   - Then Chapter 3 (1 image with placeholder)
   - Then Chapter 4 (28 images, all with placeholders)
   - Finally Chapter 2 (4 images, some need new insertions)

2. **Chapter 2 Considerations**:
   - 1 placeholder exists (line 2436)
   - 3 images need strategic insertion based on content analysis
   - Suggest inserting after relevant definition/discussion sections

3. **Verification Steps**:
   - Ensure all xml:id values are unique
   - Check that image paths are correct (source="images/fig-X-Y-Z.png")
   - Validate PreTeXt XML structure after insertion
   - Test build to verify images render correctly

## Complete Mapping Available

See `IMAGE_INSERTION_PLAN.md` for:
- Exact line numbers for each image
- Specific context and suggested captions
- xml:id suggestions
- Detailed descriptions of each insertion point

