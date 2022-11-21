import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { getDocs, Firestore, collection, doc, docData, addDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-ringall',
  templateUrl: './ringall.component.html',
  styleUrls: ['./ringall.component.scss']
})
export class RingallComponent implements OnInit {
  user = this.getCurrentUser();

  displayModal: boolean = false;

  ringList: any = [];
  ringdisList: any = [];
  ringmarList: any = [];
  selectedProduct: any = [];
  amount: number = 1;

  constructor(
    private firestore: Firestore,
    private auth : Auth
  ) {
    this.getRing();
    this.getRingdis();
    this.getRingmar();
   }

  ngOnInit(): void {
  }

  getRing() {
    const firebase = collection(this.firestore, 'all_ring');
    getDocs(firebase).then((response) => {
      this.ringList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getRingdis() {
    const firebase = collection(this.firestore, 'dis_ring');
    getDocs(firebase).then((response) => {
      this.ringdisList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getRingmar() {
    const firebase = collection(this.firestore, 'mar_ring');
    getDocs(firebase).then((response) => {
      this.ringmarList = [...response.docs.map((item) => {
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
