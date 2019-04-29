import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IDestination } from './destination';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  currentDestination = new BehaviorSubject<IDestination>(null);

  constructor() { }

  onDestination() {
    return this.currentDestination.asObservable();
  }

  setCurrentDestination(destination: IDestination) {
    this.currentDestination.next(destination);
  }

  resetCurrentDestination() {
    this.currentDestination.next(null);
  }
}
