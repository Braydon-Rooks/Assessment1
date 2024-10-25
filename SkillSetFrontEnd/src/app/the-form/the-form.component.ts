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
    tags: new FormControl(''),
    sortBy: new FormControl(null),
    sortDirection: new FormControl(null)
  });

  getPosts(){
    this.postService.getResults(this.postFilterForm.value.tags ?? '', this.postFilterForm.value.sortBy ?? 'id', this.postFilterForm.value.sortDirection ?? 'asc')
  }
}
