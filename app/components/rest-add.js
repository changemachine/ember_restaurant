import Ember from 'ember';

export default Ember.Component.extend({
  restFormShow: false,

  actions:{
    showRestoForm(){
      this.set('restFormShow', true);
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
      this.set('showRestoForm', false);
      this.sendAction('submitResto', newResto);
      console.log('submitResto: '+ newResto);
    }

  }
});
