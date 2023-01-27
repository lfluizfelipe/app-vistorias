<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import InspectionFormComponent from '@/modules/Inspection/inspection-form.component.vue';


export default Vue.extend({
  name: 'App',

  components: {
      InspectionFormComponent,
    },

});
</script>
