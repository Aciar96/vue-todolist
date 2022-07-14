const app = new Vue({
    el: '#root',
    data: {
 
      newTask: "",
      tasks: [
        {
          text: 'alzarsi',
          done: false
        },
        {
          text: 'lavarsi la faccia',
          done: true
        },
        {
          text: 'lavarsi i denti ',
          done: false
        },
        {
          text: 'farsi una doccia ',
          done: true
        },
        {
            text: 'uscire ',
            done: false
        }
      ],
    },
    methods: {
        removeTask(index) {
          this.tasks.splice(index, 1)
        },  
         addTask() {
             this.tasks.push({ text: this.newTask, done: false });
        },
      },
    })