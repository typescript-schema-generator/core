/**
 * Options for rendering an object type.
 * Note: inline object types can not have property descriptions.
 */
export interface RenderObjectTypeInOneLineOptions {
    trailingPropertySeparator: boolean;
    spacesBeforeFirstProperty: number;
    spacesAfterLastProperty: number;
    spacesAfterPropertyName: number;
    spacesAfterPropertySeparator: number;
}
