export const scalePoint = ({ x, y }, sx, sy, origin = { x: 0, y: 0 }) => ({ x: origin.x + (x - origin.x) * sx, y: origin.y + (y - origin.y) * sy });
