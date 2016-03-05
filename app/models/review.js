import DS from 'ember-data';

export default DS.Model.extend({
  restaurant: DS.belongsTo('restaurant', {async:true}),
  username:   DS.attr(),
  reviewTtl:  DS.attr(),
  review:     DS.attr(),
  timestamp:  DS.attr()
});
