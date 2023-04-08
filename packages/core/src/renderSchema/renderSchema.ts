import { type Type, type TypeDeclaration } from '../model';
import { type RenderedTypeDeclaration } from '../typeRenderers/RenderedTypeDeclaration';
import { renderTypeDeclaration } from '../typeRenderers/renderTypeDeclaration';
import { writeSchemaToMultipleFiles } from '../writeSchema/writeSchemaToMultipleFiles';
import { writeSchemaToOneFile } from '../writeSchema/writeSchemaToOneFile';
import { type RenderSchemaOptions } from './RenderSchemaOptions';
import { type TypeDeclarationRenderingContext } from './TypeDeclarationRenderingContext';

/**
 *
 * @param typeDeclarations
 * @param options
 * @returns
 */
export function renderSchema(typeDeclarations: TypeDeclaration<Type>[], options: RenderSchemaOptions): void {
    const context: TypeDeclarationRenderingContext = { currentIndentation: 0, options, subTypes: [] };

    const renderedTypeDeclarations: RenderedTypeDeclaration[] = [];

    typeDeclarations.forEach((typeDeclaration: TypeDeclaration<Type>) => {
        renderedTypeDeclarations.push(renderTypeDeclaration(typeDeclaration, context));
        context.currentIndentation = 0;
    });

    if ('schemaFile' in options) {
        writeSchemaToOneFile({
            outDirectory: options.outDirectory,
            schemaFile: {
                ...options.schemaFile,
                content: renderedTypeDeclarations
                    .map((renderedTypeDeclaration: RenderedTypeDeclaration) => renderedTypeDeclaration.value)
                    .join(),
            },
        });
    } else {
        writeSchemaToMultipleFiles({
            exportFile: options.exportFile,
            outDirectory: options.outDirectory,
            schemaFiles: options.schemaFiles,
        });
    }
}
