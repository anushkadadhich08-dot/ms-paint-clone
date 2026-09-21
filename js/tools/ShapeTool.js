import { Tool } from './Tool.js';
import { ddaLine } from '../algorithms/dda.js';
import { bresenhamLine } from '../algorithms/bresenham.js';
import { midpointCircle } from '../algorithms/midpointCircle.js';

export class ShapeTool extends Tool {
  constructor(canvasManager, state, type, onInfo) { super(canvasManager, state); this.type = type; this.onInfo = onInfo; this.start = null; this.snapshot = null; }
  pointerDown(point) { this.start = point; const { canvas, context } = this.canvasManager; this.snapshot = context.getImageData(0, 0, canvas.width, canvas.height); }
  pointerMove(point) { if (!this.start) return; this.canvasManager.context.putImageData(this.snapshot, 0, 0); this.render(point); }
  pointerUp(point) { if (!this.start) return; this.canvasManager.context.putImageData(this.snapshot, 0, 0); this.render(point); this.start = null; this.snapshot = null; }
  pointsForLine(start, end) { return this.state.lineAlgorithm === 'dda' ? ddaLine(start, end) : bresenhamLine(start, end); }
  render(end) {
    const context = this.canvasManager.context; const { x, y } = this.start; const w = end.x - x; const h = end.y - y;
    context.save(); context.strokeStyle = this.state.foregroundColor; context.lineWidth = this.state.brushSize; context.lineCap = 'round'; context.lineJoin = 'round';
    if (this.type === 'line') { const points = this.pointsForLine(this.start, end); this.plot(points); if (this.state.visualize) this.onInfo(`${this.state.lineAlgorithm.toUpperCase()} · dx ${w} · dy ${h} · ${points.length} pixels`); }
    else if (this.type === 'circle') {
      // Keep the complete circle on the drawing surface, rather than clipping it at an edge.
      const { width, height } = this.canvasManager.canvas;
      const maxRadius = Math.max(1, Math.min(x, y, width - 1 - x, height - 1 - y));
      const radius = Math.min(Math.round(Math.hypot(w, h)), maxRadius);
      const points = midpointCircle(this.start, radius);
      this.plotConnectedCircle(points);
      this.onInfo(`Midpoint circle · center (${x}, ${y}) · radius ${radius} px · closed boundary`);
    }
    else if (this.type === 'rectangle') { context.strokeRect(x, y, w, h); this.onInfo(`Rectangle · ${Math.abs(Math.round(w))} × ${Math.abs(Math.round(h))}`); }
    else if (this.type === 'ellipse') { context.beginPath(); context.ellipse(x, y, Math.abs(w), Math.abs(h), 0, 0, Math.PI * 2); context.stroke(); this.onInfo('Ellipse preview'); }
    else if (this.type === 'triangle') { context.beginPath(); context.moveTo(x, y + h); context.lineTo(x + w / 2, y); context.lineTo(x + w, y + h); context.closePath(); context.stroke(); this.onInfo('Triangle preview'); }
    else if (this.type === 'polygon') { const sides = 6; const radius = Math.hypot(w, h); context.beginPath(); for (let i = 0; i <= sides; i += 1) { const angle = -Math.PI / 2 + (i * Math.PI * 2) / sides; const px = x + Math.cos(angle) * radius; const py = y + Math.sin(angle) * radius; i ? context.lineTo(px, py) : context.moveTo(px, py); } context.stroke(); this.onInfo('Six-sided polygon preview'); }
    context.restore();
  }
  plot(points) { const context = this.canvasManager.context; context.fillStyle = this.state.foregroundColor; const side = Math.max(1, this.state.brushSize); points.forEach(({ x, y }) => context.fillRect(x - side / 2, y - side / 2, side, side)); }
  plotConnectedCircle(points) {
    const unique = [...new Map(points.map((point) => [`${point.x},${point.y}`, point])).values()];
    const center = this.start;
    unique.sort((a, b) => Math.atan2(a.y - center.y, a.x - center.x) - Math.atan2(b.y - center.y, b.x - center.x));
    const outline = unique.flatMap((point, index) => bresenhamLine(point, unique[(index + 1) % unique.length]));
    this.plot(outline);
  }
}
