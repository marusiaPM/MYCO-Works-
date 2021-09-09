function initMap() {

   // LOCATIONS - COORDINATES AND INFO WINDOWS
   // portland 169 
   const locLnd1 = { lat: 51.5216452566964,lng: -0.1436819036884941};
   const infoLnd1 = '<h6>West End Office, London</h6> </br> <p>167-169 Great Portland Street </br> 5th Floor </br>London </br> W1W 5PF</p>';
   // portland 85 
   const locLnd2 = { lat: 51.51857855011442,lng: -0.14239037449421582};
   const infoLnd2 = '<h6>West End Office, London</h6> </br> <p>85 Great Portland Street </br> First Floor </br>London </br> W1W 7LT</p>';
   // hatton 63 
   const locLnd3 = { lat: 51.52107991230195,lng: -0.10894606590482908};
   const infoLnd3 = '<h6>City Office, London</h6> </br> <p>63-66 Hatton Garden </br> 5th Floor </br> Suite 23 </br> London </br> EC1N 8LE</p>';
   // bell yard 7 
   const locLnd4 = { lat: 51.51457770835228,lng: -0.11175235574405287};
   const infoLnd4 = '<h6>Strand Office, London</h6> </br> <p>7 Bell Yard </br> London </br> WC2A 2JR</p>'
   // 64A Cumberland Street 
   const locEdin1 = { lat: 55.958522687337044,lng: -3.2022088629984187};
   const infoEdin1 = '<h6>New Town Office, Edinburgh</h6> </br> <p>64A Cumberland Street </br> Edinburgh </br> EH3 6RE</p>';
   // 101 Rose Street 
   const locEdin2 = { lat: 55.95188563077552,lng: -3.202204745527135};
   const infoEdin2 = '<h6>Central Office, Edinburgh</h6> </br> <p>101 Rose Street South Lane </br> Edinburgh </br> EH2 3JG</p>';
   // 10 Queen Street
   const locIpsw1 = { lat: 52.05657514947407,lng: 1.1523144543566206};
   const infoIpsw1 = '<h6>Central Office, Ipswich</h6> </br> <p>10 Queen Street </br> Ipswich, Suffolk </br> IP1 1SS</p>';
   // 50 Princes Street 
   const locIpsw2 = { lat: 52.05630449087611,lng: 1.1504307696975244};
   const infoIpsw2 = '<h6>Head Office, Ipswich</h6> </br> <p>50 Princes Street  </br> Ipswich, Suffolk </br> IP1 1SS</p>';


   // MAPS CENTER POINTS 
   // london map center 
   const centerLnd = { lat: 51.520962780676065,lng: -0.12525759594285238};
   // edinburgh map center 
   const centerEdin = { lat: 55.958,lng: -3.202206};
   // ipswich map center 
   const centerIpsw = { lat: 52.0575,lng: 1.151};


   // CUSTOM PIN 
   // const mycoPin = window.location.protocol + "//" + window.location.host + "/img/icons/custom-map-pin.svg";
   const mycoPin = 'http://ithinkcreative.co.uk/themes/MYCO21-2/img/icons/custom-map-pin.svg';

   // ADD PINS AND INFO WINDOWS FUNCTION
   function addMarkers(mapName, coordinates, info) {
      const marker = new google.maps.Marker({
         position: coordinates,
         icon: mycoPin,
         map: mapName,
      });
      
      const infowindow = new google.maps.InfoWindow({
         content: info,
      });

      marker.addListener("click", () => {
         infowindow.open(mapName, marker);
      });
   }

   // MAP STYLES 
   const mapStyles = [
      {
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#f5f5f5"
         }
      ]
      },
      {
      "elementType": "labels.icon",
      "stylers": [
         {
            "visibility": "off"
         }
      ]
      },
      {
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "color": "#616161"
         }
      ]
      },
      {
      "elementType": "labels.text.stroke",
      "stylers": [
         {
            "color": "#f5f5f5"
         }
      ]
      },
      {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "color": "#bdbdbd"
         }
      ]
      },
      {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#eeeeee"
         }
      ]
      },
      {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "color": "#757575"
         }
      ]
      },
      {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#e5e5e5"
         }
      ]
      },
      {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "color": "#9e9e9e"
         }
      ]
      },
      {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#ffffff"
         }
      ]
      },
      {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "color": "#757575"
         }
      ]
      },
      {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#dadada"
         }
      ]
      },
      {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "color": "#616161"
         }
      ]
      },
      {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "color": "#9e9e9e"
         }
      ]
      },
      {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#e5e5e5"
         }
      ]
      },
      {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#eeeeee"
         }
      ]
      },
      {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
         {
            "color": "#c9c9c9"
         }
      ]
      },
      {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
         {
            "color": "#cdd5df"
         }
      ]
      },
      {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
         {
            "color": "#9e9e9e"
         }
      ]
      }
   ]; 
   
   // CREATE MAP - LONDON
   const mapLnd = new google.maps.Map(document.getElementById("map-lnd"), {
      minZoom: 5,
      maxZoom: 16,
      zoom: 14,
      center: centerLnd,
      styles: mapStyles
   });

   // CREATE MAP - EDINBURGH 
   const mapEdin = new google.maps.Map(document.getElementById("map-ed"), {
      minZoom: 5,
      maxZoom: 16,
      zoom: 14,
      center: centerEdin,
      styles: mapStyles
   });

   // CREATE MAP - IPSWICH  
   const mapIpsw = new google.maps.Map(document.getElementById("map-ipsw"), {
      minZoom: 5,
      maxZoom: 16,
      zoom: 15,
      center: centerIpsw,
      styles: mapStyles
   });
   
   // ADD PINS TO THE MAPS
   addMarkers(mapLnd, locLnd1, infoLnd1);
   addMarkers(mapLnd, locLnd2, infoLnd2);
   addMarkers(mapLnd, locLnd3, infoLnd3);
   addMarkers(mapLnd, locLnd4, infoLnd4);
   addMarkers(mapEdin, locEdin1, infoEdin1); 
   addMarkers(mapEdin, locEdin2, infoEdin2);
   addMarkers(mapIpsw, locIpsw1, infoIpsw1);
   addMarkers(mapIpsw, locIpsw2, infoIpsw2);
}

