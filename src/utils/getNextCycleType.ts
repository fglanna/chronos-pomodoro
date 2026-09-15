export function getNextCycle(currentlyCycle: number) {
  return currentlyCycle === 0 || currentlyCycle === 8 ? 1 : currentlyCycle + 1;
}