/// Leaflet Map Initialization
var map = L.map('map').setView([13.341254, -16.691788], 12);

// Leaflet Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Array of WMS Layers
 var wmsLayers = [
    createWMSLayer('gba_dataset', 'gba_dataset'),
    createWMSLayer('gba_lcr_1983_1993', 'gba_lcr_1983_1993'),
    createWMSLayer('gba_lcr_1993_2003', 'gba_lcr_1993_2003'),
    createWMSLayer('GBA_LCR_2003_2013', 'gba_lcr_2003_2013'),
    createWMSLayer('gba_lcr_2003_2013', 'gba_lcr_2013_2023'),
    createWMSLayer('banjul', 'banjul'),
    createWMSLayer('bjl_lcr_1983_1993', 'bjl_lcr_1983_1993'),
    createWMSLayer('bjl_lcr_1993_2003', 'bjl_lcr_1993_2003'),
    createWMSLayer('bjl_lcr_2003_2013', 'bjl_lcr_2003_2013'),
    createWMSLayer('bjl_lcr_2013_2023', 'bjl_lcr_2013_2023'),
    createWMSLayer('kanifing', 'kanifing'),
    createWMSLayer('kmc_lcr_1983_1993', 'kmc_lcr_1983_1993'),
    createWMSLayer('kmc_lcr_1993_2003', 'kmc_lcr_1993_2003'),
    createWMSLayer('kmc_lcr_2003_2013', 'kmc_lcr_2003_2013'),
    createWMSLayer('kmc_lcr_2013_2023', 'kmc_lcr_2013_2023'),
    createWMSLayer('kombo_north', 'kombo_north'),
    createWMSLayer('BJL_LCR_1993_2003', 'bjl_lcr_1993_2003'),
    createWMSLayer('BJL_LCR_2003_2013', 'bjl_lcr_2003_2013'),
    createWMSLayer('BJL_LCR_2013_2023', 'bjl_lcr_2013_2023'),
    createWMSLayer('Kanifing', 'kanifing'),
    createWMSLayer('Kanifing_Bild_Dens', 'kanifing_bild_dens'),
    createWMSLayer('kanifing_pop_density_2023', 'kanifing_pop_density_2023'),
    createWMSLayer('kmc_dwelling_density_2023', 'kmc_dwelling_density_2023'),
    createWMSLayer('KMC_LCR_1983_1993', 'kmc_lcr_1983_1993'),
    createWMSLayer('KMC_LCR_1993_2003', 'kmc_lcr_1993_2003'),
    createWMSLayer('KMC_LCR_2003_2013', 'kmc_lcr_2003_2013'),
    createWMSLayer('KMC_LCR_2013_2023', 'kmc_lcr_2013_2023'),
    createWMSLayer('Kombo_North', 'kombo_north'),
    createWMSLayer('kn_lcr_1983_1993', 'kn_lcr_1983_1993'),
    createWMSLayer('kn_lcr_1993_2003', 'kn_lcr_1993_2003'),
    createWMSLayer('kn_lcr_2003_2013', 'kn_lcr_2003_2013'),
    createWMSLayer('kn_lcr_2013_2023', 'kn_lcr_2013_2023'),
    createWMSLayer('kombo_central', 'kombo_central'),
    createWMSLayer('kc_lcr_1983_1993', 'kc_lcr_1983_1993'),
    createWMSLayer('kc_lcr_1993_2003', 'kc_lcr_1993_2003'),
    createWMSLayer('kc_lcr_2003_2013', 'kc_lcr_2003_2013'),
    createWMSLayer('kc_lcr_2013_2023', 'kc_lcr_2013_2023'),
    createWMSLayer('kombo_south', 'kombo_south'),
    createWMSLayer('ks_lcr_1983_1993', 'ks_lcr_1983_1993'),
    createWMSLayer('ks_lcr_1993_2003', 'ks_lcr_1993_2003'),
    createWMSLayer('ks_lcr_2003_2013', 'ks_lcr_2003_2013'),
    createWMSLayer('ks_lcr_2013_2023', 'ks_lcr_2013_2023'),
    createWMSLayer('major_roads', 'major_roads'),
    createWMSLayer('kombo_south_pop_density_2023', 'kombo_south_pop_density_2023'),
    createWMSLayer('kombo_south_pop_density_2013', 'kombo_south_pop_density_2013'),
    createWMSLayer('kombo_south_pop_density_2023', 'kombo_south_pop_density_2023'),
    createWMSLayer('kombo_south_builtup_extent_2023', 'kombo_south_builtup_extent_2023'),
    createWMSLayer('kombo_north_pop_density_2023', 'kombo_north_pop_density_2023'),
    createWMSLayer('kombo_north_pop_density_2013', 'kombo_north_pop_kombo_north_builtup_extent_2023density_2013'),
    createWMSLayer('kombo_north_builtup_extent_2023', 'ks_lcr_2003_2013'),
    createWMSLayer('kombo_north_builtup_extent_2013', 'kombo_north_builtup_extent_2013'),
    createWMSLayer('kombo_central', 'kombo_central'),
    createWMSLayer('kombo_central_pop_density_2013', 'kombo_central_pop_density_2013'),
    createWMSLayer('kombo_central_pop_density_2023', 'kombo_central_pop_density_2023'),
    createWMSLayer('kombo_central_builtup_extent_2023', 'kombo_central_builtup_extent_2023'),
    createWMSLayer('kombo_central_builtup_extent_2013', 'kombo_central_builtup_extent_2013'),
    createWMSLayer('kmc_builtup_extent-2023', 'kmc_builtup_extent-2023'),
    createWMSLayer('kmc_builtup_extent-2013', 'kmc_builtup_extent-2013'),
    createWMSLayer('kanifing_pop_density_2013', 'kanifing_pop_density_2013'),
    createWMSLayer('kanifing_pop_density_2023', 'kanifing_pop_density_2023'),
    createWMSLayer('gba_dwelling_density_2023', 'gba_dwelling_density_2023'),
    createWMSLayer('kombo_central', 'kombo_central'),
    createWMSLayer('banjul_pop_density_2023', 'banjul_pop_density_2023'),
    createWMSLayer('banjul_builtup_extent_2013', 'banjul_builtup_extent_2013'),
    createWMSLayer('banjul_builtup_extent_2023', 'banjul_builtup_extent_2023'),
    createWMSLayer('kc_dwelling_density_2023', 'kc_dwelling_density_2023'),
    createWMSLayer('banjul_dwelling_density_2023', 'banjul_dwelling_density_2023'),
    createWMSLayer('kmc_dwelling_density_2023', 'kmc_dwelling_density_2023'),
    createWMSLayer('kn_dwelling_density_2023', 'kn_dwelling_density_2023'),
    createWMSLayer('ks_dwelling_density_2023', 'ks_dwelling_density_2023'),
      // Add more layers as needed
    ];


// Layer Control
var layerControl = L.control.layers();
wmsLayers.forEach(function (layer) {
  layerControl.addOverlay(layer, layer.options.attribution);
});

// Add WMS Layers to the Map
wmsLayers.forEach(function (layer) {
  layer.addTo(map);
});

// Add Layer Control to the Map
layerControl.addTo(map);

// Chart.js Initialization for Each Layer
var chartOptions = {
  type: 'bar',  // Choose the chart type that fits your data
  data: {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [{
      label: 'Dataset Label',
      data: [10, 20, 30],  // Replace with your actual data
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// Chart.js Instances for Each Layer
var chartInstances = wmsLayers.map(function (layer) {
  // Note: Make sure you have unique IDs for each canvas element
  return new Chart(document.getElementById(layer.options.attribution + 'Chart').getContext('2d'), chartOptions);
});

// Function to Create WMS Layer
function createWMSLayer(layerName, layerId) {
  return L.tileLayer.wms('http://localhost:8085/geoserver/mastersthesis_2023/wms', {
    layers: layerId,
    format: 'image/png',
    transparent: true,
    attribution: layerName
  });
}
