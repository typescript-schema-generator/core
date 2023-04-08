import { type TypeDeclaration, type UnionType } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderUnionType } from '../type/renderUnionType';

/**
 * Renders a type declaration for a union type.
 * @param unionTypeDeclaration
 * @param context
 * @returns
 */
export function renderUnionTypeDeclaration(
    { declaration, type }: TypeDeclaration<UnionType>,
    context: TypeDeclarationRenderingContext,
): RenderedTypeDeclaration {
    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: renderUnionType(type, context),
    };
}
