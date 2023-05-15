export const dataMenuItems = [
    {title: "Servicios", class:"nivel1" , submenu:[
                                {title: "Servicios de IA", class:"nivel2" , link:"/servicios/2"},
                                {title: "Servicios de IoT", class:"nivel2" ,link:"/servicios/1"},
                                {title: "Servicios de 3D", class:"nivel2" ,link:"/servicios/3"},
                        ]},
    {title: "Productos", class:"nivel1" , submenu: [
            {title: "Productos IoT", class:"nivel2" , submenu:[ 
                                        { title: "Noisen", class:"nivel3" ,href:"https://www.noisen.com.ar/"}
                                        ]},
            {title: "Productos 3D", class:"nivel2" ,submenu: [
                                    { title: "Kubox", class:"nivel3" ,link:"/products/1"},
                                    { title: "Koron", class:"nivel3" ,link:"/products/2"},                                                           
                                        ]},
            ],},
    {title: "Nosotros", class:"nivel1" ,link:"/aboutUs"},
    {title: "Contacto",component:"Contacto", class:"nivel1" },
];

