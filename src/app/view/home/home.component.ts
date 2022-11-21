import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { getDocs, Firestore, collection, doc, docData, addDoc } from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = this.getCurrentUser();

  displayModal: boolean = false;
  selectedProduct: any = [];
  amount: number = 1;

  randomValue: number = 0;
  randomValue2: number = 0;
  randomValue3: number = 0;
  randomValue4: number = 0;
  randomValue5: number = 0;
  randomValue6: number = 0;
  randomValue7: number = 0;
  randomValue8: number = 0;

  halloweenList: any = [];
  christmasList: any = [];
  BraceletList: any = [];
  earingList: any = [];
  neckLaceList: any = [];
  ringList: any = [];

  constructor(
    private firestore: Firestore,
    private auth: Auth
  ) {
    this.getHalloween();
    this.getChristmas();
    this.getBracelet();
    this.getEaring();
    this.getNeckLace();
    this.getRing();
    this.getRandomValue();
  }

  ngOnInit(): void {

  }

  getRandomValue() {
    this.randomValue = Math.floor(Math.random() * 5);
    this.randomValue2 = Math.floor(Math.random() * 5);
    this.randomValue3 = Math.floor(Math.random() * 4);
    this.randomValue4 = Math.floor(Math.random() * 4);
    this.randomValue5 = Math.floor(Math.random() * 6);
    this.randomValue6 = Math.floor(Math.random() * 5);
    this.randomValue7 = Math.floor(Math.random() * 5);
    this.randomValue8 = Math.floor(Math.random() * 6);
  }

  getHalloween() {
    const firebase = collection(this.firestore, 'halloween');
    getDocs(firebase).then((response) => {
      this.halloweenList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getChristmas() {
    const firebase = collection(this.firestore, 'christmas');
    getDocs(firebase).then((response) => {
      this.christmasList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getBracelet() {
    const firebase = collection(this.firestore, 'all_bracelet');
    getDocs(firebase).then((response) => {
      this.BraceletList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getEaring() {
    const firebase = collection(this.firestore, 'all_ear');
    getDocs(firebase).then((response) => {
      this.earingList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getNeckLace() {
    const firebase = collection(this.firestore, 'all_neck');
    getDocs(firebase).then((response) => {
      this.neckLaceList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getRing() {
    const firebase = collection(this.firestore, 'all_ring');
    getDocs(firebase).then((response) => {
      this.ringList = [...response.docs.map((item) => {
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
