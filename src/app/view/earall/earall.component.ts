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
  earingdisList: any = [];
  earingmarList: any = [];
  selectedProduct: any = [];
  value: number = 1;

  constructor(
    private firestore: Firestore,
  ) { 
    this.getEaring();
    this.getEaringdis();
    this.getEaringmar();
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

  getEaringdis() {
    const firebase = collection(this.firestore, 'dis_ear');
    getDocs(firebase).then((response) => {
      this.earingdisList = [...response.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })]
    })
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
