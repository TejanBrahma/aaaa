import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUserData = {
    'email': '',
  'password': ''}
  constructor(private _auth:AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    //console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem('token', res.send.token)
        this._router.navigate(['/login'])
        console.log(res)
      },
      err => console.log(err)
    )
}
getUrl()
{
  return "url('https://cdn.pixabay.com/photo/2014/01/24/13/32/marathon-250987_960_720.jpg')";
}
}