import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toclear-list',
  templateUrl: './toclear-list.component.html',
  styleUrls: ['./toclear-list.component.css']
})
export class ToclearListComponent {

  task:string[] = [ ];

  drink!: string;

  addtask(){
    this.task.push(this.drink);
  }

  //  deletedtask(clearlist:string){
    // this.task=this.task.filter((k)=> k !==clearlist);
    deletedtask(drinkIndex:number){
      this.task=this.task.filter((k, index)=> index !==drinkIndex);

  }
}
