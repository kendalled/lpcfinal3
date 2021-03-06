(function ($, FilePond) {
    'use strict'; if (!$ || !FilePond) { return }
    if (!FilePond.supported()) { $.fn.filepond = function () { }; return }
    function argsToArray(args) { return Array.prototype.slice.call(args) }
    function isFactory(args) { return !args.length || typeof args[0] === 'object' }
    function isGetter(obj, key) { var descriptor = Object.getOwnPropertyDescriptor(obj, key); return descriptor ? typeof descriptor.get !== 'undefined' : !1 }
    function isSetter(obj, key) { var descriptor = Object.getOwnPropertyDescriptor(obj, key); return descriptor ? typeof descriptor.set !== 'undefined' : !1 }
    function isMethod(obj, key) { return typeof obj[key] === 'function' }
    $.fn.filepond = function () {
        var args = argsToArray(arguments); var results = []; var items = this.each(function () {
            if (isFactory(args)) {
                FilePond.create(this, args[0])
                return
            }
            var pond = FilePond.find(this); if (!pond) { return }
            var key = args[0]; var params = args.concat().slice(1); if (isMethod(pond, key)) { results.push(pond[key].apply(pond, params)); return }
            if (isSetter(pond, key) && params.length) { pond[key] = params[0]; return }
            if (isGetter(pond, key)) { results.push(pond[key]); return }
            console.warn('$().filepond("' + key + '") is an unknown property or method.')
        }); return results.length ? this.length === 1 ? results[0] : results : items
    }; Object.keys(FilePond).forEach(function (key) { $.fn.filepond[key] = FilePond[key] }); $.fn.filepond.setDefaults = FilePond.setOptions
}(jQuery, FilePond))