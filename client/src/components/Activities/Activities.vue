<template>
    <section>
        <v-card
            v-for="(activitie, i) in activities"
            :key="i"
        >  
            <v-img
                class="img-size"
                :src="require(`@/assets/images/activities/${activitie.image.src}`)"
                :alt="activitie.image.alt"
            >
                <v-card-title>
                    {{ activitie.name }}
                </v-card-title>
            </v-img>
            <v-card-subtitle></v-card-subtitle>
            <v-card-text>
                <div>
                    {{ activitie.description }}
                </div>
                <div></div>
            </v-card-text>
            <v-card-actions>
                <v-btn>Más información</v-btn>
            </v-card-actions>
        </v-card>
    </section>
    <!-- <div>        
        <v-card
            class="mx-auto"
            max-width="400"
        >
            <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
            <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
            Number 10
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="orange"
                text
            >
                Share
            </v-btn>

            <v-btn
                color="orange"
                text
            >
                Explore
            </v-btn>
            </v-card-actions>
        </v-card>
    </div> -->
</template>
<script src="./Activities"></script>
<style scoped>
    .img-size {
        height: 500px;
        width: 375px;
    }
</style>