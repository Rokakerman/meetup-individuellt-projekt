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

  /*- Den ska visa en detaljerad vy av meet-upen
    - Jag ska kunna klicka på en knapp som sparar meet-upen i en lista med mina bokade evenemagn.
    - Jag ska kunna klicka bort den detaljerade vyn och återgå till meet-up listan
    - Om jag bokar in mig så ska knappen ersättes med en text som säger den är bokad
    - Om meet-upen redan är inbokad ska det jag kunna recensera den
    - Om meet-upen redan är inbokad ska det jag kunna avboka den */

    it("should display the detailed view of the meet-up", () => {
        const LANDING = wrapper.get("main");
        expect(LANDING.exists()).toBe(true)
    })

    it("should ", () => {
        const MEETUP = wrapper.findAllComponents(meetUps)
        expect(MEETUP.exists()).toBe(true)
    })


})