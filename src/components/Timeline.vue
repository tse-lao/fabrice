<template>
<main class="timeline">
<n-timeline size="large">
    <template v-for="project in projects" v-bind:key="project.Datum">
           <n-timeline-item
           v-bind:title="project.Actie"
           v-bind:content="project.Locatie"
           v-bind:time="project.Datum"
      type="success"
    ></n-timeline-item>
    </template>
 
    
  </n-timeline>
</main>
 
</template>

<script>
import json from '../data/timeline.json'
export default {
    data: () => {
        return{
            projects: json
        }
    }
    
}
</script>
<style scoped>
.timeline{
    width: 500px;
}
</style>