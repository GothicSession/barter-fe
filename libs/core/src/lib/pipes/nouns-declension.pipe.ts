import { Pipe, PipeTransform } from '@angular/core';

const HUNDRED = 100;
const THIRD_NOUN_FIRST_LIMIT = 5;
const THIRD_NOUN_LAST_LIMIT = 20;
const SECOND_NOUN_FIRST_LIMIT = 2;
const SECOND_NOUN_LAST_LIMIT = 4;
const THIRD_NOUN_INDEX = 2;
const MULTIPLIER = 10;

@Pipe({ name: 'nounsDeclension' })
export class NounsDeclensionPipe implements PipeTransform {
  transform(nounsArray: string[], num: number): string {
    num = Math.floor(num);
    let result;
    let count = num % HUNDRED;

    if (count >= THIRD_NOUN_FIRST_LIMIT && count <= THIRD_NOUN_LAST_LIMIT) {
      result = nounsArray[THIRD_NOUN_INDEX];
    } else {
      count = num % MULTIPLIER;

      if (count === 1) {
        result = nounsArray[0];
      } else if (
        count >= SECOND_NOUN_FIRST_LIMIT &&
        count <= SECOND_NOUN_LAST_LIMIT
      ) {
        result = nounsArray[1];
      } else {
        result = nounsArray[THIRD_NOUN_INDEX];
      }
    }

    return result;
  }
}
