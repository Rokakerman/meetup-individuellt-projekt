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

    it("should display the detailed view of the meet-up", () => {
        let liArray = wrapper.findAll('li')
        const actual = liArray.length;
        let expected = getMeetUps()
      
        expect(actual).toBe(expected.length)
    })

    it("should emit a event when clicking on a meetup", async () => {
        let liArray = wrapper.findAll('li')
        const firstLi = liArray.at(0)
        console.log(liArray.length + JSON.stringify(firstLi))
        await firstLi.trigger('click')
        await wrapper.vm.$nextTick()

        console.log(wrapper.emitted())
        expect(wrapper.emitted()).toEqual({"selectMeetUp": [[1]]})

    })
})