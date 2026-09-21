import { Tool } from './Tool.js';
import { floodFill } from '../algorithms/floodFill.js';
import { boundaryFill } from '../algorithms/boundaryFill.js';
export class FillTool extends Tool {
  constructor(canvasManager, state, onInfo) { super(canvasManager, state); this.onInfo = onInfo; this.name = 'Fill'; }
  pointerDown(point) { const count = this.state.fillAlgorithm === 'flood' ? floodFill(this.canvasManager.context, point.x, point.y, this.state.foregroundColor) : boundaryFill(this.canvasManager.context, point.x, point.y, this.state.foregroundColor, '#17213b'); this.onInfo(`${this.state.fillAlgorithm === 'flood' ? 'Flood' : 'Boundary'} fill · ${count.toLocaleString()} pixels`); }
}
