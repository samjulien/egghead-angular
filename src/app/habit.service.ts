import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Habit } from './habit';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private refetchSubject = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  get refetch() {
    return this.refetchSubject.asObservable();
  }

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('/api/habits');
  }

  addHabit(newHabit: Habit) {
    return this.http
      .post<Habit>('/api/habits', newHabit)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }
}
