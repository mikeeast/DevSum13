

var twitterClient = function() {
    var self = this;

    self.currentTweets = ko.observableArray();

    self.search = function() {
        api.twitter.get("&q=devsum&rpp=20&result_type=recent")
            .done(function(response) {
                self.currentTweets(response.results);
            });
    };
    self.search();
};