import './css/style.sass'
import './js/jquery.onepage-scroll.js'
import './js/owl.carousel.min.js'
import './js/main.js';

/**
 * process all images to make webpack load them
 * @param r
 */
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./img/', true));
