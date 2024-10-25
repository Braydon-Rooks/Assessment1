import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-the-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './the-form.component.html',
  styleUrl: './the-form.component.scss'
})
export class TheFormComponent {
  postService: PostService = inject(PostService);
  sortByOptions: Array<string> = ["Id", "Reads", "Likes", "Popularity"];
  sortDircOptions: Array<string> = ["Asc", "Desc", ""];

   sortByValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = !this.sortByOptions.includes(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }
  
  sortDirectionValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = !this.sortByOptions.includes(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }
  postFilterForm = new FormGroup({
    tags: new FormControl('', [Validators.required]),
    sortBy: new FormControl(null, [this.sortByValidator()]),
    sortDirection: new FormControl(null, [this.sortDirectionValidator()])
  });

  getPosts(){
    this.postService.getResults(this.postFilterForm.value.tags ?? '', this.postFilterForm.value.sortBy ?? 'id', this.postFilterForm.value.sortDirection ?? 'asc')
  }
}
