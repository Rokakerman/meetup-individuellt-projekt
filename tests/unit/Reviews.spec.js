import { shallowMount } from '@vue/test-utils'
import Reviews from '@/components/Reviews.vue'
import { getReviews } from '@/data/data.js';

describe("Meet-ups.vue", () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Reviews, {
            propsData: {
                dataBase: getReviews()
            }
        })
    })

  /*- Den ska visa en kortfattad beskrivnng av meet-upen
    - Jag ska kunna klicka på en meet-upen och få upp en detaljerad vy av evenemanget. */

    it("should display all reviews on render", () => {
        let array = wrapper.findAll('article')
        const actual = array.length;
        let expected = getReviews()
      
        expect(actual).toBe(expected.length)
    })
})