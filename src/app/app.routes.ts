import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes } from "./users/users.routes";
import { inject } from "@angular/core";

// const dummyCanMatch: CanMatchFn = (route, segments) => {
//     const router = inject(Router);

//     const shouldGetAccess = Math.random();
//     if(shouldGetAccess > 0.5) {
//         return true; // allow access
//     } 
//     return new RedirectCommand(router.parseUrl('/unauthorized')); // redirect to unauthorized page
// }

export const routes: Routes = [
    {
        path: '', // <my-domain>/
        component: NoTaskComponent,
        title: 'No Tasks'
    },
    {
        path: 'users/:userId', // <my-domain>/users/<any-user-id>
        component: UserTasksComponent,
        children: userRoutes,
        // canMatch: [dummyCanMatch],
        data: { 
            message: 'Hello World',
        },
        resolve: { 
            userName: resolveUserName
        },
        title: resolveTitle,
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]