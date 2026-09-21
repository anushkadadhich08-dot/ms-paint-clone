# GraphiDraw — Product Requirements Document

## 1. Product Overview

**GraphiDraw** is a browser-based 2D drawing and image-editing application inspired by traditional paint applications such as MS Paint.

The primary objective is to build an interactive Computer Graphics application using **HTML, CSS, JavaScript, and HTML5 Canvas**, while implementing fundamental Computer Graphics algorithms manually.

The application will allow users to create drawings using basic geometric primitives, freehand tools, colors, filling algorithms, transformations, and image-editing operations.

The project is intended as a third-year Computer Graphics academic project.

## 2. Problem Statement

Basic paint applications provide drawing functionality but generally hide the underlying graphics operations from the user.

GraphiDraw aims to provide a practical implementation of fundamental Computer Graphics concepts in an interactive application.

The system will demonstrate:
- Raster graphics
- Pixel manipulation
- Line-drawing algorithms
- Circle-drawing algorithms
- Region-filling algorithms
- 2D geometric transformations
- Coordinate systems
- Mouse-based interaction
- Image export and persistence

## 3. Goals

### Primary Goals
1. Build a functional browser-based drawing application.
2. Implement fundamental Computer Graphics algorithms manually.
3. Provide an intuitive graphical user interface.
4. Support mouse and keyboard interaction.
5. Allow users to create, edit, transform, and export drawings.
6. Demonstrate Computer Graphics concepts through a practical application.

### Academic Goals
The project should demonstrate understanding of:
- DDA Line Drawing Algorithm
- Bresenham Line Drawing Algorithm
- Midpoint Circle Algorithm
- Flood Fill
- Boundary Fill
- Translation
- Rotation
- Scaling
- Reflection
- Rasterization
- Coordinate systems
- RGB color representation

## 4. Target Users

### Primary User
Students learning Computer Graphics who need an interactive application for experimenting with graphics algorithms.

### Secondary Users
- Students demonstrating Computer Graphics projects
- Beginners learning 2D drawing
- Users who need a lightweight browser-based drawing tool

## 5. Core Features

### 5.1 Canvas
- Adjustable canvas size
- White/default background
- Mouse interaction
- Coordinate tracking
- Zoom support
- Canvas clearing
- Canvas resizing

### 5.2 Drawing Tools
- Pencil
- Brush
- Eraser
- Line
- Rectangle
- Circle
- Ellipse
- Triangle
- Polygon

### 5.3 Line Algorithms
- DDA
- Bresenham

The application should allow users to compare the results of both algorithms.

### 5.4 Circle Algorithm
Implement the Midpoint Circle Algorithm using circle symmetry.

### 5.5 Filling
- Flood Fill
- Boundary Fill

A stack-based implementation should be preferred over deep recursive implementations.

### 5.6 Colors
- RGB color selection
- HTML color picker
- Custom colors
- Foreground color
- Background color
- Recent colors

### 5.7 Brush Settings
Support configurable brush and eraser sizes.

## 6. Transformations

### Translation
`x' = x + Tx`  
`y' = y + Ty`

### Scaling
`x' = x × Sx`  
`y' = y × Sy`

### Rotation
`x' = x cosθ - y sinθ`  
`y' = x sinθ + y cosθ`

### Reflection
- X-axis
- Y-axis
- Origin

## 7. Selection and Editing
- Select objects/regions
- Move selected content
- Resize selected content
- Delete selected content
- Transform selected content

## 8. Undo and Redo
Support multiple levels of history using undo and redo stacks.

## 9. File Operations
- New canvas
- Open image
- Save/export image
- PNG export
- JPG export
- Clear canvas

## 10. Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| Ctrl + Z | Undo |
| Ctrl + Y | Redo |
| Ctrl + S | Save |
| Ctrl + O | Open |
| Ctrl + N | New |
| Delete | Delete selection |
| P | Pencil |
| B | Brush |
| E | Eraser |
| L | Line |
| R | Rectangle |
| C | Circle |
| F | Fill |
| V | Select |

## 11. Algorithm Visualization

Optional advanced mode showing step-by-step operation of DDA, Bresenham, Midpoint Circle, and fill algorithms.

## 12. Non-Functional Requirements
- Responsive interaction
- Simple UI
- Modern browser compatibility
- Modular JavaScript
- Graceful error handling

## 13. Technology Stack
- HTML5
- CSS3
- JavaScript ES6+
- HTML5 Canvas
- Canvas 2D Context
- ImageData API
- Browser download APIs
- Optional LocalStorage
- VS Code
- Git/GitHub

## 14. Project Scope

### Version 1
Canvas, Pencil, Brush, Eraser, Colors, Line, Rectangle, Circle, Undo/Redo, Save.

### Version 2
DDA, Bresenham, Midpoint Circle, Polygon, Flood Fill, Boundary Fill.

### Version 3
Selection, Translation, Rotation, Scaling, Reflection, Zoom, keyboard shortcuts.

### Version 4
Algorithm visualization, improved UI, performance improvements, documentation.

## 15. Success Criteria
1. Users can create drawings.
2. CG algorithms work correctly.
3. Shapes can be drawn interactively.
4. Regions can be filled.
5. Transformations work.
6. Undo/redo works.
7. Drawings can be exported.
8. The application runs in a modern browser.
9. The student can explain the algorithms during viva.

## 16. Future Enhancements
- Layers
- Multiple canvases
- Gradient fills
- Advanced selection
- Bézier curves
- Clipping algorithms
- Image filters
- Text editing
- SVG export
- Project file format
- Collaborative drawing
- Touch/stylus support
- Progressive Web App support
