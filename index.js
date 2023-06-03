/* eslint-disable max-len */

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`);
    },

    // Print the state of a task to the console in a nice readable way
    markCompleted: function() {
      this.complete = true;
    },
  };
  return task;
}

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box');
const task2 = newTask('Do Laundry', '😲');
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();


