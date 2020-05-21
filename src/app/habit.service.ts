import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  constructor(private http: HttpClient) {}

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('/api/habits');
  }

  addHabit(newHabit: Habit) {
    return this.http.post<Habit>('/api/habits', newHabit);
  }
}
