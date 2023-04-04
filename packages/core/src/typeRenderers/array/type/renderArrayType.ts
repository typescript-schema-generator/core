import { type ArrayType } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { renderType } from '../../renderType';

/**
 * Renders an array type.
 * @param arrayType
 * @param context
 * @returns
 */
export function renderArrayType(arrayType: ArrayType, context: Context): string {
    const renderedType: string = renderType(arrayType.type, context);

    if (context.options.array.type.strategy === 'GENERIC') return `Array<${renderedType}>`;

    return `${renderedType}[]`;
}
