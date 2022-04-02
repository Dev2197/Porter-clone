function navbar() {
    return `
    <div id="navbar_container">
        <div id="nav_left">
        <div id="nav_logo">
        <a href="index.html"><img src="./images/navporter_logo.png" alt=""></a>
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
                    <img src="./images/call-icon.png" alt="" id="call-icon">
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
    <p id="index_page"><a href="index.html">CITY TEMPO</a></p>
    <div class="blue_bar" id="blue_bar1"></div>
</div>
<div>
    <p id="packers_page" ><a href="packers&movers.html">PACKERS & MOVERS</a></p>
    <div class="blue_bar" id="blue_bar2"></div>
</div>
<div>
    <p id="driver_page" ><a href="dandp.html">DRIVER PARTNERS</a></p>
    <div class="blue_bar" id="blue_bar3"></div>
</div>
<div>
    <p id="enterprise_page" ><a href="enterprise.html">FOR ENTERPRISE</a></p>
    <div class="blue_bar" id="blue_bar4"></div>
</div>
        </div>
        <div id="nav2_right">
            <p>Track Order</p>
            <a href="support.html"><p>Support</p></a>
        </div>
    </div>
    
    `
}

export default navbar;

