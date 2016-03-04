import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    dropResto(restaurant){
      this.sendAction('dropResto', restaurant);
    }
  }
});
