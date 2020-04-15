import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search/search/search.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "search",
    pathMatch: "full",
  },
  {
    path: "search",
    component: SearchComponent,
  },
  {
    path: "movie/:movie-id",
    component: MovieDetailsComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
