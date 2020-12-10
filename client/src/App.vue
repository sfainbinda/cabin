<template>
    <v-app id="app">
        <Navbar></Navbar>
        <v-main>
            <MainBanner></MainBanner>
            <AboutUs></AboutUs>
            <Activities></Activities>
        </v-main>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar/Navbar.vue';
    import MainBanner from './components/MainBanner/MainBanner.vue';
    import AboutUs from './components/AboutUs/AboutUs.vue';
    import Activities from './components/Activities/Activities.vue';

    export default {
        name: 'App',
        components: {
            Navbar,
            MainBanner,
            AboutUs,
            Activities
        }
}
</script>

<style>
#app {
    font-family: 'Montserrat', sans-serif;
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
.navbar-container {
    background-color: #ffffff;
    position: fixed;
    width: 100%;
    /* top: 0; */
    z-index: 1;
}
</style>
