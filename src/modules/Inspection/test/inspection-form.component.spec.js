import { createLocalVue, mount } from '@vue/test-utils';
import Vuetify from '@/plugins/vuetify';
import Vuex from 'vuex';
import InspectionFormComponent from '.@/modules/InspectionFormComponent.component.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const mountFunction = options => mount(InspectionFormComponent, {
  localVue,
  vuetify: Vuetify,
  options,
});

describe('Validar fluxo de envio de fotos', () => {
  test('Testando se o botão "Enviar Foto" existe', () => {
    const wrapper = mountFunction();
    expect(wrapper.exists()).toBe(true);
    const button = wrapper.find('[data-testid="submit-button"]');
    expect(button.exists()).toBe(true);
  });
});


