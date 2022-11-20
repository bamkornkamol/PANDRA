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
  ringdisList: any = [];
  ringmarList: any = [];
  selectedProduct: any = [];
  value: number = 1;

  constructor(
    private firestore: Firestore,
  ) {
    this.getRing();
    this.getRingdis();
    this.getRingmar();
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

  getRingdis() {
    const firebase = collection(this.firestore, 'dis_ring');
    getDocs(firebase).then((response) => {
      this.ringdisList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  getRingmar() {
    const firebase = collection(this.firestore, 'mar_ring');
    getDocs(firebase).then((response) => {
      this.ringmarList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }
}
