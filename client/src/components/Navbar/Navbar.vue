<template>
    <div>
        <ul>
            <li
                v-for="(item, index) in items" 
                :key="index"
                :id="item.id">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>
<script src="./Navbar.js"></script>