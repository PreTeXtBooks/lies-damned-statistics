# Lies, Damned Lies, or Statistics
## How to Tell the Truth with Statistics

A free and open-source textbook for undergraduate statistics courses, authored by **Jonathan A. Poritz** (Colorado State University, Pueblo). The book is available at: `https://pretextbooks.github.io/lies-damned-statistics/`

## About This Book

*Lies, Damned Lies, or Statistics* is a comprehensive introduction to statistics designed for a one-semester undergraduate course. This textbook emphasizes understanding statistical concepts and using statistics to tell the truth, rather than deceive.

The book was originally created in LaTeX and has been converted to PreTeXt format to provide multiple accessible formats (web, PDF, EPUB, etc.) while maintaining full fidelity to the original content.

## Table of Contents

The book covers the following chapters:

1. **One-Variable Statistics: Basics** - Introduction to statistical terminology, data visualization (bar charts, histograms, stem-and-leaf plots), and measures of center and spread
2. **Bi-variate Statistics: Basics** - Exploring relationships between two variables, scatter plots, and correlation
3. **Linear Regression** - Understanding and applying linear regression models
4. **Probability Theory** - Foundations of probability for statistical inference
5. **Bringing Home the Data** - Sampling methods and data collection
6. **Basic Inferences** - Introduction to statistical inference and hypothesis testing

## Author

**Jonathan A. Poritz**  
Department of Mathematics and Physics  
Colorado State University, Pueblo  
Email: [jonathan@poritz.net](mailto:jonathan@poritz.net)  
Web: [poritz.net/jonathan](https://poritz.net/jonathan)

## License

This work is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0).

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license

## View Online

The book is available online at: [https://pretextbooks.github.io/lies-damned-statistics/](https://pretextbooks.github.io/lies-damned-statistics/)

## Building the Book

This project uses the PreTeXt CLI to build the book. To build locally:

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Build the web version:
   ```bash
   pretext build web
   ```

3. View the output in the `output/web` directory.

## Continuous Integration

### Pull Request Builds

Every pull request automatically triggers a build to verify that the book compiles without errors. This ensures that changes can be safely merged.

### Automatic Deployment

This repository uses GitHub Actions to automatically build and deploy the book to GitHub Pages when changes are pushed to the `main` branch.

The deployment workflow:
1. Installs Python and PreTeXt dependencies
2. Builds the web target
3. Deploys to GitHub Pages

You can also manually trigger a deployment from the Actions tab in GitHub.
