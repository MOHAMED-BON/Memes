var $buttons = document.querySelectorAll(".buttons");
var $scren = document.getElementById("inp");
var $btnd = document.getElementById("btnd");
var $btne = document.getElementById("btne");
var $btnc = document.getElementById("btnc");
var num = Number($scren.value);
$buttons.forEach((button) => {
  button.addEventListener("click", () => {
    
    $scren.value += button.innerHTML;

  });
});
$btnd.addEventListener("click", () => {
  $scren.value = $scren.value.slice(0, -1);
});

$btne.addEventListener("click",()=>{
     $scren.value = 0 ;
})
$btnc.addEventListener("click",()=>{
     $scren.value = "" ;
})
