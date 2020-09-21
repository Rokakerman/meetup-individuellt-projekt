import { shallowMount } from '@vue/test-utils'
import MeetUps from '@/components/Meet-ups.vue'
import { getMeetUps } from '@/data/data.js';

describe("Meet-ups.vue", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(MeetUps, {
            propsData: {
                list: getMeetUps()
            }
        })
    })
  /*- Den ska visa mina meet-ups på render
    - Jag ska kunna klicka på en meet-up.
*/

    it("should display the users boked meet-up list on render", () => {
        const LANDING = wrapper.get("main");
        expect(LANDING.exists()).toBe(true)
    })

    it("should open emit a event when clicking on a meetup", () => {
        const MEETUP = wrapper.findAllComponents(meetUps)
        expect(MEETUP.exists()).toBe(true)
    })


})