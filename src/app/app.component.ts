import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoValue: string;
  list: Todo[];
  ngOnInit() {
    this.todoValue = '';
    this.list = [];
  }
  addItem() {
    if (this.todoValue !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isCompleted: false,
      };
      this.list.push(newItem);
    }
    this.todoValue = '';
  }
  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
