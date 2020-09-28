import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import Profile from '@/views/Profile.vue';
import VueRouter from "vue-router"
import routes from "@/router/routes.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App.vue", () => {
    /*it("renders a child component via routing", async () => {
        const ROUTER = new VueRouter({routes, mode: 'abstract'});
        const wrapper =  shallowMount(App, {
                localVue,
                ROUTER,
        })

        ROUTER.push("/profile");
        await wrapper.vm.$nextTick()
        console.log(wrapper.html())
        expect(wrapper.findComponent(Profile).exists()).toBe(true)
    })*/
})