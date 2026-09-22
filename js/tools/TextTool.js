import { Tool } from './Tool.js';

export class TextTool extends Tool {
  constructor(canvasManager, state) { super(canvasManager, state); this.name = 'Text'; }
  pointerDown(point) {
    const text = this.state.textContent.trim();
    if (!text) return false;
    const context = this.canvasManager.context;
    context.save();
    context.fillStyle = this.getReadableColor();
    context.font = `${this.state.fontWeight} ${this.state.textSize}px ${this.state.fontFamily}`;
    context.textBaseline = 'top';
    const lineHeight = Math.round(this.state.textSize * 1.3);
    text.split(/\r?\n/).forEach((line, index) => context.fillText(line, point.x, point.y + index * lineHeight));
    context.restore();
    return true;
  }

  getReadableColor() {
    if (!this.state.textAutoContrast || this.contrastRatio(this.state.textColor, this.state.backgroundColor) >= 4.5) return this.state.textColor;
    return this.relativeLuminance(this.state.backgroundColor) > .5 ? '#111827' : '#ffffff';
  }

  contrastRatio(first, second) {
    const one = this.relativeLuminance(first); const two = this.relativeLuminance(second);
    return (Math.max(one, two) + .05) / (Math.min(one, two) + .05);
  }

  relativeLuminance(hex) {
    const value = Number.parseInt(hex.slice(1), 16);
    return [16, 8, 0].map((shift) => ((value >> shift) & 255) / 255).map((channel) => channel <= .03928 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4).reduce((total, channel, index) => total + channel * [.2126, .7152, .0722][index], 0);
  }
}
