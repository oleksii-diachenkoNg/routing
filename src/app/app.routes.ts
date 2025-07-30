import { Routes } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
    {
        path: '', // <my-domain>/
        component: NoTaskComponent
    },
    {
        path: 'users/:userId', // <my-domain>/users/<any-user-id>
        component: UserTasksComponent,
        children: [
            {
                path: '',
                redirectTo: 'tasks', // Redirect to tasks if no sub-path is provided
                pathMatch: 'full'
            },
            {
                path: 'tasks', // <my-domain>/users/<any-user-id>/tasks
                component: TasksComponent
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]