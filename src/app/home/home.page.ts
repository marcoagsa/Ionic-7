import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  projectTitle = `Ionic 7 and Angular ${VERSION.major}`;
  myForm: FormGroup;
  disabled = true;

  getDisableValue() {
    return this.disabled;
  }

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      myCheckbox: { value: false, disabled: true },
    });
  }

  toggleDisable() {
    this.disabled = !this.disabled;
    if (!this.disabled) {
      this.myForm.get('myCheckbox')?.enable();
    } else {
      this.myForm.get('myCheckbox')?.disable();
    }
  }
}
