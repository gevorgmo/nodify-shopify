// Generated by CoffeeScript 1.10.0
(function() {
  var BaseDescendant, Event,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseDescendant = require('./base_descendant');

  Event = (function(superClass) {
    extend(Event, superClass);

    Event.prototype.slug = 'event';

    function Event(site) {
      Event.__super__.constructor.call(this, site);
    }

    return Event;

  })(BaseDescendant);

  module.exports = Event;

}).call(this);
