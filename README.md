# Lies, Damned Lies, or Statistics

This is a PreTeXt book project about statistics.

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

## GitHub Pages Setup

To enable GitHub Pages deployment:
1. Go to the repository Settings
2. Navigate to Pages in the left sidebar
3. Under "Source", select "GitHub Actions"

The book will be available at: `https://pretextbooks.github.io/lies-damned-statistics/`
