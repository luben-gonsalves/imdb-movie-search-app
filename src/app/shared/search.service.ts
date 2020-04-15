import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  /**
   *
   * @param searchText
   */
  public fetchMovies(searchText: string) {
    return this._http.get(
      `http://www.omdbapi.com/?s=${searchText}&apikey=9025624f`
    );
  }

  /**
   *
   * @param id
   */
  public fetchSingleMovie(id: string) {
    return this._http.get(`http://www.omdbapi.com/?i=${id}&apikey=9025624f`);
  }
}
