import { Routes } from "@angular/router";

import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

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
                path: 'tasks', // <my-domain>/users/<any-user-id>/tasks
                component: TasksComponent
            },
            {
                path: 'tasks/new',
                component: NewTaskComponent
            }
        ]
    }
]