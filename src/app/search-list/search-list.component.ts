import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-list",
  templateUrl: "./search-list.component.html",
  styleUrls: ["./search-list.component.css"],
})
export class SearchListComponent implements OnInit {
  @Input() movieList: [];
  constructor(private _router: Router) {}

  ngOnInit() {}

  navigateToMovieDetails(id: string): void {
    this._router.navigate([`movie/${id}`]);
  }
}
