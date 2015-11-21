/*globals Backbone _ jQuery Handlebars */

var Shareabouts = Shareabouts || {};

(function(S, $, console){
  S.MapboxEarlyActionView = Backbone.View.extend({
    initialize: function() {
      var self = this;
      this.title = this.options.title
      this.description = this.options.description

      // this.surveyType = this.options.surveyConfig.submission_type;
      // this.supportType = this.options.supportConfig.submission_type;

      // this.model.on('change', this.onChange, this);

      // Make sure the submission collections are set
      // this.model.submissionSets[this.surveyType] = this.model.submissionSets[this.surveyType] ||
      //   new S.SubmissionCollection(null, {
      //     submissionType: this.surveyType,
      //     placeModel: this.model
      //   });

      // this.model.submissionSets[this.supportType] = this.model.submissionSets[this.supportType] ||
      //   new S.SubmissionCollection(null, {
      //     submissionType: this.supportType,
      //     placeModel: this.model
      //   });


      this.mapboxSurveyView = new S.MapboxSurveyView({
        // collection: this.model.submissionSets[this.surveyType],
        // surveyConfig: this.options.surveyConfig,
        // userToken: this.options.userToken
        // surveyConfig: this.options.surveyConfig
      });

      // this.supportView = new S.SupportView({
      //   collection: this.model.submissionSets[this.supportType],
      //   supportConfig: this.options.supportConfig,
      //   userToken: this.options.userToken
      // });

      // this.$el.on('click', '.share-link a', function(evt){

      //   // HACK! Each action should have its own view and bind its own events.
      //   var shareTo = this.getAttribute('data-shareto');

      //   S.Util.log('USER', 'place', shareTo, self.model.getLoggingDetails());
      // });
    },

    render: function() {
      // console.log("view.render, data:", data)

      var self = this,
          // data = _.extend({
          //   place_config: this.options.placeConfig,
          //   survey_config: this.options.surveyConfig
          // }, this.model.toJSON());
          data = {
            title: this.title,
            description: this.description
          };

      // data.submitter_name = this.model.get('submitter_name') ||
        // this.options.placeConfig.anonymous_name;

      // Augment the template data with the attachments list
      // data.attachments = this.model.attachmentCollection.toJSON();

      // this.$el.html(Handlebars.templates['mapbox-detail'](data));
      this.$el.html(this.title + '</br>' + this.description);
      console.log("mapbox-early-action.render: rendered mapbox-detail template")

      // Render the view as-is (collection may have content already)
      this.$('.survey').html(this.mapboxSurveyView.render().$el);
      console.log("mapbox-early-action.render: rendered mapbox-survey-detail template")
      // Fetch for submissions and automatically update the element
      // this.model.submissionSets[this.surveyType].fetchAllPages();

      // this.$('.support').html(this.supportView.render().$el);
      // Fetch for submissions and automatically update the element
      // this.model.submissionSets[this.supportType].fetchAllPages();

      return this;
    }

    // remove: function() {
    //   // Nothing yet
    // },

    // onChange: function() {
    //   this.render();
    // }
  });
}(Shareabouts, jQuery, Shareabouts.Util.console));
