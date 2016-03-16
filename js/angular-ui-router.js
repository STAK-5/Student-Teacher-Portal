/**
 * Created by syedmuhammadtaha on 3/16/16.
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.18
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
    module.exports = 'ui.router';
}

(function (window, angular, undefined) {
    /*jshint globalstrict:true*/
    /*global angular:false*/
    'use strict';

    var isDefined = angular.isDefined,
        isFunction = angular.isFunction,
        isString = angular.isString,
        isObject = angular.isObject,
        isArray = angular.isArray,
        forEach = angular.forEach,
        extend = angular.extend,
        copy = angular.copy,
        toJson = angular.toJson;

    function inherit(parent, extra) {
        return extend(new (extend(function() {}, { prototype: parent }))(), extra);
    }

    function merge(dst) {
        forEach(arguments, function(obj) {
            if (obj !== dst) {
                forEach(obj, function(value, key) {
                    if (!dst.hasOwnProperty(key)) dst[key] = value;
                });
            }
        });
        return dst;
    }

    /**
     * Finds the common ancestor path between two states.
     *
     * @param {Object} first The first state.
     * @param {Object} second The second state.
     * @return {Array} Returns an array of state names in descending order, not including the root.
     */
    function ancestors(first, second) {
        var path = [];

        for (var n in first.path) {
            if (first.path[n] !== second.path[n]) break;
            path.push(first.path[n]);
        }
        return path;
    }

    /**
     * IE8-safe wrapper for `Object.keys()`.
     *
     * @param {Object} object A JavaScript object.
     * @return {Array} Returns the keys of the object as an array.
     */
    function objectKeys(object) {
        if (Object.keys) {
            return Object.keys(object);
        }
        var result = [];

        forEach(object, function(val, key) {
            result.push(key);
        });
        return result;
    }

    /**
     * IE8-safe wrapper for `Array.prototype.indexOf()`.
     *
     * @param {Array} array A JavaScript array.
     * @param {*} value A value to search the array for.
     * @return {Number} Returns the array index value of `value`, or `-1` if not present.
     */
    function indexOf(array, value) {
        if (Array.prototype.indexOf) {
            return array.indexOf(value, Number(arguments[2]) || 0);
        }
        var len = array.length >>> 0, from = Number(arguments[2]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);

        if (from < 0) from += len;

        for (; from < len; from++) {
            if (from in array && array[from] === value) return from;
        }
        return -1;
    }

    /**
     * Merges a set of parameters with all parameters inherited between the common parents of the
     * current state and a given destination state.
     *
     * @param {Object} currentParams The value of the current state parameters ($stateParams).
     * @param {Object} newParams The set of parameters which will be composited with inherited params.
     * @param {Object} $current Internal definition of object representing the current state.
     * @param {Object} $to Internal definition of object representing state to transition to.
     */
    function inheritParams(currentParams, newParams, $current, $to) {
        var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

        for (var i in parents) {
            if (!parents[i] || !parents[i].params) continue;
            parentParams = objectKeys(parents[i].params);
            if (!parentParams.length) continue;

            for (var j in parentParams) {
                if (indexOf(inheritList, parentParams[j]) >= 0) continue;
                inheritList.push(parentParams[j]);
                inherited[parentParams[j]] = currentParams[parentParams[j]];
            }
        }
        return extend({}, inherited, newParams);
    }

    /**
     * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
     *
     * @param {Object} a The first object.
     * @param {Object} b The second object.
     * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
     *                     it defaults to the list of keys in `a`.
     * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
     */
    function equalForKeys(a, b, keys) {
        if (!keys) {
            keys = [];
            for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
        }

        for (var i=0; i<keys.length; i++) {
            var k = keys[i];
            if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
        }
        return true;
    }

    /**
     * Returns the subset of an object, based on a list of keys.
     *
     * @param {Array} keys
     * @param {Object} values
     * @return {Boolean} Returns a subset of `values`.
     */
    function filterByKeys(keys, values) {
        var filtered = {};

        forEach(keys, function (name) {
            filtered[name] = values[name];
        });
        return filtered;
    }

// like _.indexBy
// when you know that your index values will be unique, or you want last-one-in to win
    function indexBy(array, propName) {
        var result = {};
        forEach(array, function(item) {
            result[item[propName]] = item;
        });
        return result;
    }

// extracted from underscore.js
// Return a copy of the object only containing the whitelisted properties.
    function pick(obj) {
        var copy = {};
        var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        forEach(keys, function(key) {
            if (key in obj) copy[key] = obj[key];
        });
        return copy;
    }

// extracted from underscore.js
// Return a copy of the object omitting the blacklisted properties.
    function omit(obj) {
        var copy = {};
        var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var key in obj) {
            if (indexOf(keys, key) == -1) copy[key] = obj[key];
        }
        return copy;
    }

    function pluck(collection, key) {
        var result = isArray(collection) ? [] : {};

        forEach(collection, function(val, i) {
            result[i] = isFunction(key) ? key(val) : val[key];
        });
        return result;
    }

    function filter(collection, callback) {
        var array = isArray(collection);
        var result = array ? [] : {};
        forEach(collection, function(val, i) {
            if (callback(val, i)) {
                result[array ? result.length : i] = val;
            }
        });
        return result;
    }

    function map(collection, callback) {
        var result = isArray(collection) ? [] : {};

        forEach(collection, function(val, i) {
            result[i] = callback(val, i);
        });
        return result;
    }

    /**
     * @ngdoc overview
     * @name ui.router.util
     *
     * @description
     * # ui.router.util sub-module
     *
     * This module is a dependency of other sub-modules. Do not include this module as a dependency
     * in your angular app (use {@link ui.router} module instead).
     *
     */
    angular.module('ui.router.util', ['ng']);

    /**
     * @ngdoc overview
     * @name ui.router.router
     *
     * @requires ui.router.util
     *
     * @description
     * # ui.router.router sub-module
     *
     * This module is a dependency of other sub-modules. Do not include this module as a dependency
     * in your angular app (use {@link ui.router} module instead).
     */
    angular.module('ui.router.router', ['ui.router.util']);

    /**
     * @ngdoc overview
     * @name ui.router.state
     *
     * @requires ui.router.router
     * @requires ui.router.util
     *
     * @description
     * # ui.router.state sub-module
     *
     * This module is a dependency of the main ui.router module. Do not include this module as a dependency
     * in your angular app (use {@link ui.router} module instead).
     *
     */
    angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

    /**
     * @ngdoc overview
     * @name ui.router
     *
     * @requires ui.router.state
     *
     * @description
     * # ui.router
     *
     * ## The main module for ui.router
     * There are several sub-modules included with the ui.router module, however only this module is needed
     * as a dependency within your angular app. The other modules are for organization purposes.
     *
     * The modules are:
     * * ui.router - the main "umbrella" module
     * * ui.router.router -
     *
     * *You'll need to include **only** this module as the dependency within your angular app.*
     *
     * <pre>
     * <!doctype html>
     * <html ng-app="myApp">
     * <head>
     *   <script src="js/angular.js"></script>
     *   <!-- Include the ui-router script -->
     *   <script src="js/angular-ui-router.min.js"></script>
     *   <script>
     *     // ...and add 'ui.router' as a dependency
     *     var myApp = angular.module('myApp', ['ui.router']);
     *   </script>
     * </head>
     * <body>
     * </body>
     * </html>
     * </pre>
     */
    angular.module('ui.router', ['ui.router.state']);

    angular.module('ui.router.compat', ['ui.router']);

    /**
     * @ngdoc object
     * @name ui.router.util.$resolve
     *
     * @requires $q
     * @requires $injector
     *
     * @description
     * Manages resolution of (acyclic) graphs of promises.
     */
    $Resolve.$inject = ['$q', '$injector'];
    function $Resolve(  $q,    $injector) {

        var VISIT_IN_PROGRESS = 1,
            VISIT_DONE = 2,
            NOTHING = {},
            NO_DEPENDENCIES = [],
            NO_LOCALS = NOTHING,
            NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });


        /**
         * @ngdoc function
         * @name ui.router.util.$resolve#study
         * @methodOf ui.router.util.$resolve
         *
         * @description
         * Studies a set of invocables that are likely to be used multiple times.
         * <pre>
         * $resolve.study(invocables)(locals, parent, self)
         * </pre>
         * is equivalent to
         * <pre>
         * $resolve.resolve(invocables, locals, parent, self)
         * </pre>
         * but the former is more efficient (in fact `resolve` just calls `study`
         * internally).
         *
         * @param {object} invocables Invocable objects
         * @return {function} a function to pass in locals, parent and self
         */
        this.study = function (invocables) {
            if (!isObject(invocables)) throw new Error("'invocables' must be an object");
            var invocableKeys = objectKeys(invocables || {});

            // Perform a topological sort of invocables to build an ordered plan
            var plan = [], cycle = [], visited = {};
            function visit(value, key) {
                if (visited[key] === VISIT_DONE) return;

                cycle.push(key);
                if (visited[key] === VISIT_IN_PROGRESS) {
                    cycle.splice(0, indexOf(cycle, key));
                    throw new Error("Cyclic dependency: " + cycle.join(" -> "));
                }
                visited[key] = VISIT_IN_PROGRESS;

                if (isString(value)) {
                    plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
                } else {
                    var params = $injector.annotate(value);
                    forEach(params, function (param) {
                        if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
                    });
                    plan.push(key, value, params);
                }

                cycle.pop();
                visited[key] = VISIT_DONE;
            }
            forEach(invocables, visit);
            invocables = cycle = visited = null; // plan is all that's required

            function isResolve(value) {
                return isObject(value) && value.then && value.$$promises;
            }

            return function (locals, parent, self) {
                if (isResolve(locals) && self === undefined) {
                    self = parent; parent = locals; locals = null;
                }
                if (!locals) locals = NO_LOCALS;
                else if (!isObject(locals)) {
                    throw new Error("'locals' must be an object");
                }
                if (!parent) parent = NO_PARENT;
                else if (!isResolve(parent)) {
                    throw new Error("'parent' must be a promise returned by $resolve.resolve()");
                }

                // To complete the overall resolution, we have to wait for the parent
                // promise and for the promise for each invokable in our plan.
                var resolution = $q.defer(),
                    result = resolution.promise,
                    promises = result.$$promises = {},
                    values = extend({}, locals),
                    wait = 1 + plan.length/3,
                    merged = false;

                function done() {
                    // Merge parent values we haven't got yet and publish our own $$values
                    if (!--wait) {
                        if (!merged) merge(values, parent.$$values);
                        result.$$values = values;
                        result.$$promises = result.$$promises || true; // keep for isResolve()
                        delete result.$$inheritedValues;
                        resolution.resolve(values);
                    }
                }

                function fail(reason) {
                    result.$$failure = reason;
                    resolution.reject(reason);
                }

                // Short-circuit if parent has already failed
                if (isDefined(parent.$$failure)) {
                    fail(parent.$$failure);
                    return result;
                }

                if (parent.$$inheritedValues) {
                    merge(values, omit(parent.$$inheritedValues, invocableKeys));
                }

                // Merge parent values if the parent has already resolved, or merge
                // parent promises and wait if the parent resolve is still in progress.
                extend(promises, parent.$$promises);
                if (parent.$$values) {
                    merged = merge(values, omit(parent.$$values, invocableKeys));
                    result.$$inheritedValues = omit(parent.$$values, invocableKeys);
                    done();
                } else {
                    if (parent.$$inheritedValues) {
                        result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
                    }
                    parent.then(done, fail);
                }

                // Process each invocable in the plan, but ignore any where a local of the same name exists.
                for (var i=0, ii=plan.length; i<ii; i+=3) {
                    if (locals.hasOwnProperty(plan[i])) done();
                    else invoke(plan[i], plan[i+1], plan[i+2]);
                }

                function invoke(key, invocable, params) {
                    // Create a deferred for this invocation. Failures will propagate to the resolution as well.
                    var invocation = $q.defer(), waitParams = 0;
                    function onfailure(reason) {
                        invocation.reject(reason);
                        fail(reason);
                    }
                    // Wait for any parameter that we have a promise for (either from parent or from this
                    // resolve; in that case study() will have made sure it's ordered before us in the plan).
                    forEach(params, function (dep) {
                        if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
                            waitParams++;
                            promises[dep].then(function (result) {
                                values[dep] = result;
                                if (!(--waitParams)) proceed();
                            }, onfailure);
                        }
                    });
                    if (!waitParams) proceed();
                    function proceed() {
                        if (isDefined(result.$$failure)) return;
                        try {
                            invocation.resolve($injector.invoke(invocable, self, values));
                            invocation.promise.then(function (result) {
                                values[key] = result;
                                done();
                            }, onfailure);
                        } catch (e) {
                            onfailure(e);
                        }
                    }
                    // Publish promise synchronously; invocations further down in the plan may depend on it.
                    promises[key] = invocation.promise;
                }

                return result;
            };
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$resolve#resolve
         * @methodOf ui.router.util.$resolve
         *
         * @description
         * Resolves a set of invocables. An invocable is a function to be invoked via
         * `$injector.invoke()`, and can have an arbitrary number of dependencies.
         * An invocable can either return a value directly,
         * or a `$q` promise. If a promise is returned it will be resolved and the
         * resulting value will be used instead. Dependencies of invocables are resolved
         * (in this order of precedence)
         *
         * - from the specified `locals`
         * - from another invocable that is part of this `$resolve` call
         * - from an invocable that is inherited from a `parent` call to `$resolve`
         *   (or recursively
         * - from any ancestor `$resolve` of that parent).
         *
         * The return value of `$resolve` is a promise for an object that contains
         * (in this order of precedence)
         *
         * - any `locals` (if specified)
         * - the resolved return values of all injectables
         * - any values inherited from a `parent` call to `$resolve` (if specified)
         *
         * The promise will resolve after the `parent` promise (if any) and all promises
         * returned by injectables have been resolved. If any invocable
         * (or `$injector.invoke`) throws an exception, or if a promise returned by an
         * invocable is rejected, the `$resolve` promise is immediately rejected with the
         * same error. A rejection of a `parent` promise (if specified) will likewise be
         * propagated immediately. Once the `$resolve` promise has been rejected, no
         * further invocables will be called.
         *
         * Cyclic dependencies between invocables are not permitted and will cause `$resolve`
         * to throw an error. As a special case, an injectable can depend on a parameter
         * with the same name as the injectable, which will be fulfilled from the `parent`
         * injectable of the same name. This allows inherited values to be decorated.
         * Note that in this case any other injectable in the same `$resolve` with the same
         * dependency would see the decorated value, not the inherited value.
         *
         * Note that missing dependencies -- unlike cyclic dependencies -- will cause an
         * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous)
         * exception.
         *
         * Invocables are invoked eagerly as soon as all dependencies are available.
         * This is true even for dependencies inherited from a `parent` call to `$resolve`.
         *
         * As a special case, an invocable can be a string, in which case it is taken to
         * be a service name to be passed to `$injector.get()`. This is supported primarily
         * for backwards-compatibility with the `resolve` property of `$routeProvider`
         * routes.
         *
         * @param {object} invocables functions to invoke or
         * `$injector` services to fetch.
         * @param {object} locals  values to make available to the injectables
         * @param {object} parent  a promise returned by another call to `$resolve`.
         * @param {object} self  the `this` for the invoked methods
         * @return {object} Promise for an object that contains the resolved return value
         * of all invocables, as well as any inherited and local values.
         */
        this.resolve = function (invocables, locals, parent, self) {
            return this.study(invocables)(locals, parent, self);
        };
    }

    angular.module('ui.router.util').service('$resolve', $Resolve);


    /**
     * @ngdoc object
     * @name ui.router.util.$templateFactory
     *
     * @requires $http
     * @requires $templateCache
     * @requires $injector
     *
     * @description
     * Service. Manages loading of templates.
     */
    $TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
    function $TemplateFactory(  $http,   $templateCache,   $injector) {

        /**
         * @ngdoc function
         * @name ui.router.util.$templateFactory#fromConfig
         * @methodOf ui.router.util.$templateFactory
         *
         * @description
         * Creates a template from a configuration object.
         *
         * @param {object} config Configuration object for which to load a template.
         * The following properties are search in the specified order, and the first one
         * that is defined is used to create the template:
         *
         * @param {string|object} config.template html string template or function to
         * load via {@link ui.router.util.$templateFactory#fromString fromString}.
         * @param {string|object} config.templateUrl url to load or a function returning
         * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
         * @param {Function} config.templateProvider function to invoke via
         * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
         * @param {object} params  Parameters to pass to the template function.
         * @param {object} locals Locals to pass to `invoke` if the template is loaded
         * via a `templateProvider`. Defaults to `{ params: params }`.
         *
         * @return {string|object}  The template html as a string, or a promise for
         * that string,or `null` if no template is configured.
         */
        this.fromConfig = function (config, params, locals) {
            return (
                isDefined(config.template) ? this.fromString(config.template, params) :
                    isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
                        isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
                            null
            );
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$templateFactory#fromString
         * @methodOf ui.router.util.$templateFactory
         *
         * @description
         * Creates a template from a string or a function returning a string.
         *
         * @param {string|object} template html template as a string or function that
         * returns an html template as a string.
         * @param {object} params Parameters to pass to the template function.
         *
         * @return {string|object} The template html as a string, or a promise for that
         * string.
         */
        this.fromString = function (template, params) {
            return isFunction(template) ? template(params) : template;
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$templateFactory#fromUrl
         * @methodOf ui.router.util.$templateFactory
         *
         * @description
         * Loads a template from the a URL via `$http` and `$templateCache`.
         *
         * @param {string|Function} url url of the template to load, or a function
         * that returns a url.
         * @param {Object} params Parameters to pass to the url function.
         * @return {string|Promise.<string>} The template html as a string, or a promise
         * for that string.
         */
        this.fromUrl = function (url, params) {
            if (isFunction(url)) url = url(params);
            if (url == null) return null;
            else return $http
                .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
                .then(function(response) { return response.data; });
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$templateFactory#fromProvider
         * @methodOf ui.router.util.$templateFactory
         *
         * @description
         * Creates a template by invoking an injectable provider function.
         *
         * @param {Function} provider Function to invoke via `$injector.invoke`
         * @param {Object} params Parameters for the template.
         * @param {Object} locals Locals to pass to `invoke`. Defaults to
         * `{ params: params }`.
         * @return {string|Promise.<string>} The template html as a string, or a promise
         * for that string.
         */
        this.fromProvider = function (provider, params, locals) {
            return $injector.invoke(provider, null, locals || { params: params });
        };
    }

    angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

    var $$UMFP; // reference to $UrlMatcherFactoryProvider

    /**
     * @ngdoc object
     * @name ui.router.util.type:UrlMatcher
     *
     * @description
     * Matches URLs against patterns and extracts named parameters from the path or the search
     * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
     * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
     * do not influence whether or not a URL is matched, but their values are passed through into
     * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
     *
     * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
     * syntax, which optionally allows a regular expression for the parameter to be specified:
     *
     * * `':'` name - colon placeholder
     * * `'*'` name - catch-all placeholder
     * * `'{' name '}'` - curly placeholder
     * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
     *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
     *
     * Parameter names may contain only word characters (latin letters, digits, and underscore) and
     * must be unique within the pattern (across both path and search parameters). For colon
     * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
     * number of characters other than '/'. For catch-all placeholders the path parameter matches
     * any number of characters.
     *
     * Examples:
     *
     * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
     *   trailing slashes, and patterns have to match the entire path, not just a prefix.
     * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
     *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
     * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
     * * `'/user/{id:[^/]*}'` - Same as the previous example.
     * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
     *   parameter consists of 1 to 8 hex digits.
     * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
     *   path into the parameter 'path'.
     * * `'/files/*path'` - ditto.
     * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
     *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
     *
     * @param {string} pattern  The pattern to compile into a matcher.
     * @param {Object} config  A configuration object hash:
     * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
     *   an existing UrlMatcher
     *
     * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
     * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
     *
     * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
     *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
     *   non-null) will start with this prefix.
     *
     * @property {string} source  The pattern that was passed into the constructor
     *
     * @property {string} sourcePath  The path portion of the source property
     *
     * @property {string} sourceSearch  The search portion of the source property
     *
     * @property {string} regex  The constructed regex that will be used to match against the url when
     *   it is time to determine which url will match.
     *
     * @returns {Object}  New `UrlMatcher` object
     */
    function UrlMatcher(pattern, config, parentMatcher) {
        config = extend({ params: {} }, isObject(config) ? config : {});

        // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
        //   '*' name
        //   ':' name
        //   '{' name '}'
        //   '{' name ':' regexp '}'
        // The regular expression is somewhat complicated due to the need to allow curly braces
        // inside the regular expression. The placeholder regexp breaks down as follows:
        //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
        //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
        //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
        //    [^{}\\]+                       - anything other than curly braces or backslash
        //    \\.                            - a backslash escape
        //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
        var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
            compiled = '^', last = 0, m,
            segments = this.segments = [],
            parentParams = parentMatcher ? parentMatcher.params : {},
            params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
            paramNames = [];

        function addParameter(id, type, config, location) {
            paramNames.push(id);
            if (parentParams[id]) return parentParams[id];
            if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
            if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
            params[id] = new $$UMFP.Param(id, type, config, location);
            return params[id];
        }

        function quoteRegExp(string, pattern, squash, optional) {
            var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!pattern) return result;
            switch(squash) {
                case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
                case true:
                    result = result.replace(/\/$/, '');
                    surroundPattern = ['(?:\/(', ')|\/)?'];
                    break;
                default:    surroundPattern = ['(' + squash + "|", ')?']; break;
            }
            return result + surroundPattern[0] + pattern + surroundPattern[1];
        }

        this.source = pattern;

        // Split into static segments separated by path parameter placeholders.
        // The number of segments is always 1 more than the number of parameters.
        function matchDetails(m, isSearch) {
            var id, regexp, segment, type, cfg, arrayMode;
            id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
            cfg         = config.params[id];
            segment     = pattern.substring(last, m.index);
            regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);

            if (regexp) {
                type      = $$UMFP.type(regexp) || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
            }

            return {
                id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
            };
        }

        var p, param, segment;
        while ((m = placeholder.exec(pattern))) {
            p = matchDetails(m, false);
            if (p.segment.indexOf('?') >= 0) break; // we're into the search part

            param = addParameter(p.id, p.type, p.cfg, "path");
            compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
            segments.push(p.segment);
            last = placeholder.lastIndex;
        }
        segment = pattern.substring(last);

        // Find any search parameter names and remove them from the last segment
        var i = segment.indexOf('?');

        if (i >= 0) {
            var search = this.sourceSearch = segment.substring(i);
            segment = segment.substring(0, i);
            this.sourcePath = pattern.substring(0, last + i);

            if (search.length > 0) {
                last = 0;
                while ((m = searchPlaceholder.exec(search))) {
                    p = matchDetails(m, true);
                    param = addParameter(p.id, p.type, p.cfg, "search");
                    last = placeholder.lastIndex;
                    // check if ?&
                }
            }
        } else {
            this.sourcePath = pattern;
            this.sourceSearch = '';
        }

        compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
        segments.push(segment);

        this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
        this.prefix = segments[0];
        this.$$paramNames = paramNames;
    }

    /**
     * @ngdoc function
     * @name ui.router.util.type:UrlMatcher#concat
     * @methodOf ui.router.util.type:UrlMatcher
     *
     * @description
     * Returns a new matcher for a pattern constructed by appending the path part and adding the
     * search parameters of the specified pattern to this pattern. The current pattern is not
     * modified. This can be understood as creating a pattern for URLs that are relative to (or
     * suffixes of) the current pattern.
     *
     * @example
     * The following two matchers are equivalent:
     * <pre>
     * new UrlMatcher('/user/{id}?q').concat('/details?date');
     * new UrlMatcher('/user/{id}/details?q&date');
     * </pre>
     *
     * @param {string} pattern  The pattern to append.
     * @param {Object} config  An object hash of the configuration for the matcher.
     * @returns {UrlMatcher}  A matcher for the concatenated pattern.
     */
    UrlMatcher.prototype.concat = function (pattern, config) {
        // Because order of search parameters is irrelevant, we can add our own search
        // parameters to the end of the new pattern. Parse the new pattern by itself
        // and then join the bits together, but it's much easier to do this on a string level.
        var defaultConfig = {
            caseInsensitive: $$UMFP.caseInsensitive(),
            strict: $$UMFP.strictMode(),
            squash: $$UMFP.defaultSquashPolicy()
        };
        return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
    };

    UrlMatcher.prototype.toString = function () {
        return this.source;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.type:UrlMatcher#exec
     * @methodOf ui.router.util.type:UrlMatcher
     *
     * @description
     * Tests the specified path against this matcher, and returns an object containing the captured
     * parameter values, or null if the path does not match. The returned object contains the values
     * of any search parameters that are mentioned in the pattern, but their value may be null if
     * they are not present in `searchParams`. This means that search parameters are always treated
     * as optional.
     *
     * @example
     * <pre>
     * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
 *   x: '1', q: 'hello'
 * });
     * // returns { id: 'bob', q: 'hello', r: null }
     * </pre>
     *
     * @param {string} path  The URL path to match, e.g. `$location.path()`.
     * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
     * @returns {Object}  The captured parameter values.
     */
    UrlMatcher.prototype.exec = function (path, searchParams) {
        var m = this.regexp.exec(path);
        if (!m) return null;
        searchParams = searchParams || {};

        var paramNames = this.parameters(), nTotal = paramNames.length,
            nPath = this.segments.length - 1,
            values = {}, i, j, cfg, paramName;

        if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

        function decodePathArray(string) {
            function reverseString(str) { return str.split("").reverse().join(""); }
            function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

            var split = reverseString(string).split(/-(?!\\)/);
            var allReversed = map(split, reverseString);
            return map(allReversed, unquoteDashes).reverse();
        }

        var param, paramVal;
        for (i = 0; i < nPath; i++) {
            paramName = paramNames[i];
            param = this.params[paramName];
            paramVal = m[i+1];
            // if the param value matches a pre-replace pair, replace the value before decoding.
            for (j = 0; j < param.replace.length; j++) {
                if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
            }
            if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
            if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
            values[paramName] = param.value(paramVal);
        }
        for (/**/; i < nTotal; i++) {
            paramName = paramNames[i];
            values[paramName] = this.params[paramName].value(searchParams[paramName]);
            param = this.params[paramName];
            paramVal = searchParams[paramName];
            for (j = 0; j < param.replace.length; j++) {
                if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
            }
            if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
            values[paramName] = param.value(paramVal);
        }

        return values;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.type:UrlMatcher#parameters
     * @methodOf ui.router.util.type:UrlMatcher
     *
     * @description
     * Returns the names of all path and search parameters of this pattern in an unspecified order.
     *
     * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
     *    pattern has no parameters, an empty array is returned.
     */
    UrlMatcher.prototype.parameters = function (param) {
        if (!isDefined(param)) return this.$$paramNames;
        return this.params[param] || null;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.type:UrlMatcher#validates
     * @methodOf ui.router.util.type:UrlMatcher
     *
     * @description
     * Checks an object hash of parameters to validate their correctness according to the parameter
     * types of this `UrlMatcher`.
     *
     * @param {Object} params The object hash of parameters to validate.
     * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
     */
    UrlMatcher.prototype.validates = function (params) {
        return this.params.$$validates(params);
    };

    /**
     * @ngdoc function
     * @name ui.router.util.type:UrlMatcher#format
     * @methodOf ui.router.util.type:UrlMatcher
     *
     * @description
     * Creates a URL that matches this pattern by substituting the specified values
     * for the path and search parameters. Null values for path parameters are
     * treated as empty strings.
     *
     * @example
     * <pre>
     * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
     * // returns '/user/bob?q=yes'
     * </pre>
     *
     * @param {Object} values  the values to substitute for the parameters in this pattern.
     * @returns {string}  the formatted URL (path and optionally search part).
     */
    UrlMatcher.prototype.format = function (values) {
        values = values || {};
        var segments = this.segments, params = this.parameters(), paramset = this.params;
        if (!this.validates(values)) return null;

        var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

        function encodeDashes(str) { // Replace dashes with encoded "\-"
            return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
        }

        for (i = 0; i < nTotal; i++) {
            var isPathParam = i < nPath;
            var name = params[i], param = paramset[name], value = param.value(values[name]);
            var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
            var squash = isDefaultValue ? param.squash : false;
            var encoded = param.type.encode(value);

            if (isPathParam) {
                var nextSegment = segments[i + 1];
                var isFinalPathParam = i + 1 === nPath;

                if (squash === false) {
                    if (encoded != null) {
                        if (isArray(encoded)) {
                            result += map(encoded, encodeDashes).join("-");
                        } else {
                            result += encodeURIComponent(encoded);
                        }
                    }
                    result += nextSegment;
                } else if (squash === true) {
                    var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    result += nextSegment.match(capture)[1];
                } else if (isString(squash)) {
                    result += squash + nextSegment;
                }

                if (isFinalPathParam && param.squash === true && result.slice(-1) === '/') result = result.slice(0, -1);
            } else {
                if (encoded == null || (isDefaultValue && squash !== false)) continue;
                if (!isArray(encoded)) encoded = [ encoded ];
                if (encoded.length === 0) continue;
                encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
                result += (search ? '&' : '?') + (name + '=' + encoded);
                search = true;
            }
        }

        return result;
    };

    /**
     * @ngdoc object
     * @name ui.router.util.type:Type
     *
     * @description
     * Implements an interface to define custom parameter types that can be decoded from and encoded to
     * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
     * objects when matching or formatting URLs, or comparing or validating parameter values.
     *
     * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
     * information on registering custom types.
     *
     * @param {Object} config  A configuration object which contains the custom type definition.  The object's
     *        properties will override the default methods and/or pattern in `Type`'s public interface.
     * @example
     * <pre>
     * {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val && val.toString(); },
 *   equals: function(a, b) { return this.is(a) && a === b; },
 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
 *   pattern: /\d+/
 * }
     * </pre>
     *
     * @property {RegExp} pattern The regular expression pattern used to match values of this type when
     *           coming from a substring of a URL.
     *
     * @returns {Object}  Returns a new `Type` object.
     */
    function Type(config) {
        extend(this, config);
    }

    /**
     * @ngdoc function
     * @name ui.router.util.type:Type#is
     * @methodOf ui.router.util.type:Type
     *
     * @description
     * Detects whether a value is of a particular type. Accepts a native (decoded) value
     * and determines whether it matches the current `Type` object.
     *
     * @param {*} val  The value to check.
     * @param {string} key  Optional. If the type check is happening in the context of a specific
     *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
     *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
     * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
     */
    Type.prototype.is = function(val, key) {
        return true;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.type:Type#encode
     * @methodOf ui.router.util.type:Type
     *
     * @description
     * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
     * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
     * only needs to be a representation of `val` that has been coerced to a string.
     *
     * @param {*} val  The value to encode.
     * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
     *        meta-programming of `Type` objects.
     * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
     */
    Type.prototype.encode = function(val, key) {
        return val;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.type:Type#decode
     * @methodOf ui.router.util.type:Type
     *
     * @description
     * Converts a parameter value (from URL string or transition param) to a custom/native value.
     *
     * @param {string} val  The URL parameter value to decode.
     * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
     *        meta-programming of `Type` objects.
     * @returns {*}  Returns a custom representation of the URL parameter value.
     */
    Type.prototype.decode = function(val, key) {
        return val;
    };

    /**
     * @ngdoc function
     * @name ui.router.util.type:Type#equals
     * @methodOf ui.router.util.type:Type
     *
     * @description
     * Determines whether two decoded values are equivalent.
     *
     * @param {*} a  A value to compare against.
     * @param {*} b  A value to compare against.
     * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
     */
    Type.prototype.equals = function(a, b) {
        return a == b;
    };

    Type.prototype.$subPattern = function() {
        var sub = this.pattern.toString();
        return sub.substr(1, sub.length - 2);
    };

    Type.prototype.pattern = /.*/;

    Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

    /** Given an encoded string, or a decoded object, returns a decoded object */
    Type.prototype.$normalize = function(val) {
        return this.is(val) ? val : this.decode(val);
    };

    /*
     * Wraps an existing custom Type as an array of Type, depending on 'mode'.
     * e.g.:
     * - urlmatcher pattern "/path?{queryParam[]:int}"
     * - url: "/path?queryParam=1&queryParam=2
     * - $stateParams.queryParam will be [1, 2]
     * if `mode` is "auto", then
     * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
     * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
     */
    Type.prototype.$asArray = function(mode, isSearch) {
        if (!mode) return this;
        if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

        function ArrayType(type, mode) {
            function bindTo(type, callbackName) {
                return function() {
                    return type[callbackName].apply(type, arguments);
                };
            }

            // Wrap non-array value as array
            function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
            // Unwrap array value for "auto" mode. Return undefined for empty array.
            function arrayUnwrap(val) {
                switch(val.length) {
                    case 0: return undefined;
                    case 1: return mode === "auto" ? val[0] : val;
                    default: return val;
                }
            }
            function falsey(val) { return !val; }

            // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
            function arrayHandler(callback, allTruthyMode) {
                return function handleArray(val) {
                    if (isArray(val) && val.length === 0) return val;
                    val = arrayWrap(val);
                    var result = map(val, callback);
                    if (allTruthyMode === true)
                        return filter(result, falsey).length === 0;
                    return arrayUnwrap(result);
                };
            }

            // Wraps type (.equals) functions to operate on each value of an array
            function arrayEqualsHandler(callback) {
                return function handleArray(val1, val2) {
                    var left = arrayWrap(val1), right = arrayWrap(val2);
                    if (left.length !== right.length) return false;
                    for (var i = 0; i < left.length; i++) {
                        if (!callback(left[i], right[i])) return false;
                    }
                    return true;
                };
            }

            this.encode = arrayHandler(bindTo(type, 'encode'));
            this.decode = arrayHandler(bindTo(type, 'decode'));
            this.is     = arrayHandler(bindTo(type, 'is'), true);
            this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
            this.pattern = type.pattern;
            this.$normalize = arrayHandler(bindTo(type, '$normalize'));
            this.name = type.name;
            this.$arrayMode = mode;
        }

        return new ArrayType(this, mode);
    };



    /**
     * @ngdoc object
     * @name ui.router.util.$urlMatcherFactory
     *
     * @description
     * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
     * is also available to providers under the name `$urlMatcherFactoryProvider`.
     */
    function $UrlMatcherFactory() {
        $$UMFP = this;

        var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

        // Use tildes to pre-encode slashes.
        // If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
        // and bidirectional encoding/decoding fails.
        // Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
        function valToString(val) { return val != null ? val.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : val; }
        function valFromString(val) { return val != null ? val.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : val; }

        var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
            "string": {
                encode: valToString,
                decode: valFromString,
                // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
                // In 0.2.x, string params are optional by default for backwards compat
                is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
                pattern: /[^/]*/
            },
            "int": {
                encode: valToString,
                decode: function(val) { return parseInt(val, 10); },
                is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
                pattern: /\d+/
            },
            "bool": {
                encode: function(val) { return val ? 1 : 0; },
                decode: function(val) { return parseInt(val, 10) !== 0; },
                is: function(val) { return val === true || val === false; },
                pattern: /0|1/
            },
            "date": {
                encode: function (val) {
                    if (!this.is(val))
                        return undefined;
                    return [ val.getFullYear(),
                        ('0' + (val.getMonth() + 1)).slice(-2),
                        ('0' + val.getDate()).slice(-2)
                    ].join("-");
                },
                decode: function (val) {
                    if (this.is(val)) return val;
                    var match = this.capture.exec(val);
                    return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
                },
                is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
                equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            "json": {
                encode: angular.toJson,
                decode: angular.fromJson,
                is: angular.isObject,
                equals: angular.equals,
                pattern: /[^/]*/
            },
            "any": { // does not encode/decode
                encode: angular.identity,
                decode: angular.identity,
                equals: angular.equals,
                pattern: /.*/
            }
        };

        function getDefaultConfig() {
            return {
                strict: isStrictMode,
                caseInsensitive: isCaseInsensitive
            };
        }

        function isInjectable(value) {
            return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
        }

        /**
         * [Internal] Get the default value of a parameter, which may be an injectable function.
         */
        $UrlMatcherFactory.$$getDefaultValue = function(config) {
            if (!isInjectable(config.value)) return config.value;
            if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
            return injector.invoke(config.value);
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$urlMatcherFactory#caseInsensitive
         * @methodOf ui.router.util.$urlMatcherFactory
         *
         * @description
         * Defines whether URL matching should be case sensitive (the default behavior), or not.
         *
         * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
         * @returns {boolean} the current value of caseInsensitive
         */
        this.caseInsensitive = function(value) {
            if (isDefined(value))
                isCaseInsensitive = value;
            return isCaseInsensitive;
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$urlMatcherFactory#strictMode
         * @methodOf ui.router.util.$urlMatcherFactory
         *
         * @description
         * Defines whether URLs should match trailing slashes, or not (the default behavior).
         *
         * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
         * @returns {boolean} the current value of strictMode
         */
        this.strictMode = function(value) {
            if (isDefined(value))
                isStrictMode = value;
            return isStrictMode;
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
         * @methodOf ui.router.util.$urlMatcherFactory
         *
         * @description
         * Sets the default behavior when generating or matching URLs with default parameter values.
         *
         * @param {string} value A string that defines the default parameter URL squashing behavior.
         *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
         *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
         *             parameter is surrounded by slashes, squash (remove) one slash from the URL
         *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
         *             the parameter value from the URL and replace it with this string.
         */
        this.defaultSquashPolicy = function(value) {
            if (!isDefined(value)) return defaultSquashPolicy;
            if (value !== true && value !== false && !isString(value))
                throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
            defaultSquashPolicy = value;
            return value;
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$urlMatcherFactory#compile
         * @methodOf ui.router.util.$urlMatcherFactory
         *
         * @description
         * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
         *
         * @param {string} pattern  The URL pattern.
         * @param {Object} config  The config object hash.
         * @returns {UrlMatcher}  The UrlMatcher.
         */
        this.compile = function (pattern, config) {
            return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$urlMatcherFactory#isMatcher
         * @methodOf ui.router.util.$urlMatcherFactory
         *
         * @description
         * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
         *
         * @param {Object} object  The object to perform the type check against.
         * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
         *          implementing all the same methods.
         */
        this.isMatcher = function (o) {
            if (!isObject(o)) return false;
            var result = true;

            forEach(UrlMatcher.prototype, function(val, name) {
                if (isFunction(val)) {
                    result = result && (isDefined(o[name]) && isFunction(o[name]));
                }
            });
            return result;
        };

        /**
         * @ngdoc function
         * @name ui.router.util.$urlMatcherFactory#type
         * @methodOf ui.router.util.$urlMatcherFactory
         *
         * @description
         * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
         * generate URLs with typed parameters.
         *
         * @param {string} name  The type name.
         * @param {Object|Function} definition   The type definition. See
         *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
         * @param {Object|Function} definitionFn (optional) A function that is injected before the app
         *        runtime starts.  The result of this function is merged into the existing `definition`.
         *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
         *
         * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
         *
         * @example
         * This is a simple example of a custom type that encodes and decodes items from an
         * array, using the array index as the URL-encoded value:
         *
         * <pre>
         * var list = ['John', 'Paul', 'George', 'Ringo'];
         *
         * $urlMatcherFactoryProvider.type('listItem', {
   *   encode: function(item) {
   *     // Represent the list item in the URL using its corresponding index
   *     return list.indexOf(item);
   *   },
   *   decode: function(item) {
   *     // Look up the list item by index
   *     return list[parseInt(item, 10)];
   *   },
   *   is: function(item) {
   *     // Ensure the item is valid by checking to see that it appears
   *     // in the list
   *     return list.indexOf(item) > -1;
   *   }
   * });
         *
         * $stateProvider.state('list', {
   *   url: "/list/{item:listItem}",
   *   controller: function($scope, $stateParams) {
   *     console.log($stateParams.item);
   *   }
   * });
         *
         * // ...
         *
         * // Changes URL to '/list/3', logs "Ringo" to the console
         * $state.go('list', { item: "Ringo" });
         * </pre>
         *
         * This is a more complex example of a type that relies on dependency injection to
         * interact with services, and uses the parameter name from the URL to infer how to
         * handle encoding and decoding parameter values:
         *
         * <pre>
         * // Defines a custom type that gets a value from a service,
         * // where each service gets different types of values from
         * // a backend API:
         * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
   *
   *   // Matches up services to URL parameter names
   *   var services = {
   *     user: Users,
   *     post: Posts
   *   };
   *
   *   return {
   *     encode: function(object) {
   *       // Represent the object in the URL using its unique ID
   *       return object.id;
   *     },
   *     decode: function(value, key) {
   *       // Look up the object by ID, using the parameter
   *       // name (key) to call the correct service
   *       return services[key].findById(value);
   *     },
   *     is: function(object, key) {
   *       // Check that object is a valid dbObject
   *       return angular.isObject(object) && object.id && services[key];
   *     }
   *     equals: function(a, b) {
   *       // Check the equality of decoded objects by comparing
   *       // their unique IDs
   *       return a.id === b.id;
   *     }
   *   };
   * });
         *
         * // In a config() block, you can then attach URLs with
         * // type-annotated parameters:
         * $stateProvider.state('users', {
   *   url: "/users",
   *   // ...
   * }).state('users.item', {
   *   url: "/{user:dbObject}",
   *   controller: function($scope, $stateParams) {
   *     // $stateParams.user will now be an object returned from
   *     // the Users service
   *   },
   *   // ...
   * });
         * </pre>
         */
        this.type = function (name, definition, definitionFn) {
            if (!isDefined(definition)) return $types[name];
            if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

            $types[name] = new Type(extend({ name: name }, definition));
            if (definitionFn) {
                typeQueue.push({ name: name, def: definitionFn });
                if (!enqueue) flushTypeQueue();
            }
            return this;
        };

// `flushTypeQueue()` waits until