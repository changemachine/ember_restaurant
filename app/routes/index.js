import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return this.store.findAll('restaurant') || null;
  },
  actions:{
    saveResto(submission){
      var newResto = this.store.createRecord('restaurant', submission);
      newResto.save();
      console.log('SAVERESTO: '+ newResto);
      this.transitionTo('index');
    }

  }
});
