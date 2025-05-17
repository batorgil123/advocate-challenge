import { getAllTasks } from "./queries/getAllTasks";
import { getFinishedTasksLists } from "./queries/getFinishedTasksLists";
import { addTask } from "./mutations/addTask";
import { updateTask } from "./mutations/updateTask";

export const taskResolvers = {
  Query: {
    getAllTasks,
    getFinishedTasksLists,
  },
  Mutation: {
    addTask,
    updateTask,
  },
};
