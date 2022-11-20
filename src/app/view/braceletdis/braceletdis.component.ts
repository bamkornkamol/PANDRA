import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-braceletdis',
  templateUrl: './braceletdis.component.html',
  styleUrls: ['./braceletdis.component.scss']
})
export class BraceletdisComponent implements OnInit {

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
    const firebase = collection(this.firestore, 'dis_bracelet');
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
