export const addZeroForward = (string: string, needLength: number = 2) =>
  `${'0'.repeat(needLength - string.length)}${string}`;
