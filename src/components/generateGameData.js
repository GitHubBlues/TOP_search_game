import picture1 from '../assets/Motiv1-Baustelle-Badesee1600x1200px.jpg';
import picture2 from '../assets/Motiv2-Zoo-Flohmarkt-1600x1200px.jpg';
import picture3 from '../assets/Motiv3-Bauernhof-Wiesenfest-1600x1200px.jpg';

import i1_01 from '../assets/Motiv1_bucket.png';
import i1_02 from '../assets/Motiv1_bunny.png';
import i1_03 from '../assets/Motiv1_dog.png';
import i1_04 from '../assets/Motiv1_drum.png';
import i1_05 from '../assets/Motiv1_swimmer.png';
import i1_06 from '../assets/Motiv1_suitcase.png';
import i2_01 from '../assets/Motiv2-bear.png';
import i2_02 from '../assets/Motiv2-coala.png';
import i2_03 from '../assets/Motiv2-flower.png';
import i2_04 from '../assets/Motiv2-flower2.png';
import i2_05 from '../assets/Motiv2-table.png';
import i2_06 from '../assets/Motiv2-hat.png';
import i3_01 from '../assets/Motiv3-cat.png';
import i3_02 from '../assets/Motiv3-detective.png';
import i3_03 from '../assets/Motiv3-ghost.png';
import i3_04 from '../assets/Motiv3-lamp.png';
import i3_05 from '../assets/Motiv3-parrot.png';
import i3_06 from '../assets/Motiv3-star.png';

const generateGameData = () => {
         
    const obj = [
    { image1:{
        src : picture1,
        alt:  "at the lake",
        items: [ 
            { src: i1_01, key: i1_01, found: false, name: "bucket", x: 1252, y: 1063 },
            { src: i1_02, key: i1_02, found: false, name: 'bunny', x: 346, y: 457 },
            { src: i1_03, key: i1_03, found: false, name: "dog", x: 1255, y: 639 },
            { src: i1_04, key: i1_04, found: false, name: "drum", x: 880, y: 962 },
            { src: i1_05, key: i1_05, found: false, name: "swimmer", x: 1033, y: 383 },
            { src: i1_06, key: i1_06, found: false, name: "suitcase", x: 900, y: 171 }
        ]    
    }},
    { image2: {
        src : picture2,
        alt:  "at the sea",
        items: [ 
            { src: i2_01, key: i2_01, found: false, name: "bear", x: 1138, y: 587 },
            { src: i2_02, key: i2_02, found: false, name: 'coala', x: 200, y: 588 },
            { src: i2_03, key: i2_03, found: false, name: "flower", x: 1522, y: 230 },
            { src: i2_04, key: i2_04, found: false, name: "flower", x: 605, y: 673 },
            { src: i2_05, key: i2_05, found: false, name: "table", x: 1205, y: 98 },
            { src: i2_06, key: i2_06, found: false, name: "hat", x: 1284, y: 789 }
        ]    
    }},
    {image3: {
        src : picture3,
        alt:  "at the farm",
        items: [  
            { src: i3_01, key: i3_01, found: false, name: "cat", x: 911, y: 807 },
            { src: i3_02, key: i3_02, found: false, name: 'detective', x: 474, y: 1136 },
            { src: i3_03, key: i3_03, found: false, name: "ghost", x: 757, y: 232 },
            { src: i3_04, key: i3_04, found: false, name: "lamp", x: 274, y: 464 },
            { src: i3_05, key: i3_05, found: false, name: "parrot", x: 889, y: 327 },
            { src: i3_06, key: i3_06, found: false, name: "star", x: 214, y: 42 }
        ]
    }},     
];
    return obj; 
};

export default generateGameData;