import { TypeKey } from '../../../model';
import { type RenderSchemaOptions } from '../../../renderSchema/RenderSchemaOptions';
import { type TypeDeclarationRenderingContext } from '../../../renderSchema/TypeDeclarationRenderingContext';
import { QuotationStrategy } from '../../literal/type/QuotationStrategy';
import { renderArrayType } from './renderArrayType';

describe('renderArrayType', () => {
    const context: TypeDeclarationRenderingContext = {
        currentIndentation: 0,
        options: {
            array: {
                type: { strategy: 'GENERIC' },
            },
            literal: {
                type: { quotes: QuotationStrategy.double },
            },
        } as RenderSchemaOptions,
    } as TypeDeclarationRenderingContext;

    it('should', () => {
        expect(
            renderArrayType(
                {
                    kind: TypeKey.array,
                    type: {
                        kind: TypeKey.union,
                        typeSet: new Set([
                            { kind: TypeKey.literal, scalar: 'STRING', value: 'hello' },
                            { kind: TypeKey.literal, scalar: 'STRING', value: 'world' },
                        ]),
                    },
                },
                context,
            ),
        ).toEqual('Array<"hello" | "world">');
    });
});
