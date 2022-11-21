import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { addDoc, collection, deleteDoc, doc, docData, Firestore, getDoc, getDocs } from '@angular/fire/firestore';
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

  cartList: any = [];
  reset: boolean = false;
  totalPrice: number = 0;

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
      command: () => { this.logout() }
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
    this.getCart(false);
  }

  openCart() {
    this.display = true;
  }

  goHistory() {
    this.router.navigate(['/history']);
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

  getCart(reset: boolean) {
    if (this.user.subscribe((user) => {
      if (user) {
        if (reset === true) {
          this.totalPrice = 0;
          this.cartList = [];
          this.reset = false;
        }
        const ref = collection(this.firestore, 'users', user.uid, 'carts');
        getDocs(ref).then((response) => {
          response.docs.map((item) => {
            this.cartList.push(item.data());
            this.totalPrice += item.data()['product']['price'] * item.data()['amount'];
          })
        })
      }
    }))
      return;
  }

  removeitem(item: any) {
    if (this.user.subscribe((user) => {
      if (user) {
        const ref = collection(this.firestore, 'users', user.uid, 'carts');
        getDocs(ref).then((response) => {
          response.docs.map((i) => {
            if (i.data()['product']['id'] === item.product.id) {
              deleteDoc(i.ref)
                .then(() => {
                  this.getCart(true);
                  location.reload();
                })
            }
          })
        })
      }
    }))
      return;
  }

  submitbuy() {
    this.user.subscribe((user) => {
      if (user) {
        const del = collection(this.firestore, 'users', user.uid, 'carts');
        const ref = collection(this.firestore, 'users', user.uid, 'orders');
        addDoc(ref, {
          totalPrice: this.totalPrice,
          cartList: this.cartList,
        })
          .then(() => {
            alert("ยืนยันการสั่งซื้อสำเร็จ");
            location.reload();
        })
        getDocs(del).then((response) => {
          response.docs.map((del) => {
            // deleteDoc(del).then(() => {
            //   this.getCart(true);
            // })
          })
        })
      }
    })

  }

  tologin() {
    this.router.navigate(['/signin']);
  }

  logout() {
    this.auth.signOut().then(
      () => { this.router.navigate(['/signin']) }
    )
  }
}
