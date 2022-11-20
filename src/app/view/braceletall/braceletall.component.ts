import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { getDocs, Firestore, collection, doc, docData, addDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-braceletall',
  templateUrl: './braceletall.component.html',
  styleUrls: ['./braceletall.component.scss']
})
export class BraceletallComponent implements OnInit {

  user = this.getCurrentUser();

  displayModal: boolean = false;

  selectedProduct: any = [];
  BraceletList: any = [];
  BraceletdisList: any = [];
  BraceletmarList: any = [];
  amount: number = 1;


  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) {
    this.getBracelet();
    this.getBradis();
    this.getBramar();
  }

  ngOnInit(): void {
  }

  getBracelet() {
    const firebase = collection(this.firestore, 'all_bracelet');
    getDocs(firebase).then((response) => {
      this.BraceletList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getBradis() {
    const firebase = collection(this.firestore, 'dis_bracelet');
    getDocs(firebase).then((response) => {
      this.BraceletdisList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getBramar() {
    const firebase = collection(this.firestore, 'mar_bracelet');
    getDocs(firebase).then((response) => {
      this.BraceletmarList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
    this.amount = 1;
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
            }).then(()=>{location.reload()})
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

