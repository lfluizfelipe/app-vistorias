<template>
  <section class="finished">
    <template>
      <v-row justify="center">
        <v-img
          max-width="300px" 
          max-height="300px"
          :src="inspection.logo"
          />
      </v-row>
    </template>
      <v-row class="finished__title">
        <span>Parabéns!!</span>
      </v-row>
      <v-row class="finished__description">
        <span>Suas fotos foram enviadas com sucesos</span>
      </v-row>
      <div class="finished__btn">
        <v-btn
          depressed
          color="error"
          @click="goToNewInspection()"
        >
          Nova Vistoria
        </v-btn>
      </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import inspectionService from '@/modules/Inspection/services/inspection.service';
import Inspection from '../entities/inspection.entity';
import InspectionFormComponent from '../inspection-form.component.vue';

@Component
export default class FinishedInspectionComponent extends Vue {
  private inspection: Inspection = new Inspection();

  private getInspection() {
    inspectionService.getData()
    .then((result)=> {
      const { data } = result;
      this.inspection = new Inspection(data);
    })
  }

  private goToNewInspection() {
    this.$router.push({
      name: 'inspection'
    })
  }

  private created() {
    this.getInspection();
  }
}
</script>

<style scoped lang="sass">
.finished
  font-family: sans-serif
  padding: 10px
  margin: 10px
  justify-content: center
  text-align: center
  &__title
    font-size: 25px !important
    font-weight: bold
    justify-content: center
    margin-bottom: 20px
  &__description
    font-size: 20px !important
    justify-content: center
  &__btn
    justify-content: center !important
    margin: 50px
</style>
