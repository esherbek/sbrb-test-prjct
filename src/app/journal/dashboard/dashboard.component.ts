import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { MOCKDATA } from 'src/app/mockdata';
import { Register } from 'src/app/register';
import { Postage } from 'src/app/postage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public registers: Register[];
  public postages: postages[];
  constructor(
    // Сервис для обращения к базе данных
    private service: DataserviceService
  ) { }

  // postages:  any =  MOCKDATA.getPostages;
  // registers: Register[] = MOCKDATA.getRegisters;
  
  ngOnInit() {
    MOCKDATA.getRegisters().subscribe(reg => {
      this.registers = reg;
    });
    
  
  }


}
