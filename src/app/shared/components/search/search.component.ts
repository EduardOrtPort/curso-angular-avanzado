import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl<string>('Lima',{
    nonNullable: true,
  });
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  @Output() submitted = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    // this.inputSearch.patchValue(this.route.snapshot.queryParams['search']);
    this.onChange();
  }

  private onChange():void{
    this.inputSearch.valueChanges
    .pipe(
      map((search: string) => search.trim()),
      debounceTime(500),
      distinctUntilChanged(),
      filter((search: string) => search !== '' && search !== null),
      tap((search: string) => this.submitted.emit(search))
    )
    .subscribe();
  }

  search(term: string): void {
    this.router.navigate([], {queryParams: {search: term}});
  }

}
