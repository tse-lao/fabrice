<template>
    <main>
        <div class="head-menu">
            <div class="menu-item">
                Exposities & Projecten
            </div>
            <div class="menu-item">
                Publicaties
            </div>
        </div>
        
        <div>
            <router-view></router-view>
        </div>
    </main>
</template>
<script lang="js">
    export default{
        name: "PublicationsView"
    }
</script>