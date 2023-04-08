import { type Type, type UnionType } from '../../../model';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
import { renderType } from '../../renderType';

/**
 * Renders a union type.
 * @param unionType {Object} The union type to render.
 * @param context {Object} The context of the type declarations the union type is in.
 * @returns
 */
export function renderUnionType(unionType: UnionType, context: TypeDeclarationRenderingContext): string {
    return Array.from(unionType.typeSet.values()).reduce(
        (str: string, type: Type, index: number) => str + renderType(type, context) + (index < unionType.typeSet.size - 1 ? ' | ' : ''),
        '',
    );
}
