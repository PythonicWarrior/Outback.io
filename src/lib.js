/*
*
*   Useful JS functions for game developers
*
*/

const RAD2DEG = (x) => {
    // Converts degrees to radians
    return (x * 180) / Math.PI;
}
const DEG2RAD = (x) => {
    // Converts degrees to radians
    return (x * Math.PI) / 180
}
const LERP = (x, y, time = 0.5) => {
    // Linear interpolation between two values
    x * (1 - time) + y * time;
}
const CLAMP = (val, min = 0, max = 1) =>  {
    // Restricts 'val' between minimum and maximum values
    return Math.min(max, Math.max(val, min))
}
const ILERP = (x, y, pt) => {
    // Finds the time value for 'pt' between 'x' and 'y'
    return CLAMP((pt - x) / (y - x));
}
const AABB = (rect1, rect2) => {
    // Determines if 'rect1' and 'rect2' are intersecting
    return (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y) ? true : false
}
const MOVE = (pt, angle, dist=1) => {
    // Moves a point in a direction in x units
    pt.x += Math.cos(angle) * dist;
    pt.y += Math.sin(angle) * dist;
}
const DIST = (pt1, pt2) => {
    // Gets the distance between two points
    return Math.sqrt(Math.pow(pt1.x - pt2.x, 2) + Math.pow(pt1.y - pt2.y, 2))
};
const SNAP = (value, step) => {
    // Snaps a value to 'step' increments
    return Math.round(x / step) * step
}

function ConvertInt2Char(int) {
    let char = 'a'.charCodeAt(0);
    return String.fromCharCode(char + int);
}