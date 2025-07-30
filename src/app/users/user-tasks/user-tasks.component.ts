import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
}) 
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>();
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  userName = '';

  private userService = inject(UsersService);

  // userName = computed(() => this.userService.users.find(u => u.id === this.userId())?.name)

  ngOnInit() { 
   const subscription = this.activatedRoute.paramMap.subscribe({
      next: paramMap => { 
        return this.userName = this.userService.users.find(u => u.id === paramMap.get('userId'))?.name || ''
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
