import './css/style.sass'
import './js/owl.carousel.min.js'
import './js/main.js'
import './js/animations'

/**
 * process all general to make webpack load them
 * @param r
 */
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./general/', true));
