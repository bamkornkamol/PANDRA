import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-ringdis',
  templateUrl: './ringdis.component.html',
  styleUrls: ['./ringdis.component.scss']
})
export class RingdisComponent implements OnInit {

  displayModal: boolean = false;

  ringdisList: any = [];
  selectedProduct: any = [];

  constructor(
    private firestore: Firestore,
  ) {
    this.getRingdis();
   }
  ngOnInit(): void {
  }

  getRingdis() {
    const firebase = collection(this.firestore, 'dis_ring');
    getDocs(firebase).then((response) => {
      this.ringdisList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }

}
