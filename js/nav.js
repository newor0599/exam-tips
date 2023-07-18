btn = document.querySelectorAll(".btn")
console.log(btn)
nav_btn_name = []
for (i=0;i<btn.length;i++){
  nav_btn_name.push(btn[i].innerText)
}

setInterval(() => {
  for (i=0;i<nav_btn_name.length;i++){
    if(btn[i].matches(":hover")){
      btn[i].innerText = "GO!"
    }
    else{
      btn[i].innerText = nav_btn_name[i]
    }
    if(btn[i].matches(":active")){
      window.location.replace(`${nav_btn_name[i]}.html`)
    }
  }
}, 1);
