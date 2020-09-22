import { shallowMount } from '@vue/test-utils'
import MeetUps from '@/components/Meet-ups.vue'
import { getMeetUps } from '@/data/data.js';
import { get } from 'core-js/fn/reflect';

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
        function getLength(callback) {
            let list = getMeetUps()
            callback(list.length)
        }

        // hej
        console.log('Here: ' + getLength)
    })

    it("should open emit a event when clicking on a meetup", () => {
        const MEETUP = wrapper.findAllComponents(meetUps)
        expect(MEETUP.exists()).toBe(true)
    })


})