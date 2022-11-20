import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-braceletmar',
  templateUrl: './braceletmar.component.html',
  styleUrls: ['./braceletmar.component.scss']
})
export class BraceletmarComponent implements OnInit {

  displayModal: boolean = false;

  BraceletList: any = [];
  selectedProduct: any = [];

  constructor(
    private firestore: Firestore,
  ) {
    this.getBracelet();
  }

  ngOnInit(): void {
  }

  getBracelet() {
    const firebase = collection(this.firestore, 'mar_bracelet');
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

}
