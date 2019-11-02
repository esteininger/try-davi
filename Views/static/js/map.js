"use strict";

function LoadMap_main_default() {
    // option
    if ($('#main-map-template').length) {
  var myLocationEnabled = true;
        var style_map = [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}];
        var scrollwheelEnabled = false;

        var markers = new Array();
        var mapOptions = {
            center: new google.maps.LatLng(34.015008, -118.473215),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            // styles:style_map
        };
        var markers_map = new Array(
                [34.05843, -118.491046, 'assets/img/markers/coffe.png', 'assets/img/pic/kiosk/domenico.jpg', 'Contraband Coffee Bar'],
                [34.066673, -118.486562, 'assets/img/markers/nightlife.png', 'assets/img/pic/kiosk/foi_varazdin.jpg', 'Blue Ribbon Sushi'],
                [34.009714, -118.480296, 'assets/img/markers/restaurants.png', 'assets/img/pic/kiosk/restoranangelus.jpg', 'Korchma Taras Bulba'],
                [34.010408, -118.473215, 'assets/img/markers/shop.png', 'assets/img/pic/real_estate/tropical-villa-m.jpg', 'Coffee Bar'],
                [34.01521, -118.474889, 'assets/img/markers/nightlife.png', 'assets/img/pic/real_estate/modern-villa-s.jpg', 'Perfect Places With Pool'],
                [34.022502, -118.480124, 'assets/img/markers/coffe.png', 'assets/img/pic/real_estate/modern-town-houses-m.jpg', 'Trending Summer Places'],
                [34.024423, -118.459868, 'assets/img/markers/nightlife.png', 'assets/img/pic/business/coffee-or-bar-background-xs.jpg', 'Blue Ribbon Sushi'],
                [34.024885, -118.44871, 'assets/img/markers/restaurants.png', 'assets/img/pic/business/hair-cut.jpg', 'Which Bar to Choose'],
                [34.002368, -118.482828, 'assets/img/markers/coffe.png', 'assets/img/pic/business/outdoor-restaurant.jpg', 'Blue Ribbon Sushi']
                );

        var map = new google.maps.Map(document.getElementById('main-map-template'), mapOptions);

        $.each(markers_map, function (index, marker_map) {
            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                map: map,
                icon: 'assets/img/markers/marker-transparent.png'
            });
            
            var markerOptions_1 = {
                content: '<div class="infobox">' +
                            '<div class="preview-image"><a href="listing.html">' +
                            '<img src="' + marker_map[3] + '" alt="'+ marker_map[4] +'">' +
                            '</a></div>' +
                            '<div class="content">' +
                              '<div class="title"> <a href="listing.html">' + marker_map[4] + '</a></div>' +
                              '<div class="thumbnail-ratings">'+
                                 '4.5 <i class="icon-star-ratings-4-5"></i>'+
                              '</div>'+
                              '<div class="type">'+
                                 'Cocktail Bars'+
                              '</div>'+
                          '</div>',
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-166, -195),
                zIndex: null,
                infoBoxClearance: new google.maps.Size(1, 1),
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false,
                closeBoxURL: "assets/img/close.png"
            };
            marker.infobox = new InfoBox(markerOptions_1);
            marker.infobox.isOpen = false;
            // marker
            var markerOptions_2 = {
                draggable: false,
                content: '<div class="google_marker"><img src="'+marker_map[2]+'"></div>',
                disableAutoPan: true,
                pixelOffset: new google.maps.Size(-21, -58),
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                closeBoxMargin: "",
                closeBoxURL: "",
                isHidden: false,
                //pane: "mapPane",
                enableEventPropagation: true
            };
            marker.marker = new InfoBox(markerOptions_2);      
            marker.marker.isHidden = false;      
            marker.marker.open(map, marker);
            markers.push(marker);
                    
            // action        
            google.maps.event.addListener(marker, "click", function (e) {
                var curMarker = this;

                $.each(markers, function (index, marker) {
                    // if marker is not the clicked marker, close the marker
                    if (marker !== curMarker) {
                        marker.infobox.close();
                        marker.infobox.isOpen = false;
                    }
                });

                if (curMarker.infobox.isOpen === false) {
                    curMarker.infobox.open(map, this);
                    curMarker.infobox.isOpen = true;
                    map.panTo(curMarker.getPosition());
                } else {
                    curMarker.infobox.close();
                    curMarker.infobox.isOpen = false;
                }

            });
        });

        var mcOptions = {
                gridSize: 40,
                styles: [
                        {
                            height: 52,
                            url: 'assets/img/cluster/m1.png',
                            width: 52,
                            textColor: '#fff'
                        }
                ]
            };

        var marker_clusterer = new MarkerClusterer(map, markers, mcOptions);
        var clusterListener = google.maps.event.addListener(marker_clusterer, 'clusteringend', function (clusterer) {
                var availableClusters = clusterer.getClusters();
                var activeClusters = new Array();
                $.each(availableClusters, function (index, cluster) {
                        if (cluster.getMarkers().length > 1) {
                                $.each(cluster.getMarkers(), (function (index, marker) {
                                        if (marker.marker.isHidden == false) {
                                                marker.marker.isHidden = true;
                                                marker.marker.close();
                                        }
                                }));
                        } else {
                                $.each(cluster.getMarkers(), function (index, marker) {
                                        if (marker.marker.isHidden == true) {
                                                marker.marker.open(map, this);
                                                marker.marker.isHidden = false;
                                        }
                                });
                        }
                });
        });
        if (myLocationEnabled) {
            // [START gmap mylocation]

            // Construct your control in whatever manner is appropriate.
            // Generally, your constructor will want access to the
            // DIV on which you'll attach the control UI to the Map.
            var controlDiv = document.createElement('div');

            // We don't really need to set an index value here, but
            // this would be how you do it. Note that we set this
            // value as a property of the DIV itself.
            controlDiv.index = 1;

            // Add the control to the map at a designated control position
            // by pushing it on the position's array. This code will
            // implicitly add the control to the DOM, through the Map
            // object. You should not attach the control manually.
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);

            HomeControl(controlDiv, map)

            // [END gmap mylocation]
        }
    }
}


function LoadMap_main_mini() {
    // option
    if ($('#main-map-mini').length) {
  var myLocationEnabled = true;
        var style_map = [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}];
        var scrollwheelEnabled = false;

        var markers = new Array();
        var mapOptions = {
            center: new google.maps.LatLng(34.015008, -118.473215),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            // styles:style_map
        };
        var markers_map = new Array(
                [34.05843, -118.491046, 'assets/img/markers/coffe.png', 'assets/img/pic/kiosk/domenico.jpg', 'Contraband Coffee Bar'],
                [34.066673, -118.486562, 'assets/img/markers/nightlife.png', 'assets/img/pic/kiosk/foi_varazdin.jpg', 'Blue Ribbon Sushi'],
                [34.009714, -118.480296, 'assets/img/markers/restaurants.png', 'assets/img/pic/kiosk/restoranangelus.jpg', 'Korchma Taras Bulba'],
                [34.010408, -118.473215, 'assets/img/markers/shop.png', 'assets/img/pic/real_estate/tropical-villa-m.jpg', 'Coffee Bar'],
                [34.01521, -118.474889, 'assets/img/markers/nightlife.png', 'assets/img/pic/real_estate/modern-villa-s.jpg', 'Perfect Places With Pool'],
                [34.022502, -118.480124, 'assets/img/markers/coffe.png', 'assets/img/pic/real_estate/modern-town-houses-m.jpg', 'Trending Summer Places'],
                [34.024423, -118.459868, 'assets/img/markers/nightlife.png', 'assets/img/pic/business/coffee-or-bar-background-xs.jpg', 'Blue Ribbon Sushi'],
                [34.024885, -118.44871, 'assets/img/markers/restaurants.png', 'assets/img/pic/business/hair-cut.jpg', 'Which Bar to Choose'],
                [34.002368, -118.482828, 'assets/img/markers/coffe.png', 'assets/img/pic/business/outdoor-restaurant.jpg', 'Blue Ribbon Sushi']
                );

        var map = new google.maps.Map(document.getElementById('main-map-mini'), mapOptions);

        $.each(markers_map, function (index, marker_map) {
            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                map: map,
                icon: 'assets/img/markers/marker-transparent.png'
            });
            
            var markerOptions_1 = {
                content: '<div class="infobox infobox-mini">' +
                            '<div class="preview-image"><a href="listing.html">' +
                            '<img src="' + marker_map[3] + '" alt="'+ marker_map[4] +'">' +
                            '</a></div>' +
                            '<div class="content">' +
                              '<div class="title"> <a href="listing.html">' + marker_map[4] + '</a></div>' +
                          '</div>',
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-76, -195),
                zIndex: null,
                infoBoxClearance: new google.maps.Size(1, 1),
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false,
                closeBoxURL: "assets/img/close.png"
            };
            marker.infobox = new InfoBox(markerOptions_1);
            marker.infobox.isOpen = false;
            // marker
            var markerOptions_2 = {
                draggable: false,
                content: '<div class="google_marker"><img src="'+marker_map[2]+'"></div>',
                disableAutoPan: true,
                pixelOffset: new google.maps.Size(-21, -58),
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                closeBoxMargin: "",
                closeBoxURL: "",
                isHidden: false,
                //pane: "mapPane",
                enableEventPropagation: true
            };
            marker.marker = new InfoBox(markerOptions_2);      
            marker.marker.isHidden = false;      
            marker.marker.open(map, marker);
            markers.push(marker);
                    
            // action        
            google.maps.event.addListener(marker, "click", function (e) {
                var curMarker = this;

                $.each(markers, function (index, marker) {
                    // if marker is not the clicked marker, close the marker
                    if (marker !== curMarker) {
                        marker.infobox.close();
                        marker.infobox.isOpen = false;
                    }
                });

                if (curMarker.infobox.isOpen === false) {
                    curMarker.infobox.open(map, this);
                    curMarker.infobox.isOpen = true;
                    map.panTo(curMarker.getPosition());
                } else {
                    curMarker.infobox.close();
                    curMarker.infobox.isOpen = false;
                }

            });
        });

        var mcOptions = {
                gridSize: 40,
                styles: [
                        {
                            height: 52,
                            url: 'assets/img/cluster/m1.png',
                            width: 52,
                            textColor: '#fff'
                        }
                ]
            };

        var marker_clusterer = new MarkerClusterer(map, markers, mcOptions);
        var clusterListener = google.maps.event.addListener(marker_clusterer, 'clusteringend', function (clusterer) {
                var availableClusters = clusterer.getClusters();
                var activeClusters = new Array();
                $.each(availableClusters, function (index, cluster) {
                        if (cluster.getMarkers().length > 1) {
                                $.each(cluster.getMarkers(), (function (index, marker) {
                                        if (marker.marker.isHidden == false) {
                                                marker.marker.isHidden = true;
                                                marker.marker.close();
                                        }
                                }));
                        } else {
                                $.each(cluster.getMarkers(), function (index, marker) {
                                        if (marker.marker.isHidden == true) {
                                                marker.marker.open(map, this);
                                                marker.marker.isHidden = false;
                                        }
                                });
                        }
                });
        });
        if (myLocationEnabled) {
            // [START gmap mylocation]

            // Construct your control in whatever manner is appropriate.
            // Generally, your constructor will want access to the
            // DIV on which you'll attach the control UI to the Map.
            var controlDiv = document.createElement('div');

            // We don't really need to set an index value here, but
            // this would be how you do it. Note that we set this
            // value as a property of the DIV itself.
            controlDiv.index = 1;

            // Add the control to the map at a designated control position
            // by pushing it on the position's array. This code will
            // implicitly add the control to the DOM, through the Map
            // object. You should not attach the control manually.
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);

            HomeControl(controlDiv, map)

            // [END gmap mylocation]
        }
    }
}


function LoadMap_main() {
    // option
    if ($('#main-map').length) {
  var myLocationEnabled = false;
        var style_map = [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}];
        var scrollwheelEnabled = false;

        var markers = new Array();
        var mapOptions = {
            center: new google.maps.LatLng(34.015008, -118.473215),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
             disableDefaultUI: true
            // styles:style_map
        };
        var markers_map = new Array(
                [34.05843, -118.491046, 'assets/img/markers/coffe.png', 'assets/img/pic/kiosk/domenico.jpg', 'Contraband Coffee Bar'],
                [34.066673, -118.486562, 'assets/img/markers/nightlife.png', 'assets/img/pic/kiosk/foi_varazdin.jpg', 'Blue Ribbon Sushi'],
                [34.009714, -118.480296, 'assets/img/markers/restaurants.png', 'assets/img/pic/kiosk/restoranangelus.jpg', 'Korchma Taras Bulba'],
                [34.010408, -118.473215, 'assets/img/markers/shop.png', 'assets/img/pic/real_estate/tropical-villa-m.jpg', 'Coffee Bar'],
                [34.01521, -118.474889, 'assets/img/markers/nightlife.png', 'assets/img/pic/real_estate/modern-villa-s.jpg', 'Perfect Places With Pool'],
                [34.022502, -118.480124, 'assets/img/markers/coffe.png', 'assets/img/pic/real_estate/modern-town-houses-m.jpg', 'Trending Summer Places'],
                [34.024423, -118.459868, 'assets/img/markers/nightlife.png', 'assets/img/pic/business/coffee-or-bar-background-xs.jpg', 'Blue Ribbon Sushi'],
                [34.024885, -118.44871, 'assets/img/markers/restaurants.png', 'assets/img/pic/business/hair-cut.jpg', 'Which Bar to Choose'],
                [34.002368, -118.482828, 'assets/img/markers/coffe.png', 'assets/img/pic/business/outdoor-restaurant.jpg', 'Blue Ribbon Sushi']
                );

        var map = new google.maps.Map(document.getElementById('main-map'), mapOptions);

        $.each(markers_map, function (index, marker_map) {
            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                map: map,
                icon: 'assets/img/markers/marker-transparent.png'
            });
            
            var markerOptions_1 = {
                content: '<div class="infobox-big">' +
                            '<div class="title"><a href="listing.html">' + marker_map[4] + '</a></div>' +
                            '<div class="content">' +
                              '<div class="subtitle">History</div><a href="listing.html">' +
                              '<img src="' + marker_map[3] + '" alt="'+ marker_map[4] +'"></a>' +
                              '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                              '<div class="subtitle">Contacts</div>' +
                              '<p>VISTA ALEGRE ATLANTIS, SA<br>38058-292 Ílhavo - Croatia<br>'+
                              '<br><b>Phone:</b> <a href="tel:350123456789" class="primary-link">+350 123 456 789</a><br><b>e-mail:</b> <a href="mailto:kety@location.com" class="primary-link">kety@location.com</a><br><b>www:</b> <a href="location.com" class="primary-link">www.location.com</a></p>'+
                            '</div>' +
                            '<div class="iw-bottom-gradient"></div>' +
                          '</div>',
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-90, -265),
                zIndex: null,
                infoBoxClearance: new google.maps.Size(1, 1),
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false,
                closeBoxURL: "assets/img/close.png"
            };
            marker.infobox = new InfoBox(markerOptions_1);
            marker.infobox.isOpen = false;
            // marker
            var markerOptions_2 = {
                draggable: false,
                content: '<div class="google_marker"><img src="'+marker_map[2]+'"></div>',
                disableAutoPan: true,
                pixelOffset: new google.maps.Size(-21, -58),
                position: new google.maps.LatLng(marker_map[0], marker_map[1]),
                closeBoxMargin: "",
                closeBoxURL: "",
                isHidden: false,
                //pane: "mapPane",
                enableEventPropagation: true
            };
            marker.marker = new InfoBox(markerOptions_2);      
            marker.marker.isHidden = false;      
            marker.marker.open(map, marker);
            markers.push(marker);
                    
            // action        
            google.maps.event.addListener(marker, "click", function (e) {
                var curMarker = this;

                $.each(markers, function (index, marker) {
                    // if marker is not the clicked marker, close the marker
                    if (marker !== curMarker) {
                        marker.infobox.close();
                        marker.infobox.isOpen = false;
                    }
                });

                if (curMarker.infobox.isOpen === false) {
                    curMarker.infobox.open(map, this);
                    curMarker.infobox.isOpen = true;
                    map.panTo(curMarker.getPosition());
                } else {
                    curMarker.infobox.close();
                    curMarker.infobox.isOpen = false;
                }

            });
        });

        var mcOptions = {
                gridSize: 40,
                styles: [
                        {
                            height: 52,
                            url: 'assets/img/cluster/m1.png',
                            width: 52,
                            textColor: '#fff'
                        }
                ]
            };

        var marker_clusterer = new MarkerClusterer(map, markers, mcOptions);
        var clusterListener = google.maps.event.addListener(marker_clusterer, 'clusteringend', function (clusterer) {
                var availableClusters = clusterer.getClusters();
                var activeClusters = new Array();
                $.each(availableClusters, function (index, cluster) {
                        if (cluster.getMarkers().length > 1) {
                                $.each(cluster.getMarkers(), (function (index, marker) {
                                        if (marker.marker.isHidden == false) {
                                                marker.marker.isHidden = true;
                                                marker.marker.close();
                                        }
                                }));
                        } else {
                                $.each(cluster.getMarkers(), function (index, marker) {
                                        if (marker.marker.isHidden == true) {
                                                marker.marker.open(map, this);
                                                marker.marker.isHidden = false;
                                        }
                                });
                        }
                });
        });
        if (myLocationEnabled) {
            // [START gmap mylocation]

            // Construct your control in whatever manner is appropriate.
            // Generally, your constructor will want access to the
            // DIV on which you'll attach the control UI to the Map.
            var controlDiv = document.createElement('div');

            // We don't really need to set an index value here, but
            // this would be how you do it. Note that we set this
            // value as a property of the DIV itself.
            controlDiv.index = 1;

            // Add the control to the map at a designated control position
            // by pushing it on the position's array. This code will
            // implicitly add the control to the DOM, through the Map
            // object. You should not attach the control manually.
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);

            HomeControl(controlDiv, map)

            // [END gmap mylocation]
        }
    }
}


function map_e() {

    var map;
    if ($('#map').length) {
        var myLocationEnabled = true;
        var style_map = null;
        var scrollwheelEnabled = false;

        var markers = new Array();
        var mapOptions = {
            center: new google.maps.LatLng(45.812231, 15.920618),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
            //styles:style_map
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var input = document.getElementById('location');
        var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});
        
        
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();

          
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); 
          }
        });
        
    }

}

function map_property() {

    var map;
    if ($('#property-map').length) {
        var myLocationEnabled = true;
        var style_map = null;
        var scrollwheelEnabled = false;

        var markers = new Array();
        var mapOptions = {
            center: new google.maps.LatLng(45.812231, 15.920618),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: scrollwheelEnabled,
            //styles:style_map
        };

        var map = new google.maps.Map(document.getElementById('property-map'), mapOptions);


            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(45.812231, 15.920618),
                map: map,
                icon: 'assets/img/markers/marker-transparent.png'
            });
            
            var markerOptions_1 = {
                content: '<div class="infobox infobox-mini infobox-property">' +
                            '<div class="content">' +
                              '<div class="title"> Address: Ilica 345, HR-10000 Zagreb </a></div>' +
                          '</div>',
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-76, -125),
                zIndex: null,
                infoBoxClearance: new google.maps.Size(1, 1),
                position: new google.maps.LatLng(45.812231, 15.920618),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false,
                closeBoxURL: "assets/img/close.png"
            };
            marker.infobox = new InfoBox(markerOptions_1);
            marker.infobox.isOpen = false;
            // marker
            var markerOptions_2 = {
                draggable: false,
                content: '<div class="google_marker"><img src="assets/img/markers/coffe.png"></div>',
                disableAutoPan: true,
                pixelOffset: new google.maps.Size(-21, -58),
                position: new google.maps.LatLng(45.812231, 15.920618),
                closeBoxMargin: "",
                closeBoxURL: "",
                isHidden: false,
                //pane: "mapPane",
                enableEventPropagation: true
            };
            marker.marker = new InfoBox(markerOptions_2);      
            marker.marker.isHidden = false;      
            marker.marker.open(map, marker);
            markers.push(marker);
                    
            // action        
            google.maps.event.addListener(marker, "click", function (e) {
                var curMarker = this;

                $.each(markers, function (index, marker) {
                    // if marker is not the clicked marker, close the marker
                    if (marker !== curMarker) {
                        marker.infobox.close();
                        marker.infobox.isOpen = false;
                    }
                });

                if (curMarker.infobox.isOpen === false) {
                    curMarker.infobox.open(map, this);
                    curMarker.infobox.isOpen = true;
                    map.panTo(curMarker.getPosition());
                } else {
                    curMarker.infobox.close();
                    curMarker.infobox.isOpen = false;
                }

            });

    }

}


function HomeControl(controlDiv, map) {

    // Set CSS styles for the DIV containing the control
    // Setting padding to 5 px will offset the control
    // from the edge of the map.
    controlDiv.style.padding = '5px';

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.id = 'my_location';
    controlUI.style.backgroundColor = 'white';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '2px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.margin = '5px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'My Location';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '12px';
    controlText.style.paddingLeft = '4px';
    controlText.style.paddingRight = '4px';
    controlText.innerHTML = '<strong>My Location</strong>';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    google.maps.event.addDomListener(controlUI, 'click', function () {
        var myloc = new google.maps.Marker({
            clickable: false,
            icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
                    new google.maps.Size(22, 22),
                    new google.maps.Point(0, 18),
                    new google.maps.Point(11, 11)),
            shadow: null,
            zIndex: 999,
            map: map
        });

        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(function (pos) {
                var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                myloc.setPosition(me);

                // Zoom in
                var bounds = new google.maps.LatLngBounds();
                bounds.extend(me);
                map.fitBounds(bounds);
                var zoom = map.getZoom();
                map.setZoom(zoom > zoomOnMapSearch ? zoomOnMapSearch : zoom);
            }, function (error) {
                console.log(error);
            });
    });
}

function mapEdit() {
// location types.
    var placeSearch, autocomplete;

    if ($('#inputAddress').length) {
        autocomplete = new google.maps.places.Autocomplete(
                (document.getElementById('inputAddress')),
                {types: ['geocode']}
        );
    }

    /* [Edit property] */
    // If alredy selected
    var firstSet,timerMap ;
    if ($('#inputGps').length && $('#inputGps').val() != '')
    {
        savedGpsData = $('#inputGps').val().split(", ");

        $("#mapsAddress").gmap3({
            map: {
                options: {
                    center: [parseFloat(savedGpsData[0]), parseFloat(savedGpsData[1])],
                    zoom: 14,
                    mapTypeControl: false,
                            panControl: false,
                            zoomControl: false,
                            scaleControl: false,
                            streetViewControl: false,
                            rotateControl: false,
                            rotateControlOptions: false,
                            overviewMapControl: false,
                            OverviewMapControlOptions: false
                            }
            },
            marker: {
                values: [
                    {latLng: [parseFloat(savedGpsData[0]), parseFloat(savedGpsData[1])]},
                ],
                options: {
                    draggable: true
                },
                events: {
                    dragend: function (marker) {
                        if ($("#inputAddress").attr("readonly"))
                        {
                            return false;
                        } else
                        {
                            $('#inputGps').val(marker.getPosition().lat() + ', ' + marker.getPosition().lng());
                        }
                    }
                }}});

        firstSet = true;
    } else
    {
        $("#mapsAddress").gmap3({
            map: {
                options: {
                    center: [34.05843, -118.491046],
                    zoom: 12,
                    disableDefaultUI: true,
                    mapTypeControl: false,
                            panControl: false,
                            zoomControl: false,
                            scaleControl: false,
                            streetViewControl: false,
                            rotateControl: false,
                            rotateControlOptions: false,
                            overviewMapControl: false,
                            OverviewMapControlOptions: false
                                    },
                            },
            marker: {
                values: [
                    {latLng: [34.05843, -118.491046]},
                ],
                options: {
                    draggable: true,
                    icon: 'assets/img/markers/edit.png'
                },
                events: {
                    dragend: function (marker) {
                        if ($("#inputAddress").attr("readonly"))
                        {
                            return false;
                        } else
                        {
                            $('#inputGps').val(marker.getPosition().lat() + ', ' + marker.getPosition().lng());
                        }
                    }
                }}
        });

        firstSet = true;
    }

    $('#inputAddress').keyup(function (e) {
        clearTimeout(timerMap);
        timerMap = setTimeout(function () {

            $("#mapsAddress").gmap3({
                getlatlng: {
                    address: $('#inputAddress').val(),
                    callback: function (results) {
                        if (!results) {
                            return;
                        }

                        if (firstSet) {
                            $(this).gmap3({
                                clear: {
                                    name: ["marker"],
                                    last: true
                                }
                            });
                        }

                        // Add marker
                        $(this).gmap3({
                            marker: {
                                latLng: results[0].geometry.location,
                                options: {
                                    id: 'searchMarker',
                                    draggable: true
                                },
                                events: {
                                    dragend: function (marker) {
                                        if ($("#inputAddress").attr("readonly"))
                                        {
                                            return false;
                                        } else
                                        {
                                            $('#inputGps').val(marker.getPosition().lat() + ', ' + marker.getPosition().lng());
                                        }
                                    }
                                }
                            }
                        });

                        // Center map
                        $(this).gmap3('get').setCenter(results[0].geometry.location);

                        $('#inputGps').val(results[0].geometry.location.lat() + ', ' + results[0].geometry.location.lng());

                        firstSet = true;

                    }
                }
            });
        }, 2000);

    });
    /* [/Edit property] */
}