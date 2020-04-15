import { Component, OnInit } from "@angular/core";
import { SearchService } from "src/app/shared/search.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  searchText: string = "lost";
  movieResults: {}[] = [];
  constructor(
    private _searchMovies: SearchService,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.search();
  }

  // search using the search text
  search(): void {
    // spinner start on fetching serachText
    this._spinner.show();

    this._searchMovies
      .fetchPdfFromService(this.searchText)
      .subscribe((data) => {
        // spinner stops after fetching
        this._spinner.hide();
        this.movieResults = data["Search"];
        console.log(data);
      });
    this.searchText = "";
  }
}
