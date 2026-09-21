export class HistoryManager {
  constructor(canvasManager, limit = 30) { this.canvasManager = canvasManager; this.limit = limit; this.undoStack = []; this.redoStack = []; this.capture(); }
  capture() { this.undoStack.push(this.canvasManager.context.getImageData(0, 0, this.canvasManager.canvas.width, this.canvasManager.canvas.height)); if (this.undoStack.length > this.limit) this.undoStack.shift(); this.redoStack = []; }
  undo() { if (this.undoStack.length < 2) return false; this.redoStack.push(this.undoStack.pop()); this.canvasManager.context.putImageData(this.undoStack.at(-1), 0, 0); return true; }
  redo() { const image = this.redoStack.pop(); if (!image) return false; this.undoStack.push(image); this.canvasManager.context.putImageData(image, 0, 0); return true; }
  reset() { this.undoStack = []; this.redoStack = []; this.capture(); }
}
