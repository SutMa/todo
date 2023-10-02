class Task{
    constructor(title, desc, dueDate, priority, notes){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.done = false;
    }

    finishTask(){
        this.done  = true;
    } 

    edit(newNotes){
        this.notes = newNotes;
    } 
    
}

export {Task};
