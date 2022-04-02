let vehicle_img = document.getElementById("vehicle_img")
    let vehicle_name = document.getElementById("vehicle_name")

    function vehicle(val)
    {

        if(val == 1){
            vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/2_wheeler-947e3c6aac74dcdd11fdd4059e4ee72132b276200dff063d6dff2c445f7aab5b.png";
            vehicle_name.textContent = "RENT 2 WHEELER"
         }
         else if(val == 2){
             vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler-022fc2284832545607afeea8be6e567e0d2e99ff2e4e035e4f66374b22fa92db.png";
             vehicle_name.textContent = "RENT 3 WHEELER"
         }
         else if(val == 3){
             vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/3_wheeler_helper-51343864a9a26168e4bfc00ad299c33515cc01b793fc8b797c380aa46abf19c3.png";
             vehicle_name.textContent = "RENT 3 WHEELER (HELPER"
         }
         else if(val == 4){
             vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace_closed-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png";
             vehicle_name.textContent = "RENT 8FT PICKUP"
         }
         else if(val == 5){
             vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/8ft_1ton-a9abd7ed5e7104c62305c68c97527eac0ff7d40dd7808175d097546b57f901d7.png";
             vehicle_name.textContent = "RENT 8FT 1TON"
         }
         else if(val == 6){
             vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/ace_helper-13b68258cbd75d2985ef458b6840d37c90735c3d50378dd07392ed6eb09073c9.png";
             vehicle_name.textContent = "RENT ACE (HELPER)"
         }
         else if(val == 7){
             vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace_closed-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png";
             vehicle_name.textContent = "RENT ACE (HELPER + 1 LABOUR)"
         }
         else if(val == 8){
             vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_407-b968c07406c8b63fca431ef8ea2152caf5272b0013502a73d2390289f1138505.png";
             vehicle_name.textContent = "RENT TATA 407"
         }
         else if(val == 9){
            vehicle_img.src = "https://d3o1t8vp7n8wsg.cloudfront.net/assets/website_revamp/large_vehicles/tata_ace-e92a36b3508e6e3b1804fd2015adbfb6c948bc35afab36699440785ed83b5b24.png";
            vehicle_name.textContent = "RENT TATA ACE"
        }
    }