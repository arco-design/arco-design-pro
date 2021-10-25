import { isArray, isObject, isString } from './is';

type ClassNamesArg = string | string[] | { [key: string]: boolean } | undefined | null | boolean;

export default function (...args: ClassNamesArg[]): string {
  const length = args.length;
  let classNames: string[] = [];
  for (let i = 0; i < length; i++) {
    const v = args[i];
    if (!v) {
      continue;
    }
    if (isString(v)) {
      classNames.push(v as string);
    } else if (isArray(v)) {
      classNames = classNames.concat(v as []);
    } else if (isObject(v)) {
      Object.keys(v).forEach((k) => {
        if (v[k]) {
          classNames.push(k);
        }
      });
    } else {
      throw new Error('arguments must be one of string/array/object.');
    }
  }
  return classNames.join(' ');
}
