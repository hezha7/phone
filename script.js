const back = document.querySelector("#back");
const drawer_btn = document.querySelector("#drawer_btn");


drawer_btn.addEventListener("click", handledrawer_btn, false);
back.addEventListener("click", handleback, false);


function handledrawer_btn(){
    const drawer=document.getElementById("drawer");
    drawer.style.transform="translateX(0%)";
    drawer_btn.style.display="none";
    back.style.display="block";
}
function handleback(){
    const drawer=document.getElementById("drawer");
    drawer.style.transform="translateX(-100%)";
    back.style.display="none";
    drawer_btn.style.display="block";
}