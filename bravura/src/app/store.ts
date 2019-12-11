import {Observable, BehaviorSubject} from 'rxjs';

export class Store<T> {
  state$: Observable<T>;
  private stateSubj: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this.stateSubj = new BehaviorSubject(initialState);
    this.state$ = this.stateSubj.asObservable();
  }

  get state(): T {
    return this.stateSubj.getValue();
  }

  setState(nextState: T): void {
    this.stateSubj.next(nextState);
  }
}
