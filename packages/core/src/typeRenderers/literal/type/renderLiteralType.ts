import { type LiteralType } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';

/**
 * Renders a literal type.
 * @param literalType
 * @param context
 * @returns
 */
export function renderLiteralType(literalType: LiteralType, context: TypeDeclarationRenderingContext): string {
    if (literalType.scalar === 'STRING')
        return context.options.literal.type.quotes === 'DOUBLE' ? `"${literalType.value}"` : `'${literalType.value}'`;

    return literalType.value;
}
