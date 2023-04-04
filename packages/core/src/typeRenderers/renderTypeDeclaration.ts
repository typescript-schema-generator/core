import { TypeKey, type Type, type TypeDeclaration } from '../model';
import { type Context } from '../renderSchema/Context';
import { renderArrayTypeDeclaration } from './array/declaration/renderArrayTypeDeclaration';
import { renderEnumerationTypeDeclaration } from './enumeration/declaration/renderEnumerationTypeDeclaration';
import { renderIntersectionTypeDeclaration } from './intersection/declaration/renderIntersectionTypeDeclaration';
import { renderLiteralTypeDeclaration } from './literal/declaration/renderLiteralTypeDeclaration';
import { renderObjectTypeDeclaration } from './object/declaration/renderObjectTypeDeclaration';
import { renderReferenceTypeDeclaration } from './reference/declaration/renderReferenceTypeDeclaration';
import { type RenderedTypeDeclaration } from './RenderedTypeDeclaration';
import { renderScalarTypeDeclaration } from './scalar/declaration/renderScalarTypeDeclaration';
import { renderUnionTypeDeclaration } from './union/declaration/renderUnionTypeDeclaration';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const map: Record<TypeKey, (typeDeclaration: TypeDeclaration<any>, _context: Context) => RenderedTypeDeclaration> = Object.freeze({
    [TypeKey.scalar]: renderScalarTypeDeclaration,
    [TypeKey.literal]: renderLiteralTypeDeclaration,
    [TypeKey.object]: renderObjectTypeDeclaration,
    [TypeKey.enumeration]: renderEnumerationTypeDeclaration,
    [TypeKey.union]: renderUnionTypeDeclaration,
    [TypeKey.intersection]: renderIntersectionTypeDeclaration,
    [TypeKey.array]: renderArrayTypeDeclaration,
    [TypeKey.reference]: renderReferenceTypeDeclaration,
});

export function renderTypeDeclaration(typeDeclaration: TypeDeclaration<Type>, context: Context): RenderedTypeDeclaration {
    return map[typeDeclaration.type.kind](typeDeclaration, context);
}
