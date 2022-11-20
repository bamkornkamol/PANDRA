import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-braceletall',
  templateUrl: './braceletall.component.html',
  styleUrls: ['./braceletall.component.scss']
})
export class BraceletallComponent implements OnInit {

  displayModal: boolean = false;

  selectedProduct: any = [];
  BraceletList: any = [];
  BraceletdisList: any = [];
  BraceletmarList: any = [];
  value: number = 1;

  constructor(
    private firestore: Firestore,
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
  }
}

