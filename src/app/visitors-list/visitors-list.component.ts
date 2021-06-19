import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RegistrationService } from '../services/registration.service'

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.css']
})
export class VisitorsListComponent implements OnInit {
  totalVisitors: any = {};

  constructor(private router: Router, private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationService.getAllVisitorsdata().subscribe((result) => {
      if (!(result["data"] === 0)) {
        this.totalVisitors = result["data"]
      }
    })
  }

}
