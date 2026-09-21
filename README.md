# GraphiDraw

Browser-based 2D drawing and computer-graphics learning application.

## Run locally

Open `index.html` in a modern browser, or serve this folder with a static HTTP server. The project uses native JavaScript modules and has no dependency installation step.

## Current milestone

Phases 0–15 implementation: drawing tools, shapes, manual DDA/Bresenham/midpoint-circle algorithms, stack-based region fill, selection transforms, undo/redo, PNG/JPG open/export, zoom, responsive UI, shortcuts, and algorithm status feedback.

## Structure

- `js/core/`: canvas and application state
- `js/algorithms/`: standalone computer graphics algorithms
- `js/tools/`: pointer-interaction tools
- `js/managers/`: history, color, selection, zoom
- `js/transformations/`: geometry transformations
