<template>
    <section>
        <div class="ma-12">
            <v-row
                class="title-container d-flex align-center justify-center"
            >
                <div>Nuestras cabañas</div>
            </v-row>
            <v-divider
                class="ma-6"
            />
            <v-row
                v-for="(cabin, i) in cabins"
                :key="i"
                class="ma-10"
            >
                <div
                    class="text-left mt-4 title-container"
                >
                    {{ cabin.title }}
                </div>
                <div
                    class="text-left mt-4 description-container"
                >
                    {{ cabin.description }}
                </div>
                <v-row>
                    <v-col
                        cols="12"
                        md="4"
                        sm="4"
                        class="text-left"
                    >   
                        <div class="mt-4">
                            <p
                                class="subtitle-container"
                            >
                                Comodidades
                            </p>
                            <ul
                                v-for="(feature, i) in cabin.features"
                                :key="i"
                                class="ml-4"
                            >
                                <li>
                                    {{ feature }}
                                </li>
                            </ul>
                        </div>
                        <div class="mt-4">
                            <p
                                class="subtitle-container"
                            >
                                Servicios incluídos
                            </p>
                            <ul
                                v-for="(service, i) in cabin.services"
                                :key="i"
                                class="ml-4"
                            >
                                <li>{{ service }}</li>
                            </ul>
                        </div>
                        <div class="mt-4">
                            <p
                                class="subtitle-container"
                            >
                                Opcionales
                            </p>
                            <ul
                                v-for="(option, i) in cabin.optionals"
                                :key="i"
                                class="ml-4"
                            >
                                <li>{{ option }}</li>
                            </ul>
                        </div>
                    </v-col>
                    <v-col
                        cols="12"
                        md="8"
                        sm="8"
                        class="mt-4 d-flex flex-column align-center justify-center"
                    >
                        <v-carousel
                            v-model="model"
                            hide-delimiters
                            cycle
                            class="carousel-container"
                        >
                            <v-carousel-item
                                v-for="(image, i) in cabin.images"
                                :key="i"
                            >
                                <v-sheet
                                    tile
                                    class="sheet-container"
                                >
                                    <img 
                                        :src="require(`@/assets/images/cabin/${image.src}`)" 
                                        :alt="image.alt"
                                        class="img-cabin"
                                    >
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                        <p
                            class="pamapita-rights text-left ma-0"
                        >
                            La presente fotografía y toda la información de las cabañas corresponde a <a href="http://www.lapampita.com/pesca.html">La Pampita</a>
                        </p>
                    </v-col>    
                </v-row>
            </v-row>
        </div>
    </section>
</template>
<script src="./Cabin.js"></script>
<style scoped>
    .carousel-container {
        width: 740px;
        z-index: 0;
    }
    .description-container {
        color: #7B4F1C;
        font-size: 15px;
        font-weight: 300;
        line-height: 2;
        width: 100%;
    }
    .img-cabin {
        height: 100%;
        width: 100%;
    }
    li {
        color: #7B4F1C;
        font-size: 15px;
        font-weight: 300;
        line-height: 2;
    }
    .pamapita-rights {
        color: #7B4F1C;
        font-size: 10px;
        text-decoration: none;
    }
    .sheet-container {
        height: 100%;
        width: 100%;
    }
    .subtitle-container {
        color: #7B4F1C;
        font-weight: 400;
        width: 100%;
    }
    .title-container {
        font-size: 20px;
        font-weight: 500;
        width: 100%;
    }
</style>