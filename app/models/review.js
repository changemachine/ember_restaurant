import DS from 'ember-data';

export default DS.Model.extend({
  restaurant: DS.belongsTo('restaurant', {async:true}),
  author:     DS.attr(),
  auth_rep:   DS.attr(),
  rating:     DS.attr(),
  reviewTtl:  DS.attr(),
  reviewBod:  DS.attr(),
  timestamp:  DS.attr()
});
