function navbar2(val){
    let navpage = val;
    console.log(navpage)
    let blue_bar1 = document.getElementById("blue_bar1");
    let blue_bar2 = document.getElementById("blue_bar2");
    let blue_bar3 = document.getElementById("blue_bar3");
    let blue_bar4 = document.getElementById("blue_bar4");

    if(navpage == 1){
        blue_bar1.style.backgroundColor = "rgb(48,85,249)";
        blue_bar2.style.backgroundColor = "white";
        blue_bar3.style.backgroundColor = "white";
        blue_bar4.style.backgroundColor = "white";
    }
    else if(navpage == 2){
        blue_bar1.style.backgroundColor = "white";
        blue_bar2.style.backgroundColor = "rgb(48,85,249)";
        blue_bar3.style.backgroundColor = "white";
        blue_bar4.style.backgroundColor = "white";
    }
    else if(navpage == 3){
        blue_bar1.style.backgroundColor = "white";
        blue_bar2.style.backgroundColor = "white";
        blue_bar3.style.backgroundColor = "rgb(48,85,249)";
        blue_bar4.style.backgroundColor = "white";
    }
    else if(navpage == 4){
        blue_bar1.style.backgroundColor = "white";
        blue_bar2.style.backgroundColor = "white";
        blue_bar3.style.backgroundColor = "white";
        blue_bar4.style.backgroundColor = "rgb(48,85,249)";
    }

    
    
}