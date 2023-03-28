const configs = {
    test: {
        proxy: {
            '/api': {
                target: 'https://www.fastmock.site/mock/38ec651a2256bbbc6c8b1a16d650e6fa/info',
                changeOrigin: true
            }
        }
    }
};

type configKeys = keyof typeof configs;

const NODE_ENV_APP = (process.env.NODE_ENV_APP as configKeys) || 'test';

export default configs[NODE_ENV_APP];
