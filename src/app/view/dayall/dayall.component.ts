import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-dayall',
  templateUrl: './dayall.component.html',
  styleUrls: ['./dayall.component.scss']
})
export class DayallComponent implements OnInit {

  displayModal: boolean = false;

  selectedProduct: any = [];
  halloweenList: any = [];
  christmasList: any = [];
  value: number = 1;

  constructor(
    private firestore: Firestore,
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
}
