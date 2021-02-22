const detailUsers = document.querySelector(".user-detail");

const qString = document.location.search;
const newParam = new URLSearchParams (qString);

const getId = newParam.get("id");

console.log(newParam);

const projectUrl = "https://reqres.in/api/users/" + getId;

async function getData(){
    try {
        const response = await fetch(projectUrl);
        const details = await response.json();
        const userInfo = details.data;
       
        console.log(userInfo);

        

        addDetail(userInfo);



    } catch (error) {
        console.log(error);
        
        
    }
}

getData();

function addDetail(userInfo) {
    detailUsers.innerHTML = `  
    <p>First name:${userInfo.first_name}</p>
    <p>${userInfo.last_name}</p>
    <p>${userInfo.email}</p>`
}