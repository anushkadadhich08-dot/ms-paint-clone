import { colorFromHex } from './floodFill.js';
const matches = (data, offset, color) => color.every((value, index) => data[offset + index] === value);
export function boundaryFill(context, x, y, fillHex, boundaryHex) {
  const { width, height } = context.canvas; const image = context.getImageData(0, 0, width, height); const fill = colorFromHex(fillHex); const boundary = colorFromHex(boundaryHex); const stack = [[x, y]]; let painted = 0;
  while (stack.length) { const [px, py] = stack.pop(); if (px < 0 || py < 0 || px >= width || py >= height) continue; const offset = (py * width + px) * 4; if (matches(image.data, offset, boundary) || matches(image.data, offset, fill)) continue; image.data.set(fill, offset); painted += 1; stack.push([px + 1, py], [px - 1, py], [px, py + 1], [px, py - 1]); }
  context.putImageData(image, 0, 0); return painted;
}
