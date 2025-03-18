import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  credentials = {
    email: '',
    password: ''
  }
  constructor(private loginService: UserService, private snackBar:MatSnackBar, private router: Router){

  }

  ngOnInit(): void {
      
  }

  login(){
    this.loginService.login(this.credentials.email, this.credentials.password).subscribe(
      response => {
        this.snackBar.open("Login Bem Sucedido", "X",{
          duration: 3000,
          verticalPosition:'top',
          horizontalPosition:'right'
        });
        this.router.navigate(["/home"]);
      },
      error => {
        this.snackBar.open(error.error, "X",{
          duration: 3000,
          verticalPosition:'top',
          horizontalPosition:'right'
        })
      }
    )
  }
}
