import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { getDocs, Firestore, collection, doc, docData, addDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-earmar',
  templateUrl: './earmar.component.html',
  styleUrls: ['./earmar.component.scss']
})
export class EarmarComponent implements OnInit {
  user = this.getCurrentUser();

  displayModal: boolean = false;

  earingmarList: any = [];
  selectedProduct: any = [];
  amount: number = 1;

  constructor(
    private firestore: Firestore,
    private auth : Auth
  ) { 
    this.getEaringmar();
  }
  ngOnInit(): void {
  }


  getEaringmar() {
    const firebase = collection(this.firestore, 'mar_ear');
    getDocs(firebase).then((response) => {
      this.earingmarList = [...response.docs.map((item) => {
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
