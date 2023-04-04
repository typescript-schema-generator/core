import { TypeKey, type Type } from '../model';
import { type Context } from '../renderSchema/Context';
import { renderArrayType } from './array/type/renderArrayType';
import { renderEnumerationType } from './enumeration/type/renderEnumerationType';
import { renderIntersectionType } from './intersection/type/renderIntersectionType';
import { renderLiteralType } from './literal/type/renderLiteralType';
import { renderObjectType } from './object/type/renderObjectType';
import { renderReferenceType } from './reference/type/renderReferenceType';
import { renderScalarType } from './scalar/type/renderScalarType';
import { renderUnionType } from './union/type/renderUnionType';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const map: Record<TypeKey, (type: any, _context: Context) => string> = Object.freeze({
    [TypeKey.scalar]: renderScalarType,
    [TypeKey.literal]: renderLiteralType,
    [TypeKey.object]: renderObjectType,
    [TypeKey.enumeration]: renderEnumerationType,
    [TypeKey.union]: renderUnionType,
    [TypeKey.intersection]: renderIntersectionType,
    [TypeKey.array]: renderArrayType,
    [TypeKey.reference]: renderReferenceType,
});

export function renderType(type: Type, context: Context): string {
    return map[type.kind](type, context);
}
