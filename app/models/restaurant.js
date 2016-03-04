import DS from 'ember-data';

export default DS.Model.extend({
  name:    DS.attr(),
  address: DS.attr(),
  cuisine: DS.attr(),
  fast:    DS.attr(),
  img:     DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
