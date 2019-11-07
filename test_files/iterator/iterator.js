// test_files/iterator/iterator.ts(15,11): warning TS0: should not emit a 'never' type
// test_files/iterator/iterator.ts(15,19): warning TS0: should not emit a 'never' type
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
goog.module('test_files.iterator.iterator');
var module = module || { id: 'test_files/iterator/iterator.ts' };
module = module;
exports = {};
/**
 * @template I, T
 */
class MappingIterator {
    /**
     * @override
     * @return {!IterableIterator<T>}
     */
    [Symbol.iterator]() {
        return this;
    }
    /**
     * @override
     * @return {!IteratorResult<T>}
     */
    next() {
        // For some reason, TypeScript's IteratorResult interface declares its
        // `value` property's type as T. However, according to MDN, the `value`
        // property "can be omitted when done is true", so this is incorrect and the
        // type should really be T|undefined. Therefore, we need the type assertion
        // on `undefined` below.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next
        /** @type {?} */
        const value = (/** @type {?} */ (undefined));
        /** @type {boolean} */
        const done = true;
        return { value, done };
    }
}
