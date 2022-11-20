import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-neckdis',
  templateUrl: './neckdis.component.html',
  styleUrls: ['./neckdis.component.scss']
})
export class NeckdisComponent implements OnInit {

  displayModal: boolean = false;

  neckLacedisList: any = [];
  selectedProduct: any = [];

  constructor(
    private firestore: Firestore,
  ) {
    this.getNeckLacedis();
   }

  ngOnInit(): void {
  }

  getNeckLacedis() {
    const firebase = collection(this.firestore, 'dis_neck');
    getDocs(firebase).then((response) => {
      this.neckLacedisList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }
}
