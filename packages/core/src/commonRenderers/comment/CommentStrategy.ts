/**
 *
 */
export enum CommentStrategy {
    /**
     * // your description
     */
    separateLine = 'SEPARATE_LINE',
    /**
     * /* your description *\/
     */
    block = 'BLOCK',
    /**
     * /** your description *\/
     */
    jsDoc = 'JS_DOC',
    /**
     * don't render any comments
     */
    none = 'NONE',
}
