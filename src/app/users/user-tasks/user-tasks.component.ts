import { Component, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
}) 
export class UserTasksComponent {
  // userId = input.required<string>();
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);
  userName = input.required<string>();
  message = input.required<string>();
  private activatedRoute = inject(ActivatedRoute);

  // ngOnInit() { 
  //   this.activatedRoute.data.subscribe({
  //     next: data => console.log(data),
      
  //   })
  // }

  // userName = computed(() => this.userService.users.find(u => u.id === this.userId())?.name)

  // ngOnInit() { 
  //  const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: paramMap => { 
  //       return this.userName = this.userService.users.find(u => u.id === paramMap.get('userId'))?.name || ''
  //     }
  //   })

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe())
  // }
}

export const resolveUserName : ResolveFn<string> = (activatedRoute : ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => { 
  const userService = inject(UsersService);
  const userName = userService.users.find(u => u.id === activatedRoute.paramMap.get('userId'))?.name || '';
  return userName;
}
 
export const resolveTitle: ResolveFn<string> = (activatedRoute, routerState) => {
  return resolveUserName(activatedRoute, routerState) + '\'s Tasks';
}