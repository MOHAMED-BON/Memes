let inNUM = document.querySelector(".inputnum");
let  invalidNum= document.querySelector(".invalid");
let  divIMG= document.querySelector(".Divamge");
let  btn= document.querySelector(".btn");

btn.addEventListener("click",async()=>{
let rej = await fetch('https://api.imgflip.com/get_memes');
 let data = await rej.json();
 let img = data.data.memes
// console.log(img);
let Input = inNUM.value.trim()
let Num =Number(Input)
// console.log(Num);

if (!Input || !Num) {
    invalidNum.style.display="block"
     divIMG.style.display="none"
    return;

}  if(img[Num]){
    divIMG.style.display="block"
    invalidNum.style.display="none"
    divIMG.innerHTML =  `
  <img src="${img[Num].url}" class="rounded card-img " alt="...">
`
}else{

invalidNum.style.display="block"
     divIMG.style.display="none"




}







})


