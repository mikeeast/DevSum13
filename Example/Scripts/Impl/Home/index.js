

var viewModel = function () {
    var self = this;
    self.beers = ko.observableArray();

    api.beers.get()
        .done(function(r) {
            self.beers(r);
        });
};