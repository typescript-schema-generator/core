export default {
    coverageDirectory: '../../coverage/packages/open-api-v3',
    displayName: 'open-api-v3',
    moduleFileExtensions: ['js', 'ts'],
    preset: '../../jest.preset.js',
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
    },
};
