import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-daychristmas',
  templateUrl: './daychristmas.component.html',
  styleUrls: ['./daychristmas.component.scss']
})
export class DaychristmasComponent implements OnInit {

  displayModal: boolean = false;

  selectedProduct: any = [];
  christmasList: any = [];
  value: number = 1;

  constructor(
    private firestore: Firestore,
  ) {
    this.getChristmas();
  }

  ngOnInit(): void {
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }

  getChristmas() {
    // Get Dta From Firebase
    const firebase = collection(this.firestore, 'christmas');
    getDocs(firebase).then((response) => {
      this.christmasList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }
}
