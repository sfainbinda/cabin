<template>
    <section class="back-color-grey section-height d-flex justify-center align-center">
        <div class="ma-12">
            <v-row 
                class="d-flex justify-center"                
            >
                <div class="title-section text-left mt-8">La Pampita - Villa La Angostura</div>
            </v-row>
            <v-divider 
                class="mt-6"  
            />
            <v-row
                class="mt-6 d-flex justify-center align-start"
            >
                <v-col
                    cols="12"
                    md="6"
                    sm="6"
                    v-for="(info, i) in about"
                    :key="i"
                    class="d-flex align-center justify-center"
                >
                    <p
                        class="text text-left ml-6"
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
        font-size: 15px;
        font-weight: 300;
        line-height: 2;
        margin: 0;
        width: 600px;
    }
    .section-height {
        height: 400px;
    }
    .divider {
        width: 500px;
    }
</style>