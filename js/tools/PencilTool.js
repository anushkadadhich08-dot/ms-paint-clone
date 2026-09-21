import { FreehandTool } from './FreehandTool.js';

export class PencilTool extends FreehandTool {
  constructor(canvasManager, state) {
    super(canvasManager, state, { color: ({ foregroundColor }) => foregroundColor, name: 'Pencil' });
  }
}
