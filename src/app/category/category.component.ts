import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { ToastrService } from 'ngx-toastr';
import { NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule, NgClass, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  color: Array<any> = ['#e7845e','#fc0184','#f6b93f','#9224a7','#20c898',
                      '#f03734','#aad450','#026467','#8C00FF','#928779',
                      '#D4D2A5','#FCDEBE','#90A583','#B26E63','#C6CAED',
                      '#41A67E','#05339C','#450693','#561530','#4C763B'];
  
  categories!: Array<any>;

  categoryName: string = '';
  categoryDesc: string = '';
  categoryId!: string;
  dataStatus: string = 'Add';
  
  constructor(private categoryService: CategoryService, private toastr: ToastrService){ }

  ngOnInit(): void {
    this.categoryService.loadCategories().subscribe(val => {
      // console.log(val);
      this.categories = val;
    });
  }

  onSubmit(f: NgForm){

    // console.log(f);
    if(this.dataStatus == 'Add'){

      let randomNumber = Math.floor(Math.random() * this.color.length);
  
      let todoCategory = {
        category: f.value.categoryName,
        categoryDesc: f.value.categoryDesc,
        colorCode: this.color[randomNumber],
        todoCount: 0
      }
  
      this.categoryService.saveCategory(todoCategory)
      .then(() => {
        this.toastr.success('New Category Saved Successfully');
      })
      .catch(err => {
        console.log(err);
      });

      f.resetForm();
    } else if(this.dataStatus == 'Edit'){
      // console.log(f.value);

      this.categoryService.updateCategory(this.categoryId, f.value.categoryName,f.value.categoryDesc)
      .then(() => {
        this.toastr.success('Category Updated Successfully');
      })
      .catch(err => {
        console.log(err);
      });

      f.resetForm();
      this.dataStatus = 'Add';
    }
  }

  onEdit(category: string, categoryDesc: string, id: string){
    this.categoryName = category;
    this.categoryDesc = categoryDesc;
    this.categoryId = id;
    this.dataStatus = 'Edit';
  }

  onDelete(id: string){
    // console.log(id);
    this.categoryService.deleteCategory(id)
    .then(() => {
      this.toastr.error('Category Deleted Successfully');
    })
    .catch(err => {
      console.log(err);
    });
  }

}
