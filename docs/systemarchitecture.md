# GraphiDraw — System Architecture

## 1. Architecture Overview

GraphiDraw follows a modular, layered architecture:

1. Presentation Layer
2. Application/Controller Layer
3. Tool Layer
4. Graphics Algorithm Layer
5. Transformation Layer
6. State Management Layer
7. File/Export Layer

The initial application runs entirely on the client side.

## 2. High-Level Architecture

```text
USER
  |
  v
PRESENTATION LAYER
Toolbar | Menus | Color Picker | Status Bar
  |
  v
APPLICATION LAYER
Event Handling | Tool Selection | Commands
  |
  v
TOOL LAYER
Pencil | Brush | Line | Circle | Fill | Rectangle | Polygon | Eraser | Selection
  |
  +----------------------+----------------------+
  |                                             |
  v                                             v
GRAPHICS ALGORITHM ENGINE              TRANSFORMATION ENGINE
DDA                                   Translation
Bresenham                             Rotation
Midpoint Circle                       Scaling
Flood Fill                            Reflection
Boundary Fill
  |                                             |
  +----------------------+----------------------+
                         |
                         v
                 CANVAS / RASTER
                 HTML5 Canvas
                 ImageData
                         |
                         v
                  FILE / EXPORT
                  PNG | JPG | Open
```

## 3. Directory Architecture

```text
graphidraw/
├── index.html
├── README.md
├── assets/
│   ├── icons/
│   └── images/
├── css/
│   ├── style.css
│   ├── toolbar.css
│   └── canvas.css
└── js/
    ├── main.js
    ├── core/
    │   ├── CanvasManager.js
    │   ├── AppState.js
    │   ├── EventManager.js
    │   └── CommandManager.js
    ├── tools/
    │   ├── Tool.js
    │   ├── PencilTool.js
    │   ├── BrushTool.js
    │   ├── EraserTool.js
    │   ├── LineTool.js
    │   ├── RectangleTool.js
    │   ├── CircleTool.js
    │   ├── EllipseTool.js
    │   ├── PolygonTool.js
    │   ├── FillTool.js
    │   ├── SelectionTool.js
    │   └── TextTool.js
    ├── algorithms/
    │   ├── dda.js
    │   ├── bresenham.js
    │   ├── midpointCircle.js
    │   ├── floodFill.js
    │   └── boundaryFill.js
    ├── transformations/
    │   ├── translation.js
    │   ├── rotation.js
    │   ├── scaling.js
    │   └── reflection.js
    ├── managers/
    │   ├── ColorManager.js
    │   ├── HistoryManager.js
    │   ├── SelectionManager.js
    │   └── ZoomManager.js
    └── utils/
        ├── coordinates.js
        ├── constants.js
        └── fileUtils.js
```

## 4. Presentation Layer
Responsible for:
- Header
- Toolbar
- Sidebar
- Canvas
- Color panel
- Properties panel
- Status bar
- Dialogs

The presentation layer should not contain CG algorithms.

## 5. Canvas Manager
`CanvasManager.js` handles:
- Canvas initialization
- Dimensions
- Rendering context
- Clearing
- Pixel reading/writing
- Export
- Zoom

Example API:

```javascript
canvasManager.clear();
canvasManager.getPixel(x, y);
canvasManager.setPixel(x, y, color);
canvasManager.exportImage("png");
```

## 6. Application State
`AppState.js` stores:
- Current tool
- Current color
- Background color
- Brush size
- Canvas size
- Zoom level
- Selected algorithm
- Selection state

Example:

```javascript
const appState = {
    currentTool: "pencil",
    color: "#000000",
    brushSize: 5,
    zoom: 1,
    lineAlgorithm: "dda"
};
```

## 7. Tool Layer
Each drawing tool has a clear responsibility:
- PencilTool
- BrushTool
- EraserTool
- LineTool
- CircleTool
- RectangleTool
- PolygonTool
- FillTool
- SelectionTool
- TextTool

Tools communicate with graphics algorithms and the Canvas Manager.

## 8. Algorithm Layer
Core algorithms:
- DDA
- Bresenham
- Midpoint Circle
- Flood Fill
- Boundary Fill

Algorithms should return or apply rasterized points without knowing about UI components.

## 9. Transformation Layer
Supports:
- Translation
- Rotation
- Scaling
- Reflection

Transformations operate on points or selected regions independently of UI.

## 10. History Architecture

```text
New Action
   |
   v
Undo Stack
   |
   +---- Undo ----> Redo Stack
   |
   +---- New Action -> clear Redo Stack
```

## 11. Event Flow

```text
Mouse Press
   |
Canvas Event
   |
Tool stores start point
   |
Mouse Move
   |
Preview
   |
Mouse Release
   |
Tool gets final point
   |
Algorithm executes
   |
Canvas updates
   |
State saved to history
```

## 12. Coordinate System

Canvas uses:

```text
(0,0) ------------------> X
  |
  |
  |
  v
  Y
```

Top-left is the origin. Mouse coordinates must be converted correctly when zoom is enabled.

## 13. Rendering Strategy

Use:
- Canvas 2D API for general rendering and previews.
- ImageData for direct pixel algorithms such as DDA, Bresenham, Midpoint Circle, Flood Fill, and Boundary Fill.

## 14. Reliability
The application should:
- Validate supported image formats
- Handle invalid files
- Avoid unsafe HTML injection
- Avoid unnecessary user data storage

## 15. Scalability
The architecture should permit future additions:
- Layers
- Bézier curves
- Clipping
- Image filters
- SVG support
- Project files
- Touch support
- PWA support

## 16. Architectural Principle

The main principle is:

> **Separate UI interaction from Computer Graphics algorithms.**

Example:

```text
UI
 ↓
LineTool
 ↓
BresenhamAlgorithm
 ↓
Pixel Renderer
 ↓
Canvas
```

The algorithm should not know about buttons, menus, or HTML.
