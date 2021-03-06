

// JS
import './scripts/simblebar.js'
import './scripts/glide.js'
import './scripts/range-slider.js'
import './scripts/sticky.js'
import './scripts/slick-slider'
import './scripts/azazlyst'


// Vue
import Vue from 'vue/dist/vue.common.dev';
import VCalendar from 'v-calendar/lib/components/date-picker.umd';
new Vue({
    el:'#app',
    data:{
    	date: '',
    },
    components: {
        VCalendar
    }
})

