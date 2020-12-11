<template>
    <section class="back-color-grey section-height d-flex justify-center align-center">
        <div class="ma-12">
            <v-row 
                class="d-flex justify-center align-center"                
            >
                <div class="title-section text-left mt-8">La Pampita - Villa La Angostura</div>
            </v-row>
            <v-divider 
                class="mt-6"  
            />
            <v-row
                class="mt -6 d-flex justify-center align-center"
            >
                <v-col
                    cols="12"
                    md="6"
                    sm="6"
                >
                    <v-carousel
                        v-model="model"
                        hide-delimiters
                        cycle
                        class="mt-4 carousel-container"
                    >
                        <v-carousel-item
                            v-for="(image, i) in images"
                            :key="i"
                        >
                            <v-sheet
                                tile
                                class="sheet-container"
                            >
                                <img 
                                    :src="require(`@/assets/images/estate/${image.src}`)" 
                                    :alt="image.alt"
                                    class="img-cabin"
                                >
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>   
                </v-col>
                <v-col
                    cols="12"
                    md="6"
                    sm="6"
                    class="mt-6 d-flex flex-column align-center justify-center"
                >
                    <p
                        class="text text-left ma-4"
                    >
                        Sobre un predio de 2 hectareas, rodeado de montañas y una magnífica vista al Lago Correntoso, reconocido como el mas corto del mundo y especialmente recomendado para la pesca deportiva con mosca, Cabañas La Pampita le ofrece un lugar de privilegio en el jardín de la Patagonia Argentina.
                    </p>
                    <p
                        class="text text-left ma-4"
                    >
                        Con la impronta de una típica casa de montaña nuestras 3 cabañas construidas artesanalmente en tronco y madera ofrecen todas las comodidades para grupos de 4 a 7 personas, parrilla, estacionamiento, piscina descubierta, servicio de blanco y limpieza dan marco a un lugar pensado para hacer verdaderamente placentera su estadía en Villa La Angostura.
                    </p>
                </v-col>
            </v-row>
        </div>
    </section>
</template>
<script src="./AboutUs.js"></script>
<style scoped>
    .back-color-grey {
        background-color: #FAFAFA;
    }
    .title-section {
        font-size: 20px;
        font-weight: 500;
    }
    .text {
        color: #7B4F1C;
        font-size: 15px;
        font-weight: 300;
        line-height: 2;
        margin: 0;
        width: 600px;
    }
    .section-height {
        height: 700px;
    }
    .divider {
        width: 500px;
    }
    .salmon {
        background-color: salmon;
    }
    .carousel-container {
        height: 400px;
        width: 600px;
        z-index: 0;
    }
    .img-cabin {
        height: 100%;
        width: 100%;
    }
    .sheet-container {
        height: 100%;
        width: 100%;
    }
</style>