export class AppState {
  constructor() {
    this.canvasWidth = 900;
    this.canvasHeight = 600;
    this.backgroundColor = '#ffffff';
    this.foregroundColor = '#17213b';
    this.brushSize = 4;
    this.zoom = 1;
    this.currentTool = 'pencil';
    this.lineAlgorithm = 'bresenham';
    this.fillAlgorithm = 'flood';
    this.visualize = false;
    this.emoji = '✨';
    this.viewAngle = 30;
    this.textContent = '';
    this.textSize = 24;
    this.fontFamily = 'Arial, sans-serif';
    this.fontWeight = '600';
    this.textColor = '#17213b';
    this.textAutoContrast = true;
  }
}
