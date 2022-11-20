import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { getDocs, Firestore, collection, addDoc, doc, docData } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-braceletdis',
  templateUrl: './braceletdis.component.html',
  styleUrls: ['./braceletdis.component.scss']
})
export class BraceletdisComponent implements OnInit {

  user = this.getCurrentUser();

  displayModal: boolean = false;

  BraceletList: any = [];
  selectedProduct: any = [];
  amount: number = 1;

  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) {
    this.getBracelet();
  }

  ngOnInit(): void {
  }

  getBracelet() {
    const firebase = collection(this.firestore, 'dis_bracelet');
    getDocs(firebase).then((response) => {
      this.BraceletList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }

  addproduct(selectedProduct: any) {
    if (this.user.subscribe((user) => {
      if (user) {
        const ref = collection(this.firestore, 'users', user.uid, 'carts');
        getDocs(ref).then((response) => {
          let isExist = false;
          response.docs.map((item) => {
            if (item.data()['product']['id'] === selectedProduct.id) {
              isExist = true;
              alert("กรุณาเพิ่มจำนวนสินค้าในตะกร้า")
            }
          })
          if (isExist === false) {
            addDoc(ref, {
              product: selectedProduct,
              amount: this.amount
            })
          }
        })
      }
      else {
        alert("กรุณาล็อคอินก่อนเพิ่มสินค้าใส่ตะกร้า");
      }
    }))
      this.displayModal = false;
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
}
