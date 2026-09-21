export class CanvasManager {
  constructor(canvas, state) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d', { willReadFrequently: true });
    this.state = state;
    this.clear();
  }

  clear() {
    this.context.save();
    this.context.fillStyle = this.state.backgroundColor;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.restore();
  }

  resize(width, height) {
    const snapshot = document.createElement('canvas');
    snapshot.width = this.canvas.width;
    snapshot.height = this.canvas.height;
    snapshot.getContext('2d').drawImage(this.canvas, 0, 0);

    this.canvas.width = width;
    this.canvas.height = height;
    this.state.canvasWidth = width;
    this.state.canvasHeight = height;
    this.clear();
    this.context.drawImage(snapshot, 0, 0);
  }

  getCanvasPoint(event) {
    const bounds = this.canvas.getBoundingClientRect();
    return {
      x: Math.floor((event.clientX - bounds.left) * (this.canvas.width / bounds.width)),
      y: Math.floor((event.clientY - bounds.top) * (this.canvas.height / bounds.height)),
    };
  }
}
