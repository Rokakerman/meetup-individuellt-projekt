import { shallowMount } from '@vue/test-utils'
import MeetUps from '@/components/Meet-ups.vue'
import { getMeetUps } from '@/data/data.js';

describe("Meet-ups.vue", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(MeetUps, {
            propsData: {
                dataBase: getMeetUps()
            }
        })
    })

  /*- Den ska visa en kortfattad beskrivnng av meet-upen
    - Jag ska kunna klicka på en meet-upen och få upp en detaljerad vy av evenemanget. */

    it("should display all meet-ups", () => {
        let expected = getMeetUps()
        let actual = wrapper.vm.dataBase.length
        // hej
        console.log('Here: ' + expected.length)
        expect(actual).toBe(expected.length)
    })

    it("should emit a event when clicking on a meetup", async () => {
        const liArray = wrapper.findAll('li')
        const firstLi = liArray.at(0)
        console.log(liArray.length + JSON.stringify(firstLi))
        await firstLi.trigger('click')
        await wrapper.vm.$nextTick()
    
        const wrapper = mount(Emitter)

        wrapper.vm.emitEvent()

        expect(wrapper.emitted().myEvent[0]).toEqual(["name", "password"])
        expect(wrapper.emitted()).toBeTruthy()
    })


})