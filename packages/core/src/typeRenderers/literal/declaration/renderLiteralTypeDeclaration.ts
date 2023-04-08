import { type LiteralType, type TypeDeclaration } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
import { type RenderedTypeDeclaration } from '../../RenderedTypeDeclaration';
import { renderLiteralType } from '../type/renderLiteralType';

/**
 * Renders a type declaration for a literal type.
 * @param literalTypeDeclaration
 * @param context
 * @returns
 */
export function renderLiteralTypeDeclaration(
    { declaration, type }: TypeDeclaration<LiteralType>,
    context: TypeDeclarationRenderingContext,
): RenderedTypeDeclaration {
    return {
        name: declaration.name,
        references: [],
        subTypes: [],
        value: renderLiteralType(type, context),
    };
}
