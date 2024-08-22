import elementPlus from 'element-plus';
import { config } from '@vue/test-utils';
config.global.plugins = [elementPlus]
jest.mock('./src/api/api',()=>({
    getList: jest.fn()
}));