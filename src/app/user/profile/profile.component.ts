import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profileForm: FormGroup;
   private firstName: FormControl;
   private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
   this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')] );
   this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
   this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName : this.lastName
    });
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }
   cancel() {
     this.router.navigate(['events']);
   }
   validateFirstName() {
    return this.firstName.invalid || this.firstName.untouched;
   }
   validateLastName() {
    return this.lastName.invalid || this.lastName.untouched;
   }
}
