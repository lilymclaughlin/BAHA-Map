mapboxgl.accessToken = 'pk.eyJ1IjoibGlseW1jbGF1Z2hsaW4iLCJhIjoiY21oOXI4N3ExMWc2dDJqb2V6Nm53eXUwdyJ9.YkGW8WX1KCrUx_xP5vk3JA';
const map = new mapboxgl.Map({
        container: 'map', // this is the container ID that we set in the HTML
        style: 'mapbox://styles/lilymclaughlin/cmh9ru6wy000201so6gz0h5fc', // Your Style URL goes here
        center: [-122.2687, 37.8715], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
        zoom: 12 // starting zoom, again you can choose the level you'd like.
    });

map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/lilymclaughlin/BAHA-Map/refs/heads/main/data/183data.geojson'
    });

    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#3d2e2e',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

    // Add click event for popups
        map.on('click', 'points-layer', (e) => {
            // Copy coordinates array
            const coordinates = e.features[0].geometry.coordinates.slice();
            const properties = e.features[0].properties;

            // Create popup content using the actual data properties
            const popupContent = `
                <div>
                    <h3>${properties.Landmark}</h3>
                    <p><strong>Address:</strong> ${properties.Address}</p>
                    <p><strong>Architect + Date:</strong> ${properties.Architect_Date}</p>
                    <p><strong>Designated:</strong> ${properties.Designated}</p>
                    ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                    ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
                </div>
            `;

            new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(popupContent)
                        .addTo(map);
          });

          // Change cursor to pointer when hovering over points
          map.on('mouseenter', 'points-layer', () => {
            map.getCanvas().style.cursor = 'pointer';
        });
    
        // Change cursor back when leaving points
        map.on('mouseleave', 'points-layer', () => {
            map.getCanvas().style.cursor = '';
        });

    });

