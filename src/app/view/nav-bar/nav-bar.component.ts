import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  display: boolean = false;
  items = [
    {
      label: 'ประวัติการสั่งซื้อ',
      icon: 'pi pi-fw pi-history',
      command: () => { this.goHistory() }
    },
    {
      label: 'ออกจากระบบ',
      icon: 'pi pi-fw pi-sign-out',
      command: () => { }
    },
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  openCart() {
    this.display = true;
  }

  goHistory() {
    this.router.navigate(['/history']);
  }

  signOut() {
  }
}
