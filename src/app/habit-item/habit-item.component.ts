import { Component, OnInit, Input } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-item',
  template: ` <li>{{ habit.title }}</li> `,
  styles: [],
})
export class HabitItemComponent implements OnInit {
  @Input() habit: Habit;
  constructor() {}

  ngOnInit(): void {}
}
