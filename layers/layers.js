ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5048").setExtent([292736.208986, 6614231.843921, 443037.673016, 6709308.906394]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Countofflyingsquirrelobservations18532024_1 = new ol.format.GeoJSON();
var features_Countofflyingsquirrelobservations18532024_1 = format_Countofflyingsquirrelobservations18532024_1.readFeatures(json_Countofflyingsquirrelobservations18532024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5048'});
var jsonSource_Countofflyingsquirrelobservations18532024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countofflyingsquirrelobservations18532024_1.addFeatures(features_Countofflyingsquirrelobservations18532024_1);
var lyr_Countofflyingsquirrelobservations18532024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countofflyingsquirrelobservations18532024_1, 
                style: style_Countofflyingsquirrelobservations18532024_1,
                popuplayertitle: 'Count of flying squirrel observations (1853-2024)',
                interactive: true,
    title: 'Count of flying squirrel observations (1853-2024)<br />\
    <img src="styles/legend/Countofflyingsquirrelobservations18532024_1_0.png" /> 1 - 7<br />\
    <img src="styles/legend/Countofflyingsquirrelobservations18532024_1_1.png" /> 7 - 31<br />\
    <img src="styles/legend/Countofflyingsquirrelobservations18532024_1_2.png" /> 31 - 70<br />\
    <img src="styles/legend/Countofflyingsquirrelobservations18532024_1_3.png" /> 70 - 117<br />\
    <img src="styles/legend/Countofflyingsquirrelobservations18532024_1_4.png" /> 117 - 170<br />\
    <img src="styles/legend/Countofflyingsquirrelobservations18532024_1_5.png" /> 170 - 287<br />\
    <img src="styles/legend/Countofflyingsquirrelobservations18532024_1_6.png" /> 287 - 482<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Countofflyingsquirrelobservations18532024_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Countofflyingsquirrelobservations18532024_1];
lyr_Countofflyingsquirrelobservations18532024_1.set('fieldAliases', {'left': 'left', 'bottom': 'bottom', 'right': 'right', 'top': 'top', 'Count': 'Count', });
lyr_Countofflyingsquirrelobservations18532024_1.set('fieldImages', {'left': 'TextEdit', 'bottom': 'TextEdit', 'right': 'TextEdit', 'top': 'TextEdit', 'Count': 'TextEdit', });
lyr_Countofflyingsquirrelobservations18532024_1.set('fieldLabels', {'left': 'hidden field', 'bottom': 'hidden field', 'right': 'hidden field', 'top': 'hidden field', 'Count': 'no label', });
lyr_Countofflyingsquirrelobservations18532024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});