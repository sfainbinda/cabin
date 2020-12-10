<template>
    <section class="back-color-grey">
        <div class="ma-12">
            <v-row 
                class="d-flex justify-center"                
            >
                <div class="title-section text-left mt-8">La Pampita - Villa La Angostura</div>
            </v-row>
            <v-row
                class="mt-6"
            >
                <v-col
                    cols="12"
                    md="6"
                    sm="6"
                    v-for="(info, i) in about"
                    :key="i"
                >
                    <p
                        class="text text-left"
                    >
                        {{info.detail}}
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
        font-size: 14px;
        font-weight: 300;
    }
</style>