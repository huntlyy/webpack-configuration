import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const babelLoader = buildBabelLoader(options)

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    return [babelLoader, typescriptLoaders, cssLoader, svgLoader, fileLoader];
}
