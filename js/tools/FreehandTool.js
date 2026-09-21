import { Tool } from './Tool.js';

export class FreehandTool extends Tool {
  constructor(canvasManager, state, { color, sizeMultiplier = 1, name }) {
    super(canvasManager, state);
    this.color = color;
    this.sizeMultiplier = sizeMultiplier;
    this.name = name;
    this.previousPoint = null;
  }

  pointerDown(point) {
    this.previousPoint = point;
    this.drawSegment(point, point);
  }

  pointerMove(point) {
    if (!this.previousPoint) return;
    this.drawSegment(this.previousPoint, point);
    this.previousPoint = point;
  }

  pointerUp() {
    this.previousPoint = null;
  }

  drawSegment(from, to) {
    const context = this.canvasManager.context;
    context.save();
    context.strokeStyle = this.color(this.state);
    context.lineWidth = Math.max(1, this.state.brushSize * this.sizeMultiplier);
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
    context.restore();
  }
}
