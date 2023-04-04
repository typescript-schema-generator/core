import { type TransformNameStrategy } from '../transformName/TransformNameStrategy';
import { type RenderArrayTypeDeclarationOptions } from '../typeRenderers/array/declaration/RenderArrayTypeDeclarationOptions';
import { type RenderArrayTypeOptions } from '../typeRenderers/array/type/RenderArrayTypeOptions';
import { type RenderEnumerationTypeDeclarationOptions } from '../typeRenderers/enumeration/declaration/RenderEnumerationTypeDeclarationOptions';
import { type RenderEnumerationTypeOptions } from '../typeRenderers/enumeration/type/RenderEnumerationTypeOptions';
import { type RenderIntersectionTypeDeclarationOptions } from '../typeRenderers/intersection/declaration/RenderIntersectionTypeDeclarationOptions';
import { type RenderIntersectionTypeOptions } from '../typeRenderers/intersection/type/RenderIntersectionTypeOptions';
import { type RenderLiteralTypeDeclarationOptions } from '../typeRenderers/literal/declaration/RenderLiteralTypeDeclarationOptions';
import { type RenderLiteralTypeOptions } from '../typeRenderers/literal/type/RenderLiteralTypeOptions';
import { type RenderObjectTypeDeclarationOptions } from '../typeRenderers/object/declaration/RenderObjectTypeDeclarationOptions';
import { type RenderObjectTypeOptions } from '../typeRenderers/object/type/RenderObjectTypeOptions';
import { type RenderReferenceTypeDeclarationOptions } from '../typeRenderers/reference/declaration/RenderReferenceTypeDeclarationOptions';
import { type RenderReferenceTypeOptions } from '../typeRenderers/reference/type/RenderReferenceTypeOptions';
import { type RenderTypeDeclarationOptions } from '../typeRenderers/RenderTypeDeclarationOptions';
import { type RenderScalarTypeDeclarationOptions } from '../typeRenderers/scalar/declaration/RenderScalarTypeDeclarationOptions';
import { type RenderUnionTypeDeclarationOptions } from '../typeRenderers/union/declaration/RenderUnionTypeDeclarationOptions';
import { type RenderUnionTypeOptions } from '../typeRenderers/union/type/RenderUnionTypeOptions';
import { type ExportStrategy } from './ExportStyle';
import { type RenderSchemaForMultipleFilesOptions } from './RenderSchemaForMultipleFilesOptions';
import { type RenderSchemaForOneFileOptions } from './RenderSchemaForOneFileOptions';

/**
 * Options for rendering a schema.
 */
export type RenderSchemaOptions = (RenderSchemaForOneFileOptions | RenderSchemaForMultipleFilesOptions) & {
    fileNameStrategy: TransformNameStrategy;

    exportStrategy: ExportStrategy;

    typeDeclaration: RenderTypeDeclarationOptions;

    scalar: {
        declaration: RenderScalarTypeDeclarationOptions;
    };

    literal: {
        declaration: RenderLiteralTypeDeclarationOptions;
        type: RenderLiteralTypeOptions;
    };

    object: {
        declaration: RenderObjectTypeDeclarationOptions;
        type: RenderObjectTypeOptions;
    };

    enumeration: {
        declaration: RenderEnumerationTypeDeclarationOptions;
        type: RenderEnumerationTypeOptions;
    };

    union: {
        declaration: RenderUnionTypeDeclarationOptions;
        type: RenderUnionTypeOptions;
    };

    intersection: {
        declaration: RenderIntersectionTypeDeclarationOptions;
        type: RenderIntersectionTypeOptions;
    };

    array: {
        declaration: RenderArrayTypeDeclarationOptions;
        type: RenderArrayTypeOptions;
    };

    reference: {
        declaration: RenderReferenceTypeDeclarationOptions;
        type: RenderReferenceTypeOptions;
    };
};
