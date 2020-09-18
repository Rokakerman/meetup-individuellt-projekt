import { shallowMount } from '@vue/test-utils'
import home from '@/views/Home.vue'
import { getMeetUps } from '../data/data.js';

describe("Home.vue", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(home, {
            propsData: {
                list: getMeetUps()
            }
        })
    })
    
})