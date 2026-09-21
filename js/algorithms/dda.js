export function ddaLine(start, end) {
  const dx = end.x - start.x; const dy = end.y - start.y;
  const steps = Math.max(Math.abs(dx), Math.abs(dy));
  if (!steps) return [{ x: Math.round(start.x), y: Math.round(start.y) }];
  const points = [];
  for (let step = 0; step <= steps; step += 1) points.push({ x: Math.round(start.x + (dx * step) / steps), y: Math.round(start.y + (dy * step) / steps) });
  return points;
}
