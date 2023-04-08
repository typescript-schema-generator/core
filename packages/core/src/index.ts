/* eslint-disable sort-keys */
import { CommentStrategy } from './commonRenderers/comment/CommentStrategy';
import { TypeKey, type Type, type TypeDeclaration } from './model';
import { renderSchema } from './renderSchema/renderSchema';
import { type RenderSchemaOptions } from './renderSchema/RenderSchemaOptions';
import { TransformNameStrategy } from './transformName/TransformNameStrategy';
import { QuotationStrategy } from './typeRenderers/literal/type/QuotationStrategy';

export { CommentStrategy } from './commonRenderers/comment/CommentStrategy';
export * from './model';
export { renderSchema } from './renderSchema/renderSchema';
export { RenderSchemaForMultipleFilesOptions } from './renderSchema/RenderSchemaForMultipleFilesOptions';
export { RenderSchemaForOneFileOptions } from './renderSchema/RenderSchemaForOneFileOptions';
export { RenderSchemaOptions } from './renderSchema/RenderSchemaOptions';
export { TransformNameStrategy } from './transformName/TransformNameStrategy';
export { RenderArrayTypeStrategy } from './typeRenderers/array/type/RenderArrayTypeStrategy';
export { QuotationStrategy } from './typeRenderers/literal/type/QuotationStrategy';
export { FileDescription } from './writeSchema/FileDescription';

const options: RenderSchemaOptions = {
    outDirectory: 'generated',
    schemaFile: {
        content: '',
        extension: 'ts',
        name: 'schema.ts',
    },

    fileNameStrategy: TransformNameStrategy.pascalCase,

    exportStrategy: 'DEFAULT',

    typeDeclaration: {
        commentStrategy: CommentStrategy.jsDoc,
        endWithSemicolon: true,
        preferredNameStrategy: TransformNameStrategy.pascalCase,
    },

    scalar: {
        declaration: {},
    },

    literal: {
        declaration: {},
        type: { quotes: QuotationStrategy.single },
    },

    object: {
        declaration: { strategy: 'INTERFACE', endWithSemicolon: false },
        type: {
            handleAnonymousTypes: 'INLINE',
            propertyIndentation: 4,

            emptyLinesBeforeFirstProperty: 0,
            emptyLinesBetweenProperties: 0,
            emptyLinesAfterLastProperty: 0,

            propertyOrdering: 'KEEP',
            propertySeparator: 'SEMICOLON',
        },
    },

    enumeration: {
        declaration: { strategy: 'ENUM' },
        type: {
            nameStrategy: TransformNameStrategy.camelCase,
        },
    },

    union: {
        declaration: {},
        type: {
            spacesAfterPipe: 1,
            spacesBeforePipe: 1,
        },
    },

    intersection: {
        declaration: {},
        type: {},
    },

    array: {
        declaration: {},
        type: { strategy: 'POSTFIXED' },
    },

    reference: {
        declaration: {},
        type: {},
    },
};

const schema: TypeDeclaration<Type>[] = [
    {
        declaration: {
            name: 'User',
        },
        type: {
            kind: TypeKey.object,
            properties: [
                {
                    name: 'firstName',
                    description: undefined,
                    canBeMissing: false,
                    type: { kind: TypeKey.scalar, type: 'STRING' },
                },
                {
                    name: 'lastName',
                    description: undefined,
                    canBeMissing: false,
                    type: { kind: TypeKey.scalar, type: 'STRING' },
                },
                {
                    name: 'addresses',
                    description: undefined,
                    canBeMissing: false,
                    type: { kind: TypeKey.array, type: { kind: TypeKey.scalar, type: 'STRING' } },
                },
                {
                    name: 'favorites',
                    description: undefined,
                    canBeMissing: false,
                    type: { kind: TypeKey.array, type: { kind: TypeKey.reference, name: 'Favorite' } },
                },
                {
                    name: 'houses',
                    description: undefined,
                    canBeMissing: false,
                    type: {
                        kind: TypeKey.object,
                        properties: [
                            {
                                name: 'firstName',
                                description: undefined,
                                canBeMissing: false,
                                type: { kind: TypeKey.scalar, type: 'STRING' },
                            },
                            {
                                name: 'mieter',
                                description: undefined,
                                canBeMissing: false,
                                type: {
                                    kind: TypeKey.object,
                                    properties: [
                                        {
                                            name: 'firstName',
                                            description: undefined,
                                            canBeMissing: false,
                                            type: { kind: TypeKey.scalar, type: 'STRING' },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
        },
    },
];

renderSchema(schema, options);
