import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService } from "../shared/search.service";
import { Location } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"],
})
export class MovieDetailsComponent implements OnInit {
  movieId: string = "";
  movieData: {} = {};
  review: string = "";
  ifReviewExists: Boolean = false;
  constructor(
    private _activateRouter: ActivatedRoute,
    private _searchService: SearchService,
    private _location: Location,
    private _spinner: NgxSpinnerService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._activateRouter.params.subscribe((params) => {
      this.movieId = params["movie-id"];
    });
    this.fetchSingleMovieDetails();
  }

  fetchSingleMovieDetails(): void {
    this._spinner.show();
    this._searchService.fetchSingleMovie(this.movieId).subscribe((data) => {
      this.movieData = data;
      if (localStorage.getItem(this.movieId)) {
        let reviewObj = JSON.parse(localStorage.getItem(this.movieId));
        this.review = reviewObj.review;
        this.ifReviewExists = true;
      }
      this._spinner.hide();
    });
  }

  reviewSubmitted(): void {
    let reviewObj = {
      id: this.movieData["imdbID"],
      review: this.review,
      name: this.movieData["Title"],
    };
    localStorage.setItem(this.movieId, JSON.stringify(reviewObj));
    this.ifReviewExists = true;
  }

  goToSearchScreen(): void {
    this._router.navigate(["../../search"], {
      relativeTo: this._activateRouter,
    });
  }
}
