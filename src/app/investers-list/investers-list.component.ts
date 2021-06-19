import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RegistrationService } from '../services/registration.service'

interface iddata {
  investorid: any,
}
@Component({
  selector: 'app-investers-list',
  templateUrl: './investers-list.component.html',
  styleUrls: ['./investers-list.component.css']
})
export class InvestersListComponent implements OnInit {
  totalInvestors: any = {};
  totalBalance: number;
  balanceCheck: boolean = false;
  constructor(private router: Router, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.getAllInvestorsdata().subscribe((result) => {
      if (!(result["data"] === 0)) {
        this.totalInvestors = result["data"]
      }
    })
  }

  checkbalance(data){
    // alert(data)
    let investoriddata: iddata = {
      "investorid" : data
    };
    this.registrationService.getTotalBalancedata(investoriddata).subscribe((result) => {
      if (!(result["data"] === 0)) {
        console.log(result['data']);
        
        this.balanceCheck = true
        this.totalBalance = result["data"].investmentAmount
        alert(this.totalBalance);
      }
    })
  }

}
