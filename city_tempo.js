import navbar from "/navbar.js";

let nav = document.getElementById('main');
nav.innerHTML = navbar();


import footer from "./components/footer.js";

let foot = document.getElementById('end');
foot.innerHTML = footer();

document.getElementById("drive-us").addEventListener("click",()=>{
    window.location.href = "dandp.html";
})



let phone_inside = document.querySelector(".phone_inside");
    let phone_images = ["https://d35ppnqksufxmo.cloudfront.net/frontend_website/dc62acbd47448f7408a42cafd2373ff4.jpg",
                        "https://d35ppnqksufxmo.cloudfront.net/frontend_website/06836ba0537d528a5e6d67162486c5dd.png",
                        "https://d35ppnqksufxmo.cloudfront.net/frontend_website/f2aa8b1ddc884cb99c166ef3f0126d11.jpg",
                        "https://d35ppnqksufxmo.cloudfront.net/frontend_website/f5523c6e547962ddd0c9e4a671aab308.jpg"
                    ];

    
    var i = 0;

    setInterval(function(){
        phone_inside.src = phone_images[i];
        
        if(i == 3){
            i = 0;
        }
        i++;
    },2000);


    