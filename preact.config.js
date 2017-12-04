/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  
  //const shouldUseSourceMap = env.GENERATE_SOURCEMAP !== 'false';
  
  if (env.production) {
    changeCssLoader_Class_Prod(config, env, helpers);
    
    if (process.env.AUSSIE_SOURCE_MAP === 'false') {
      disableSourceMap_Prod(config, env, helpers);
    }
  }
  
  //allowHtmlWebpackPlugin_preload(config, env, helpers);
  
  
  //console.log("config: ", JSON.stringify(config));
  //console.log("config.plugins: ", config.plugins);
  //console.log("process.env: ", process.env);
  //console.log("env: ", JSON.stringify(env));
  //console.log("helpers: ", helpers);
  //process.exit(0);
}


function disableSourceMap_Prod(config, env, helpers) {
  const shouldUseSourceMap = false;
  
  config.devtool = shouldUseSourceMap ? 'source-map' : false;
  
  // Disable Javascript SourceMaps
  let uglify = helpers.getPluginsByName(config, "UglifyJsPlugin")[0];
  if (uglify) uglify.plugin.options.sourceMap = shouldUseSourceMap;
}

/**
 * Change "[local]__[hash:base64:5]" to "[hash:base64:5]"
 */
function changeCssLoader_Class_Prod(config, env, helpers) {
  
  //let cssLoader = null;
  //const cssFileLoader = config.module.loaders[4].loader;
  //for (let i = 0, l = cssFileLoader.length; i < l; i++) {
  //  const loader = cssFileLoader[i];
  //
  //  if (loader.loader === "css-loader") {
  //    cssLoader = loader;
  //    break
  //  }
  //}
  
  const cssLoader = helpers.getLoadersByName(config, 'css-loader')[0].loader;
  if (cssLoader) {

    cssLoader.options.localIdentName = '[hash:base64:5]';

  } else {
    console.log('Can not find CSS loader configuration');

    process.exit(1);
  }
}

function change_publicPath_Prod(config, env, helpers) {
  const {plugin} = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
  if (plugin) {
    plugin.options.constant = require(`./config/constant.json`); // returns {"CONSTANT_NAME": "toto"}
    helpers.setHtmlTemplate(config, 'index.tpl.html');
  }
  config.output.publicPath = '/';
}

function allowHtmlWebpackPlugin_preload(config, env, helpers) {
  const {plugin} = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
  if (plugin) {
    plugin.options.preload = true;
  }
}