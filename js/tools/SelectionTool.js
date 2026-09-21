import { Tool } from './Tool.js';
export class SelectionTool extends Tool {
  constructor(canvasManager, state, selectionManager) { super(canvasManager, state); this.selectionManager = selectionManager; this.snapshot = null; this.name = 'Select'; }
  pointerDown(point) { const { canvas, context } = this.canvasManager; this.snapshot = context.getImageData(0, 0, canvas.width, canvas.height); this.selectionManager.start(point); }
  pointerMove(point) { if (!this.snapshot) return; this.canvasManager.context.putImageData(this.snapshot, 0, 0); this.selectionManager.preview(point); }
  pointerUp(point) { if (!this.snapshot) return; this.canvasManager.context.putImageData(this.snapshot, 0, 0); this.selectionManager.finish(point); this.snapshot = null; }
}
