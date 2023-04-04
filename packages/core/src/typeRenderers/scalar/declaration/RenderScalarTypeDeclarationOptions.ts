import { type CommentStrategy } from '../../../commonRenderers/comment/CommentStrategy';
import { type TransformNameStrategy } from '../../../transformName/TransformNameStrategy';

/**
 * Options for rendering a scalar type declaration.
 */
export interface RenderScalarTypeDeclarationOptions {
    commentStrategy?: CommentStrategy;
    endWithSemicolon?: boolean;
    nameStrategy?: TransformNameStrategy;
}
