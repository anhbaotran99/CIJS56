window.onload = function() {
    let $no = document.getElementById('no');
    let opacity = 1;
    $no.addEventListener('mouseover', function() {
        $no.style.position = "absolute";

        let randomLeft = Math.random() * (window.innerWidth - 300);
        let randomTop = Math.random() * (window.innerHeight - 200);
        
        $no.style.top = randomTop + 'px';
        $no.style.left = randomLeft + 'px';

        opacity = opacity - 0.2;
        $no.style.opacity = opacity; 
    });
}

import{helloByVietnamese, helloByEnglish} from "./hello.js";
import goodbye from "./goodbye.js";

helloByVietnamese();
helloByEnglish();
goodbye();
