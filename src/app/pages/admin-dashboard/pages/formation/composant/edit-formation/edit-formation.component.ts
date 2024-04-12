import {Component, inject, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatProgressBar} from "@angular/material/progress-bar";
import {RouterLink} from "@angular/router";
import {Formation} from "../../../../../../models/formation.models";
import {FormationService} from "../../../../../../services/formation.service";

@Component({
  selector: 'app-edit-formation',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatProgressBar,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './edit-formation.component.html',
  styleUrl: './edit-formation.component.css'
})
export class EditFormationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Formation) {
    console.log(data.id)
  }
  dialogRef = inject(MatDialogRef<EditFormationComponent>)

  formControl!: FormGroup;
  fb = inject(FormBuilder)
  formationService= inject(FormationService)

  loading: boolean=false;
  file!: File
  url!:string;
  formation!:Formation
  ngOnInit(): void {
    this.formControl = this.fb.group({
      titre: [this.data.titre, Validators.required], // Champ "nom" requis
      description: [this.data.description, [Validators.required]], // Champ "email" requis et doit être un email valide
    });

  }
  onSubmit() {
    this.loading=true
    if (this.file) {
      // @ts-ignore
      const titre = this.formControl.get('titre').value;
      // @ts-ignore

      const description = this.formControl.get('description').value;

      if (titre && description) { // Vérifiez si titre et description ne sont pas null ou undefined
        // @ts-ignore

        const formation: Formation = {
          titre: titre,
          description: description
        };

        this.formationService.update(this.data.id,formation, this.file).subscribe({
          next: (data) => {
            console.log(data);
            this.loading=true
            this.dialogRef.close()

          },
          error: (err) => {
            console.error(err);
          }
        });
      } else {
        console.error('Titre et/ou description est null ou undefined.');
      }
    } else {
      console.error('Aucun fichier sélectionné.');
    }
  }

  onFileChange(event: any) {
    this.file = event.target.files[0] as File;

  }
}
