const configs = {
    test: {
        proxy: {
            '/api': {
                target: 'https://www.fastmock.site/mock/88de9ddda751cea773d71950aa53b0ad/item',
                changeOrigin: true
            }
        }
    }
};

type configKeys = keyof typeof configs;

const NODE_ENV_APP = (process.env.NODE_ENV_APP as configKeys) || 'test';

export default configs[NODE_ENV_APP];
