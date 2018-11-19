import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

import { ActionService } from 'src/app/shared/services/action.service';

@Component({
  selector: 'app-stallsearch',
  templateUrl: './stallsearch.component.html',
  styleUrls: ['./stallsearch.component.css']
})
export class StallSearchComponent implements OnInit {
  //Table
  displayedColumns: string[] = ['stallname', 'stalladdress', 'cuisine', 'area'];
  stalls = (new MatTableDataSource([]));
  //Sort
  @ViewChild(MatSort) sort: MatSort;
  //Paginator
  length = 1000;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchCriteria = {
    'location': ''
  };

  searchForm: FormGroup;
  createFormGroup() {
    return new FormGroup({
      term: new FormControl('')
    });
  } 
  constructor(private ActionSvc: ActionService) { 
    this.searchForm = this.createFormGroup();
  }

  onSubmit() {
    this.searchCriteria.location = '';
    console.log('Submitted Form data >>>>> ', this.searchForm.value);
    this.searchCriteria.location = `${this.searchForm.value.term}`;
    console.log('Sent Data >>>>> Location:', this.searchCriteria.location)
    this.ActionSvc.getStalls(this.searchCriteria).subscribe((results) => {
      console.log('Suscribed Results: ', results);
      this.stalls = new MatTableDataSource(results);
      this.stalls.sort = this.sort;
      this.stalls.paginator = this.paginator;
    });
    this.searchForm.reset();   
  }
  ngOnInit() {
    this.ActionSvc.getStalls(this.searchCriteria).subscribe((results) => {
      console.log('Suscribed Results; ', results);
      this.stalls = new MatTableDataSource(results);
      this.stalls.sort = this.sort;
      this.stalls.paginator = this.paginator;
    }); 

  }
}
