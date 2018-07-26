import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute ,Router,ParamMap } from '@angular/router';
import { GetapisService } from '../../services/getapis.service';
import { forkJoin } from "rxjs";


@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit,AfterViewInit {
  @ViewChild('autos') el:ElementRef;
  
chart:any = [];
bpsin:any[] = [];
bpsout:any[] = [];
ids:number[] = [];
dates:any[] = [];
public id;
public updatedid ;
public hours;
public chartLineData;
public showloader:boolean = true;
chartLineOptions = {
  xkey: 'i',
  ykeys: ['a', 'b'],
  labels: ['bpsin Value', 'bpsout Value'],
  resize: true,
  parseTime:false,
 
};


 chartLine =  [];
  constructor(public datas : GetapisService,public route:ActivatedRoute,public router:Router) {
    
    forkJoin(this.datas.getbpsout(),this.datas.getbpsin()).subscribe(res =>{
      res[0].forEach(res=>{
        this.bpsout.push(res.bps);
      });
      res[1].forEach(res=>{
        this.bpsin.push(res.bps);
        this.ids.push(res.id);
        
        this.dates.push(res.date);
      });
      for(var i = 0 ;i < this.hours * this.updatedid;i = i +this.updatedid){
        
        this.chartLine.push( { i: ""+this.dates[i], a: this.bpsin[i], b: this.bpsout[i] });
            }
            this.chartLineData = this.chartLine;
            this.showloader = false;
    });

   
   }
  
      ngOnInit() {
        this.route.paramMap.subscribe((params:ParamMap) =>{
          if(!isNaN(parseInt(params.get('id')))){

            this.id= parseInt(params.get('id'));
            if(this.id == 1){
                this.hours =12;
                this.updatedid = 5;
            }
            else if(this.id == 2){
              this.hours =8;
              this.updatedid = 15;
            }
            else if(this.id == 3){
              this.hours =12;
              this.updatedid = 30;
            }
            else if(this.id == 4){
              this.hours =12;
              this.updatedid = 60;
            }
            else if(this.id == 5){
              this.hours =24;
              this.updatedid = 60;
            }
            else if(this.id == 6){
              this.hours =48;
              this.updatedid = 60;
            }
          }
          else{
            this.updatedid = 5;
            this.hours =12;
          }
         
        });
        
  }
 
  ngAfterViewInit(){
    setInterval(() => {
      if(this.el.nativeElement.checked){
        
        forkJoin(this.datas.getbpsout(),this.datas.getbpsin()).subscribe(res =>{
          res[0].forEach(res=>{
            this.bpsout.push(res.bps);
          });
          res[1].forEach(res=>{
            this.bpsin.push(res.bps);
            this.ids.push(res.id);
            
            this.dates.push(res.date);
          });
          for(var i = 0 ;i < this.hours * this.updatedid;i = i +this.updatedid){
            
            this.chartLine.push( { i: ""+this.dates[i], a: this.bpsin[i], b: this.bpsout[i] });
                }
                this.chartLineData = this.chartLine;
                this.showloader = false;
        });
    
        console.log("Auto Update Enabled");
      }
      else{
        console.log("Auto Update Disabled");
      }

  },600000);
  }
  onselect(i){
    if(i == 1){
      this.router.navigate(['/chart1',1]);
    }
    else if(i == 2){
      this.router.navigate(['/chart2',2]);
    }
    else if(i == 3){
      this.router.navigate(['/chart3',3]);
    }
    else if(i == 4){
      this.router.navigate(['/chart4',4]);
    }
    else if(i == 5){
      this.router.navigate(['/chart5',5]);
    }
    else if(i == 6){
      this.router.navigate(['/chart6',6]);
    }
  }
}
