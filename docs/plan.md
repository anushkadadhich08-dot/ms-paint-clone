# GraphiDraw — Development Plan

## 1. Development Strategy

Develop GraphiDraw incrementally rather than implementing every feature at once.

```text
Setup
  ↓
Canvas
  ↓
UI
  ↓
Basic Tools
  ↓
Shapes
  ↓
CG Algorithms
  ↓
Fill Algorithms
  ↓
Transformations
  ↓
Selection
  ↓
Undo/Redo
  ↓
File Operations
  ↓
Zoom
  ↓
Visualization
  ↓
Testing
  ↓
Documentation
```

## 2. Milestone 1 — Working Canvas
Create:
- HTML page
- CSS layout
- Canvas
- JavaScript initialization
- Mouse event handling

**Completion:** Canvas works and mouse coordinates are visible.

## 3. Milestone 2 — Pencil and Brush
Implement:
- Mouse down/move/up
- Color
- Brush size

**Completion:** Smooth freehand drawing works.

## 4. Milestone 3 — Eraser and Colors
Implement:
- Eraser
- Color picker
- Background color
- Brush size control

**Completion:** Users can change colors and erase.

## 5. Milestone 4 — Shape Tools
Implement:
- Line
- Rectangle
- Circle
- Ellipse
- Triangle
- Polygon

**Completion:** Shapes draw interactively.

## 6. Milestone 5 — DDA
Implement:
- Start/end point
- dx/dy
- Steps
- Increments
- Pixel generation

**Completion:** DDA produces expected line pixels.

## 7. Milestone 6 — Bresenham
Implement and test:
- Horizontal lines
- Vertical lines
- Positive slopes
- Negative slopes
- Different octants

**Completion:** Correct Bresenham rasterization.

## 8. Milestone 7 — Midpoint Circle
Implement:
- Center
- Radius
- Eight-way symmetry
- Pixel plotting

**Completion:** Correct circles at different radii.

## 9. Milestone 8 — Fill Algorithms
Implement:
- Flood Fill
- Boundary Fill
- Fill color

Prefer iterative/stack-based implementations to avoid deep recursion.

**Completion:** Closed regions fill correctly.

## 10. Milestone 9 — Transformations
Implement:
- Translation
- Scaling
- Rotation
- Reflection

**Completion:** Selected content transforms correctly.

## 11. Milestone 10 — Selection
Implement:
- Select
- Move
- Resize
- Delete
- Transform

**Completion:** Selected regions can be edited.

## 12. Milestone 11 — Undo/Redo
Implement:
- undoStack
- redoStack
- Keyboard shortcuts
- History states

**Completion:** Multiple operations can be undone/redone.

## 13. Milestone 12 — File Handling
Implement:
- New
- Open
- Save
- PNG
- JPG

**Completion:** Exported images open correctly.

## 14. Milestone 13 — Zoom
Implement:
- 25%
- 50%
- 75%
- 100%
- 150%
- 200%
- 400%

Maintain correct mouse/canvas coordinates.

## 15. Milestone 14 — Algorithm Visualization
Show:
- Current algorithm
- Current step
- Algorithm variables
- Current pixel
- Pixel-by-pixel progress

**Completion:** Algorithms can be demonstrated interactively.

## 16. Testing Plan

### Unit Testing
Test algorithms independently.

Example:

```text
DDA:
(0,0) → (10,10)

Bresenham:
(0,0) → (10,5)

Circle:
Center (100,100), Radius 50
```

### Integration Testing
Test:

```text
Tool → Algorithm → Canvas
```

Examples:
- Line + DDA
- Line + Bresenham
- Circle + Midpoint
- Fill + Flood Fill

### UI Testing
Check:
- Toolbar
- Menus
- Color picker
- Shortcuts
- Dialogs
- Canvas interaction

### File Testing
Check:
- PNG
- JPG
- Opening images
- Invalid files

## 17. Git Strategy

Recommended branches:

```text
main
develop
feature/canvas
feature/basic-tools
feature/cg-algorithms
feature/fill
feature/transformations
feature/history
feature/file-handling
```

Example commits:

```text
feat: add canvas initialization
feat: implement pencil tool
feat: implement DDA line algorithm
feat: implement Bresenham algorithm
feat: add midpoint circle
feat: implement flood fill
feat: add undo redo
feat: add image export
fix: correct canvas coordinate conversion
```

## 18. Development Rules

1. Do not put all JavaScript in one file.
2. Keep algorithms independent from UI.
3. Do not replace required algorithms with Canvas built-ins.
4. Keep commits small and meaningful.
5. Test each algorithm independently before UI integration.
6. Capture screenshots during development for the final report.

## 19. Priority Classification

### Must Have
- Canvas
- Pencil
- Brush
- Eraser
- Colors
- Line
- Rectangle
- Circle
- DDA
- Bresenham
- Midpoint Circle
- Flood Fill
- Undo/Redo
- Save/export

### Should Have
- Polygon
- Boundary Fill
- Selection
- Translation
- Rotation
- Scaling
- Reflection
- Zoom

### Could Have
- Algorithm visualization
- Text
- Layers
- Bézier curves
- Image filters
- Touch support

### Future
- Collaboration
- Cloud storage
- Advanced layers
- SVG support
- PWA
- Real-time multiplayer drawing

## 20. Definition of Done

The project is complete when:
- Application launches without errors.
- Canvas works correctly.
- Drawing tools work.
- CG algorithms produce correct results.
- Fill algorithms work.
- Transformations work.
- Undo/Redo works.
- Images can be exported.
- Zoom works.
- UI is polished.
- Code is modular.
- README is complete.
- Documentation is complete.
- Demo workflow works.
- The student can explain every major algorithm.

## 21. Final Outcome

GraphiDraw should demonstrate both software development and Computer Graphics knowledge:

### Software Development
- UI
- Architecture
- JavaScript
- Events
- State management
- File handling
- Testing
- Git

### Computer Graphics
- Rasterization
- DDA
- Bresenham
- Midpoint Circle
- Flood Fill
- Boundary Fill
- Coordinates
- Pixels
- Transformations
- Rendering
