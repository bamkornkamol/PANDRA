import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-ringall',
  templateUrl: './ringall.component.html',
  styleUrls: ['./ringall.component.scss']
})
export class RingallComponent implements OnInit {

  displayModal: boolean = false;

  ringList: any = [];
  selectedProduct: any = [];

  constructor(
    private firestore: Firestore,
  ) {
    this.getRing();
   }

  ngOnInit(): void {
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
