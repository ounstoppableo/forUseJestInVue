// babel.config.cjs文件
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                },
            }
        ],
        '@babel/preset-typescript'
    ]
}