
var sub_btn = document.querySelectorAll(".btn")
var sub_btn_name = [];
for (i=0;i<sub_btn.length;i++){
  sub_btn_name.push(sub_btn[i].innerText)
}


function getTime(){
  d = new Date()
  time = d.toLocaleTimeString()
  time_list = []
  temp_time = ""
  for (i=0;i<time.length;i++){
    if(time[i] == ":" || time[i] == " "){
      time_list.push(temp_time);
      temp_time = ""
      i++
    }
    temp_time += time[i]
  }

  if(time.includes("AM")){
    time_list.push("AM")
  }else{
    time_list.push("PM")
  }

  return time_list
}



setInterval(() => {
  currentDate = new Date().toLocaleString();
  date = []
  temp = ""

  exam_day = ["7","31","2023"]

  for (i=0;i<currentDate.length;i++){ 
    if (currentDate[i]==","){
      date.push(temp)
      break
    }
    else{
      if (currentDate[i]=="/"){
        date.push(temp)
        temp = ""
      }
      else{
        temp += currentDate[i]
      }
    }
  }
  countdown = +exam_day[1]-(+date[1])
  
  

  for (i=0;i<sub_btn.length;i++){
    if(sub_btn[i].matches(":hover")){
      sub_btn[i].innerText = "More..."
    }
    else{
      sub_btn[i].innerText = sub_btn_name[i];
    }
    if(sub_btn[i].matches(":active")){
      window.location.replace(`${sub_btn_name[i]}.html`)
    }
  }
  
}, 1);  
