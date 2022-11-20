import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-neckmar',
  templateUrl: './neckmar.component.html',
  styleUrls: ['./neckmar.component.scss']
})
export class NeckmarComponent implements OnInit {

  displayModal: boolean = false;

  neckLacemarList: any = [];
  selectedProduct: any = [];

  constructor(
    private firestore: Firestore,
  ) {
    this.getNeckLacemar();
   }

  ngOnInit(): void {
  }

  getNeckLacemar() {
    const firebase = collection(this.firestore, 'mar_neck');
    getDocs(firebase).then((response) => {
      this.neckLacemarList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }

}
