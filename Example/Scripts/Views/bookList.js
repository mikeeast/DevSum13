

var bookList = function () {
    var self = this;
    self.books = ko.observableArray();
    self.selectedAuthor = ko.observable();

    self.filteredBooks = ko.computed(function() {
        return ko.utils.arrayFilter(self.books(), function(book) {
            var selectedAuthor = self.selectedAuthor();
            return !selectedAuthor || selectedAuthor.fullName() == book.Author().fullName();
        });
    });

    self.selectedBook = ko.computed(function() {
        return ko.utils.arrayFirst(self.books(), function(book) {
            return book.isSelected();
        });
    });

    self.addBook = function() {
        var b = new book();
        self.books.splice(0, 0, b);
        self.select(b);
    };
    
    self.sort = function (fieldName) {
        self.order = !self.order;
        self.books.sort(function (a, b) {
            return self.order ?
                ko.utils.unwrapObservable(a[fieldName]) < ko.utils.unwrapObservable(b[fieldName]) :
                ko.utils.unwrapObservable(a[fieldName]) > ko.utils.unwrapObservable(b[fieldName]);
        });
    };
    
    self.select = function (book) {
        self.deselectAll();
        book.isSelected(true);
    };
    
    self.deselect = function (book) {
        book.isSelected(false);
    };
    
    self.deselectAll = function() {
        ko.utils.arrayForEach(self.books(), function(book) {
            self.deselect(book);
        });
    };

    self.distinctAuthors = ko.computed(function() {
        var authors = ko.utils.arrayMap(self.books(), function(book) {
            return ko.utils.unwrapObservable(book.Author);
        });
        return utils.arrayDistinct(authors, function (x, y) { return ko.utils.unwrapObservable(x.fullName) == ko.utils.unwrapObservable(y.fullName); });
    });
    
    self.get = function() {
        api.books.get()
            .done(function(result) {
                ko.mapping.fromJS({ 'books': result }, mappings, self);
            });
    };
    self.get();
};