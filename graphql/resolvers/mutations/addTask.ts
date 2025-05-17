export const addTask = async (_: any, { input }: { input: any }, { db }: any) => {
  const { taskName, description, priority, userId, tags } = input;

  if (description.length < 10 || description === taskName) {
    throw new Error("Invalid description.");
  }
  if (priority < 1 || priority > 5) {
    throw new Error("Priority must be between 1 and 5.");
  }

  const existing = await db.collection("tasks").findOne({ taskName, userId });
  if (existing) throw new Error("Task with this name already exists for the user.");

  const newTask = {
    taskName,
    description,
    isDone: false,
    priority,
    tags: tags?.slice(0, 5) || [],
    createdAt: new Date(),
    updatedAt: new Date(),
    userId,
  };

  const result = await db.collection("tasks").insertOne(newTask);
  return { ...newTask, _id: result.insertedId.toString() };
};
