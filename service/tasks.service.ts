import { tasks } from '../db/tasksDb';

export class TasksService {

    private tasksDb = tasks;

    getTask() {
        return this.tasksDb;
    }

    postNewTask(newTask) {
        this.tasksDb.push(newTask);
    }

}