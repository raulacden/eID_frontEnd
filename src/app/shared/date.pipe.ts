import { ChangeDetectorRef, Pipe} from '@angular/core';
import { ApiService } from './services/api.service';
import { AsyncPipe } from '@angular/common';
import { Subject } from 'rxjs';

@Pipe({
  name: 'dateConverterAsync',
  pure: false
})
export class DatePipe extends AsyncPipe {

  private valueSubject = new Subject();
  private value$ = this.valueSubject.asObservable().distinctUntilChanged()
    .switchMap(value => {
      return this.apiService.getDetails(value);
    });

  constructor(cdRef: ChangeDetectorRef, private apiService: ApiService) {
    super(cdRef);
  }

  transform(value: unknown): unknown {
    this.valueSubject.next(value);

    return super.transform(this.value$);
  }

}
