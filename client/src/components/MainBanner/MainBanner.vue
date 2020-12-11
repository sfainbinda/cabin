<template>
    <v-carousel 
        v-model="model" 
        hide-delimiters
        cycle
        class="carousel"
        >
            <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            >
                <v-sheet
                    tile
                    class="sheet"
                >
                    <img 
                        :src="require(`@/assets/images/cabin/${slide.src}`)" 
                        :alt="slide.alt"
                        class="img-banner"
                    >
                </v-sheet>
            </v-carousel-item>
    </v-carousel>
</template>
<script src="./MainBanner" ></script>
<style scopped>
    .carousel {
        margin-top: 150px;
    }
    .img-banner {
        height: 100%;
        width: 100%;
    }
    .sheet {
        height: 100%;
    }
</style>