import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user = this.getCurrentUser();

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
      command: () => {this.logout() }
    },
  ];
  value: number = 1;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private auth: Auth,
    private firestore: Firestore
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

  getCurrentUser(): Observable<any> {
    return authState(this.auth).pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }
        const ref = doc(this.firestore, 'users', user?.uid)

        console.log(docData(ref));
        return docData(ref) as Observable<any>;
      })
    );
  }

  tologin() {
    this.router.navigate(['/signin']);
  }

  logout() {
    this.auth.signOut().then(
      () => {this.router.navigate(['/signin'])}
    )
  }
}
