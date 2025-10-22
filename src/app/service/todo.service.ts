import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, increment, updateDoc } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore: Firestore, private toastr: ToastrService) { }

  saveTodo(id: string, data: object){
    const dbInstance = collection(this.firestore, `categories/${id}/todos`);
    addDoc(dbInstance, data)
    .then(() => {
      const dbInstance = doc(this.firestore, 'categories', id);
      updateDoc(dbInstance, {todoCount: increment(1)});

      this.toastr.success('New Todo Saved Successfully');
    }).catch(err => console.log(err));
  }

  loadTodos(id: string){
    const dbInstance = collection(this.firestore, `categories/${id}/todos`);
    return collectionData(dbInstance, { idField: 'id' });
  }

  updateTodo(catId: string, todoId: string, updatedData: string){
    const dbInstance = doc(this.firestore, `categories/${catId}/todos`, todoId);
    updateDoc(dbInstance, {todo: updatedData})
    .then(() => {
      this.toastr.success('Todo Updated Successfully');
    }).catch(err => console.log(err));
  }

  deleteTodo(catId: string, todoId: string){
    const dbInstance = doc(this.firestore, `categories/${catId}/todos`, todoId);
    deleteDoc(dbInstance)
    .then(() => {
      const dbInstance = doc(this.firestore, 'categories', catId);
      updateDoc(dbInstance, {todoCount: increment(-1)});

      this.toastr.error('Todo Deleted Successfully');
    }).catch(err => console.log(err));
  }

  markComplete(catId: string, todoId: string){
    const dbInstance = doc(this.firestore, `categories/${catId}/todos`, todoId);
    updateDoc(dbInstance, {isCompleted: true})
    .then(() => {
      this.toastr.info('Todo Marked Completed');
    }).catch(err => console.log(err));
  }

  markUncomplete(catId: string, todoId: string){
    const dbInstance = doc(this.firestore, `categories/${catId}/todos`, todoId);
    updateDoc(dbInstance, {isCompleted: false})
    .then(() => {
      this.toastr.warning('Todo Marked Uncompleted');
    }).catch(err => console.log(err));
  }

}
