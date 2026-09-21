import { FreehandTool } from './FreehandTool.js';

export class BrushTool extends FreehandTool {
  constructor(canvasManager, state) {
    super(canvasManager, state, { color: ({ foregroundColor }) => foregroundColor, sizeMultiplier: 2.25, name: 'Brush' });
  }
}
