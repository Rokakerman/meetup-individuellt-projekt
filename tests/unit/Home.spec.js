import { shallowMount } from '@vue/test-utils'
import home from '@/views/Home.vue'
import meetUps from '@/components/Meet-ups.vue'
import meetUp from '@/components/Meet-up.vue'
import { getMeetUps } from '@/data/data.js';

describe("Home.vue", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(home, {
            propsData: {
                list: getMeetUps()
            }
        })
    })
  /*- Appen ska ha en landing page med titel på app och en underrubrik 
    - Alla meet-ups ska finnas i en lista under landing page (scroll) */

    it("should display the landing page on render", () => {
        const LANDING = wrapper.get("main");
        expect(LANDING.exists()).toBe(true)
    })

    it("should display the Meet-ups component on render", () => {
        const MEETUPS = wrapper.findAllComponents(meetUps)
        const visibility = MEETUPS.isVisible()
        expect(visibility).toBe(true)
    })

    it("should not display the Meet-up component on render", () => {
        const myComponent = wrapper.findComponent(meetUp)
        const visibility = myComponent.exists()
        expect(visibility).toBe(false)
    })

    it("should display the Meet-up component when property 'clicked' is equal to true", async () => {
        //let myProperty = wrapper.vm.clicked;
        //await myProperty.setData(true)
        await wrapper.setData({ clicked: true })
        console.log(wrapper.vm.clicked)
        const myComponent = wrapper.findComponent(meetUp)
        const visibility = myComponent.isVisible()
        expect(visibility).toBe(true)
    })

    it("should not display the Meet-up component when property 'clicked' is equal to false", async () => {
        await wrapper.setData({ clicked: false })
        console.log(wrapper.vm.clicked)
        const myComponent = wrapper.findComponent(meetUp)
        const visibility = myComponent.exists()
        expect(visibility).toBe(false)
    })


})