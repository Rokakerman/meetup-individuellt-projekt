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

    it("should display all meet", () => {
        const LANDING = wrapper.get("main");
        expect(LANDING.exists()).toBe(true)
    })

    it("should open emit a event when clicking on a meetup", () => {
        const MEETUP = wrapper.findAllComponents(meetUps)
        expect(MEETUP.exists()).toBe(true)
    })
})