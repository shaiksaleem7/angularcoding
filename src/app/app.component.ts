import { Component, OnInit } from '@angular/core';
import { ListGeneratorService } from './shared/list-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   list1: Array<any> = [];
   list2: Array<any> = [];
 Numrange: [number, number] = [23, 28];

  constructor(private generator: ListGeneratorService) {}

  ngOnInit(): void {
    this.list1 = this.generator.generatelist(150);
    this.list2 = this.generator.generatelist(150);
  }

  add(list: Array<any>, name: string) {
  
    list.unshift({
      label: name,
      number: this.generator.generatenumber(this.Numrange),
    });
  }

  remove(list: Array<any>, entity: any) {
    list.splice(list.indexOf(entity), 1);
  }
}
