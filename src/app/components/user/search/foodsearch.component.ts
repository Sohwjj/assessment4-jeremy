import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-foodsearch',
  templateUrl: './foodsearch.component.html',
  styleUrls: ['./foodsearch.component.css']
})
export class FoodSearchComponent implements OnInit {
  searchForm: FormGroup;
  createFormGroup() {
    return new FormGroup({
      term: new FormControl('')
    });
  } 
  constructor() { 
    this.searchForm = this.createFormGroup();
  }
  ngOnInit() { }
}
