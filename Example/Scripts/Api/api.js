var resource = function (url) {
    return {
        get: function (queryString) {
            return $.ajax({
                dataType: "json",
                url: url + (queryString || ''),
                ifModified: true
            });
        },
        post: function(data) {
            return $.ajax({
                type: 'POST',
                dataType: "json",
                url: url,
                data: data
            });
        },
        external: {
            get: function (queryString) {
                return $.ajax({
                    dataType: "jsonp",
                    url: url + "?callback=?" + queryString
                });
            }
        }
    };
};

var api = {
    books: resource("/api/book"),
    twitter: resource("http://search.twitter.com/search.json").external
};