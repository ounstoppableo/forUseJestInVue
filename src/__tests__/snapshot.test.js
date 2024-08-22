import HelloWorld from '../components/HelloWorld.vue';
import { mount } from '@vue/test-utils';
import {listData} from './__mocks__/mock';
import flushPromises from 'flush-promises';
import {getList} from '../api/api';
describe('快照最佳实践', () => {
    test('对HelloWorld.vue文件的快照测试', async () => {
        getList.mockReturnValue(Promise.resolve(listData));
        const wrapper = mount(HelloWorld);
        await flushPromises();
        expect(wrapper.html()).toMatchSnapshot();
    })
})