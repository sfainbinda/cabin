<template>
    <section>
        <div class="background-color-grey ma-12">
            <div
                class="d-flex flex-column align-start justify-left"
            >
                <div class="d-flex">
                    <div class="d-flex align-center justify-center">
                        <v-icon>fab fa-whatsapp-square</v-icon>
                    </div>
                    <a :href="whatsappLink">Santiago Fain Binda</a>
                </div>
                <div class="d-flex">
                    <div class="d-flex align-center justify-center">
                        <v-icon>fab fa-linkedin</v-icon>
                    </div>
                    <a href="https://www.linkedin.com/in/sfainbinda/">sfainbinda</a>
                </div>
                <div class="d-flex">
                    <div class="d-flex align-center justify-center">
                        <v-icon>fas fa-envelope-square</v-icon>
                    </div>
                    <p>
                        <a href="">sfainbinda@gmail.com</a>
                        <a href="">sfainbinda@hotmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script src="./Contact.js"></script>
<style scoped>
    .background-color-grey {
        background-color: #FAFAFA;
    }
</style>