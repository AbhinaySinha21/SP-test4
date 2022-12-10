let Alice=document.querySelector("#Al");
let lo=document.querySelector("#lo");
let doc=document.querySelector("#dj");
lo.addEventListener("click",(e)=>{
    e.preventDefault();
    lord();
})
Alice.addEventListener("click",(e)=>{
    e.preventDefault();
    Ali();
})
doc.addEventListener("click",(e)=>{
    e.preventDefault();
    Drj();
});
let btnse=document.querySelector("#srchbtn");
btnse.addEventListener("click",(e)=>{
    e.preventDefault();
    let val=document.querySelector("input").value;
    if("jekyllAndhyde".includes(val.toLowerCase()))
        Drj();
    else if("aliceinwonderland".includes(val.toLowerCase()))
        Ali();
    else if("lordofthereings".includes(val.toLowerCase()))
        lord();
    else
        alert("No book present")

})

function Drj(){
    fetch("./JekyllAndHyde.txt").then(function(response) {
        return response
     }).then(function(data) {
       return data.text()
     }).then(function(Normal) {
        document.querySelector(".read h1").innerHTML="Dr Jekly";
        Normal.replace('\n',`<br/>`);
        Normal.replace('\r',`<br/>`);
        if(document.querySelector(".read").childElementCount>=2)
            document.querySelector(".read").removeChild(document.querySelector(".read").lastChild);
            let h6=document.createElement("h6");
            h6.innerHTML=Normal;
           document.querySelector(".read").appendChild(h6);
     }).catch(function(err) {
       console.log('Fetch problem show: ' + err.message);
     });
}
function Ali(){
    fetch("./AliceInWonderland.txt").then(function(response) {
        return response
     }).then(function(data) {
       return data.text()
     }).then(function(Normal) {
        document.querySelector(".read h1").innerHTML="Alice in the wonderland";
        Normal.replace('\n',`<br/>`);
        Normal.replace('\r',`<br/>`);
        if(document.querySelector(".read").childElementCount>=2)
            document.querySelector(".read").removeChild(document.querySelector(".read").lastChild);
            let h6=document.createElement("h6");
            h6.innerHTML=Normal;
           document.querySelector(".read").appendChild(h6);
     }).catch(function(err) {
       console.log('Fetch problem show: ' + err.message);
     });
}

function lord(){
    fetch("./LOTR.txt").then(function(response) {
        return response
     }).then(function(data) {
       return data.text()
     }).then(function(Normal) {
        document.querySelector(".read h1").innerHTML="Lord of the rings";
        Normal.replace('\n',`<br/>`);
        Normal.replace('\r',`<br/>`);
        if(document.querySelector(".read").childElementCount>=2)
            document.querySelector(".read").removeChild(document.querySelector(".read").lastChild);
        let h6=document.createElement("h6");
        h6.innerHTML=Normal;
       document.querySelector(".read").appendChild(h6);
     }).catch(function(err) {
       console.log('Fetch problem show: ' + err.message);
     });
}
