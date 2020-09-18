import { shallowMount } from '@vue/test-utils'
import home from '@/views/Home.vue'
import meetUps from '@/components/Meet-ups.vue'
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
    - Alla meet-ups ska finnas i en lista under landing page (scroll)
    - Man ska kunna klicka på en meet-up, få en detaljerad sida av meet-upen och boka in sig
    - När man klicka på en meet-up ska man skickar till "Mina Sidor" */

    it("should display the landing page on render", () => {
        const LANDING = wrapper.get("main");
        expect(LANDING.exists()).toBe(true)
    })

    it("should display the meet-up component on render", () => {
        const MEETUP = wrapper.findAllComponents(meetUps)
        expect(MEETUP.exists()).toBe(true)
    })


})