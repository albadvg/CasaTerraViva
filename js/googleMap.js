function initMap() { 
    let address = {lat: 42.75710637041434, lng: -8.512646167944864};
    let map = new google.maps.Map( document.getElementById('mapa') , {
        zoom : 10,
        center : address,
        mapId : 'e40cc7d0800b02c8',
    });
  

    const pinViewStyles = new google.maps.marker.PinView({
    background: "#2c2318",
    borderColor: "#2c2318",
    scale: 1.2,
    glyphColor : 'white',
    });
    

    let markerView = new google.maps.marker.AdvancedMarkerView({
    position : address,
    map : map,
    content : pinViewStyles.element,
    });

    
      
};
