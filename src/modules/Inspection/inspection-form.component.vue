<template>
  <section class="inspection">
    <template>
      <v-row justify="center">
        <v-img
          max-width="300px" 
          max-height="300px"
          :src="inspection.logo"
          />
      </v-row>
    </template>

      <v-row class="inspection__title">
        <span>{{ atualStep.title }}</span>
      </v-row>
      <v-row class="inspection__description">
        <span>{{ atualStep.description }}</span>
      </v-row>
      <template>
        <v-row justify="center">
          <v-img 
            max-width="300px" 
            max-height="300px"
            :src="atualStep.icon"/>
        </v-row>
      </template>
      <div class="inspection__btn">
        <v-btn
          depressed
          color="error"
          @click="nextStep()"
        >
          Enviar foto
        </v-btn>
      </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import inspectionService from '@/modules/Inspection/services/inspection.service';
import Inspection from './entities/inspection.entity';
import Step from './entities/step.entity';

@Component
export default class InspectionFormComponent extends Vue {

  private inspection: Inspection = new Inspection();

  private atualStep: Step = new Step();

  private atualIndex = 0;

  private getInspection() {
    inspectionService.getData()
    .then((result)=> {
      const { data } = result;
      this.inspection = new Inspection(data);
      this.atualStep = this.inspection.steps[this.atualIndex];
    })
  }

  private nextStep() {
    if (this.atualIndex < this.inspection.steps.length) {
      this.atualStep = this.inspection.steps[this.atualIndex];
        this.atualIndex++;
    } else {
      this.$router.push({
        name: 'finished'
      })
      .catch(()=>{});
    }
  }

  private created() {
    this.getInspection();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.inspection
  font-family: sans-serif
  padding: 10px
  margin: 10px
  text-align: center
  &__title
    font-size: 30px !important
    font-weight: bold
    margin: 20px
    justify-content: center !important
  &__description
    font-size: 20px !important
    margin-bottom: 20px
    justify-content: center !important
  &__btn
    display: flex
    justify-content: center !important
    margin: 50px
    position: static

</style>
