import { type FileDescription } from '../writeSchema/FileDescription';

/**
 * Options for rendering a schema for multiple files.
 */
export interface RenderSchemaForMultipleFilesOptions {
    exportFile?: FileDescription;
    outDirectory: string;
    schemaFiles: FileDescription[];
}
