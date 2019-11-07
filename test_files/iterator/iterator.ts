class MappingIterator<I, T> {
  /** @override */
  [Symbol.iterator](): IterableIterator<T> {
    return this;
  }

  /** @override */
  next(): IteratorResult<T> {
    // For some reason, TypeScript's IteratorResult interface declares its
    // `value` property's type as T. However, according to MDN, the `value`
    // property "can be omitted when done is true", so this is incorrect and the
    // type should really be T|undefined. Therefore, we need the type assertion
    // on `undefined` below.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next
    const value = undefined!;
    const done:boolean = true;

    return {value, done};
  }
}

