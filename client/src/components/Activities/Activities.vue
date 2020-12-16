<template>   
    <section
        class="background-color-grey"
    >
        <div 
            class="ma-12"
        >    
            <v-row
                class="title-container d-flex align-center justify-center"
            >
                <div
                    class="mt-12"
                >
                    Actividades en La Villa
                </div>
            </v-row>
            <v-divider
                class="ma-6"
            />
            <v-row 
                align="center"
            >
                <v-item-group
                    v-model="window"
                    class="shrink mr-6"
                    mandatory
                    tag="v-flex"
                >
                    <v-item
                        v-for="n in length"
                        :key="n"
                        v-slot="{ active, toggle }"
                    >
                        <div>
                            <v-btn
                                :input-value="active"
                                icon
                                @click="toggle"
                            >
                                <v-icon>mdi-record</v-icon>
                            </v-btn>
                        </div>
                    </v-item>
                </v-item-group>
                <v-col>
                    <v-window
                        v-model="window"
                        class="elevation-6"
                        vertical
                    >
                        <v-window-item
                            v-for="(activitie, i) in activities"
                            :key="i"
                        >
                            <v-card flat>
                                <v-card-text
                                    class="d-flex"
                                >
                                    <v-row
                                        class="d-flex flex-column align-left justify-left ma-6"
                                    >
                                        <p
                                            class="subtitle-container text-left"
                                        >
                                            {{ activitie.title }}
                                        </p>    
                                        <v-divider class="mt-2 mb-2"/>
                                        <p
                                            class="description-container text-left"

                                        >
                                            {{ activitie.data }}
                                        </p>
                                    </v-row>
                                    <v-row
                                        class="img-activitie-container d-flex flex-column align-center justify-center mt-10"
                                    >
                                        <img 
                                            :src="require(`@/assets/images/activities/${activitie.photo}`)" 
                                            alt="activitie.alt"
                                            class="img-activitie ma-6 d-flex align-center"
                                        >
                                        <p
                                            class="text-left ma-0"
                                        >
                                            {{ activitie.alt }}
                                        </p>
                                        <p
                                            class="pamapita-rights text-left ma-0"
                                        >
                                            La presente fotografía y la descripción de la atividad corresponde a <a href="http://www.lapampita.com/pesca.html">La Pampita</a>
                                        </p>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-col>
            </v-row>
        </div>
    </section>
</template>
<script src="./Activities.js"></script>
<style scopped>
    .background-color-grey {
        background-color: #FAFAFA;
    }
    .description-container {
        color: #7B4F1C;
        font-size: 15px;
        font-weight: 300;
        line-height: 2;
        width: 100%;
    }
    .img-activitie {
        height: 333px;
        width:  500px;
    }
    .img-activitie-container {
        color: #7B4F1C;
        height: 100%;
    }
    .pamapita-rights {
        color: #7B4F1C;
        font-size: 10px;
        text-decoration: none;
    }
    .subtitle-container {
        font-size: 20px;
        color: #7B4F1C;
        font-weight: 400;
    }
    .title-container {
        font-size: 20px;
        font-weight: 500;
        width: 100%;
    }
</style>