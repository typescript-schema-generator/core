import { type FileDescription } from './FileDescription';

export interface WriteSchemaToMultipleFilesOptions {
    exportFile?: FileDescription;
    outDirectory: string;
    schemaFiles: FileDescription[];
}
