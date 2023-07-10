const { getDefaultConfig } = require('expo/metro-config');
const DEV_MODE = true;
const config = getDefaultConfig(__dirname);
const getMetroLocalConfig = () => {
    if (!DEV_MODE) {
        return {};
    }
    const path = require("path");
    const blacklist = require("metro-config/src/defaults/exclusionList");
    const escape = require("escape-string-regexp");
    const pak = require("../first-micro/package.json");
    const pakRoot = path.resolve(
        __dirname,
        "..",
        "first-micro"
    );
    const modules = Object.keys({
        ...pak.peerDependencies,
    });
    const modRoute = modules.map((m) => path.join(pakRoot, "node_modules", m));
    return {
        projectRoot: __dirname,
        watchFolders: [pakRoot],
        resolver: {
            blacklistRE: blacklist(
                modRoute.map((m) => new RegExp(`^${escape(m)}\\/.*$`))
            ),
            extraNodeModules: modules.reduce((acc, name) => {
                acc[name] = path.join(__dirname, "node_modules", name);
                return acc;
            }, {}),
        },
    };
}
const localConfig = getMetroLocalConfig();
config.projectRoot = localConfig.projectRoot;
config.watchFolders = localConfig.watchFolders;
config.resolver = {
    ...config.resolver,
    blacklistRE: localConfig.resolver.blacklistRE,
    extraNodeModules: localConfig.resolver.extraNodeModules
}
module.exports = config;