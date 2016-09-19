L.mapbox.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImdQMzI4WjgifQ.d-Uyr7NBjrJVz9z82uk5Xg';

var map = L.mapbox.map('map', 'duncangraham.b134a19e', {
    tileSize: 5120,
    zoomControl: false,
    minZoom: 13,
    maxZoom: 16,
})
    .setView([48.95050194, 2.0497369], 13);

var getPxBounds = map.getPixelBounds;
map.getPixelBounds = function () {
    var bounds = getPxBounds.call(this);
    // ... extend the bounds
    bounds.min.x = bounds.min.x - 1000;
    bounds.min.y = bounds.min.y - 1000;
    bounds.max.x = bounds.max.x + 1000;
    bounds.max.y = bounds.max.y + 1000;
    return bounds;
};
var latlongData = {
    "type": "",
    "coordinates": [
        [
            2.394842,
            48.848940999999996
        ],
        [
            2.394261,
            48.848059
        ],
        [
            2.394568,
            48.848002
        ],
        [
            2.397007,
            48.848683
        ],
        [
            2.3969329999999998,
            48.848719
        ],
        [
            2.396618,
            48.847741
        ],
        [
            2.395646,
            48.847753
        ],
        [
            2.394742,
            2.394742
        ],
        [
            2.396192,
            48.847417
        ],
        [
         2.394261,
         48.848058
        ],
        [
         2.394519,
         48.848675
        ],
        [
         2.3958,
         48.849053
        ],
        [
         2.3954750000000002,
         48.849272
        ],
        [
         2.396889,
         48.849133
        ],
        [
         2.397375,
         48.848247
        ],
        [
         2.396617,
         48.847742
        ],
        [
         2.396928,
         48.847833
        ],
        [
         2.394953,
         48.847747
        ],
        [
         2.394842,
         48.848940999999996
        ],
        [
         2.394261,
         48.848059
        ],
        [
         2.394568,
         48.848002
        ],
        [
         2.397007,
         48.848683
        ],
        [
         2.3969329999999998,
         48.848719
        ],
        [
         2.396618,
         48.847741
        ],
        [
         2.395646,
         48.847753
        ],
        [
         2.394742,
         48.848976
        ],
        [
         2.396192,
         48.847417
        ],
        [
         2.394261,
         48.848058
        ],
        [
         2.394519,
         48.848675
        ],
        [
         2.3958,
         48.849053
        ],
        [
         2.3954750000000002,
         48.849272
        ],
        [
         2.396889,
         48.849133
        ],
        [
         2.397375,
         48.848247
        ],
        [
         2.396617,
         48.847742
        ],
        [
         2.396928,
         48.847833
        ],
        [
         2.394953,
         48.847747
        ],
        [
         2.394842,
         48.848940999999996
        ],
        [
         2.394261,
         48.848059
        ],
        [
         2.394568,
         48.848002
        ],
        [
         2.397007,
         48.848683
        ],
        [
         2.3969329999999998,
         48.848719
        ],
        [
         2.396618,
         48.847741
        ],
        [
         2.395646,
         48.847753
        ],
        [
         2.394742,
         48.848976
        ],
        [
         2.396192,
         48.847417
        ],
        [
         2.394261,
         48.848058
        ],
        [
         2.394519,
         48.848675
        ],
        [
         2.3958,
         48.849053
        ]/*,
        [
         2.3954750000000002,
         48.849272
        ],
        [
         2.396889,
         48.849133
        ],
        [
         2.397375,
         48.848247
        ],
        [
         2.396617,
         48.847742
        ],
        [
         2.396928,
         48.847833
        ],
        [
         2.394953,
         48.847747
        ],
        [
         2.394842,
         48.848940999999996
        ],
        [
         2.394261,
         48.848059
        ],
        [
         2.394568,
         48.848002
        ],
        [
         2.397007,
         48.848683
        ],
        [
         2.3969329999999998,
         48.848719
        ],
        [
         2.396618,
         48.847741
        ],
        [
         2.395646,
         48.847753
        ],
        [
         2.394742,
            38.8971
        ],
        [
            -77.08484,
            38.89687
        ],
        [
            -77.08469,
            38.89671
        ],
        [
            -77.08419,
            38.89688
        ],
        [
            -77.08369,
            38.89705
        ],
        [
            -77.08315,
            38.89716
        ],
        [
            -77.08282,
            38.89725
        ],
        [
            -77.08248,
            38.89731
        ],
        [
            -77.08156,
            38.89731
        ],
        [
            -77.08099,
            38.89738
        ],
        [
            -77.08075,
            38.89746
        ],
        [
            -77.08051,
            38.89754
        ],
        [
            -77.07984,
            38.89776
        ],
        [
            -77.07954,
            38.8979
        ],
        [
            -77.07917,
            38.89811
        ],
        [
            -77.07883,
            38.89827
        ],
        [
            -77.07798,
            38.89857
        ],
        [
            -77.07709,
            38.89882
        ],
        [
            -77.07707,
            38.89883
        ],
        [
            -77.077,
            38.89885
        ],
        [
            -77.07623,
            38.89902
        ],
        [
            -77.0754,
            38.89908
        ],
        [
            -77.07457,
            38.89915
        ],
        [
            -77.07362,
            38.89919
        ],
        [
            -77.07354,
            38.89919
        ],
        [
            -77.07267,
            38.89918
        ],
        [
            -77.07255,
            38.89918
        ],
        [
            -77.07245,
            38.89918
        ],
        [
            -77.0721,
            38.89915
        ],
        [
            -77.07202,
            38.89914
        ],
        [
            -77.07191,
            38.89918
        ],
        [
            -77.07185,
            38.89924
        ],
        [
            -77.07181,
            38.8993
        ],
        [
            -77.07179,
            38.89936
        ],
        [
            -77.07178,
            38.89939
        ],
        [
            -77.07178,
            38.89948
        ],
        [
            -77.07181,
            38.89959
        ],
        [
            -77.0718,
            38.89964
        ],
        [
            -77.07177,
            38.89976
        ],
        [
            -77.07171,
            38.89984
        ],
        [
            -77.07165,
            38.8999
        ],
        [
            -77.07157,
            38.89995
        ],
        [
            -77.07148,
            38.90002
        ],
        [
            -77.07141,
            38.90006
        ],
        [
            -77.07135,
            38.90007
        ],
        [
            -77.0713,
            38.90008
        ],
        [
            -77.07124,
            38.9001
        ],
        [
            -77.07118,
            38.90014
        ],
        [
            -77.07114,
            38.90018
        ],
        [
            -77.0711,
            38.9002
        ],
        [
            -77.07108,
            38.90021
        ],
        [
            -77.07103,
            38.90028
        ],
        [
            -77.07098,
            38.90033
        ],
        [
            -77.07095,
            38.90037
        ],
        [
            -77.07092,
            38.90042
        ],
        [
            -77.07084,
            38.90057
        ],
        [
            -77.0699,
            38.90255
        ],
        [
            -77.0689,
            38.90475
        ],
        [
            -77.06888,
            38.90483
        ],
        [
            -77.06888,
            38.90486
        ],
        [
            -77.06887,
            38.90489
        ],
        [
            -77.06884,
            38.90494
        ],
        [
            -77.0688,
            38.90505
        ],
        [
            -77.06864,
            38.90506
        ],
        [
            -77.06783,
            38.90507
        ],
        [
            -77.06782,
            38.90498
        ],
        [
            -77.06781,
            38.90465
        ],
        [
            -77.06781,
            38.90455
        ],
        [
            -77.06802,
            38.90453
        ],
        [
            -77.06802,
            38.90451
        ],
        [
            -77.06783,
            38.90452
        ],
        [
            -77.06766,
            38.90451
        ],
        [
            -77.06732,
            38.90447
        ],
        [
            -77.06608,
            38.90432
        ],
        [
            -77.06595,
            38.9043
        ],
        [
            -77.06537,
            38.90431
        ],
        [
            -77.06512,
            38.90431
        ],
        [
            -77.06484,
            38.90432
        ],
        [
            -77.06374,
            38.90434
        ],
        [
            -77.0635,
            38.90434
        ],
        [
            -77.06326,
            38.90433
        ],
        [
            -77.06117,
            38.90428
        ],
        [
            -77.0603,
            38.90426
        ],
        [
            -77.06016,
            38.90426
        ],
        [
            -77.06007,
            38.90426
        ],
        [
            -77.05968,
            38.90425
        ],
        [
            -77.05954,
            38.90423
        ],
        [
            -77.05925,
            38.90418
        ],
        [
            -77.05914,
            38.90417
        ],
        [
            -77.05907,
            38.90417
        ],
        [
            -77.05863,
            38.90413
        ],
        [
            -77.05816,
            38.90409
        ],
        [
            -77.05809,
            38.90408
        ],
        [
            -77.058,
            38.90408
        ],
        [
            -77.05763,
            38.90408
        ],
        [
            -77.05713,
            38.90406
        ],
        [
            -77.05689,
            38.90404
        ],
        [
            -77.05671,
            38.90405
        ],
        [
            -77.05672,
            38.90416
        ],
        [
            -77.05673,
            38.90421
        ],
        [
            -77.0568,
            38.90419
        ],
        [
            -77.05686,
            38.9042
        ],
        [
            -77.05692,
            38.90423
        ],
        [
            -77.05696,
            38.90428
        ],
        [
            -77.05698,
            38.90433
        ],
        [
            -77.05697,
            38.90439
        ],
        [
            -77.05694,
            38.90449
        ],
        [
            -77.05691,
            38.90458
        ],
        [
            -77.05688,
            38.90462
        ],
        [
            -77.05683,
            38.90466
        ],
        [
            -77.05677,
            38.90469
        ],
        [
            -77.05669,
            38.9047
        ],
        [
            -77.05665,
            38.90471
        ],
        [
            -77.0566,
            38.90479
        ],
        [
            -77.0556,
            38.90445
        ],
        [
            -77.05544,
            38.9044
        ],
        [
            -77.05473,
            38.90415
        ],
        [
            -77.05385,
            38.90384
        ],
        [
            -77.0536,
            38.90375
        ],
        [
            -77.05331,
            38.90365
        ],
        [
            -77.05332,
            38.90376
        ],
        [
            -77.05281,
            38.90376
        ],
        [
            -77.05262,
            38.90376
        ],
        [
            -77.05238,
            38.90376
        ],
        [
            -77.05207,
            38.90376
        ],
        [
            -77.05141,
            38.90376
        ],
        [
            -77.05011,
            38.90377
        ],
        [
            -77.05005,
            38.90377
        ],
        [
            -77.0491,
            38.90378
        ],
        [
            -77.04865,
            38.90379
        ],
        [
            -77.04832,
            38.90378
        ],
        [
            -77.04787,
            38.90379
        ],
        [
            -77.04748,
            38.90379
        ],
        [
            -77.04683,
            38.90379
        ],
        [
            -77.04665,
            38.90379
        ],
        [
            -77.04617,
            38.90379
        ],
        [
            -77.04561,
            38.90379
        ],
        [
            -77.04531,
            38.90379
        ],
        [
            -77.0449,
            38.90379
        ],
        [
            -77.04457,
            38.9038
        ],
        [
            -77.04403,
            38.90379
        ],
        [
            -77.04346,
            38.90379
        ],
        [
            -77.0417,
            38.90379
        ],
        [
            -77.04011,
            38.90378
        ],
        [
            -77.03995,
            38.90378
        ],
        [
            -77.03944,
            38.90378
        ],
        [
            -77.03852,
            38.90378
        ],
        [
            -77.03654,
            38.90378
        ],
        [
            -77.03468,
            38.90378
        ],
        [
            -77.03305,
            38.90378
        ],
        [
            -77.03302,
            38.90384
        ],
        [
            -77.03295,
            38.90395
        ],
        [
            -77.03276,
            38.90428
        ],
        [
            -77.03269,
            38.9044
        ],
        [
            -77.03249,
            38.90473
        ],
        [
            -77.03242,
            38.90482
        ],
        [
            -77.03233,
            38.90494
        ],
        [
            -77.0323,
            38.90497
        ],
        [
            -77.03225,
            38.90499
        ],
        [
            -77.03217,
            38.90501
        ],
        [
            -77.03211,
            38.90502
        ],
        [
            -77.03206,
            38.90504
        ],
        [
            -77.03199,
            38.90505
        ],
        [
            -77.03193,
            38.90508
        ],
        [
            -77.03191,
            38.90512
        ],
        [
            -77.03189,
            38.90519
        ],
        [
            -77.03187,
            38.90523
        ],
        [
            -77.03186,
            38.90524
        ],
        [
            -77.03183,
            38.90528
        ],
        [
            -77.03179,
            38.90531
        ],
        [
            -77.03175,
            38.90534
        ],
        [
            -77.03172,
            38.90536
        ],
        [
            -77.03161,
            38.90543
        ],
        [
            -77.03157,
            38.90548
        ],
        [
            -77.03153,
            38.90555
        ],
        [
            -77.03152,
            38.90558
        ],
        [
            -77.03151,
            38.90562
        ],
        [
            -77.03151,
            38.90568
        ],
        [
            -77.03154,
            38.90578
        ],
        [
            -77.03157,
            38.90585
        ],
        [
            -77.03167,
            38.906
        ],
        [
            -77.03165,
            38.90606
        ],
        [
            -77.03165,
            38.90607
        ],
        [
            -77.03163,
            38.90615
        ],
        [
            -77.03163,
            38.90615
        ],
        [
            -77.03156,
            38.90626
        ],
        [
            -77.0315,
            38.90637
        ],
        [
            -77.03147,
            38.90646
        ],
        [
            -77.03141,
            38.90658
        ],
        [
            -77.03118,
            38.90697
        ],
        [
            -77.03105,
            38.90718
        ],
        [
            -77.03102,
            38.90724
        ],
        [
            -77.03097,
            38.90724
        ],
        [
            -77.03088,
            38.90724
        ],
        [
            -77.02977,
            38.90724
        ],
        [
            -77.02963,
            38.90724
        ],
        [
            -77.02945,
            38.90724
        ],
        [
            -77.02818,
            38.90724
        ],
        [
            -77.02809,
            38.90724
        ],
        [
            -77.028,
            38.90724
        ],
        [
            -77.02718,
            38.90724
        ],
        [
            -77.02703,
            38.90724
        ],
        [
            -77.0269,
            38.90724
        ],
        [
            -77.02607,
            38.90724
        ],
        [
            -77.02599,
            38.90724
        ],
        [
            -77.02499,
            38.90724
        ],
        [
            -77.02397,
            38.90725
        ],
        [
            -77.02348,
            38.90724
        ],
        [
            -77.02295,
            38.90724
        ],
        [
            -77.02243,
            38.90724
        ],
        [
            -77.02206,
            38.90724
        ],
        [
            -77.02192,
            38.90724
        ],
        [
            -77.0218,
            38.90724
        ],
        [
            -77.02103,
            38.90723
        ],
        [
            -77.02078,
            38.90724
        ],
        [
            -77.02033,
            38.90724
        ],
        [
            -77.02019,
            38.90724
        ],
        [
            -77.0199,
            38.90724
        ],
        [
            -77.01903,
            38.90724
        ],
        [
            -77.01894,
            38.90724
        ],
        [
            -77.01884,
            38.90724
        ],
        [
            -77.0174,
            38.90724
        ],
        [
            -77.01618,
            38.90724
        ],
        [
            -77.01556,
            38.90724
        ],
        [
            -77.01544,
            38.90724
        ],
        [
            -77.0153,
            38.90724
        ],
        [
            -77.01516,
            38.90724
        ],
        [
            -77.01366,
            38.90724
        ],
        [
            -77.01312,
            38.90724
        ],
        [
            -77.01225,
            38.90724
        ],
        [
            -77.01217,
            38.90724
        ],
        [
            -77.01207,
            38.90724
        ],
        [
            -77.01148,
            38.90724
        ],
        [
            -77.01092,
            38.90724
        ],
        [
            -77.01024,
            38.90725
        ],
        [
            -77.0096,
            38.90723
        ],
        [
            -77.00932,
            38.90732
        ],
        [
            -77.00919,
            38.90736
        ],
        [
            -77.00919,
            38.90725
        ],
        [
            -77.00896,
            38.90723
        ],
        [
            -77.00891,
            38.90723
        ],
        [
            -77.00845,
            38.90723
        ],
        [
            -77.00589,
            38.90724
        ],
        [
            -77.00352,
            38.90724
        ],
        [
            -77.00353,
            38.90844
        ],
        [
            -77.00202,
            38.9078
        ],
        [
            -77.00194,
            38.90776
        ],
        [
            -77.00138,
            38.90752
        ],
        [
            -77.00079,
            38.90728
        ],
        [
            -77.00048,
            38.90715
        ],
        [
            -76.99999,
            38.90787
        ],
        [
            -76.99983,
            38.9078
        ],
        [
            -76.99894,
            38.90743
        ],
        [
            -76.99784,
            38.90695
        ],
        [
            -76.99712,
            38.90793
        ],
        [
            -76.99704,
            38.90803
        ]*/
    ]
};
var isEmbed = location.search;
isEmbed = isEmbed.slice(1);

new L.Control.Zoom({position: 'topright'}).addTo(map);
map.scrollWheelZoom.disable();

var person = L.mapbox.marker.icon({
    "marker-color": "#30a07A",
    "marker-symbol": "pitch",
    "marker-size": "large"
})
var startMarker = L.marker(new L.LatLng(38.9695527321, -77.1114063), {
    icon: person,
    draggable: true,
    zIndexOffset: 999
});

var endMarker = L.marker(new L.LatLng(38.93150546, -76.9998264), {
    icon: L.mapbox.marker.icon({
        "marker-color": "#30a07A",
        "marker-symbol": "star",
        "marker-size": "large"
    }),
    draggable: true,
    zIndexOffset: 999
});
startMarker.addTo(map);
endMarker.addTo(map);


var start,
    destination,
    nearestStart,
    nearestEnd,
    resampledRoute;
var angle = 0;
var xdrag = 0;
var isDown = false;
var xpos = 0;

//map rotation

$('body').on('mousedown', '#maprotor.tilted',
    function (e) {
        xpos = e.pageX;
        window.isDown = true;
    })
    .on('mousemove', '#maprotor.tilted', function (e) {
        if (isDown) {
            xdrag = (xpos - e.pageX) / 4;
            $('#map').attr('style', '-webkit-transform:rotateZ(' + (angle + xdrag) % 360 + 'deg)');
            $('.elevmarker').attr('style', '-webkit-transform:rotateX(90deg) rotateY(' + (angle + xdrag) * (-1) % 360 + 'deg)')
        }
    })
    .on('mouseup', '#maprotor.tilted', function () {
        isDown = false;
        angle = angle + xdrag;
    });


/*function tiltMap() {
    map.fitBounds(map.featureLayer.setGeoJSON(turf.linestring(resampledRoute)).getBounds(), {
        paddingTopLeft: [150, 50],
        paddingBottomRight: [150, 50]
    });
    //rotate map
    $('#maprotor, .modal').toggleClass('tilted');

    //disable panning
    map.dragging.disable();
}
function restoreMap() {
    map.fitBounds(map.featureLayer.setGeoJSON(turf.linestring(resampledRoute)).getBounds(), {
        paddingTopLeft: [150, 50],
        paddingBottomRight: [150, 50]
    });
    //rotate map
    $('#maprotor, .modal').toggleClass('tilted');
    ;

    //disable panning
    map.dragging.disable();
}*/
$.get('stations.geojson', function (data) {
    //test if data is JSON
    if (typeof data == 'object') {
        var fc = data;
    } else {
        var fc = JSON.parse(data);
    }
    var inactiveStation =
    {
        "iconUrl": "station_inactive.svg",
        "iconSize": [5, 5],
        "className": "inactivestation"
    };
    console.log(fc.features);
    fc.features
        .forEach(function (n) {
            var coords = n.geometry.coordinates;
            console.log(n.geometry.coordinates);
            L.marker([coords[1], coords[0]], {icon: L.icon(inactiveStation)}).addTo(map);
        });

    // find nearest, add to map
    function updateStations() {
        $('path').remove();
        $('.station, .bikeduration').not('.leaflet-marker-draggable').remove();
        start = startMarker.getLatLng();
        var startPoint = turf.point([start.lng, start.lat]);
        destination = endMarker.getLatLng();
        var endPoint = turf.point([destination.lng, destination.lat]);


        var bikeIcon = {
            "iconUrl": "station.svg",
            "iconSize": [20, 20],
            "popupAnchor": [0, -15],
            "className": "station"
        };

        nearestStart = turf.nearest(startPoint, fc);
        nearestStart.properties["title"] = '<strong>Grab a bike at</strong>' + nearestStart.properties["name"] + '<br>Bikes: ' + nearestStart.properties["nbBikes"] + ' Empty Docks: ' + nearestStart.properties["nbEmptyDocks"];
        nearestStart.properties.icon = bikeIcon;

        nearestEnd = turf.nearest(endPoint, fc);
        nearestEnd.properties["marker-color"] = "C73E3E";
        nearestEnd.properties["title"] = '<strong>Drop off your bike at</strong>' + nearestEnd.properties["name"] + '<br>Bikes: ' + nearestEnd.properties["nbBikes"] + ' Empty Docks: ' + nearestEnd.properties["nbEmptyDocks"];
        nearestStart.properties.icon = bikeIcon;


        var end_station =
            L.mapbox
                .featureLayer()
                .on('layeradd', function (e) {
                    var marker = e.layer,
                        feature = marker.feature;
                    marker.setIcon(L.icon(bikeIcon))
                })
                .setGeoJSON(nearestEnd)
                .addTo(map)
                .on('mouseover', function (e) {
                    e.layer.openPopup();
                })
                .on('mouseout', function (e) {
                    e.layer.closePopup();
                });

        var start_station =
            L.mapbox
                .featureLayer()
                .on('layeradd', function (e) {
                    var marker = e.layer,
                        feature = marker.feature;
                    marker.setIcon(L.icon(bikeIcon));
                })
                .setGeoJSON(nearestStart)
                .addTo(map)
                .on('mouseover', function (e) {
                    e.layer.openPopup();
                })
                .on('mouseout', function (e) {
                    e.layer.closePopup();
                });
    }


    startMarker
        .on('drag', function () {
            updateStations()
        })
        .on('dragend', function () {
            getRouteInfo(nearestStart, nearestEnd)
        });
    endMarker
        .on('drag', function () {
            updateStations()
        })
        .on('dragend', function () {
            getRouteInfo(nearestStart, nearestEnd)
        });

    updateStations();
    getRouteInfo(nearestStart, nearestEnd);
    map.setZoom(13);

    var elevProfile = []
    var queryPoints = []

    function getRouteInfo(origin, goal) {
        var startCoord = origin.geometry.coordinates.toString();
        var endCoord = goal.geometry.coordinates.toString();
        var directionsURL = 'https://api.tiles.mapbox.com/v4/directions/mapbox.cycling/' + startCoord + ';' + endCoord + '.json?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImdQMzI4WjgifQ.d-Uyr7NBjrJVz9z82uk5Xg';
        //bike route
        $.get(directionsURL, function (data) {
            var route = latlongData;
            console.log(JSON.stringify(latlongData));
            map.featureLayer.setGeoJSON(turf.linestring(route.coordinates));

            //resample the line path to have regularly-spaced intervals for elevation query
            var distance = data.routes[0].distance * 0.000621371192;
            distance = distance.toFixed(2);
            $('#routedist').text(distance);
            var distance = data.routes[0].distance;
            var sampleQuant = Math.min(distance / 50, 300);
            var incrementDist = distance / sampleQuant;
            resampledRoute = [];

            for (var i = 0; i < sampleQuant; i++) {
                resampledRoute.push(turf.along(turf.linestring(route.coordinates), incrementDist * i * 0.001, 'kilometers')['geometry']['coordinates'])
            }

            map.fitBounds(map.featureLayer.setGeoJSON(turf.linestring(resampledRoute)).getBounds(), {
                paddingTopLeft: [150, 50],
                paddingBottomRight: [150, 50]
            });
            //rotate map in elevation mode
            $('#maprotor, .modal').toggleClass('tilted');

            //disable panning
            /*map.dragging.disable();*/

            window.setTimeout(function () {
                $('path').css('stroke-dashoffset', 0)
            }, 10);
            //add duration label
            var durationTime = Math.round(data.routes[0].duration / 60);
            var durationlabel = L.divIcon({
                className: '',
                html: '<div class="bikeduration">' + durationTime + ' min</strong>'
            });

            var middlepos = resampledRoute[Math.round(resampledRoute.length / 2)];
            L.marker([middlepos[1], middlepos[0]], {icon: durationlabel}).addTo(map);
            //get surface deets
            makeSurfaceCall(resampledRoute, incrementDist);


        });
        //route from origin to first bike station
        directionsURL = 'https://api.tiles.mapbox.com/v4/directions/mapbox.walking/' + start.lng + ',' + start.lat + ';' + startCoord + '.json?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImdQMzI4WjgifQ.d-Uyr7NBjrJVz9z82uk5Xg';

        $.get(directionsURL, function (data) {
            var route = latlongData;
            route = route.coordinates.map(function (n) {
                return [n[1], n[0]]
            });
            var walkTo = L.polyline(route, {color: 'red'}).addTo(map);
        });

        //route from second station to destination
        directionsURL = 'https://api.tiles.mapbox.com/v4/directions/mapbox.walking/' + endCoord + ';' + destination.lng + ',' + destination.lat + '.json?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImdQMzI4WjgifQ.d-Uyr7NBjrJVz9z82uk5Xg';
        $.get(directionsURL, function (data) {
            var route = latlongData;
            route = route.coordinates.map(function (n) {
                return [n[1], n[0]]
            });
            var walkFrom = L.polyline(route, {color: 'red'}).addTo(map);
        });
    }

    function makeSurfaceCall(points, incrementDist) {
        $('.elevations').remove();
        var pointString = '';
        points = points.map(function (n) {
            return [parseFloat(n[0]).toFixed(6), parseFloat(n[1]).toFixed(6)]
        });
        points.forEach(function (arr) {
            pointString = pointString + arr.toString() + ';';
        })
        pointString = pointString.slice(0, -1);

        var surfaceURL = 'https://api.tiles.mapbox.com/v4/surface/mapbox.mapbox-terrain-v2.json?layer=contour&interpolate=true&fields=ele&points=' + pointString + '&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImdQMzI4WjgifQ.d-Uyr7NBjrJVz9z82uk5Xg'
        $.get(surfaceURL, function (data) {
            //create elevation profile
            data.results.forEach(function (n, i) {
                var pointGrade = '';
                if (i > 0 && i < data.results.length - 1) {
                    prevPoint = data.results[i - 1].ele;
                    nextPoint = data.results[i + 1].ele;

                    pointGrade = '(' + (100 * 0.5 * ((n.ele - prevPoint) + (nextPoint - n.ele)) / incrementDist).toFixed(0) + '% grade)';
                }
                var myIcon = L.divIcon({
                    className: 'elevations',
                    html: '<div class="elevmarker"><div class="markercircle bottomcap"></div><div class="markerline" style="height:' + n.ele * 2 + 'px">' + '</div><div class="markercircle"></div><div class="elevfigure"><strong>' + (n.ele * 3.28).toFixed(0) + ' ft </strong><span style="font-size:0.9em">' + pointGrade + '</span></div>'
                });
                L.marker([n.latlng.lat, n.latlng.lng], {icon: myIcon}).addTo(map)
            })
        })
    }
});