(function (window, undefined) {
    var utils = window["utils"] = {};
    utils.exportSymbol = function (publicPath, object) {
        var tokens = publicPath.split(".");
        var target = window;
        for (var i = 0; i < tokens.length - 1; i++)
            target = target[tokens[i]];
        target[tokens[tokens.length - 1]] = object;
    };

    utils.isArray = function (obj) {
        return obj.constructor === Array;
    };

    utils.arrayIndexOf = function (array, item, comparer) {
        for (var i = 0, j = array.length; i < j; i++)
            if (comparer(array[i], item))
                return i;
        return -1;
    };

    utils.arrayContains = function (array, arrayOrSingleItem, comparer) {
        if (comparer == null)
            comparer = function (x, y) { return x == y; };
        if (utils.isArray(arrayOrSingleItem)) {
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < arrayOrSingleItem.length; j++) {
                    if (comparer(array[i], arrayOrSingleItem[j]))
                        return true;
                }
            }
        }
        else {
            for (var k = 0; k < array.length; k++) {
                if (comparer(array[k], arrayOrSingleItem))
                    return true;
            }
        }
        return false;
    };

    utils.arrayDistinct = function (array, comparer) {
        if (comparer == null)
            comparer = function (x, y) { return x == y; };
        array = array || [];
        var results = [];
        for (var i = 0; i < array.length; i++) {
            if (utils.arrayIndexOf(results, array[i], comparer) < 0)
                results.push(array[i]);
        }
        return results;
    };

    // Creates an intersection between two arrays.
    // a1: [1, 2, 3]
    // a2: [2, 3, 4]
    // returns: [2, 3]
    // comparer is used for complex objects
    utils.intersect = function (a1, a2, comparer) {
        if (comparer == null)
            comparer = function (x, y) { return x == y; };
        var r = [];
        for (var i = 0; i < a1.length; i++) {
            for (var j = 0; j < a2.length; j++) {
                if (comparer(a1[i], a2[j])) {
                    r.push(a1[i]);
                }
            }
        }
        return r;
    };

    utils.arrayClear = function (array) {
        if (array == null)
            return;
        array.slice(0, array.length);
    };
    
    utils.trim = function (text) {
        return $.trim(text);
    };
    
    utils.formatNumber = function (number, decPlaces, thouSeparator, decSeparator, currencySymbol) {
        var n = number,
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
        decSeparator = decSeparator == undefined ? "," : decSeparator,
        thouSeparator = thouSeparator == undefined ? " " : thouSeparator,
        currencySymbol = currencySymbol == undefined ? "" : currencySymbol,
        sign = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
        return sign + currencySymbol + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
    };
    
    utils.exportSymbol('utils.isArray', utils.isArray);
    utils.exportSymbol('utils.arrayIndexOf', utils.arrayIndexOf);
    utils.exportSymbol('utils.arrayContains', utils.arrayContains);
    utils.exportSymbol('utils.intersect', utils.intersect);
    utils.exportSymbol('utils.isNumberKey', utils.isNumberKey);
    utils.exportSymbol('utils.cloneObservable', utils.cloneObservable);
    utils.exportSymbol('utils.queryString', utils.queryString);
    utils.exportSymbol('utils.trim', utils.trim);
    utils.exportSymbol('utils.geocodeAddress', utils.geocodeAddress);
    utils.exportSymbol('utils.crc32', utils.crc32);
    utils.exportSymbol('utils.arrayDistinct', utils.arrayDistinct);
})(window);