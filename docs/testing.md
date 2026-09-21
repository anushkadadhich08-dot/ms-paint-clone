# GraphiDraw Test Checklist

## Algorithms

1. Select DDA, draw from `(0,0)` to `(10,10)`, and confirm an even diagonal.
2. Select Bresenham, test horizontal, vertical, shallow, steep, and negative-slope lines.
3. Select Circle and draw radii 10, 50, and 100; confirm eight-way symmetry.
4. Draw a closed shape and test Flood Fill. Repeat with Boundary Fill using a dark boundary.

## Interaction

1. Verify Pencil, Brush, and Eraser strokes at several sizes.
2. Verify Undo/Redo after strokes, shapes, fills, deletes, and transformations.
3. Verify PNG/JPG export and valid PNG/JPG import; reject an unsupported file.
4. Verify zoom at 25% through 400% and confirm pointer coordinates remain accurate.
5. Select a region, apply rotate, scale, and both reflections, then delete it.

## Shortcuts

`P`, `B`, `E`, `L`, `R`, `C`, `F`, and `V` select tools. Ctrl/Cmd+Z, Ctrl/Cmd+Y, Ctrl/Cmd+S, Ctrl/Cmd+O, Ctrl/Cmd+N, and Delete perform their corresponding commands.
