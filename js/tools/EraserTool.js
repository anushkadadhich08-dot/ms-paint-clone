import { FreehandTool } from './FreehandTool.js';

export class EraserTool extends FreehandTool {
  constructor(canvasManager, state) {
    super(canvasManager, state, { color: ({ backgroundColor }) => backgroundColor, sizeMultiplier: 2.5, name: 'Eraser' });
  }
}
