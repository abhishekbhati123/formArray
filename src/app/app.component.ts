import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'angularcrudapp';
  skillForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });
  }

  get skills(): FormArray {
    //here we return the skills formsArray from the skillForms
    return this.skillForm.get('skills') as FormArray;
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  //dynamically adding skills
  addSkill() {
    this.skills.push(this.newSkill());
  }

  //dynamically removing skills
  removeSkil(i: number) {
    this.skills.removeAt(i);
  }
  //submit
  onSubmit() {
    console.log(this.skillForm.value);
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
