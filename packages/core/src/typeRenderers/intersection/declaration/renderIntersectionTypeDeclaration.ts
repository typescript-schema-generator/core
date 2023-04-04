import { type IntersectionType, type TypeDeclaration } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderIntersectionType } from '../type/renderIntersectionType';

/**
 * Renders a type declaration for an intersection type.
 * @param intersectionTypeDeclaration
 * @param context
 * @returns
 */
export function renderIntersectionTypeDeclaration(
    { declaration, type }: TypeDeclaration<IntersectionType>,
    context: Context,
): RenderedTypeDeclaration {
    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: renderIntersectionType(type, context),
    };
}
