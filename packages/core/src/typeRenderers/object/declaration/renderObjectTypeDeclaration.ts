import { type ObjectType, type TypeDeclaration } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderObjectType } from '../type/renderObjectType';

/**
 * Renders a type declaration for an object type.
 * @param objectTypeDeclaration
 * @param context
 * @returns
 */
export function renderObjectTypeDeclaration({ declaration, type }: TypeDeclaration<ObjectType>, context: Context): RenderedTypeDeclaration {
    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: renderObjectType(type, context),
    };
}
