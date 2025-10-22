import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore: Firestore) { }

  saveCategory(data: object){
    const dbInstance = collection(this.firestore, 'categories');
    return addDoc(dbInstance, data);
  }

  loadCategories(){
    const dbInstance = collection(this.firestore, 'categories');
    return collectionData(dbInstance, { idField: 'id' });
  }

  updateCategory(id: string, CategoryName: string, categoryDesc: string){
    const dbInstance = doc(this.firestore, 'categories', id);
    return updateDoc(dbInstance, {category: CategoryName, categoryDesc: categoryDesc});
  }

  deleteCategory(id: string){
    const dbInstance = doc(this.firestore, 'categories', id);
    return deleteDoc(dbInstance);
  }
}
