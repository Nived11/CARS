
let API="http://localhost:3000/api";
let profile=[];
document.getElementById("profile").addEventListener('change',async(e)=>{
    profile = [];
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        const base64 = await convertBase64(files[i]);
        profile.push(base64);
        console.log(profile[i]);
    }
    console.log(profile);
    document.getElementById("imag1").src=profile[0];
    document.getElementById("imag2").src=profile[1];
    document.getElementById("imag3").src=profile[2];
    document.getElementById("imag4").src=profile[3];



})

document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.getElementById("form");

   
    form.addEventListener("submit", async (event) => {
       
        event.preventDefault();

       
        const name = document.getElementById("name").value;
        const brand = document.getElementById("brand").value;
        const cc = document.getElementById("cc").value;
        const fuel_type = document.getElementById("fuel_type").value;
        const milage = document.getElementById("milage").value;
        const colour = document.getElementById("colour").value;
        const seat = document.getElementById("seat").value;

        

        try {
            
            const res = await fetch (API+"/addcars",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,brand,cc,fuel_type,milage,colour,seat,profile})
            })
            if(res.status==200){
                const {msg}=await res.json();
                alert(msg);
                
                
                
                window.location.href="../index.html"
            }else{
                alert("not added")
            }
    
            
        } catch (error) {
            console.log(error);
            
        }

        
        
    });
});


function convertBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result);
        }
        fileReader.onerror=(error)=>{
            reject(error);
        }
    })
}