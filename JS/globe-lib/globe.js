am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("globe");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create the map chart
// https://www.amcharts.com/docs/v5/charts/map-chart/
var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "rotateX",
  panY: "rotateY",
  projection: am5map.geoOrthographic(),
  paddingBottom: 20,
  paddingTop: 20,
  paddingLeft: 20,
  paddingRight: 20
}));


// Create main polygon series for countries
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_worldLow
}));

polygonSeries.mapPolygons.template.setAll({
  tooltipText: "{name}",
  toggleKey: "active",
  interactive: true,
  templateField: "polygonSettings",
  fill: am5.color('rgb(80,80,80)'),
  strokeWidth: 0.9,
  stroke: root.interfaceColors.get("background")
});

polygonSeries.mapPolygons.template.states.create("hover", {
//  fill: root.interfaceColors.get("primaryButtonHover")
  fill: am5.color('rgb(227,42,47)')
});
polygonSeries.data.setAll([{
  id: "VN",
  polygonSettings: {
    fill: am5.color('rgb(227,42,47)')
  }
}]);


// Create series for background fill
// https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
var backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
backgroundSeries.mapPolygons.template.setAll({
  //fill: root.interfaceColors.get("alternativeBackground"),
  fill: am5.color('rgb(250,250,250)'),
  fillOpacity: 0,
  strokeOpacity: 0
});
backgroundSeries.data.push({
  geometry: am5map.getGeoRectangle(90, 180, -90, -180)
});


// Create graticule series
// https://www.amcharts.com/docs/v5/charts/map-chart/graticule-series/
var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
graticuleSeries.mapLines.template.setAll({ strokeOpacity: 0.0, stroke: root.interfaceColors.get("alternativeBackground") })


// Rotate animation
chart.animate({
  key: "rotationX",
  from: 0,
  to: 360,
  duration: 36000,
  loops: Infinity
});


// Make stuff animate on load
chart.appear(1000, 100);

});

