import { IOutlay } from "../types/interfaces/entities/outlay.ts";

// export function countChildrenById(array: IOutlay[], targetId: number) {
export function countChildrenById(data: IOutlay[], targetId: number): number {
  function countRecursive(obj: IOutlay): number {
    let childrenCount = obj.child.length;

    for (const child of obj.child) {
      childrenCount += countRecursive(child);
    }

    return childrenCount;
  }

  let totalCount = 0;

  function findAndCount(obj: IOutlay) {
    if (obj.id === targetId) {
      if (obj.child.length === 1) {
        totalCount = obj.child.length;
      } else if (obj.child.length > 1) {
        totalCount = countRecursive(obj);
      }
    }

    for (const child of obj.child) {
      findAndCount(child);
    }
  }

  for (const obj of data) {
    findAndCount(obj);
  }

  return totalCount;
}
