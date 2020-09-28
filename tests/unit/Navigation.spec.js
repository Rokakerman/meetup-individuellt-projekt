import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import Profile from '@/views/Profile.vue'

describe("Navigation.vue", () => {
    let wrapper
    const localVue = createLocalVue()
    localVue.use(VueRouter)

    const routes = [{ path: '/profile', component: Profile }]

    const router = new VueRouter({
        routes
    })

    beforeEach(() => {
        wrapper = shallowMount(Navigation, {
            localVue,
            router
        })
    })

    /* - Jag ska kunna switcha imellan två vyar */

    it("should display the navigation on render", () => {
        const NAV = wrapper.get("#nav");
        expect(NAV.exists()).toBe(true)
    })

    it("should be able to change the $route", () => {
        const $route = { path: '/profile', component: Profile}
        wrapper = shallowMount(Navigation, {
            mocks: {
                $route
            }
        })
        expect(wrapper.vm.$route.path).toBe("/profile")
    })


})