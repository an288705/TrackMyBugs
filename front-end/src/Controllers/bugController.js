import bugModel from '../Models/bugModel'

let bugs = [];
const curl = 'http://localhost:3500/auth/bug';

fetch(curl) 
.then(data=>{return data.json()})
.then(json=>{
    for(const x of json)
    {
        bugs.push(new bugModel({
            _id : parseInt(x._id),
            name : x.name,
            details : x.details,
            steps : x.steps,
            version : x.version,
            assigned : x.assigned,
            creator : x.creator,
            priority : parseInt(x.priority),
            time : x.time
        }));
    }
});

export function retrieveBugs(){
    let sorted = bugs.slice().sort((a,b) => {return a.priority - b.priority});
    return sorted;   
}