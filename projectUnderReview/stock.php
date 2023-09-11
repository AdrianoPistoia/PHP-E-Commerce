<?php
// estuve pensando la forma de hacer el stock. (¿como es eso?) si ponerlos por cada categoria el array de productos (Ej. "Guitarras" = ["cada guitarra con sus especificaciones (incluye su categoria)"]) o solo el array del producto guardado directo a la variable $products (ej. $products = ["cada producto con sus especificaciones"])

/**PREPARÉ UN ARRAY CON IDs LISTOS PARA 20 PRODUCTOS EN TOTAL  (Obvio estan sujeto a cambios)*/
$products = [
    "Drums" => [
        [
            "id" => 1,
            "target" => "Pearl",
            "name" => "Pearl Export Series",
            "description" => "Versátil y confiable, ideal para principiantes y músicos experimentados. Ofrece calidad de sonido asequible.",
            "price" => 1200,
            "img" => "assets/drum_pearl.jpg",
            "category" => "Baterias"
        ],
        [
            "id" => 2,
            "target" => "Drum Workshop",
            "name" => "DW Collector's Series",
            "description" => "Personalización y artesanía de la más alta calidad. La elección para bateristas que buscan exclusividad.",
            "price" => 1600,
            "img" => "assets/drum_dw.jpg",
            "category" => "Baterias"
        ],
        [
            "id" => 3,
            "target" => "Tama",
            "name" => "Tama Starclassic",
            "description" => "Sonido excepcional y construcción robusta para profesionales. Destaca por su versatilidad y resonancia.",
            "price" => 800,
            "img" => "assets/drum_tama.jpg",
            "category" => "Baterias"
        ],
        [
            "id" => 4,
            "target" => "Ludwig",
            "name" => "Ludwig Classic Maple",
            "description" => "Sonido clásico y cálido, perfecto para rock y jazz. Construcción de arce para una calidad sonora excepcional.",
            "price" => 550,
            "img" => "assets/drum_ludwig.jpg",
            "category" => "Baterias"
        ]
    ],
    "Guitars" => [
        [
            "id" => 5,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 6,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 7,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 8,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ]
    ],
    "Bass" => [
        [
            "id" => 9,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 10,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 11,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 12,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ]
    ],
    "Microphones" => [
        [
            "id" => 13,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 14,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 15,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 16,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ]
    ],
    "Cymbals" => [
        [
            "id" => 17,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 18,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 19,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ],
        [
            "id" => 20,
            "target" => "",
            "name" => "",
            "description" => "",
            "price" => 0,
            "img" => "",
            "category" => ""
        ]
    ],
];
/** estoy aun armando el stock antes de pasarlo a JSON
 * echo json_encode($productos);
 */