let users = document.querySelector(".users");

const projectUrl = "https://reqres.in/api/users";

async function getData(){
    try {
        const response = await fetch(projectUrl);
        const output = await response.json();
        //console.log(output);

        users.innerHTML="";
        const listOfUser = output.data;
        console.log(listOfUser);

        for ( info in listOfUser){
            
            console.log(listOfUser[info].id);
            users.innerHTML += 
            `<div class="users">
            <a href="/detail.html?id=${listOfUser[info].id}" class="users"
            <p>First name: <strong>${listOfUser[info].first_name}</strong></p>
            <p>Last name: <strong>${listOfUser[info].last_name}</strong></p>
            <p>Email: <strong>${listOfUser[info].email}</strong></p>
            </a></div><hr/>`
        }
    } catch (error) {
        console.log(error);
        users.innerHTML = message("error",error);
        
    }
     


    }

    getData();

  
