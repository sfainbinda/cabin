<template>
    <v-app id="app">
        <Navbar></Navbar>
        <v-main>
            <MainBanner></MainBanner>
            <Activities></Activities>
        </v-main>
    </v-app>
</template>

<script>
    import Navbar from './components/Navbar/Navbar.vue';
    import MainBanner from './components/MainBanner/MainBanner.vue';
    import Activities from './components/Activities/Activities.vue';

    export default {
      name: 'App',
      components: {
          Navbar,
          MainBanner,
            Activities
      }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
