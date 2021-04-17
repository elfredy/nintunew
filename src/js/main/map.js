function initMap() {
    const myLatLng = { lat: 40.394508, lng: 49.7148754 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: myLatLng,
    });

    var iconBase = 'img/marker.png';

    const marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
        icon: iconBase
    });


    const contentString =
        '<div id="content">' +
        '<div style="min-width:500px;" id="siteNotice">' +
        "</div>" +
        '<h3 class="firstHeading text-center">VISIT US</h3>' +
        '<div class="bodyContent">' + 
        "<p> Mahmutbey Mah. Taşocağı Cad. No:3, </p>" +
        "<p> Ağaoğlu My Office 212, Kat: 26, D:432, </p>" 
        +
        "<p>   34218, Bağcılar / İstanbul, Turkey,</p>" +
        "</div>" +
       
   
        
        '<h3 class="firstHeading text-center"> E-MAIL US</h3>' +
        '<div class="bodyContent">' + 
        "<p>   General enquirries"+
                        "<a href='mailto:'>info@nintu.com.tr</a>" +"</p>" +
        "<p>      Technical support"+
                        "<a href='mailto:'>support@nintu.com.tr</a>" +"</p>"
        +
        '<h3 i class="firstHeading text-center">  Call US</h3>' +
        '<div class="bodyContent">' + 
        "<p>   General enquirries"+
                        "<a href='tel:'>(+90 212) 576 1221</a>" +"</p>" +
        "<p>      Technical support"+
                        "<a href='tel:'>(+90 542) 575 0743</a>" +"</p>"
        +
    
        "</div>"
        +"</div>"+
        "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
   /*  marker.addListener("click", () => {
        infowindow.open(map, marker);
      }); */

      infowindow.open(map,marker);
}




