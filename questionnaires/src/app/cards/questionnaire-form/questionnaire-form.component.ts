import { Family, Card } from "./../../models/card.model";
import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-questionnaire-form",
  templateUrl: "./questionnaire-form.component.html",
  styleUrls: ["./questionnaire-form.component.scss"],
})
export class QuestionnaireFormComponent implements OnInit {
  @Input() editMode = false;
  form: FormGroup;

  familyMembersLabel = [
    { label: "Mąż", value: "husband" },
    { label: "Żona", value: "wife" },
    { label: "Dziecko", value: "child" },
  ];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  setCard(card: Card) {
    const { key, ...formData } = card;
    this.form.patchValue(formData);
    formData.family.forEach((familyMember) =>
      this.addFamilyMember(familyMember)
    );
  }

  buildFamilyMember(familyMember: Family = {} as Family) {
    return this.formBuilder.group({
      name: familyMember.name || "",
      dob: familyMember.dob || "",
      relationship: familyMember.relationship || "",
    });
  }

  get family() {
    return this.form.get("family") as FormArray;
  }

  removeFamilyMember(i: number) {
    this.family.removeAt(i);
  }

  addFamilyMember(familyMember?: Family) {
    this.family.push(this.buildFamilyMember(familyMember));
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: [
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30),
          ],
        },
      ],
      lastName: ["", { validators: [Validators.required] }],
      namesOfParents: "",
      dateOfBirth: "",
      placeOfBirth: ["", { validators: [Validators.required] }],
      pesel: ["", { validators: [Validators.required] }],
      address: ["", { validators: [Validators.required] }],
      city: ["", { validators: [Validators.required] }],
      zipCode: ["", { validators: [Validators.required] }],
      approve: false,
      family: this.formBuilder.array(
        this.editMode ? [] : [this.buildFamilyMember()]
      ),
    });
  }
}
