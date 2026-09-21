import { Tool } from './Tool.js';

export class EmojiTool extends Tool {
  constructor(canvasManager, state) { super(canvasManager, state); this.name = 'Emoji'; }
  pointerDown(point) {
    const context = this.canvasManager.context;
    context.save();
    context.font = `${Math.max(18, this.state.brushSize * 7)}px "Apple Color Emoji", "Segoe UI Emoji", sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(this.state.emoji, point.x, point.y);
    context.restore();
  }
}
