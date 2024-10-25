import { Component, inject } from '@angular/core';
import { PostService } from '../post-service.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  postService: PostService = inject(PostService);

}
