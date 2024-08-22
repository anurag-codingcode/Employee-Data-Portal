import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  data:any
  allData:any
  searchQuery=""
  admin=false
  user:any

  constructor(private http:HttpService){}
  ngOnInit(): void {
    const storedData = localStorage.getItem('data')
    this.user= storedData ? JSON.parse(storedData) : {}
    if(this.user.role=='admin'){
      this.admin=true
    }
    this.http.getUsers().subscribe({
      next:(res)=>{
        this.allData=res
        if(this.admin){
          this.data=this.allData
        }else{
          this.data=this.allData.filter((user:any)=>user.department==this.user.department)
          this.allData=this.data
          
        }
        
      },
      error:(err)=>{
        console.log(err)
      }
    })
    

  }
  onSearch(){}

}