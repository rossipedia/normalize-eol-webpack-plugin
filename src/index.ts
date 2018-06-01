import eol from 'eol';
import { Compiler } from 'webpack';
import { RawSource } from 'webpack-sources';

const pluginName = 'NormalizeEolWebpackPlugin';

class NormalizeEolWebpackPlugin {
    apply(compiler: Compiler) {
        compiler.hooks.emit.tap(pluginName, ({ assets }) => {
            Object.keys(assets).forEach(filename => {
                var src = assets[filename];
                var source = src.source();
                if (typeof source === 'string') {
                    assets[filename] = new RawSource(eol.auto(source));
                }
            });
        });
    }
}

export default NormalizeEolWebpackPlugin;
module.exports = NormalizeEolWebpackPlugin;