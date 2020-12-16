<template>
    <section>   
        <div
            class="ma-12"
        >
            <v-row
                class="title-container d-flex align-center justify-center"
            >
                <div
                    class="mt-12"
                >
                    Dónde nos encontramos
                </div>
            </v-row>
            <v-divider
                class="ma-6"
            />
            <v-row
                class="location-container"
            > 
                <v-col
                    cols="12"
                    md="6"
                    sm="6"
                >
                    <v-row
                        class="d-flex align-center justify-center"
                    >
                        <v-col
                            cols="2"
                            md="2"
                            sm="2"
                        >
                            <v-icon
                                class="d-flex align-center justify-end"
                            >
                                {{ direction.icon }}
                            </v-icon>
                        </v-col>
                        <v-col
                            cols="10"
                            md="10"
                            sm="10"
                        >
                            <p
                                class="text-left d-flex align-center ma-0"
                            >
                                {{ direction.street }} - {{ direction.road }}. {{ direction.city }}.
                            </p>
                        </v-col>
                    </v-row>
                    <v-row
                        class="d-flex align-center justify-center"
                    >
                        <v-col
                            cols="2"
                            md="2"
                            sm="2"
                        >
                            <v-icon
                                class="d-flex align-center justify-end"
                            >
                                {{ coordinates.icon }}
                            </v-icon>
                        </v-col>
                        <v-col
                            cols="10"
                            md="10"
                            sm="10"
                        >
                            <p
                                class="text-left d-flex align-center ma-0"
                            >
                                lat. {{ coordinates.lat }}, long. {{ coordinates.long }}.
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    sm="6"
                >
                    <p
                        class="text-left mt-4 mr-4"
                    >
                        Nuestras Cabañas se encuentran ubicadas en Villa La Angostura, Provincia de Neuquén, Patagonia Argentina.
                    </p>
                    <p
                        class="text-left mt-4 mr-4"
                    >
                        Tomando como referencia el cruce del Automóvil Club Argentino en el centro de la ciudad, se debe tomar la RN 40 hacia San Martín de los Andes. Partiendo de ese punto de referencia son 3,5 Km. hasta el cruce con la calle Traful. Doblar a la derecha, 3 cuadras hasta la calle Cacique Antriao.
                    </p>
                </v-col>
            </v-row>
            <v-row>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11729.389305437522!2d-71.66942653216229!3d-40.742750214986685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9610c0b3ba294e13%3A0x4adea702243a2438!2sLa%20Pampita%20Caba%C3%B1as!5e1!3m2!1ses-419!2sar!4v1607716423000!5m2!1ses-419!2sar" 
                    frameborder="0" 
                    style="border:0;" 
                    allowfullscreen="" 
                    aria-hidden="false" 
                    tabindex="0"
                    class="iframe-container"
                />
            </v-row>
        </div>
        

    </section>
</template>
<script src="./Location.js"></script>
<style scoped>
    .background-color-grey {
        background-color: #FAFAFA;;
    }
    .icon-container {
        /* background-color: #ffffff; */
        height: 50px;
        width: 50px;
    }
    .iframe-container {
        height:450px;
        width: 100%;
    }
    .location-container {
        height: 250px;
    }
    p {
        color: #7B4F1C;
        font-size: 15px;
        font-weight: 300;
        height: 50px;
        width: 100%;
    }
    .section-container {
        width: 80%;
    }
    .title-container {
        font-size: 20px;
        font-weight: 500;
        height: 80px;
        width: 100%;
    }
</style>