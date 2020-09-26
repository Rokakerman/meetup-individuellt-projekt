import { shallowMount } from '@vue/test-utils'
import MeetUp from '@/components/Meet-up.vue'
import { getMeetUps } from '@/data/data.js';

describe("Meet-ups.vue", () => {
    let wrapper
    let dataBaseList = getMeetUps()
    let object = dataBaseList[0]

    beforeEach(() => {
        sessionStorage.clear()
        wrapper = shallowMount(MeetUp, {
            propsData: {
                dataBaseItem: object
            }
        })
    })

  /*- Den ska visa en detaljerad vy av meet-upen
    - Jag ska kunna klicka på en knapp som sparar meet-upen i en lista med mina bokade evenemagn.
    - Jag ska kunna klicka bort den detaljerade vyn och återgå till meet-up listan
    - Om jag bokar in mig så ska knappen ersättes med en text som säger den är bokad
    - Om meet-upen redan är inbokad ska det jag kunna recensera den
    - Om meet-upen redan är inbokad ska det jag kunna avboka den */

    it("should display the detailed view of the meet-up on render", () => {
        const visibility = wrapper.isVisible()
        expect(visibility).toBe(true)
    })

    it("should contain a object from the database within props", () => {
        let actual = wrapper.vm._props.dataBaseItem;
        let expected = object
        //console.log('Vue instance item : ' +  JSON.stringify(x) /*JSON.stringify(Object.keys(wrapper.vm._props))*/)
        //console.log('Test Item: ' + JSON.stringify(object))
        expect(actual).toBe(expected)
    })

    it("should display the meet-up properties on render", async () => {
        let html = wrapper.findAll("h2").at(0).text()
        let length = html.length
        let expected

        async function myFunction() {
            if(!length) {
                return expected = false
            }
            return expected = true
        }
        await myFunction()
        
        console.log(expected)
        expect(expected).toBe(true) 
    })

    it("should store the meet-up in session storage when clicking on book", async () => {
        const SS_KEY = 'my-meet-up-list';
        const VALUE = object; 
        dispatch(action.update(SS_KEY, VALUE));
        expect(sessionStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
        expect(sessionStorage.__STORE__[KEY]).toBe(VALUE);
        expect(Object.keys(sessionStorage.__STORE__).length).toBe(1);
    })
})