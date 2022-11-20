import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-earmar',
  templateUrl: './earmar.component.html',
  styleUrls: ['./earmar.component.scss']
})
export class EarmarComponent implements OnInit {

  displayModal: boolean = false;

  earingmarList: any = [];
  selectedProduct: any = [];

  constructor(
    private firestore: Firestore,
  ) { 
    this.getEaringmar();
  }
  ngOnInit(): void {
  }


  getEaringmar() {
    const firebase = collection(this.firestore, 'mar_ear');
    getDocs(firebase).then((response) => {
      this.earingmarList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }
}
