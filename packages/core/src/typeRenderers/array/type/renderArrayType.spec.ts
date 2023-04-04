import { TypeKey } from '../../../model';
import { type Context } from '../../../renderSchema/Context';
import { type RenderSchemaOptions } from '../../../renderSchema/RenderSchemaOptions';
import { QuotationStrategy } from '../../literal/type/QuotationStrategy';
import { renderArrayType } from './renderArrayType';

describe('renderArrayType', () => {
    const context: Context = {
        currentIndentation: 0,
        options: {
            array: {
                type: { strategy: 'GENERIC' },
            },
            literal: {
                type: { quotes: QuotationStrategy.double },
            },
        } as RenderSchemaOptions,
    };

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
