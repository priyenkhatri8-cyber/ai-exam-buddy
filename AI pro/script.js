// script.js
function analyze(){

let name = document.getElementById("name").value;
let subject = document.getElementById("subject").value;
let marks = parseInt(document.getElementById("marks").value);
let days = parseInt(document.getElementById("days").value);

let msg = `<h3>Hello ${name} 👋</h3>`;

if(marks < 40){
    msg += `<p>⚠ Weak in ${subject}. Study 2 hours daily.</p>`;
}
else if(marks < 70){
    msg += `<p>👍 Average in ${subject}. Practice 1 hour daily.</p>`;
}
else{
    msg += `<p>🔥 Strong in ${subject}. Quick revision enough.</p>`;
}

if(days <= 3){
    msg += `<p>⏰ Exam is near. Start Revision Mode.</p>`;
}
else{
    msg += `<p>📅 Make timetable and complete syllabus.</p>`;
}

msg += `<p>💡 Motivation: Success comes from consistency.</p>`;

document.getElementById("result").innerHTML = msg;

}