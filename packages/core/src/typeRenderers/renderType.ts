import { TypeKey, type Type } from '../model';
import { type TypeDeclarationRenderingContext } from '../renderSchema/TypeDeclarationRenderingContext';
import { renderArrayType } from './array/type/renderArrayType';
import { renderEnumerationType } from './enumeration/type/renderEnumerationType';
import { renderIntersectionType } from './intersection/type/renderIntersectionType';
import { renderLiteralType } from './literal/type/renderLiteralType';
import { renderObjectType } from './object/type/renderObjectType';
import { renderReferenceType } from './reference/type/renderReferenceType';
import { renderScalarType } from './scalar/type/renderScalarType';
import { renderUnionType } from './union/type/renderUnionType';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const map: Record<TypeKey, (type: any, context: TypeDeclarationRenderingContext) => string> = Object.freeze({
//     [TypeKey.scalar]: renderScalarType,
//     [TypeKey.literal]: renderLiteralType,
//     [TypeKey.object]: renderObjectType,
//     [TypeKey.enumeration]: renderEnumerationType,
//     [TypeKey.union]: renderUnionType,
//     [TypeKey.intersection]: renderIntersectionType,
//     [TypeKey.array]: renderArrayType,
//     [TypeKey.reference]: renderReferenceType,
// });

export function renderType(type: Type, context: TypeDeclarationRenderingContext): string {
    // console.log(map);
    // return map[type.kind](type.kind, context);

    if (type.kind === TypeKey.scalar) return renderScalarType(type, context);
    if (type.kind === TypeKey.literal) return renderLiteralType(type, context);
    if (type.kind === TypeKey.object) return renderObjectType(type, context);
    if (type.kind === TypeKey.enumeration) return renderEnumerationType(type, context);
    if (type.kind === TypeKey.union) return renderUnionType(type, context);
    if (type.kind === TypeKey.intersection) return renderIntersectionType(type, context);
    if (type.kind === TypeKey.array) return renderArrayType(type, context);
    if (type.kind === TypeKey.reference) return renderReferenceType(type, context);

    return '';
}
