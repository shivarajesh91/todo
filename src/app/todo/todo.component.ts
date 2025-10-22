import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgClass, RouterLink],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  catId!: string;
  todos!: Array<any>;
  todoValue!: string;
  todoId!: string;
  dataStatus: string = 'Add';

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void{
    this.catId = this.activatedRoute.snapshot.paramMap.get('id')!;
    // console.log(this.catId);
    this.todoService.loadTodos(this.catId).subscribe(val => {
      this.todos = val;
      // console.log(this.todos);
    });
  }

  onSubmit(f: NgForm){
    // console.log(f);
    if(this.dataStatus == 'Add'){
      let todo = {
        todo: f.value.todoText,
        isCompleted: false
      }
  
      this.todoService.saveTodo(this.catId, todo);
      f.resetForm();
    } else if(this.dataStatus == 'Edit'){
      this.todoService.updateTodo(this.catId, this.todoId, f.value.todoText);
      f.resetForm();
      this.dataStatus = 'Add';
    }
  }

  onEdit(todo: string, id: string){
    this.todoValue = todo;
    this.todoId = id;
    this.dataStatus = 'Edit';
  }

  onDelete(id: string){
    this.todoService.deleteTodo(this.catId, id);
  }

  completeTodo(todoId: string){
    this.todoService.markComplete(this.catId, todoId);
  }

  uncompleteTodo(todoId: string){
    this.todoService.markUncomplete(this.catId, todoId);
  }

}
