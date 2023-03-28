const configs = {
    dev: {
        proxy: {
            '/api': {
                target: 'https://www.fastmock.site/mock/5a2b9135279205350708ef5962a80d97/api',
                changeOrigin: true
            }
        }
    },
    test: {
        proxy: {
            '/api': {
                target: 'https://ys.ecaiabc.com/',
                changeOrigin: true
            },
            '/ly': {
                target: 'https://lyapi.ecaiabc.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/ly': ''
                }
            }
        }
    }
};

type configKeys = keyof typeof configs;

const NODE_EVN = (process.env.NODE_ENV as configKeys) || 'test';

export default configs[NODE_EVN];
