<template>
    <div class="d-flex navbar-container">
        <div class="logo d-flex align-center justify-center">
            <a href="#">
                <img src="../../assets/images/logo/logo.png" alt="La Pampita logo">
            </a>
        </div>
        <div class="btns d-flex align-center justify-center">
            <ul class="ma-0 pa-0">
                <li>
                    <a 
                        :href="`#${item.ref}`"
                        v-for="(item, index) in items" 
                        :key="index"
                        :id="item.id"
                        class="ml-10 font-weight-light"
                    >
                        {{ item.name }}
                    </a>
                </li>  
            </ul>
        </div>
    </div>
</template>
<script src="./Navbar.js"></script>
<style scoped>
    a {
        color: #000000;
        font-size: 16px;
        font-weight: 200;
        letter-spacing: 2px;
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    .logo {
        height: 150px;
        width: 30%;
    }
    .btns {
        width: 70%;
    }
</style>