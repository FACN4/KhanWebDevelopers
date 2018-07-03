let form = document.getElementById("gform");
form.addEventListener("submit",function(e){
  e.preventDefault();
  console.log(form.submit());
})
