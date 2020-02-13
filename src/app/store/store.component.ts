import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"]
})
export class StoreComponent implements OnInit {
  categories = [];

  constructor() {}

  async fetchData() {
    const response = await fetch(
      "https://apiv4.ordering.co/v400/en/demo/business/41/categories"
    );
    const data = await response.json();
    const categories = data.result;
    this.categories = categories;
    console.log(this.categories);
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
