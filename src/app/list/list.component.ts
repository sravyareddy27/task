import { Component, OnInit } from '@angular/core';
import { ListServiceService } from './list-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: any;

  constructor(private listService: ListServiceService) { }

  ngOnInit() {
    this.listService.getPosts().subscribe(res => {
      console.log(res);
      this.lists = res;
    });
  }

}
