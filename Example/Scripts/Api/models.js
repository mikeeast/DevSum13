var book = function (data) {
    var self = this;
    data = data || {};
    self.Name = ko.observable();
    self.Price = ko.observable();
    self.ImageUrl = ko.observable('none.jpg');
    self.Author = ko.observable(new author());

    ko.mapping.fromJS(data, mappings, self);

    self.isSelected = ko.observable(false);
};

var author = function (data) {
    var self = this;


    ko.mapping.fromJS(data, mappings, self);

    self.fullName = ko.computed(function () {
        return ko.utils.unwrapObservable(self.FirstName) + ' ' + ko.utils.unwrapObservable(self.LastName);
    });
};

var mappings = {
    'books': {
        create: function (options) {
            return new book(options.data);
        }
    },
    'Author': {
        create: function (options) {
            return new author(options.data);
        }
    }
}