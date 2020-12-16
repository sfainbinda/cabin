<template>
    <section
        class="section-font-size"
    >
        <div
            class="ma-12 d-flex flex-column align-center justify-center"
        >
            <v-row
                class="mt-12"
            >
                <p>Web diseñada por <em>Santiago Fain Binda</em>. Medios de contacto 👇</p>
            </v-row>
            <v-row>
                <div
                    class="d-flex align-start justify-left"
                >
                    <div class="d-flex ma-2">
                        <div class="d-flex align-center justify-center">
                            <v-icon
                                color="blue"
                            >
                                fab fa-whatsapp-square
                            </v-icon>
                        </div>
                        <a 
                            :href="whatsappLink"
                            class="ml-2 link-style d-flex align-center"
                        >
                            Fain Binda, Santiago
                        </a>
                    </div>
                    <div class="d-flex ma-2">
                        <div class="d-flex align-center justify-center">
                            <v-icon
                                color="blue"
                            >
                                fab fa-linkedin
                            </v-icon>
                        </div>
                        <a 
                            href="https://www.linkedin.com/in/sfainbinda/"
                            class="ml-2 link-style d-flex align-center"
                        >
                            sfainbinda
                        </a>
                    </div>
                    <div class="d-flex ma-2">
                        <div class="d-flex align-center justify-center">
                            <v-icon
                                color="blue"
                            >
                                fas fa-envelope-square
                            </v-icon>
                        </div>
                        <a 
                            href="mailto:sfainbinda@gmail.com"
                            class="ml-2 link-style d-flex align-center"
                        >
                            sfainbinda@gmail.com
                        </a>
                    </div>
                </div>
            </v-row>
        </div>
    </section>
</template>
<script src="./DevContact.js"></script>
<style scoped>
    .section-font-size {
        font-size: 10px;
    }
    .link-style {
        color: #7B4F1C;
        text-decoration: none;    
    }
</style>