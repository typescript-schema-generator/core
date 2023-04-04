import { type LiteralType } from '../../../model';
import { type Context } from '../../../renderSchema/Context';

/**
 * Renders a literal type.
 * @param literalType
 * @param context
 * @returns
 */
export function renderLiteralType(literalType: LiteralType, context: Context): string {
    if (literalType.scalar === 'STRING')
        return context.options.literal.type.quotes === 'DOUBLE' ? `"${literalType.value}"` : `'${literalType.value}'`;

    return literalType.value;
}
