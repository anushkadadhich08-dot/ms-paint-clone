function sameColor(data, offset, color) { return data[offset] === color[0] && data[offset + 1] === color[1] && data[offset + 2] === color[2] && data[offset + 3] === color[3]; }
function colorFromHex(hex) { const value = Number.parseInt(hex.slice(1), 16); return [(value >> 16) & 255, (value >> 8) & 255, value & 255, 255]; }
export function floodFill(context, x, y, fillHex) {
  const { width, height } = context.canvas; const image = context.getImageData(0, 0, width, height); const target = Array.from(image.data.slice((y * width + x) * 4, (y * width + x) * 4 + 4)); const fill = colorFromHex(fillHex);
  if (target.every((value, index) => value === fill[index])) return 0;
  const stack = [[x, y]]; let painted = 0;
  while (stack.length) { const [px, py] = stack.pop(); if (px < 0 || py < 0 || px >= width || py >= height) continue; const offset = (py * width + px) * 4; if (!sameColor(image.data, offset, target)) continue; image.data.set(fill, offset); painted += 1; stack.push([px + 1, py], [px - 1, py], [px, py + 1], [px, py - 1]); }
  context.putImageData(image, 0, 0); return painted;
}
export { colorFromHex, sameColor };
