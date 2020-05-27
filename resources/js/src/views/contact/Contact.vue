<template>
    <div class="container">
    <vx-card no-shadow>
        <!-- ABOUT CARD -->
        <vx-card title="Get in touch with us" class="mb-2">
            <div class="vx-row">
                <div class="vx-col lg:w-1/4 w-full">
                    <!-- OTEHR DATA -->
                    <div class="mt-5">
                        <h6>Address:</h6>
                        Banoy Village <br>
                        Tuek Thla Commune <br>
                        Serei Saophoan City <br>
                        Banteay Meanchey Province <br>
                        Postal Code: 01252 <br>
                        Cambodia
                    </div>
                </div>
                <div class="vx-col lg:w-1/4 w-full">
                    <div class="mt-5">
                        <h6>Email:</h6>
                        <p>contact@mcu.edu.kh</p>
                    </div>
                    <div class="mt-5">
                        <h6>Tell:</h6>
                        <p>Rector: 012 921 976</p>
                        <p>Administration: 017 868 626</p>
                        <p>Academic Office: 012 240 954</p>
                        <p>International Affair: 012 696 037</p>
                    </div>

                    <div class="mt-5">
                        <h6>Website:</h6>
                        <p>www.mcu.edu.kh</p>
                    </div>

                    <div class="social-links flex mt-4">
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="FacebookIcon"></feather-icon>
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="YoutubeIcon"></feather-icon>
                    </div>
                </div>
            </div>
        </vx-card>
        <vx-card title="Terrain View">
            <GmapMap
                    :center="center"
                    :zoom="16"
                    map-type-id="terrain"
                    style="width: 100%; height: 600px"
            >
                <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                />
            </GmapMap>
        </vx-card>
        <vx-card title="Panorama View" class="mt-3">
            <h6 class="mb-2">Big thanks to <a href="https://maps.google.com/maps/contrib/102744503247890278791/photos">&copy;Sophat CHY</a></h6>
            <gmap-street-view-panorama class="pano" :position="{lat: 13.58001715617746, lng: 102.9280132295946}"
                                       :pov="pov" :zoom="0" @pano_changed="updatePano" @pov_changed="updatePov" style="height: 600px; width: 100%">
            </gmap-street-view-panorama>
        </vx-card>
    </vx-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                center: { lat: 13.5798293, lng: 102.9284086 },
                markers: [
                    { position: { lat: 13.5798293, lng: 102.9284086 } },
                    { position: { lat: 13.578997, lng: 102.930324 } },
                    { position: { lat: 13.582285, lng: 102.925807 } },
                    { position: { lat: 13.581685, lng: 102.925627 } },
                    { position: { lat: 13.584853, lng: 102.923607 } },
                    { position: { lat: 13.580105, lng: 102.930313 } },
                ],
                pov: { "heading": 162.80544045496987, "pitch": 4.942718248062718, "zoom": 0 },
                pano: null,
            }
        },
        methods: {
            updatePov(pov) {
                this.pov = pov;
            },
            updatePano(pano) {
                this.pano = pano;
            }
        }
    }
</script>