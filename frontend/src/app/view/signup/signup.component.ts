import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  credentials = {
    email: '',
    password: '',
    username: ''
  }
  constructor(private userService: UserService, private snackBar:MatSnackBar, private router:Router){

  }

  ngOnInit(): void {
      
  }

  signup(){
    this.userService.signup(this.credentials.email, this.credentials.password, this.credentials.username).subscribe(
      response => {
        this.snackBar.open("Usuário cadastro com sucesso", "X",{
          duration: 3000,
          verticalPosition:'top',
          horizontalPosition:'right'
        });
        this.router.navigate(["/login"]);
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
