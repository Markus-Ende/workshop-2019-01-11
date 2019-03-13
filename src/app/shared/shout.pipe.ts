import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    if (args.length > 0) {
      return `${value}${args[0]}`;
    } else {
      return `${value}!!!`;
    }
  }
}
