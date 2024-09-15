
let mapToken = mapToken;
console.log(mapToken);
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    //choose from mapbox's core styles or make your own style with mapbox studio
    style: "mapbox://styles/mapbox/streets-v12", //style URL
    center: listing.geometry.coordinates,//starting position [lng, lat]
    zoom: 8// starting zoom
});
 

const marker = new mapboxgl.Marker({color: "red"}) 
   .setLngLat(listing.geometry.coordinates)//Listing.geometry.coordinates
   .setPopup(
    new mapboxgl.Popup({ offset:  25}).setHTML(
        `<h4>${listing.title}</h4><p>exact Location will be provided after booking</p>`
    )
   )
   .addTo(map);

