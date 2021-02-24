const detailUsers = document.querySelector(".user-detail");


const qString = document.location.search;
const newParam = new URLSearchParams (qString);

const getId = newParam.get("id");

console.log(typeof getId);

const projectUrl = "https://reqres.in/api/users/" + getId;
if (getId != null){
    getData()
}
async function getData(){
    
  setSpinner(true);
    try {
        const response = await fetch(projectUrl);
        const details = await response.json();
        const userInfo = details.data;
       
        console.log("userInfo");

        
        addDetail(userInfo);



    } catch (error) {
        console.log("error");
        
        
    }
}



function addDetail(userInfo) {
    setSpinner(false);

    detailUsers.innerHTML = `  
    <p>First name:${userInfo.first_name}</p>
    <p>${userInfo.last_name}</p>
    <p>${userInfo.email}</p>`
}

async function getUser(){
      setSpinner(true);
        let userId = document.getElementById("user-id").value;
    try {
        const response = await fetch("https://reqres.in/api/users/" + userId);
        const details = await response.json();
        const userInfo = details.data;
       
        console.log("userInfo");

        
        addDetail(userInfo);



    } catch (error) {
        console.log("error");
        
        
    }
}

function setSpinner(setspinner){
 if (setSpinner){
    detailUsers.innerHTML = `<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`
 }else {
    detailUsers.innerHTML ="";
  
 }
}