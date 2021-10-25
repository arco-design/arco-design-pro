/* eslint-disable @typescript-eslint/no-explicit-any */
export function isArray(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Array]';
}
export function isObject(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Object]';
}
export function isString(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object String]';
}
