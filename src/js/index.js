

// JS
import './scripts/menu.js'
import './scripts/glide.js'
import './scripts/range-slider.js'
import './scripts/sticky.js'
import './scripts/slick-slider'


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

