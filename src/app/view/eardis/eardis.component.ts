import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { getDocs, Firestore, collection, doc, docData, addDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-eardis',
  templateUrl: './eardis.component.html',
  styleUrls: ['./eardis.component.scss']
})
export class EardisComponent implements OnInit {

  user = this.getCurrentUser();

  displayModal: boolean = false;

  earingdisList: any = [];
  selectedProduct: any = [];
  amount: number = 1;

  constructor(
    private firestore: Firestore,
    private auth : Auth
  ) { 
    this.getEaringdis();
  }

  ngOnInit(): void {
  }

  getEaringdis() {
    const firebase = collection(this.firestore, 'dis_ear');
    getDocs(firebase).then((response) => {
      this.earingdisList = [...response.docs.map((item) => {
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
