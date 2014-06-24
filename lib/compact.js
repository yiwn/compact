/**
 * Shim
 */

var isArray = Array.isArray;


/**
 * Expose `compact`
 */

module.exports = compact;


/**
 * Strip `null` and `undefined` values.
 *
 * @param  {Object|Array} source
 * @return {Object|Array}
 * @api public
 */

function compact(source) {
    if (!source) return null;

    if (isArray(source))
        return compactArray(source);

    if (typeof source == 'object')
        return compactObject(source);

    return source;
}

/**
 * Remove `null` and `undefined` from array;
 *
 * @param {Array} source
 * @return {Array}
 * @api private
 */

function compactArray(source) {
    return source.reduce(function(result, value){
        if (value != void 0)
            result.push(value);
        return result;
    }, []);
}


/**
 * Remove `null` and `undefined` from object;
 *
 * @param {Object} source
 * @return {Object}
 * @api private
 */

function compactObject(source) {
    var result = {}, key;

    for (key in source) {
        var value = source[key];
        if (value != void 0)
            result[key] = value;
    }

    return result;
}
