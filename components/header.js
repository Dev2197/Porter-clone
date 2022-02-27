
function navbar(){
    return `
    <div id="navbar_container">
      <div id="nav_left">
      <div id="nav_logo">
      <a href="index.html"><img src="https://i.ibb.co/4tn5YV5/navporter-logo.png" alt=""></a>
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
                  <p id="drive_title"><b>DRIVE WITH US</b></p>
                  <p id="drive_desc"> <b>turn kms into money</b> </p>
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
      <a href="index.html"><p>CITY TEMPO</p></a>
      <a href="packers&movers.html"><p>PACKERS & MOVERS</p></a>
      <a href="dandp.html"><p>DRIVER PARTNERS</p></a>
      <a href="enterprise.html"><p>FOR ENTERPRISE</p></a>
      </div>
      <div id="nav2_right">
      <a href=""><p>Track Order</p></a>
      <a href="support.html"><p>Support</p></a>
      </div>
  </div>
    `
}

export default navbar;