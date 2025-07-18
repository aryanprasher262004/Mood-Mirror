const moods ={
    "happy": {
        "gradient": "linear-gradient(to right, #FFDE7D,rgb(237, 181, 78),rgb(222, 147, 42), #FF8C42)",
        "message": "Let your smile light up the world.",
        "moodname": "Happy 😀",
      
      },
      "sad": {
        "gradient": "linear-gradient(to right, #4B6584, #34495E, #2C3E50, #212F3D)",
        "message": "This too shall pass.",
        "moodname": "Sad 🥺"
      },
      "angry": {
        "gradient": "linear-gradient(to right,rgb(228, 77, 92), #D72638,rgb(144, 14, 38), #800016)",
        "message": "Breathe in strength, breathe out fire.",
        "moodname": "Angry 😡"
      },
      "calm": {
        "gradient": "linear-gradient(to right, #6BCB77, #55AFA1, #4C9F9A, #2C786C)",
        "message": "Peace begins with a deep breath.",
        "moodname": " a Calm Person 😌"
      },
      "motivated": {
        "gradient": "linear-gradient(to right,rgb(60, 212, 116),rgb(0, 169, 62),rgb(8, 125, 0), #005B46)",
        "message": "Push forward. You’ve got this!",
        "moodname": "Motivated 😎"
      },
      "stressed": {
        "gradient": "linear-gradient(to right, #6A89CC, #4A69BD, #2E86C1, #1B4F72)",
        "message": "One step at a time is still progress.",
        "moodname": "Stressed Out 😵‍💫"
      },
      "excited": {
        "gradient": "linear-gradient(to right,rgb(225, 107, 255),rgb(211, 28, 227),rgb(215, 35, 179),rgb(94, 2, 94))",
        "message": "Energy is contagious—own it!",
        "moodname": "Excited 😆"
      }
}



let currentMood="";
let customQuotes=JSON.parse(localStorage.getItem("customQuotes")) || {};
let moodHistory=JSON.parse(localStorage.getItem("moodHistory")) || [];





function setMood(mood){
    currentMood=mood;
    const moodData=moods[mood];
    bgChange(moodData.gradient)


    const quote =customQuotes[mood] || moodData.message;
    document.getElementById("motivationText").innerText=quote;

    const myMood = moodData.moodname;
    document.getElementById("myMood").innerText=  "I am    " + myMood;



    const entry = `${new Date().toLocaleString()} - ${mood.toUpperCase()}`;
    moodHistory.push(entry);
    localStorage.setItem("moodHistory", JSON.stringify(moodHistory));
    renderHistory();

}

function saveCustomQuote(){
    const quote=document.getElementById("customQuote").value.trim();
    if(currentMood && quote  !== ""){
        customQuotes[currentMood]=quote;
        localStorage.setItem("customQuote",JSON.stringify(customQuotes))
        document.getElementById("motivationText").innerText=quote;
        document.getElementById("customQuote").value=""

    }
}


function renderHistory() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";
  moodHistory.slice(-10).reverse().forEach(entry => {
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
  });
}


renderHistory();





function bgChange(gradient){

  const overlay=document.createElement('div');
  overlay.className="gradientChange";
  overlay.style.background=gradient

  document.body.appendChild(overlay);


  overlay.addEventListener("animationend", ()=>{

    document.body.style.background=gradient

    overlay.remove();
  })
}

