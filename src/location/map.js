function googleMap() {
        var mapCenter = new google.maps.LatLng(37.7912987,-122.4151235);
        var mapOptions = {
            center: mapCenter, 
            zoom: 13, 
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            title: ''
        });
    }
