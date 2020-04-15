import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private _http: HttpClient) {}

  public fetchPdfFromService(searchText: string) {
    let options = {};
    return this._http.get(
      `http://www.omdbapi.com/?s=${searchText}&apikey=9025624f`,
      options
    );
  }
}
