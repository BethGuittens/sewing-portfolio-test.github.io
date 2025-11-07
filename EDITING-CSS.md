# Editing CSS in This Project

This guide explains how to update the styles for this site using SCSS and CSS.

## How the CSS Works
- The main stylesheet is `assets/css/main.scss` (written in SCSS).
- The site uses `assets/css/main.css` (compiled from SCSS) for styling.
- The HTML layout references `main.css` (not the SCSS file directly).

## How to Edit Styles
1. **Edit SCSS:**
   - Make your changes in `assets/css/main.scss`.
   - You can use SCSS features (nesting, variables, etc.).

2. **Compile SCSS to CSS:**
   - Open a terminal in the project root.
   - Run:
     ```sh
     sass assets/css/main.scss assets/css/main.css
     ```
   - This will update `main.css` with your changes.

3. **Reload the Site:**
   - Refresh your browser to see the updated styles.

## Troubleshooting
- If styles do not appear, make sure you compiled SCSS to CSS and that there are no errors in your SCSS file.
- Only `.css` files can be referenced in HTML, not `.scss`.

---
Feel free to add more tips or troubleshooting steps as needed!
