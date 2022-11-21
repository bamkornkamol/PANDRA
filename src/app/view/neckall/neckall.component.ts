import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { getDocs, Firestore, collection, doc, docData, addDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-neckall',
  templateUrl: './neckall.component.html',
  styleUrls: ['./neckall.component.scss']
})
export class NeckallComponent implements OnInit {
  user = this.getCurrentUser();

  displayModal: boolean = false;

  neckLaceList: any = [];
  neckLacedisList: any = [];
  neckLacemarList: any = [];
  selectedProduct: any = [];
  amount: number = 1;

  constructor(
    private firestore: Firestore,
    private auth : Auth
  ) {
    this.getNeckLace();
    this.getNeckLacedis();
    this.getNeckLacemar();
   }

  ngOnInit(): void {
  }

  getNeckLace() {
    const firebase = collection(this.firestore, 'all_neck');
    getDocs(firebase).then((response) => {
      this.neckLaceList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getNeckLacedis() {
    const firebase = collection(this.firestore, 'dis_neck');
    getDocs(firebase).then((response) => {
      this.neckLacedisList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getNeckLacemar() {
    const firebase = collection(this.firestore, 'mar_neck');
    getDocs(firebase).then((response) => {
      this.neckLacemarList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
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

  addproduct(selectedProduct: any) {
    if (this.user.subscribe((user) => {
      if (user) {
        const ref = collection(this.firestore, 'users', user.uid, 'carts');
        getDocs(ref).then((response) => {
          let isExist = false;
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
}
