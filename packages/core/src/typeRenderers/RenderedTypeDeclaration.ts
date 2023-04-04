/**
 *
 */
export interface RenderedTypeDeclaration {
    name: string;
    references: string[];
    subTypes: RenderedTypeDeclaration[];
    value: string;
}
