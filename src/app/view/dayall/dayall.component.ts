import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { getDocs, Firestore, collection, doc, docData, addDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-dayall',
  templateUrl: './dayall.component.html',
  styleUrls: ['./dayall.component.scss']
})
export class DayallComponent implements OnInit {

  user = this.getCurrentUser();

  displayModal: boolean = false;

  selectedProduct: any = [];
  halloweenList: any = [];
  christmasList: any = [];
  amount: number = 1;

  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) {
    this.getHalloween();
    this.getChristmas();
  }

  ngOnInit(): void {
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }

  getHalloween() {
    // Get Dta From Firebase
    const firebase = collection(this.firestore, 'halloween'); // Halloween = Collection Name
    getDocs(firebase).then((response) => {
      this.halloweenList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getChristmas() {
    // Get Dta From Firebase
    const firebase = collection(this.firestore, 'christmas');  // Christmas = Collection Name
    getDocs(firebase).then((response) => {
      this.christmasList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
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
