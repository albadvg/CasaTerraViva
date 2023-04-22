function initMap() { 
    let address = {lat:42.75724976721994 , lng: 8.512463390431039};
    let map = new google.maps.Map( document.getElementsByClassName('map') , {
        zoom : 13,
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
