export function getWordStr(str: string, num: number): string {
  return str.split(/\s+/).slice(0, num).join(' ');
}
