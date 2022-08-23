import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'bmi-root',
    templateUrl:'./bmi.component.html'
})
export class BMIComponent implements OnInit
{
    weight:number=0;
    height:number=0;
    bmi:number=0;

    ngOnInit() {
        this.calculateBMI();
      }
      setweight(weight:string)
        {
            console.log(weight)
          this.weight=parseInt(weight);
      }
      setheight(height:string)
      {
        console.log(height)
        this.height=parseInt(height);
      }

    calculateBMI()
    {
        
  this.bmi= this.weight/this.height;
  return this.bmi;
}
clear()
{
this.weight=0;
this.height=0;
this.bmi=0;
}
   }