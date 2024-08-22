import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { SearchPipe } from '../pipe/search.pipe';
import { FilterPipe } from '../pipe/filter.pipe';
import { Router } from '@angular/router';

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
  constructor(private http:HttpService,private search:SearchPipe,private filterData:FilterPipe,private router:Router){}
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
          this.data=this.filterData.transform(this.allData,this.user.department)
          
          this.allData=this.data
          
        }
        
      },
      error:(err)=>{
        console.log(err)
      }
    })
    

  }
  onSearch(){
    // console.log(this.searchQuery)
    this.data=this.search.transform(this.allData,this.searchQuery) 
  }
  onDelete(id:any){
    this.http.delete(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.ngOnInit()
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
  handleLogout(){
    localStorage.removeItem('data')
    this.router.navigate([''])
  }

}