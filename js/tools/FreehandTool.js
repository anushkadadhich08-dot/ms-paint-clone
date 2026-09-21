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
    const width = Math.max(1, this.state.brushSize * this.sizeMultiplier);
    context.save();
    context.strokeStyle = this.color(this.state);
    context.fillStyle = this.color(this.state);
    context.lineWidth = width;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
    // A zero-length Canvas path is not consistently painted by browsers.
    // Filling the endpoints makes taps and the beginning/end of a drag reliable.
    context.beginPath();
    context.arc(from.x, from.y, width / 2, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.arc(to.x, to.y, width / 2, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }
}
