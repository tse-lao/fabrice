<template>
    <main>
        <div class="background-image">
            <img src="../assets/photos/fabrice-in-gallery.jpeg" />
        </div>
        <div class="publication"  v-for="(item, key) in publicaties" :key="key">
            <div class="item">
                
                <h4>{{item.title}}</h4>
                
                <span class="date">{{item.date}}</span>
                <span class="publisher"> -  {{item.publication}}</span>
            </div>
        </div>
    </main>
</template>
<script lang="js">
import json from '../data/publicaties.json';
export default{
    name: "PublicityWork", 
    

    data: () => {
        return{
            publicaties: json
        }
    }
    
}
</script>
<style>
.publication{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
    margin: 1rem;
}
 .publication   h4{
        margin: 1rem;
        padding: 0;
    }

.background-image{
    position: fixed;
    left: 0px;
    opacity: 0.3;
    top: 0;
    
    z-index: -10000;
}
   .background-image img{
        height: 50vw;
        border-radius: 0px 0px 3000px 300px;
    }

</style>