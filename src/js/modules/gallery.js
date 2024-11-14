import {
    Fancybox
} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


function gallery() {
    Fancybox.bind('[data-fancybox]', {
        Thumbs: {
            type: "classic",
        },
    });
}

export default gallery;

