import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { collection, doc, docData, Firestore, getDocs } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  user = this.getCurrentUser();

  cartList: any = [];
  reset: boolean = false;
  totalPrice: number = 0;

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) { }

  ngOnInit(): void {
    this.getOrder(false);
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

  getOrder(reset: boolean) {
    if (this.user.subscribe((user) => {
      if (user) {
        if (reset === true) {
          this.totalPrice = 0;
          this.cartList = [];
          this.reset = false;
        }
        const ref = collection(this.firestore, 'users', user.uid, 'orders');
        getDocs(ref).then((response) => {
          response.docs.map((item) => {
            this.cartList.push(item.data());
            // this.totalPrice += item.data()['product']['price'] * item.data()['amount'];
          })
        })
      }
    }))
      return;
  }
}
