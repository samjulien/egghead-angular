import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits = [
    {
      id: 1,
      title: 'Check in with parents once a week',
      count: 5,
    },
    {
      id: 2,
      title: 'Record 2 videos per day',
      count: 4,
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week',
      count: 3,
    },
    {
      id: 4,
      title: 'Write for 20 minutes a day',
      count: 6,
    },
  ];

  constructor() {}

  getHabits(): Observable<any> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }
}
