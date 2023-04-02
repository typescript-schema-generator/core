/**
 *
 */
export interface Declaration {
    name: string;
    description?: string;
}

/**
 *
 */
export type TypeScriptScalar = 'STRING' | 'BOOLEAN' | 'NUMBER';

/**
 *
 */
export enum TypeKey {
    reference = 'REFERENCE',
    scalar = 'SCALAR',
    literal = 'LITERAL',
    object = 'OBJECT',
    enumeration = 'ENUMERATION',
    union = 'UNION',
    intersection = 'INTERSECTION',
    array = 'ARRAY',
}

/**
 *
 */
export interface ScalarType {
    kind: TypeKey.scalar;
    type: TypeScriptScalar | 'NULL' | 'UNDEFINED';
}

/**
 *
 */
export interface LiteralType {
    kind: TypeKey.literal;
    scalar: TypeScriptScalar;
    value: string;
}

/**
 *
 */
export interface ObjectProperty {
    name: string;
    description?: string;
    canBeMissing: boolean;
    type: Type;
}

/**
 *
 */
export interface ObjectType {
    kind: TypeKey.object;
    properties: ObjectProperty[];
}

/**
 *
 */
export interface EnumerationCase extends Declaration {
    value: string;
    type: Type;
}

/**
 *
 */
export interface EnumerationType {
    kind: TypeKey.enumeration;
    cases: EnumerationCase[];
}

/**
 *
 */
export interface UnionType {
    kind: TypeKey.union;
    typeSet: Set<Type>;
}

/**
 *
 */
export interface IntersectionType {
    kind: TypeKey.intersection;
    typeSet: Set<Type>;
}

/**
 *
 */
export interface ArrayType {
    kind: TypeKey.array;
    type: Type;
}

/**
 *
 */
export interface ReferenceType {
    kind: TypeKey.reference;
}

/**
 *
 */
export type Type = ScalarType | LiteralType | ObjectType | EnumerationType | UnionType | IntersectionType | ArrayType | ReferenceType;

/**
 *
 */
export interface TypeDeclaration<T extends Type> {
    type: T;
    declaration: Declaration;
}
