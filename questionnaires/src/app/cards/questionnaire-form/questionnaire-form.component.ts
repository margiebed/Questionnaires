import { Family } from "./../../models/card.model";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-questionnaire-form",
  templateUrl: "./questionnaire-form.component.html",
  styleUrls: ["./questionnaire-form.component.scss"],
})
export class QuestionnaireFormComponent implements OnInit {
  form: FormGroup;

  familyMembers = [
    { label: "Mąż", value: "husband" },
    { label: "Żona", value: "wife" },
    { label: "Dziecko", value: "child" },
  ];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildFamilyMember() {
    return this.formBuilder.group({
      name: "",
      dob: "",
      relationship: "",
    });
  }

  get family() {
    return this.form.get("family") as FormArray;
  }
  removeFamilyMember(i: number) {
    this.family.removeAt(i);
  }

  addFamilyMember() {
    this.family.push(this.buildFamilyMember());
    console.log(this.form);
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
      family: this.formBuilder.array([this.buildFamilyMember()]),
    });
  }
}
