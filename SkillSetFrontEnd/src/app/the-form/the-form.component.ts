import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  
  postFilterForm = new FormGroup({
    sortBy: new FormControl(''),
    sortDirection: new FormControl(''),
  });

  getPosts(){
    this.postService.getResults(this.postFilterForm.value.sortBy ?? '', this.postFilterForm.value.sortDirection ?? '')
  }
}
