import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('restaurant') || null;
  },
  actions:{
    saveResto(restaurant){
      var newResto = this.store.createRecord('restaurant', restaurant);
      newResto.save();
      this.transitionTo('index');
    },
    saveReview(review){
      var newReview = this.store.createRecord('review', review);
      newReview.save();
      this.transitionTo('index');
    }

  }
});
