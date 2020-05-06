import { Family } from "./../../models/card.model";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

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
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ["", { validators: [Validators.required] }],
      lastName: ["", { validators: [Validators.required] }],
      namesOfParents: "",
      dateOfBirth: "",
      placeOfBirth: ["", { validators: [Validators.required] }],
      pesel: ["", { validators: [Validators.required] }],
      address: ["", { validators: [Validators.required] }],
      city: ["", { validators: [Validators.required] }],
      zipCode: ["", { validators: [Validators.required] }],
      approve: false,
      family: this.formBuilder.array([this.buildFamilyMember()]),
    });
  }
}
