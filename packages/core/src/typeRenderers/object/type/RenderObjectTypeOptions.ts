import { type RenderObjectTypeInMultipleLinesOptions } from './RenderObjectTypeInMultipleLinesOptions';
import { type RenderObjectTypeInOneLineOptions } from './RenderObjectTypeInOneLineOptions';

/**
 * Options for rendering an object type.
 */
export type RenderObjectTypeOptions = (RenderObjectTypeInOneLineOptions | RenderObjectTypeInMultipleLinesOptions) & {
    propertyOrdering: 'ALPHABETICAL' | 'KEEP';
    propertySeparator: 'EMPTY' | 'COMMA' | 'SEMICOLON';
};
