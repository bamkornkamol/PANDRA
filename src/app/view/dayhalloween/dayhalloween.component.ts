import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-dayhalloween',
  templateUrl: './dayhalloween.component.html',
  styleUrls: ['./dayhalloween.component.scss']
})
export class DayhalloweenComponent implements OnInit {

  displayModal: boolean = false;

  selectedProduct: any = [];
  halloweenList: any = [];
  
  constructor(
    private firestore: Firestore,
  ) {
    this.getHalloween();
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
}
