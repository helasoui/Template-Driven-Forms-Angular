import { Component } from '@angular/core';
import { USer } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-driven-forms';
  public courses = ["angular", "nodeJS", "java"]
  topicHasError = true;
  Model = new USer("hela", "helasouissi@gmail.com", 54350404, '', 'morning', true);
  validateTopic(value: any) {
    if (value === "default") {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit(){
    console.log(this.Model)
  }
}
