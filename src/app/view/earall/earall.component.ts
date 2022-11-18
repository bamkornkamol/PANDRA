import { Component, OnInit } from '@angular/core';
import { getDocs, Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-earall',
  templateUrl: './earall.component.html',
  styleUrls: ['./earall.component.scss']
})
export class EarallComponent implements OnInit {

  displayModal: boolean = false;

  earingList: any = [];
  selectedProduct: any = [];

  constructor(
    private firestore: Firestore,
  ) { 
    this.getEaring();
  }

  ngOnInit(): void {
  }

  getEaring() {
    const firebase = collection(this.firestore, 'all_ear');
    getDocs(firebase).then((response) => {
      this.earingList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
  }

  showModalDialog(data: any) {
    this.displayModal = true;
    this.selectedProduct = data;
  }

}
