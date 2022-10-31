<template>
    <main>
        <div class="head-menu">
            <div class="menu-item" @click="$router.push('/publicaties')">
                Publicaties
            </div>
            <div class="menu-item" @click="$router.push('/publicaties/expos')">

                Exposities & Projecten

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
<style lang="scss">
.head-menu{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-content: center;
    align-items:center;
    align-self: center;
    justify-content: center;
    
    .menu-item{
        padding: 1rem;
        border-radius: 6px;
        font-weight: 500;
        text-transform: uppercase;
        
        &:hover{
            font-weight: 700;
            cursor: pointer;
            text-decoration: underline;
        }
        
    }
}


</style>