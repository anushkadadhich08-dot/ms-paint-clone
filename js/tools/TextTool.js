import { Tool } from './Tool.js';

export class TextTool extends Tool {
  constructor(canvasManager, state) { super(canvasManager, state); this.name = 'Text'; }
  pointerDown(point) {
    const text = this.state.textContent.trim();
    if (!text) return false;
    const context = this.canvasManager.context;
    context.save();
    context.fillStyle = this.state.foregroundColor;
    context.font = `${this.state.fontWeight} ${this.state.textSize}px ${this.state.fontFamily}`;
    context.textBaseline = 'top';
    const lineHeight = Math.round(this.state.textSize * 1.3);
    text.split(/\r?\n/).forEach((line, index) => context.fillText(line, point.x, point.y + index * lineHeight));
    context.restore();
    return true;
  }
}
