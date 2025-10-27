mapboxgl.accessToken = 'pk.eyJ1IjoibGlseW1jbGF1Z2hsaW4iLCJhIjoiY21oOXI4N3ExMWc2dDJqb2V6Nm53eXUwdyJ9.YkGW8WX1KCrUx_xP5vk3JA';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/lilymclaughlin/cmh9ru6wy000201so6gz0h5fc', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });