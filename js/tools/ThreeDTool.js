import { Tool } from './Tool.js';

export class ThreeDTool extends Tool {
  constructor(canvasManager, state) { super(canvasManager, state); this.name = '3D Shape'; this.start = null; this.snapshot = null; }
  pointerDown(point) { this.start = point; const { canvas, context } = this.canvasManager; this.snapshot = context.getImageData(0, 0, canvas.width, canvas.height); }
  pointerMove(point) { if (!this.start) return; this.canvasManager.context.putImageData(this.snapshot, 0, 0); this.draw(point); }
  pointerUp(point) { if (!this.start) return; this.canvasManager.context.putImageData(this.snapshot, 0, 0); this.draw(point); this.start = null; this.snapshot = null; }
  draw(end) {
    const context = this.canvasManager.context; const x = Math.min(this.start.x, end.x); const y = Math.min(this.start.y, end.y); const width = Math.abs(end.x - this.start.x); const height = Math.abs(end.y - this.start.y); const angle = (this.state.viewAngle * Math.PI) / 180; const depth = Math.max(16, Math.min(width, height) * .34); const dx = Math.cos(angle) * depth; const dy = -Math.sin(angle) * depth;
    const front = [[x,y],[x + width,y],[x + width,y + height],[x,y + height]]; const back = front.map(([px, py]) => [px + dx, py + dy]);
    context.save(); context.lineWidth = Math.max(1, this.state.brushSize); context.strokeStyle = this.state.foregroundColor; context.fillStyle = `${this.state.foregroundColor}22`;
    const face = (points) => { context.beginPath(); points.forEach(([px,py], index) => index ? context.lineTo(px,py) : context.moveTo(px,py)); context.closePath(); context.fill(); context.stroke(); };
    face(front); face([front[1], back[1], back[2], front[2]]); face([front[0], front[1], back[1], back[0]]); face(back);
    context.restore();
  }
}
