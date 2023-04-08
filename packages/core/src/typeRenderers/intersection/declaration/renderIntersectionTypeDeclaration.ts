import { type IntersectionType, type TypeDeclaration } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
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
    context: TypeDeclarationRenderingContext,
): RenderedTypeDeclaration {
    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: renderIntersectionType(type, context),
    };
}
