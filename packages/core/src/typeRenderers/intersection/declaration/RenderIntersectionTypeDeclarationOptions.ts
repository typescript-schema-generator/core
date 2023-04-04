import { type CommentStrategy } from '../../../commonRenderers/comment/CommentStrategy';
import { type TransformNameStrategy } from '../../../transformName/TransformNameStrategy';

/**
 * Options for rendering an intersection type declaration.
 */
export interface RenderIntersectionTypeDeclarationOptions {
    commentStrategy?: CommentStrategy;
    endWithSemicolon?: boolean;
    nameStrategy?: TransformNameStrategy;
}
