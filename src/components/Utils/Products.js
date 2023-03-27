const products = [
        {
        id:1,
        titleBanner:"Impresora de uso dual diseñada para ambientes y aplicaciones industriales",
        title: "Kubox",
        subtitle: "Impresora de uso dual diseñada para satisfacer más de un objetivo.",
        detailsTitle: "... ALGUN TITULO... ??",
        detailsText: "La estructura garantiza una gran rigidez minimizando las vibraciones. Exclusivo sistema de cabezales.", 
        accordion: [
            {title:"Gestión del consumo de combustible", description:"Permite imprimir por FDM con materiales convencionales, como PLA, ABS, PETG, y técnicos como NYLON, POM, PVOH."},
            {title:"Modo fresadora", description:"Previo cambio el cabezal y plataforma de trabajo, permite realizar mecanizados ligeros (ruteo de placas, grabado y fresado de materiales no ferrosos). Para el mecanizado se emplea un minitorno que no viene incluido y puede ser solicitado como un adicional."},
            {title:"Fácil de usar e intuitiva", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Robustez en uso continuo", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Ideal para tu pyme o taller.", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Fácil de usar e intuitiva.", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Jugá, creá, divertite.", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"}
        ],
        imgHero: "products/kubox/portada.png",
        img:[
            {src:"1"},
            {src:"2"},
            {src:"3"}
        ],
        datasheet: [
            {specification:"Volumen de impresión de 300x300x300mm."},
            {specification:"Base de impresión calefaccionada de 220V - 500W controlado por relé de estado sólido."},
            {specification:"Estructura fabricada en chapa de corte láser de 2.5mm de espesor."},
            {specification:"Habitáculo cerrado."},
            {specification:"Ventanas transparentes de 3mm de espesor."},
            {specification:"Guías lineales tipo Hiwin (HGR15) en los ejes X e Y."},
            {specification:"4 guías lineales cilíndricas de 12mm en el eje Z."},
            {specification:"Doble cabezal de impresión con accionamiento vertical independiente AVI."},
            {specification:"Nivelación automática de cama."},
            {specification:"Hotend e3d Lite6 + e3d V6 y extrusores dual drive."},
            {specification:"Drivers de motores PaP de la serie Tinamcs TMC."},
            {specification:'Pantalla touch de 7".'},
            {specification:"Electrónica de 32 bits con conexión WiFi y Ethernet."},
            {specification:"Posibilidad de montaje de minitorno para mecanizado."},
            {specification:"Plataforma de trabajo intercambiable (cama de impresión - mesa de mecanizado)."},
            {specification:"Patas regulables para asegurar un buen apoyo en la mesa de trabajo."}
        ],
        subtitleDatasheet: "subtitleDatasheet=>>>",
        strengths: [
            {
                title: "Soporte técnico",
                strength:"Te brindamos soporte técnico durante 1 año."
            },    
            {
                title: "Instalación",
                strength:"Instalación y configuración para que solo tengas que disfrutarla."
            },    
            {
                title: "Mantenimiento",
                strength:"Nos ocupamos del mantenimiento mensual."
            },   
            {
                title: "Capacitaciòn",
                strength:"Capacitamos a tu equipo para sacarle el máximo provecho a tu impresora."
            }
        ],
        highlights: [
            {
                subtitle: "¿A qué público está orientada?", 
                highlight: [
                    {it:"A pymes que quieran modernizar sus procesos de prototipado y manufactura."} , {it:"A colegios técnicos."}, {it:"A talleres que deseen brindar servicio de impresión 3D y no quieran dolores de cabeza."}
                ] 
            },
            {
                subtitle: " Usos posibles.", 
                highlight:[
                    {it:"Fabricación de piezas definitivas en materiales técnicos o bien de prototipos con alto grado de precisión y repetitividad."} , {it:"Objetos pequeños, medianos o grandes."} , {it:"Producción de accesorios, repuestos y pruebas de concepto de ingeniería."}
                ]
            },
            {
                subtitle: "Dificultad de uso.", 
                highlight:[
                    {it:"Es recomendable algo de experiencia previa aunque no es excluyente."} , {it:"Ofrecemos capacitación y soporte técnico para que dejen la capacidad de uso instalada."}
                ]
            },            
        ]
    },    
    {
        id:2,
        titleBanner:"- Impresora diseñada para uso semi profesional, hobbista o para entornos educativos.",
        title: "Koron",
        subtitle: "Impresora para tu taller",
        detailsTitle: "Diseño compacto y terminaciones prolijas en estructura y cableado. La estructura garantiza una gran rigidez minimizando las vibraciones.",
        detailsText: "La estructura garantiza una gran rigidez minimizando las vibraciones. Exclusivo sistema de cabezales.", 
        accordion: [
            {title:"Modo seccionsKoron ?????CS", description:"Permite imprimir por FDM con materiales convencionales, como PLA, ABS, PETG, y técnicos como NYLON, POM, PVOH."},
            {title:"Modo fresadora", description:"Previo cambio el cabezal y plataforma de trabajo, permite realizar mecanizados ligeros (ruteo de placas, grabado y fresado de materiales no ferrosos). Para el mecanizado se emplea un minitorno que no viene incluido y puede ser solicitado como un adicional."},
            {title:"Fácil de usar e intuitiva", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Robustez en uso continuo", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Ideal para tu pyme o taller.", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Fácil de usar e intuitiva.", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Jugá, creá, divertite.", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"}
        ],
        imgHero: "products/koron/portada.png",
        img:[
            {src:"1"},
            {src:"2"},
            {src:"3"}
        ],
        datasheet: [
            {specification:"Volumen de impresión de 200x200x200mm."},
            {specification:"Base de impresión calefaccionada de 12V - 100W."},
            {specification:"Estructura fabricada en chapa de corte láser de 2.5mm de espesor."},
            {specification:"Transmisión eje Z con tornillo de rosca recta."},
            {specification:"Hotend simil e3d Lite6."},
            {specification:"Extrusor dual drive."},
            {specification:"Electrónica MKS de 8 bits con Marlin 2.0."}
        ],
        subtitleDatasheet: "subtitleDatasheet subtitleDatasheet",
        strengths: [
            {
                title: "Soporte técnico",
                strength:"Te brindamos soporte técnico durante 1 año."
            },    
            {
                title: "Instalación",
                strength:"Instalación y configuración para que solo tengas que disfrutarla."
            },    
            {
                title: "Mantenimiento",
                strength:"Nos ocupamos del mantenimiento mensual."
            },   
            {
                title: "Capacitaciòn",
                strength:"Capacitamos a tu equipo para sacarle el máximo provecho a tu impresora."
            }
        ],
        highlights: [
            {
                subtitle: "¿A qué público está orientada?", 
                highlight: [
                    {it:"A instituciones educativas."} , {it:"Particulares que quieran comenzar un emprendimiento propio o simplemente jugar diseñando e imprimiendo.."}
                ] 
            },
            {
                subtitle: " Usos posibles.", 
                highlight:[
                    {it:"Fabricación de piezas definitivas de poca exigencia mecánica o bien de prototipos."} , {it:"Objetos pequeños o medianos."} , {it:"Producción de figuras artísticas y/o decorativas"}
                ]
            },
            {
                subtitle: "Dificultad de uso.", 
                highlight:[
                    {it:"Ideal para los primeros pasos."} , {it:" Mantenimiento mínimo y simple."} , {it:"Software intuitivo." }
                ]
            },            
        ]
    },    
    {
        id:3,
        titleBanner:"Pendiente",
        title: "Pendiente",
        subtitle: "Pendiente",
        detailsTitle: "Pendiente",
        detailsText: "Pendiente", 
        accordion: [
            {title:"Pendiente", description:"Pendiente"},
            {title:"Pendiente", description:"Pendiente"},
            {title:"Pendiente", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Pendiente", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Pendiente", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Pendiente", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"},
            {title:"Pendiente", description:"FALTA DESCCRIPCCCCCIOOOONANOSONOANS"}
        ],
        imgHero: "products/koron/portada.png",
        img:[
            {src:"1"},
            {src:"2"},
            {src:"3"}
        ],
        datasheet: [
            {specification:"Pendiente"},
            {specification:"Pendiente"},
            {specification:"Pendiente"},
            {specification:"Pendiente"},
            {specification:"Pendiente"},
            {specification:"Pendiente"},
            {specification:"Pendiente"}
        ],
        subtitleDatasheet: "Pendiente",
        strengths: [
            {
                title: "Pendiente",
                strength:"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem."
            },    
            {
                title: "Pendiente",
                strength:"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem."
            },    
            {
                title: "Pendiente",
                strength:"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem."
            },   
            {
                title: "Pendiente",
                strength:"Lorem ipsum dolor sit amet. Ut recusandae fugit et unde exercitationem."
            }
        ],
        highlights: [
            {
                subtitle: "Pendiente", 
                highlight:"Pendiente" 
            },
            {
                subtitle: "Pendiente", 
                highlight:"Pendiente",
            },
            {
                subtitle: "Pendiente", 
                highlight:"Pendiente" 
            },            
        ]
    }
]
export default products;
