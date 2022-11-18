import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-neckall',
  templateUrl: './neckall.component.html',
  styleUrls: ['./neckall.component.scss']
})
export class NeckallComponent implements OnInit {

  displayModal: boolean = false;

  neckLaceList: any = [];
  selectedProduct: any = [];

  constructor(
    private firestore: Firestore,
  ) {
    this.getNeckLace();
   }

  ngOnInit(): void {
  }

  getNeckLace() {
    const firebase = collection(this.firestore, 'all_neck');
    getDocs(firebase).then((response) => {
      this.neckLaceList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }
}
