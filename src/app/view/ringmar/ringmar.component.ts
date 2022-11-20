import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-ringmar',
  templateUrl: './ringmar.component.html',
  styleUrls: ['./ringmar.component.scss']
})
export class RingmarComponent implements OnInit {

  displayModal: boolean = false;

  ringmarList: any = [];
  selectedProduct: any = [];
  value: number = 1;

  constructor(
    private firestore: Firestore,
  ) {
    this.getRingmar();
   }
   
  ngOnInit(): void {
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
