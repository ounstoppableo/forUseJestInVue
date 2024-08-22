// jest.config.js文件
module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    testMatch: ['<rootDir>/src/**/__tests__/**/*.{spec,test}.{vue,js,ts,tsx,jsx}',
        '<rootDir>/src/**/*.{spec,test}.{vue,js,ts,tsx,jsx}'
    ],
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['vue', 'js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    resetMocks: true,
    transform: {
        '^.+\\.(vue)$': '<rootDir>/node_modules/@vue/vue3-jest',
        '^.+\\.(js|jsx|ts|tsx|mjs|cjs)$': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)': '<rootDir>/src/$1',
        '\\.(jpg|png|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|less|scss|sass)$': '<rootDir>/test/__mocks__/styleMock.js',
        "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js"
    },
    transformIgnorePatterns: [],
    setupFilesAfterEnv: ['./jest.setup.js']
}