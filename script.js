const moods ={
    happy:{color:"#FFD700",messege:"Let your smile light up the world." ,moodname:"Happy 😀"},
    sad:{color:"#5D6D7E",messege:"This too shall pass.", moodname:"Sad 🥺"},
    angry:{color:"#E74C3C",messege:"Breathe in strength, breathe out fire." , moodname:"Angry 😡"} ,
    calm:{color:"#A3E4D7",messege:"Peace begins with a deep breath." ,moodname:"Calm Person 😌"},
    motivated:{color:"#28B463",messege:"Push forward. You’ve got this!" , moodname:"Motivated 😎"},
    stressed:{color:"#85C1E9",messege:"One step at a time is still progress.", moodname:"Stressed Out 😵‍💫"},
    excited:{color:"#FF6B6B",messege:"Energy is contagious—own it!" , moodname:"Excited 😆"},
}



let currentMood="";
let customQuotes=JSON.parse(localStorage.getItem("customQuotes")) || {};
let moodHistory=JSON.parse(localStorage.getItem("moodHistory")) || [];





function setMood(mood){
    currentMood=mood;
    const moodData=moods[mood];
    document.body.style.backgroundColor=moodData.color;



    const quote =customQuotes[mood] || moodData.messege;
    document.getElementById("motivationText").innerText=quote;

    const myMood = moodData.moodname;
    document.getElementById("myMood").innerText=  "I am    " + myMood;


}

