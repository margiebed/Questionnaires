import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-questionnaire-form",
  templateUrl: "./questionnaire-form.component.html",
  styleUrls: ["./questionnaire-form.component.scss"],
})
export class QuestionnaireFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: "",
      lastName: "",
      namesOfParents: "",
      dateOfBirth: "",
      placeOfBirth: "",
      pesel: "",
      address: "",
      city: "",
      zipCode: "",
      approve: false,
    });
  }
}
