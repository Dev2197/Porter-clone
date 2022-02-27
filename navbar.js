function navbar(){
    return `
    <div id="navbar_container">
        <div id="nav_left">
            <div id="nav_logo">
                <img src="https://i.ibb.co/4tn5YV5/navporter-logo.png" alt="">
            </div>
            <div >
                <p id="nav_heading">India's Largest Marketplace for Intracity Logistics</p>
            </div>
        </div>
        <div id="nav_right">
            <div id="drive-us">
                <div id="drive-img">
                    <img id="drive-icon" src="https://d35ppnqksufxmo.cloudfront.net/frontend_website/9e4ccae9c5a1b669d8fa2648db220c3f.svg" alt="">
                </div>
                <div id="drive-heading">
                    <p id="drive_title">DRIVE WITH US</p>
                    <p id="drive_desc">turn kms into money</p>
                </div>
                <div id="join-us">
                    <p >JOIN US</p>
                </div>
            </div>
            <div id="contact_info">
                <div>
                    <img src="https://i.ibb.co/P4n85zK/call-icon.png" alt="" id="call-icon">
                </div>
                <div>
                    <p id="contact_num">4410-4410</p>
                    <p id="city-code">add your city code</p>
                </div>
            </div>
        </div>
    </div>

    <div id="navbar_container2">
        <div id="nav2_left">
            <div>
                <p id="index_page" onclick="navbar2(1)">CITY TEMPO</p>
                <div class="blue_bar" id="blue_bar1"></div>
            </div>
            <div>
                <p id="packers_page" onclick="navbar2(2)">PACKERS & MOVERS</p>
                <div class="blue_bar" id="blue_bar2"></div>
            </div>
            <div>
                <p id="driver_page" onclick="navbar2(3)">DRIVER PARTNERS</p>
                <div class="blue_bar" id="blue_bar3"></div>
            </div>
            <div>
                <p id="enterprise_page" onclick="navbar2(4)">FOR ENTERPRISE</p>
                <div class="blue_bar" id="blue_bar4"></div>
            </div>
        </div>
        <div id="nav2_right">
            <p>Track Order</p>
            <p>Support</p>
        </div>
    </div>
    
    `
}

export default navbar;