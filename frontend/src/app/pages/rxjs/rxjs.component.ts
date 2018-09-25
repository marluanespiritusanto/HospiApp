import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {
  constructor() {
    let obs = new Observable(observer => {
      let counter = 0;
      let timer = setInterval(() => {
        counter += 1;
        observer.next(counter);
        if (counter === 3) {
          clearInterval(timer);
          observer.complete();
        }

        if (counter == 2) {
          clearInterval(timer);
          observer.error('Error :S');
        }
      }, 1000);
    });

    obs.pipe(retry(2)).subscribe(console.log, console.error, console.log);
  }

  ngOnInit() {}
}
