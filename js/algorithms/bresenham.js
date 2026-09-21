export function bresenhamLine(start, end) {
  let x = Math.round(start.x); let y = Math.round(start.y); const x2 = Math.round(end.x); const y2 = Math.round(end.y);
  const points = []; const dx = Math.abs(x2 - x); const sx = x < x2 ? 1 : -1; const dy = -Math.abs(y2 - y); const sy = y < y2 ? 1 : -1;
  let error = dx + dy;
  while (true) { points.push({ x, y }); if (x === x2 && y === y2) break; const twiceError = 2 * error; if (twiceError >= dy) { error += dy; x += sx; } if (twiceError <= dx) { error += dx; y += sy; } }
  return points;
}
