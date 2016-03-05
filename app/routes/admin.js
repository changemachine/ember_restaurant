import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('restaurant') || null;
  },

  actions: {
    updateResto(r, newInfo){
      Object.keys(newInfo).forEach(function(i){
        if( newInfo[i] !== undefined ){
          r.set(i, newInfo[i]);
        }
      });
      r.save();
      this.transitionTo('index');
    },
    destroyResto(resto){
      resto.destroyRecord();
      console.log('DESTROY: '+ resto);
      this.transitionTo('index');
    }
  }
});
