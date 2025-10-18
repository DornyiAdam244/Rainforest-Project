<script setup>
import rainforests from '../data/rainforests.json'

setTimeout(() => { /* Hotfix to make sure the map component is loaded before running the code */
    var map = L.map('map').setView([-3, -60], 5);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    rainforests.forEach(rf => {
        L.circle(rf.coords, {
            color: '#228B22',
            fillColor: '#228B22',
            fillOpacity: 0.4,
            radius: rf.radius
        }).addTo(map).bindPopup(rf.name);
    });
}, 1);

</script>

<template>
    <div id="map"></div>
</template>

<style scoped>
#map {
    height: 500px;
}
</style>