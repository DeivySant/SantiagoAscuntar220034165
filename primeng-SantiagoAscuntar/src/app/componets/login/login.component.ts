import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginform = this.fb.group({
      usuario: ['', [Validators.required]]
    });
  }

}
