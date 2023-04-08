import { type ObjectProperty, type ObjectType } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
import { renderType } from '../../renderType';
import { type RenderObjectTypeOptions } from './RenderObjectTypeOptions';

const propertySeparatorMap: Record<'EMPTY' | 'COMMA' | 'SEMICOLON', string> = Object.freeze({
    ['COMMA']: ',',
    ['EMPTY']: '',
    ['SEMICOLON']: ';',
});

/**
 * Renders an object type.
 * @param objectType
 * @param context
 * @returns
 */
export function renderObjectType(objectType: ObjectType, context: TypeDeclarationRenderingContext): string {
    let renderedObjectType: string = '{';

    const renderObjectTypeOptions: RenderObjectTypeOptions = context.options.object.type;

    if ('trailingPropertySeparator' in renderObjectTypeOptions) {
        renderedObjectType += ' '.repeat(renderObjectTypeOptions.spacesBeforeFirstProperty);
        objectType.properties.forEach((property: ObjectProperty, index: number) => {
            renderedObjectType += property.name;
            renderedObjectType += ' '.repeat(renderObjectTypeOptions.spacesAfterPropertyName);
            renderedObjectType += ': ';
            renderedObjectType += renderType(property.type, context);
            if (index !== objectType.properties.length - 1) {
                renderedObjectType += propertySeparatorMap[renderObjectTypeOptions.propertySeparator];
                renderedObjectType += ' '.repeat(renderObjectTypeOptions.spacesAfterPropertySeparator);
            } else {
                if (renderObjectTypeOptions.trailingPropertySeparator)
                    renderedObjectType += propertySeparatorMap[renderObjectTypeOptions.propertySeparator];
            }
        });
        renderedObjectType += ' '.repeat(renderObjectTypeOptions.spacesAfterLastProperty);
    } else {
        renderedObjectType += '\n';
        objectType.properties.forEach((property: ObjectProperty, index: number) => {
            if (index === 0) renderedObjectType += '\n'.repeat(renderObjectTypeOptions.emptyLinesBeforeFirstProperty);

            renderedObjectType += ' '.repeat(context.currentIndentation + renderObjectTypeOptions.propertyIndentation);
            renderedObjectType += property.name;
            renderedObjectType += ': ';
            context.currentIndentation += renderObjectTypeOptions.propertyIndentation;
            renderedObjectType += renderType(property.type, context);
            context.currentIndentation -= renderObjectTypeOptions.propertyIndentation;
            renderedObjectType += propertySeparatorMap[renderObjectTypeOptions.propertySeparator];

            if (index !== objectType.properties.length - 1)
                renderedObjectType += '\n'.repeat(renderObjectTypeOptions.emptyLinesBetweenProperties + 1);
            else renderedObjectType += '\n'.repeat(renderObjectTypeOptions.emptyLinesAfterLastProperty);
        });
        renderedObjectType += '\n';
    }

    return renderedObjectType + ' '.repeat(context.currentIndentation) + '}';
}
