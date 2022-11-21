import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required])
  })

  errorcheck = true;

  constructor(private auth: Auth,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  submitlogin() {
    let values = this.loginform.value;

    const {email, pass} = this.loginform.value;
    if (!this.loginform.valid || !email || !pass){
      this.errorcheck = false;
      return;
    }

    signInWithEmailAndPassword(this.auth, email, pass).then(
      (user) => {
        if (user) {
          this.router.navigate(['/home']);
        }
      }
    )
    .catch((error) => {
      alert("ไม่พบบัญชีผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    });
  }

}
