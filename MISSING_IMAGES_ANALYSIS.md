# Analysis of Missing Images: fig-2-1-25 through fig-2-1-28

## Summary
Four images (fig-2-1-25.png through fig-2-1-28.png) do not have obvious placeholder text in Chapter 4.

## Possible Explanations

### 1. Images for Exercises (Most Likely)
The exercises section in Chapter 4 (lines 4426-4594) contains several problems that could benefit from illustrations:
- **Exercise at line 4566-4578** (xml:id="exc-dartboardtriangle"): Modified dartboard problem with asymmetric accuracy
  - Could use fig-2-1-25.png: Asymmetric triangular density function
- **Exercise at line 4580-4592**: Bell-shaped dart distribution
  - Could use fig-2-1-26.png: Normal distribution for dart accuracy
- **Exercise at line 4429-4435**: Basketball free throws sample space
  - Could use fig-2-1-27.png: Tree diagram or sample space illustration
- **Exercise at line 4485-4497**: Stop light probability with Venn diagram
  - Could use fig-2-1-28.png: Venn diagram for the stop light problem

### 2. Alternative/Variant Diagrams
These images might be:
- Alternative versions of Venn diagrams with different labeling
- Additional Normal distribution examples with different parameters
- Step-by-step progression diagrams that weren't fully documented

### 3. Future Content
Images prepared for sections not yet converted from the original document.

## Recommendations

### Option A: Exercise Integration (Recommended)
Insert these images as visual aids in the exercises section where they would enhance understanding:

```
Line 4578 (after exc-dartboardtriangle statement):
  fig-2-1-25.png - Asymmetric triangular density function
  xml:id: fig-exercise-dartboard-triangle
  Caption: "Asymmetric triangular density function for left-handed dart throws"

Line 4592 (after dart bell-curve exercise):
  fig-2-1-26.png - Normal distribution for dart accuracy
  xml:id: fig-exercise-dartboard-normal
  Caption: "Normal distribution model for Mohammad Wang's dart accuracy"

Line 4447 (after basketball exercise):
  fig-2-1-27.png - Sample space illustration
  xml:id: fig-exercise-basketball-sample
  Caption: "Sample space for four free throw sequences"

Line 4497 (after stop light exercise):
  fig-2-1-28.png - Stop light Venn diagram
  xml:id: fig-exercise-stoplight-venn
  Caption: "Venn diagram for stop light probability problem"
```

### Option B: Hold for Review
- Keep these 4 images in reserve
- Review actual image content before inserting
- May be supplementary materials not meant for main text

### Option C: Inspect Images First
Before making insertions, open and view each image file to determine:
1. What concept they actually illustrate
2. Whether they're duplicates of existing figures
3. Their intended context based on visual content

## Next Steps

1. **View the actual PNG files** (fig-2-1-25 through fig-2-1-28) to see what they contain
2. **Match content to context** based on what the images show
3. **Insert strategically** where they best support learning
4. **Verify with original source** if available (LaTeX/PDF document)

## File Locations to Check
```bash
ls -la /home/runner/work/lies-damned-statistics/lies-damned-statistics/source/images/fig-2-1-2[5-8].png
```

These files definitely exist (confirmed in earlier listing), so viewing them would resolve the placement question definitively.
