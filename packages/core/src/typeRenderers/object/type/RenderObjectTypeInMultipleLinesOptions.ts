/**
 * Options for rendering an object type.
 */
export interface RenderObjectTypeInMultipleLinesOptions {
    handleAnonymousTypes: 'INLINE' | 'NAMESPACE';
    propertyIndentation: number;

    emptyLinesBeforeFirstProperty: number;
    emptyLinesBetweenProperties: number;
    emptyLinesAfterLastProperty: number;
}
