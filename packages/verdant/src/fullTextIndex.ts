import { removeStopwords } from 'stopword';

export function fullTextIndex(str: string) {
  return str.split(/\s+/).map((s) => s.toLowerCase());
}
