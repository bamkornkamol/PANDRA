import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  regisForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    name:new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required, Validators.email]),
    pass:new FormControl('', [Validators.required, Validators.minLength(8)]),
    add:new FormControl('', [Validators.required, Validators.minLength(5)]),
    tel:new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  })

  errorcheck = true;

  constructor(private auth: Auth,
    private fireStore : Firestore,
    private router : Router) { }

  ngOnInit(): void {
  }

  submitregis() {
    let values = this.regisForm.value;
    console.log(values)

    const {username, name, email, pass, add, tel} = this.regisForm.value;
    if (!this.regisForm.valid || !username || !name || !email || !pass || !add || !tel){
      this.errorcheck = false;
      console.log("error")
      return;
    }

    createUserWithEmailAndPassword(this.auth, email, pass).then(
      (userCredential) => {
        const ref = doc(this.fireStore, 'users', userCredential.user.uid);
        setDoc(ref, {
          username,
          name,
          email,
          add,
          tel,
          uid: userCredential.user.uid,
        }).then(() => {
          this.router.navigate(['/home']);
        })
      }
    )
  }
}
