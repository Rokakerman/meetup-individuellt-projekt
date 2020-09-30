import { shallowMount } from '@vue/test-utils'
import MyMeetUps from '@/components/My-meet-ups.vue'
import { getMeetUps } from '@/data/data.js';


describe("Meet-ups.vue", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(MyMeetUps, {
            propsData: {
                userData: getMeetUps()
            }
        })
    })

  /*- Den ska visa en lista med mina sparade meet-ups
    - Jag ska kunna klicka på en meet-up och få en detaljerad vy av min bokade meet-up*/

    it("should display all meet-ups", () => {
        let liArray = wrapper.findAll('li')
        const actual = liArray.length;
        let expected = getMeetUps()
        // hej
        expect(actual).toBe(expected.length)
    })

    it("should open emit a event when clicking on a meetup", async () => {
        let liArray = wrapper.findAll('li')
        const firstLi = liArray.at(0)
        console.log(liArray.length + JSON.stringify(firstLi))
        await firstLi.trigger('click')
        await wrapper.vm.$nextTick()

        console.log(wrapper.emitted())
        expect(wrapper.emitted()).toEqual({"selectMeetUp": [[0]]})
    })
})