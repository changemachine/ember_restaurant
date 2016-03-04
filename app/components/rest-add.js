import Ember from 'ember';

export default Ember.Component.extend({
  restFormShow: false,

  actions:{
    toggleRestoForm(){
      this.set('restFormShow', !this.get('restFormShow'));
    },

    // checkDupe(){
    //   console.log('checkDupe');
    // },

    submitResto(){
      var newResto = {
        name:    this.get('name'),
        address: this.get('address'),
        cuisine: this.get('cuisine'),
        fast:    this.get('fast'),
        img:     this.get('img'),
        reviews: []
      };
      this.set('restFormShow', false);
      this.sendAction('submitResto', newResto);
      console.log('submitResto: '+ newResto);
    }

  }
});
