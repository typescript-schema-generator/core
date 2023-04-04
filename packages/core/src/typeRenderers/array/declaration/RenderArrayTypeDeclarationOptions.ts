import { type CommentStrategy } from '../../../commonRenderers/comment/CommentStrategy';
import { type TransformNameStrategy } from '../../../transformName/TransformNameStrategy';

/**
 * Options for rendering an array type declaration.
 */
export interface RenderArrayTypeDeclarationOptions {
    commentStrategy?: CommentStrategy;
    endWithSemicolon?: boolean;
    nameStrategy?: TransformNameStrategy;
}
