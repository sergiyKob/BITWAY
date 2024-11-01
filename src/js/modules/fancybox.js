import {
    Fancybox
} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        // Custom options
    });
}

export default fancybox;

