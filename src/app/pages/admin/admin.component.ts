import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isExpanded: boolean = true;
  public company: any
  constructor(private router: Router, private utilService: UtilService) {}

  ngOnInit(): void {
    this.getCompany();
  }

  logout() {
    this.utilService.excluiToken();
    this.router.navigate(['/auth/login']);
  }

  getCompany() {
    console.log(this.company, 'COMPANY');
  }
  toggleSidenav(){
    this.isExpanded = !this.isExpanded;
  }
}
