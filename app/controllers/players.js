import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  chartData: computed('model', () => {
    return {
      labels: ['label1'],
      datasets: [{
        label: 'label2',
        data: [10, 20]
      }]
    };
  })
});
