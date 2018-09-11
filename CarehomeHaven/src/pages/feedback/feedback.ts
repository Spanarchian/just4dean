import { Component } from '@angular/core';
import {EmailService} from '../../providers/email';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'feedbackpage',
  templateUrl: 'feedback.html',
})

export class FeedbackPage {
  constructor(public emailService: EmailService, public formBuilder: FormBuilder) { }
  feedbackForm = this.formBuilder.group({
    email: [''],
    name: [''],
    message: ['']
  });
  successMessage = "";
  errorMessage = "";
  sendingEmail = false;

  sendEmail() {
    this.successMessage = "";
    this.errorMessage = "";
    this.sendingEmail = true;
    this.emailService.send(this.feedbackForm)
      .subscribe(
      data => console.log('response:', data),
      error => {
        this.errorMessage = "Error sending the email";
        this.sendingEmail = false;
      },
      () => {
        this.successMessage = "Email sent!"
        this.sendingEmail = false;
      }
      );
  }
}
