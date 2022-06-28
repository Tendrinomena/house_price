import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-predict',
  templateUrl: './app-predict.component.html',
  styleUrls: ['./app-predict.component.scss']
})
export class AppPredictComponent implements OnInit {

  constructor(private http: HttpClient) { }

//data: get from the backend
  data!:any;
  house : any = {
    "nb_bedrooms": 0,
    "nb_garages":0,
    "nb_bathrooms":0,
    "nb_garden":0,
    "nb_parking":0,
    "with_pool":false,
  }

  ngOnInit(): void {
    // this.getData();
    // this.postData();
  }

  getData(){
    this.data = this.http.get("https://portfolio-anitah.herokuapp.com/api/send/").subscribe(
      x =>this.data = x
    )
  }
  postData(){
    this.data = this.http.post("https://portfolio-anitah.herokuapp.com/api/", this.house ).subscribe(
      x =>this.data = x
    )
  }

}
