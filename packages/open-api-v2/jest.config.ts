export default {
    coverageDirectory: '../../coverage/packages/open-api-v2',
    displayName: 'open-api-v2',
    moduleFileExtensions: ['js', 'ts'],
    preset: '../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
    },
};
