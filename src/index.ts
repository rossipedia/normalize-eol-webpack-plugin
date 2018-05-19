import eol from 'eol';
import { Compiler } from 'webpack';
import { RawSource } from 'webpack-sources';

const pluginName = 'NormalizeEolWebpackPlugin';

export default class NormalizeEolWebpackPlugin {
    apply(compiler: Compiler) {
        compiler.hooks.emit.tap(pluginName, ({ assets }) => {
            Object.keys(assets).forEach(filename => {
                var src = assets[filename];
                assets[filename] = new RawSource(eol.auto(src.source()));
            });
        });
    }
}
