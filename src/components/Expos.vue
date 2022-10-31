<template>
<main class="timeline">
    <main>
        <div class="background-image">
            <img src="../assets/photos/fabrice-in-gallery.jpeg" />
        </div>
        <div class="publication"  v-for="(item, key) in projects" :key="key">
            <div class="item">
                
                <h4>{{item.title}}</h4>
                
                <span class="date">{{item.date}}</span>
                <span class="publisher"> -  {{item.location}}</span>
            </div>
        </div>
    </main>
</main>
 
</template>

<script>
import json from '../data/timeline.json';
export default {
    name: "ExpoView", 
    data: () => {
        return{
            projects: json
        }
    }
    
}
</script>

<style lang="scss">
.publication{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
    margin: 1rem;
    h4{
        margin: 1rem;
        padding: 0;
    }
}

</style>