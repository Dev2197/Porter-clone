let right_container = document.getElementById("right_container");

document.querySelector("form").addEventListener('submit', driver)
async function driver(event)
{
    event.preventDefault();
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phone_num").value;
    let city = document.getElementById("city").value;
    let vehicle = document.getElementById("vehicle").value;
    let source = document.getElementById("source").value;
    
     right_container.innerHTML = `<div id="thankyou">THANK YOU FOR REGISTRATION</div>

     <div id="driver_name"></div>
 
     <div id="getback">We will get back to you shortly</div>
 
     <button id="register" class="registerMore">REGISTER MORE</button>` 

     document.getElementById("driver_name").textContent = name;

    let res =  await fetch("http://localhost:5000/drivers", {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            Name : name,
            phoneNumber : phoneNumber,
            city : city,
            vehicle: vehicle,
            source : source
        })
    })

}


