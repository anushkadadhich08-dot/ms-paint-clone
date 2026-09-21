export function midpointCircle(center, radius) {
  let x = Math.round(radius); let y = 0; let decision = 1 - x; const points = [];
  const addSymmetry = () => [[x,y],[y,x],[-y,x],[-x,y],[-x,-y],[-y,-x],[y,-x],[x,-y]].forEach(([dx,dy]) => points.push({ x: center.x + dx, y: center.y + dy }));
  while (x >= y) { addSymmetry(); y += 1; if (decision <= 0) decision += 2 * y + 1; else { x -= 1; decision += 2 * (y - x) + 1; } }
  return points;
}
