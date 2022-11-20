import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-eardis',
  templateUrl: './eardis.component.html',
  styleUrls: ['./eardis.component.scss']
})
export class EardisComponent implements OnInit {


  displayModal: boolean = false;

  earingdisList: any = [];
  selectedProduct: any = [];
  value: number = 1;

  constructor(
    private firestore: Firestore,
  ) { 
    this.getEaringdis();
  }

  ngOnInit(): void {
  }

  getEaringdis() {
    const firebase = collection(this.firestore, 'dis_ear');
    getDocs(firebase).then((response) => {
      this.earingdisList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }

}
