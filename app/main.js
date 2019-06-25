import Vue from 'nativescript-vue'
import App from './components/App'
import store from './store';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView);
Vue.registerElement('SVGImage', () => require('@teammaestro/nativescript-svg').SVGImage);
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);


new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
