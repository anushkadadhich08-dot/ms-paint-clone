# GraphiDraw

GraphiDraw is a browser-based 2D drawing and computer graphics learning application built with HTML, CSS, and JavaScript. It combines a lightweight paint-style editor with manual rasterization and geometric algorithms, making it useful both as a creative tool and as a teaching aid for computer graphics concepts.

## Overview

The project is designed to let users:

- draw freehand sketches and geometric shapes
- compare line rasterization techniques such as DDA and Bresenham
- fill regions using flood fill and boundary fill methods
- transform selected drawings with rotation, scaling, and reflection
- manage undo/redo and export artwork as PNG or JPG
- work with a responsive canvas UI in the browser

## Features

### Drawing tools
- Pencil
- Brush
- Eraser
- Line
- Rectangle
- Circle
- Ellipse
- Triangle
- Polygon
- Fill bucket
- Selection tool

### Graphics algorithms
- DDA line drawing
- Bresenham line drawing
- Midpoint circle generation
- Flood fill
- Boundary fill
- 2D transformation operations

### Editing and workflow
- Adjustable canvas size
- Background color control
- Color picker for drawing strokes
- Brush size control
- Undo and redo
- New canvas, clear canvas, and open image
- PNG and JPG export
- Zoom in/out
- Coordinate and algorithm status feedback
- Keyboard shortcuts for common actions

## Run locally

This project does not require a package install or build step. You can run it in either of these ways:

1. Open `index.html` directly in a modern browser.
2. Serve the folder with a simple local HTTP server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Keyboard shortcuts

- Ctrl/Cmd + Z: Undo
- Ctrl/Cmd + Y: Redo
- Ctrl/Cmd + S: Save / export
- Ctrl/Cmd + O: Open image
- Ctrl/Cmd + N: New canvas
- Delete: Delete selection
- P: Pencil
- B: Brush
- E: Eraser
- L: Line
- R: Rectangle
- C: Circle
- F: Fill
- V: Select

## Project structure

```text
.
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── algorithms/
│   │   ├── boundaryFill.js
│   │   ├── bresenham.js
│   │   ├── dda.js
│   │   ├── floodFill.js
│   │   └── midpointCircle.js
│   ├── core/
│   │   ├── AppState.js
│   │   └── CanvasManager.js
│   ├── managers/
│   │   ├── HistoryManager.js
│   │   └── SelectionManager.js
│   ├── tools/
│   │   ├── BrushTool.js
│   │   ├── EraserTool.js
│   │   ├── FillTool.js
│   │   ├── FreehandTool.js
│   │   ├── PencilTool.js
│   │   ├── SelectionTool.js
│   │   ├── ShapeTool.js
│   │   └── Tool.js
│   ├── transformations/
│   │   ├── reflection.js
│   │   ├── rotation.js
│   │   ├── scaling.js
│   │   └── translation.js
│   └── utils/
│       └── fileUtils.js
├── assets/
│   ├── icons/
│   └── images/
├── docs/
│   ├── demo.md
│   ├── phase.md
│   ├── plan.md
│   ├── prd.md
│   ├── systemarchitecture.md
│   └── testing.md
└── LICENSE (if present)
```

## Technology stack

- HTML5 canvas
- CSS3 for layout and styling
- JavaScript ES modules
- Browser file APIs for image import/export
- Computer graphics rasterization algorithms implemented manually

## Academic purpose

This project is intended as a Computer Graphics academic exercise and demonstrates how drawing primitives, raster algorithms, and geometric transformations can be implemented directly in the browser without external drawing libraries.

## Notes

- The app is designed for a modern desktop browser.
- The interface is intentionally simple and educational.
- The algorithm details can be toggled according to the project’s visualization or learning mode.

## License

This project is provided for educational and learning purposes. Add a license file if you plan to distribute or publish it publicly.

