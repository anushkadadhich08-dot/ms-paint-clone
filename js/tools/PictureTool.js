import { Tool } from './Tool.js';

export class PictureTool extends Tool {
  constructor(canvasManager, state) { super(canvasManager, state); this.name = 'Picture'; this.image = null; }
  setImage(image) { this.image = image; }
  pointerDown(point) {
    if (!this.image) return false;
    const maxSide = 260; const scale = Math.min(1, maxSide / Math.max(this.image.naturalWidth, this.image.naturalHeight)); const width = this.image.naturalWidth * scale; const height = this.image.naturalHeight * scale;
    this.canvasManager.context.drawImage(this.image, point.x - width / 2, point.y - height / 2, width, height);
    return true;
  }
}
