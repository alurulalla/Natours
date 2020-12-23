export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWx1cnVtdXJhbGlrcmlzaG5hOSIsImEiOiJja2lvZ3I0ZXYxYXIwMnFsYmszNHB6aDczIn0.SWa3_GpXGzdK3fuQpZ8UEQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alurumuralikrishna9/ckiogzmvj0bhl17nq8i778oqg',
    scrollZoom: false,
    //   center: [-118.553222, 34.208899],
    //   zoom: 10,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    // ADD Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add Popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
