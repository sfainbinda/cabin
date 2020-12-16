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
                    class="mt-10"
                >
                    Contacto
                </div>
            </v-row>
            <v-divider
                class="ma-6"
            />
            <v-row
                class="d-flex flex-column justify-center align-center"
            >
                <v-row>
                    <div
                        class="d-flex align-start justify-left mt-6 mb-6"
                    >
                        <div 
                            class="d-flex ml-12"
                            v-for="(contact, i) in contacts"
                            :key="i"
                        >
                            <div class="d-flex align-center justify-center">
                                <v-icon
                                    class="icon-color"
                                >
                                    {{ contact.icon }}
                                </v-icon>
                            </div>
                            <a 
                                :href="contact.href"
                                class="ml-2 link-style d-flex align-center"
                            >
                                <em>{{ contact.title }}</em>
                            </a>
                        </div>
                    </div>
                </v-row>
            </v-row>
        </div>
    </section>
</template>
<script src="./Contact"></script>
<style scoped>
    .background-color-grey {
        background-color: #FAFAFA;
        /* font-size: 12px; */
        /* width: 100%; */
    }
    .icon-color {
        color: #7B4F1C;
    }
    .link-style {
        color: #7B4F1C;
        text-decoration: none;    
    }
</style>