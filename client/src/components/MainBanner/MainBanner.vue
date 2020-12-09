<template>
    <v-carousel 
        v-model="model" 
        hide-delimiters
        cycle>
        <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i">
            <v-sheet
                :color="slide.color"
                height="100%"
                tile>
                <v-row
                class="fill-height d-flex align-center justify-center">
                    <div class="display-3">
                        {{ slide.name }}
                    </div>
                </v-row>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>
<script src="./MainBanner" ></script>