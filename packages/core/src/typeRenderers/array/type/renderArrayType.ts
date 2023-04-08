import { type ArrayType } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
import { renderType } from '../../renderType';

/**
 * Renders an array type.
 * @param arrayType
 * @param context
 * @returns
 */
export function renderArrayType(arrayType: ArrayType, context: TypeDeclarationRenderingContext): string {
    const renderedType: string = renderType(arrayType.type, context);

    if (context.options.array.type.strategy === 'GENERIC') return `Array<${renderedType}>`;

    return `${renderedType}[]`;
}
