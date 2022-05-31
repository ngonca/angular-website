import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/models/wine.model';
import { WinesService } from 'src/app/services/wines.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  WineList:Wine[] = [];
  constructor(private winesService:WinesService) { }
  
  // bu component yüklendiğinde
  ngOnInit(): void {
    this.winesService.getWinelist().subscribe((data)=>{
      console.log("Data: ",data);
      this.WineList = data;
    });

    console.log("Wine geldi");
    
  }

}
