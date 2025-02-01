module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|webp)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: { quality: 75 }
                    }
                ],
            },
        ],
    },
};
