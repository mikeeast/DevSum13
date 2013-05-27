var resource = function (url) {
    return {
        get: function (data) {
            return $.ajax({
                dataType: "json",
                url: url,
                data: data,
                ifModified: true
            });
        }
    };
};

var api = {
    beers: resource("/api/beer"),
    // .. other endpoints
};