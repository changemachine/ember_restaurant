import Ember from 'ember';

export default Ember.Component.extend({
  admin: false,
  editing: false,
  reviewing: false,

  init(){
    this._super(...arguments);
    if ( location.href.indexOf('admin') !== -1){
      this.set('admin', true);
    }else{
      this.set('admin', false);
    }
  },

  actions:{
    toggleEditing(){
      this.set('editing', !this.get('editing'));
    },

    dropResto(restaurant){
      this.sendAction('dropResto', restaurant);
      this.set('editing', false);
    },

    editResto(r){
      var newInfo = {
        name:    this.get('name') || r.name,
        address: this.get('address') || r.address,
        cuisine: this.get('cuisine') || r.cuisine,
        fast:    this.get('fast') || r.fast,
        img:     this.get('img') || r.img
      };
      this.set('editing', false);
      this.sendAction('editResto', r, newInfo);
    },

    toggleReviewing(){
      this.set('reviewing', !this.get('reviewing'));
      console.log('reviewing: ' + this.get('reviewing'));
    },

    submitReview(restaurant){
      var newReview = {
        restaurant: restaurant,
        username:   this.get('username'),
        auth_rep:   3,
        rating:     4,
        reviewTtl:  this.get('reviewTtl'),
        review:     this.get('review'),
        timestamp:  Date.now()
      };
      this.set('reviewing', false);
      this.sendAction('submitReview', newReview);
    }
  }

});
