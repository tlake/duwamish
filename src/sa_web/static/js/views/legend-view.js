var Shareabouts = Shareabouts || {};

(function(S, $, console){
  S.LegendView = Backbone.View.extend({
    events: {
      'change .map-legend-checkbox': 'toggleVisibility',
      'click .closeLegend': 'toggleFlyout'
    },
    initialize: function () {

      var self = this;
    },

    render: function() {
      var self = this,
          data = {
            reports: this.options.reports,
            layers: this.options.layers
          };

      this.$('#master-legend').html(Handlebars.templates['legend'](data));

      return this;
    },

    toggleFlyout: function(evt){
      evt.preventDefault();
      var width = this.$el.width() * -1;
      this.$el.css('right', width);
    },

    // Checkbox change handler, triggers event to the MapView
    toggleVisibility: function(evt) {
      var $cbox = $(evt.target),
        id = $cbox.attr('data-layerid');

      if ($cbox.is(':checked')) {
        $(S).trigger('visibility', [id, true]);
      } else {
        $(S).trigger('visibility', [id, false]);
      }
    }
  });
})(Shareabouts, jQuery, Shareabouts.Util.console);
