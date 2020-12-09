<template>
    <div class="d-flex">
        <div>
            <a href="#">Las Cabañas</a>
        </div>
        <div>
            <ul class="ma-0 pa-0">
                <li>
                    <a 
                        href="#"
                        v-for="(item, index) in items" 
                        :key="index"
                        :id="item.id"
                        class="ml-10">
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
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    a { 
        color: #000000;
        letter-spacing: 2px;
    }

</style>