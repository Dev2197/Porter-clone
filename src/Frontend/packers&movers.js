document.querySelector('form').addEventListener('submit', shifting_details);

   async function shifting_details(event){

        event.preventDefault();

    let city = document.getElementById("city").value;
    let name = document.getElementById("name").value;
    let phone_num = document.getElementById("phone_num").value;
    let moving_from= document.getElementById("moving_from").value;
    let moving_to = document.getElementById("moving_to").value;
    let shifting_date = document.getElementById("shifting_date").value;

    // let shifing_user = {"city":city,
    //                     "name" : name,
    //                     "phone_num":phone_num,
    //                     "moving_from":moving_from,
    //                     "movig_to":moving_to,
    //                     "shifting_date": shifting_date};
    

    window.location.href="#exampleModalToggle";

    

    document.getElementById("date_of_mov").textContent = shifting_date;

    let res =  await fetch("http://localhost:5000/packers", {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            city:city,
            Name : name,
            phoneNumber:phone_num,
            movingFrom:moving_from,
            movingTo:moving_to,
            shiftingDate: shifting_date
        })
    })

}




let few_items = document.getElementById("few_items")
let rk = document.getElementById("1rk")
let bhk1 = document.getElementById("1bhk")
let bhk2 = document.getElementById("2bhk")
let bhk3 = document.getElementById("3bhk")
let bhk4 = document.getElementById("4bhk")

function model(val){
    let value = val;
    if(value == 1){
        few_items.style.backgroundColor = "rgb(233,240,252)"
        few_items.style.color = "#2962FF"
        few_items.style.border = "1px solid rgb(233,240,252)"

        rk.style.backgroundColor = "white"
        rk.style.color = "rgb(46, 46, 46)"
        rk.style.border = "none"

        bhk1.style.backgroundColor = "white"
        bhk1.style.color = "rgb(46, 46, 46)"
        bhk1.style.border = "none"

        bhk2.style.backgroundColor = "white"
        bhk2.style.color = "rgb(46, 46, 46)"
        bhk2.style.border = "none"

        bhk3.style.backgroundColor = "white"
        bhk3.style.color = "rgb(46, 46, 46)"
        bhk3.style.border = "none"

        bhk4.style.backgroundColor = "white"
        bhk4.style.color = "rgb(46, 46, 46)"
        bhk4.style.border = "none"

        document.getElementById("bhkkkk").textContent = "Micro Shifting"
        document.getElementById("bhk_body2").innerHTML = "";
        document.getElementById("bhk_body3").innerHTML = "";
    }
    else if(value == 2){
        few_items.style.backgroundColor = "white"
        few_items.style.color = "rgb(46, 46, 46)"
        few_items.style.border = "none"

        rk.style.backgroundColor = "rgb(233,240,252)"
        rk.style.color = "#2962FF"
        rk.style.border = "1px solid rgb(233,240,252)"

        bhk1.style.backgroundColor = "white"
        bhk1.style.color = "rgb(46, 46, 46)"
        bhk1.style.border = "none"

        bhk2.style.backgroundColor = "white"
        bhk2.style.color = "rgb(46, 46, 46)"
        bhk2.style.border = "none"

        bhk3.style.backgroundColor = "white"
        bhk3.style.color = "rgb(46, 46, 46)"
        bhk3.style.border = "none"

        bhk4.style.backgroundColor = "white"
        bhk4.style.color = "rgb(46, 46, 46)"
        bhk4.style.border = "none"

        document.getElementById("bhkkkk").textContent ="1 RK"
        document.getElementById("bhk_body2").innerHTML = "";
        document.getElementById("bhk_body3").innerHTML = "";
    }
    else if(value == 3){
        few_items.style.backgroundColor = "white"
        few_items.style.color = "rgb(46, 46, 46)"
        few_items.style.border = "none"

        rk.style.backgroundColor = "white"
        rk.style.color = "rgb(46, 46, 46)"
        rk.style.border = "none"

        bhk1.style.backgroundColor = "rgb(233,240,252)"
        bhk1.style.color = "#2962FF"
        bhk1.style.border = "1px solid rgb(233,240,252)"

        bhk2.style.backgroundColor = "white"
        bhk2.style.color = "rgb(46, 46, 46)"
        bhk2.style.border = "none"

        bhk3.style.backgroundColor = "white"
        bhk3.style.color = "rgb(46, 46, 46)"
        bhk3.style.border = "none"

        bhk4.style.backgroundColor = "white"
        bhk4.style.color = "rgb(46, 46, 46)"
        bhk4.style.border = "none"

        document.getElementById("bhkkkk").textContent ="1 BHK"
        document.getElementById("bhk_body2").innerHTML = "";
        document.getElementById("bhk_body3").innerHTML = "";
    }
    else if(value == 4){
        few_items.style.backgroundColor = "white"
        few_items.style.color = "rgb(46, 46, 46)"
        few_items.style.border = "none"

        rk.style.backgroundColor = "white"
        rk.style.color = "rgb(46, 46, 46)"
        rk.style.border = "none"

        bhk1.style.backgroundColor = "white"
        bhk1.style.color = "rgb(46, 46, 46"
        bhk1.style.border = "none"

        bhk2.style.backgroundColor = "rgb(233,240,252)"
        bhk2.style.color = "#2962FF"
        bhk2.style.border = "1px solid rgb(233,240,252)"

        bhk3.style.backgroundColor = "white"
        bhk3.style.color = "rgb(46, 46, 46)"
        bhk3.style.border = "none"

        bhk4.style.backgroundColor = "white"
        bhk4.style.color = "rgb(46, 46, 46)"
        bhk4.style.border = "none"

        document.getElementById("bhkkkk").textContent ="2 BHK"
        document.getElementById("bhk_body2").innerHTML = "";
        document.getElementById("bhk_body3").innerHTML = "";
    }
    else if(value == 5){
        few_items.style.backgroundColor = "white"
        few_items.style.color = "rgb(46, 46, 46)"
        few_items.style.border = "none"

        rk.style.backgroundColor = "white"
        rk.style.color = "rgb(46, 46, 46)"
        rk.style.border = "none"

        bhk1.style.backgroundColor = "white"
        bhk1.style.color = "rgb(46, 46, 46"
        bhk1.style.border = "none"

        bhk2.style.backgroundColor = "white"
        bhk2.style.color = "rgb(46, 46, 46)"
        bhk2.style.border = "none"

        bhk3.style.backgroundColor = "rgb(233,240,252)"
        bhk3.style.color = "#2962FF"
        bhk3.style.border = "1px solid rgb(233,240,252)"

        bhk4.style.backgroundColor = "white"
        bhk4.style.color = "rgb(46, 46, 46)"
        bhk4.style.border = "none"

        document.getElementById("bhkkkk").textContent ="3 BHK"
        document.getElementById("bhk_body2").innerHTML = "";
        document.getElementById("bhk_body3").innerHTML = "";
    }
    else if(value == 6){
        few_items.style.backgroundColor = "white"
        few_items.style.color = "rgb(46, 46, 46)"
        few_items.style.border = "none"

        rk.style.backgroundColor = "white"
        rk.style.color = "rgb(46, 46, 46)"
        rk.style.border = "none"

        bhk1.style.backgroundColor = "white"
        bhk1.style.color = "rgb(46, 46, 46"
        bhk1.style.border = "none"

        bhk2.style.backgroundColor = "white"
        bhk2.style.color = "rgb(46, 46, 46)"
        bhk2.style.border = "none"

        bhk3.style.backgroundColor = "white"
        bhk3.style.color = "rgb(46, 46, 46)"
        bhk3.style.border = "none"

        bhk4.style.backgroundColor = "rgb(233,240,252)"
        bhk4.style.color = "#2962FF"
        bhk4.style.border = "1px solid rgb(233,240,252)"

        document.getElementById("bhkkkk").textContent ="4 BHK"
        document.getElementById("bhk_body2").innerHTML = "";
        document.getElementById("bhk_body3").innerHTML = "";
    }
    
}







let pop1_select1 = document.getElementById('pop1_select1');
let pop1_select2 = document.getElementById('pop1_select2');
let pop1_select3 = document.getElementById('pop1_select3');

let pop2_select1 = document.getElementById('pop2_select1');
let pop2_select2 = document.getElementById('pop2_select2');
 let pop2_select3 = document.getElementById('pop2_select3');

function house(val){
   let house_val = val;
   let house_type ;

   if(house_val == 1){

    house_type = "1 BHK Small";
            pop1_select1.textContent = "Selected"
             pop1_select1.style.backgroundColor = "blue";
             pop1_select1.style.color = "white";

        pop1_select2.textContent = "Select"
       pop1_select2.style.backgroundColor = "white";
       pop1_select2.style.color = "blue";

       pop1_select3.textContent = "Select"
        pop1_select3.style.backgroundColor = "white";
        pop1_select3.style.color = "blue";
   }
   else if(house_val == 2){

    house_type = "1 BHK medium";
      pop1_select2.textContent = "Selected"
       pop1_select2.style.backgroundColor = "blue";
       pop1_select2.style.color = "white";

       pop1_select1.textContent = "Select"
       pop1_select1.style.backgroundColor = "white";
       pop1_select1.style.color = "blue";

       pop1_select3.textContent = "Select"
        pop1_select3.style.backgroundColor = "white";
        pop1_select3.style.color = "blue";
   }
   else if(house_val == 3){

    house_type = "1 BHK big";
           pop1_select3.textContent = "Selected"
           pop1_select3.style.backgroundColor = "blue";
            pop1_select3.style.color = "white";

        pop1_select1.textContent = "Select"
       pop1_select1.style.backgroundColor = "white";
       pop1_select1.style.color = "blue";

       pop1_select2.textContent = "Select"
        pop1_select2.style.backgroundColor = "white";
        pop1_select2.style.color = "blue";
   }

   let bhk_house = {"house_type":house_type}
   localStorage.setItem("bhk_house",JSON.stringify(bhk_house));

   let house =  JSON.parse(localStorage.getItem("bhk_house"));
//    console.log(house);
    document.getElementById("house_type").textContent =house.house_type;

}

function typeOfService(val){
    let service_val = val;

    let service_type;
    let price;

    if(service_val == 1){
        service_type = "Premium";
        price = 8540;

        pop2_select1.textContent = "Selected"
        pop2_select1.style.backgroundColor = "blue";
        pop2_select1.style.color = "white";

       pop2_select2.textContent = "Select"
      pop2_select2.style.backgroundColor = "white";
      pop2_select2.style.color = "blue";

     pop2_select3.textContent = "Select"
      pop2_select3.style.backgroundColor = "white";
      pop2_select3.style.color = "blue";
    }
    else if(service_val == 2){
        service_type = "Standard";
        price = 6100;


        pop2_select2.textContent = "Selected"
        pop2_select2.style.backgroundColor = "blue";
        pop2_select2.style.color = "white";
 
        pop2_select1.textContent = "Select"
        pop2_select1.style.backgroundColor = "white";
        pop2_select1.style.color = "blue";
 
        pop2_select3.textContent = "Select"
         pop2_select3.style.backgroundColor = "white";
         pop2_select3.style.color = "blue";
    }
    else if(service_val == 3){
        service_type = "Lite";
        price = 4900;


        pop2_select3.textContent = "Selected"
        pop2_select3.style.backgroundColor = "blue";
         pop2_select3.style.color = "white";

     pop2_select1.textContent = "Select"
    pop2_select1.style.backgroundColor = "white";
    pop2_select1.style.color = "blue";

    pop2_select2.textContent = "Select"
     pop2_select2.style.backgroundColor = "white";
     pop2_select2.style.color = "blue";
    }

    let service_details = {"service_type": service_type,  "price": price};

    localStorage.setItem("service_details",JSON.stringify(service_details));


    let service_detail = JSON.parse(localStorage.getItem("service_details"));
    // console.log(service_detail);
    document.getElementById("pop3_price").textContent = `₹ ${service_detail.price}`;
    document.getElementById("service_bhk").textContent = service_detail.service_type;

    cost = service_detail.price;


    //promo code
    

     document.getElementById('pop3_apply').addEventListener("click", ()=>{

        var promo_code = document.getElementById("promo_code").value;
         console.log(promo_code);
         console.log(service_detail);
         let cost = service_detail.price;

         if(promo_code == "masai25"){

            alert("Referral Code Applied successfully");
             let discount_price = cost*(25/100);
             let after_discount = cost-discount_price;

             document.getElementById("pop3_price").textContent = `₹ ${after_discount}`;

         }
         else{
             alert("Wrong Referrral Code");
         }
     })
}


