import {
    Fancybox
} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


function fancybox() {
    Fancybox.bind('[data-fancybox]', {
        // Custom options
    });

    // document.getElementById('trigger').addEventListener('click', () => {
    //     Fancybox.show([{
    //             src: "https://youtu.be/5BY-oUoccgU?si=2CjPRJnpnfjlNHNZ",
    //             thumb: "../../img/asot.jpg",
    //         },
    //         {
    //             src: "https://www.youtube.com/watch?v=dZRqB0JLizw",
    //             thumb: "http://i3.ytimg.com/vi/dZRqB0JLizw/hqdefault.jpg",
    //         },
    //         {
    //             src: "https://vimeo.com/259411563",
    //             thumb: "https://f.vimeocdn.com/images_v6/lohp/video1_thumbnail.png",
    //         },
    //     ]);
    // });
}

export default fancybox;

