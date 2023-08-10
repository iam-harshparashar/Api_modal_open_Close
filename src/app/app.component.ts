import { Component , OnInit} from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task7';
totalLength:any;
page:number=1;
count: number=10;
display: string="none";
result:any=[];
temp:any;

  public store:any=[];

 
  constructor(private _data:ServiceService ){ }

  ngOnInit(){
    this._data.getdataposts().subscribe((res:any)=>{
     //console.log(res)
     this.store=res;
     //console.log(this.store);
    });
    
  }
  openModal(data:any){
    this.display="block";
    this.temp=data;
    console.log(this.temp);
  }
  onCloseHandled(){
    this.display="none"
  }
  onConfirm(){
    var flag=0;

    for(var i=0; i<this.result.length; i++)
    {
      if(this.result.includes(this.temp))
      {
        flag=1;
      }
    }
    if(flag==1)
    {
      alert("Already added in table");
    }
    else
    {
      this.result.push(this.temp);
    }
      
    console.log(this.result);
    this.display="none";
  }
}
