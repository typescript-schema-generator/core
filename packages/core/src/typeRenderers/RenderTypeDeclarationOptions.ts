import { type CommentStrategy } from '../commonRenderers/comment/CommentStrategy';
import { type TransformNameStrategy } from '../transformName/TransformNameStrategy';

export interface RenderTypeDeclarationOptions {
    commentStrategy: CommentStrategy;
    endWithSemicolon: boolean;
    preferredNameStrategy: TransformNameStrategy;
}
