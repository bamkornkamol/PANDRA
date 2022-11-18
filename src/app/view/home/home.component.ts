import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayModal: boolean = false;
  selectedProduct: any = [];

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
    this.randomValue3 = Math.floor(Math.random() * 5);
    this.randomValue4 = Math.floor(Math.random() * 5);
    this.randomValue5 = Math.floor(Math.random() * 7);
    this.randomValue6 = Math.floor(Math.random() * 6);
    this.randomValue7 = Math.floor(Math.random() * 6);
    this.randomValue8 = Math.floor(Math.random() * 7);
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

}
