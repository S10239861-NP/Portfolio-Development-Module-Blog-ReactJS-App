const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEV_MODE = "development";

const PROD_MODE = "production";

let srcFolderPath = path.resolve(__dirname, "src");

function getWebpackConfig(env)
{
    let modeToUse = env.mode;

    let outputFolderPathToUse = "";

    if (modeToUse == DEV_MODE)
    {
        outputFolderPathToUse = path.resolve(__dirname, "dev-build");
    }
    else
    {
        outputFolderPathToUse = path.resolve(__dirname, "prod-build");
    }

    return {
        mode: modeToUse,
        entry: "./src/index.js",
        optimization: {
            // minimize: false
        },
        output: {
            path: outputFolderPathToUse,
            filename: "index.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ["babel-loader"],
                    exclude: /node_modules/
                },
                {
                    test: /\.(css)$/,
                    use: ["style-loader", "css-loader"],
                    exclude: /node_modules/
                },
                {
                    test: /\.(jpg|png|jpeg|webp|avif)$/,
                    type: "asset/resource"
                },
                {
                    test: /\.svg/,
                    type: "asset/source"
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    filename: path.resolve(outputFolderPathToUse, "index.html"),
                    template: path.resolve(srcFolderPath, "index.html"),
                    favicon: path.resolve(srcFolderPath, "assets", "favicon.ico")
                }
            )
        ],
        devServer: {
            static: {
                directory: outputFolderPathToUse,
            },
            compress: true,
            port: 3000
        }
    };
}

module.exports = function(env)
{
    return getWebpackConfig(env);
};
