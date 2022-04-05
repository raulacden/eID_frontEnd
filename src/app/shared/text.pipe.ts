import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialsName'
})
export class TextPipe implements PipeTransform {

  transform(value: string): unknown {
    const spplitedText = value.split(' ');    
    return `${spplitedText[0].substring(0,1)}${spplitedText[1].substring(0,1)}`;
  }

}
