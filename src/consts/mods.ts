interface Mod {
    id: string,
    name: string,
    description: string
}

const addGetters = (mods: Mod[]): Mod[] => {
    return mods.map((b) => ({
        ...b
    }))
}

export const MODS: Mod[] = addGetters([
    {
        id: "security-craft",
        name: "Security Craft",
        description: "SecurityCraft Mod Añade exactamente lo que el nombre sugiere láser, escáneres de retina, teclados, puertas irrompibles y más. Seadapta bien a mods como Smart Moving, Secret Rooms y el mod de WallJump. Ahora tiene la opción de configurar contraseñas y códigos clave para acceder a través de puertas que son inquebrantables, excepto por el propietario."
    },
    {
        id:"advancement-plaques",
        name: "Advancement Plaques",
        description: "Advancement Plaques Mod reemplaza el banner emergente que se muestra cuando alcanzamos un nuevo logro en el juego."
    },
    {
        id:"apple-skin",
        name: "Apple Skin",
        description: "AppleSkin Mod añade algunas mejoras para el HUD de Minecraft. Este Mod está enfocado más al lado del cliente."
    },
    {
        id: "artifacts",
        name:"Artifacts",
        description: "Artifacts Mod agrega objetos que nos dan habilidades especiales cuando nos los equipamos, estos artefactos no se pueden fabricar, por lo que tendrás que ir de aventura a minas, pirámides del desierto y cualquier tipo de estructura que contenga un cofre, ya que ahí hay probabilidad de encontrarte algunos de ellos."
    },
    {
        id: "yungs-better-dungeons",
        name: "Yung's Better Dungeons",
        description: "Yung’s Better Dungeons Mod rediseña por completo las mazmorras vanilla de Minecraft y agrega tres nuevas mazmorras: ¡Catacumbas, Fortalezas de los no muertos y Cuevas de arañas! Dentro encontrarás muchos spawns de enemigos que tendrás que acabar con ellos y poder recoger el botín que se encuentra dentro."
    },
    {
        id: "better-strongholds",
        name: "Better Strongholds",
        description: "Better Strongholds Mod rediseña completo de las fortalezas de Minecraft, haciéndolas más llamativas para el jugador y que su objetivo principal no sea ir de primeras al portal, sino explorar por completo y aventurarse dentro."
    },
    {
        id: "biomes-o-plenty",
        name: "Biomes O’ Plenty",
        description: "Biomes O’ Plenty es un mod bioma expansivo para Minecraft que añade un montón de nuevas, biomas únicas! Para ir junto con los nuevos biomas, que añade nuevas plantas, flores, árboles, bloques de construcción, turbas, minerales, y mucho más!"
    },
    {
        id: "blue-skies",
        name: "Blue Skies",
        description: "Blue Skies Mod agregas dos nuevas dimensiones únicas llamadas Everbright y Everdawn. Estas dimensiones ofrecen emocionantes características nuevas, bloques fascinantes, armas poderosas, criaturas y enormes mazmorras para explorar. Cada dimensión tiene su propia estética única; Everbright es una tierra nevada y fría con un brillo brillante, mientras que Everdawn es más oscura y cálida. Actualmente, los jugadores pueden explorar dos Dungeons en cada dimensión, lo que suma un total de cuatro Dungeons emocionantes para conquistar."
    },
    {
        id: "ultimate-car",
        name: "Ultimate Car",
        description: "Ultimate Car Mod agrega automóviles, construcción de carreteras y producción de gasolina para hacer funcionar los automóviles. Primero deberás producir la gasolina necesaria, después tendrás que hacer tu automóvil favorito de los 54,000 modelos diferentes que hay y por último construyes la carretera para transitar sobre ella."
    },
    {
        id: "carry-on",
        name: "Carry On",
        description: "Carry On es un mod simple que mejora la interacción del juego al permitir que los jugadores recojan, transporten y coloquen entidades de mosaico de bloque único (como cofres, hornos, droppers, spawners y tus máquinas favoritas de otros Tech Mods) usando solo sus manos vacías."
    },
    {
        id: "mr-crayfish",
        name: "MrCrayfish's Furniture",
        description: "MrCrayfish's Furniture Mod agrega funcionalidades y útiles muebles y decoraciones. Serás capaz de encontrar muebles para toda tu casa, incluyendo la cocina, habitación, comedor y más."
    }
        {
        id: "chochocraft",
        name: "ChocoCraf",
        description: "ChocoCraft Mod añade animales llamados Chocobos al juego. Incluye Chocobos de diferentes colores con diferentes atributos en su persona mayor y la forma juvenil."
    }
        {
        id: "clups",
        name: "Clumps",
        description: "Clumbs mod para minecraft (Orbes XP se amontonan) está programado y diseñado con un propósito de mejorar los fps para el jugado en un caso particular."
    }
        {
        id: "customizable-elytras",
        name: "Customizable Elytra",
        description: "Customizable Elytra Mod permite personalizar los Élitros cambiando su color con todas las variantes vanilla que hay, también se puede colocar diseños de banner que hagamos y por ultimo cuenta con soporte para capas."
    }
        {
        id: "diagonal-fences",
        name: "Diagonal Fences",
        description: "Diagonal Fences Mod hace que cualquier tipo de valla se pueda conectar de forma diagonal, esto a simple vista se ve un poco extraño, ya que se puede formar un tipo círculo que no estamos acostumbrados en Minecraft. Sin embargo, podemos llegar a ahorrarnos algunas vallas porque no necesitamos rellenar las esquinas."
    }
        {
        id: "drink-beer",
        name: "Drink beer",
        description: "Drink Beer Mod agrega barriles para preparar cerveza, con tazas de madera típicas que puedes beber de ellas, además puedes colocarlas encima de bloques y quedan muy bien para decoración."
    }
        {
        id: "when-dungeon-arise",
        name: "When Dungeons Arise",
        description: "When Dungeons Arise Mod nos trae innumerables mazmorras para explorar en nuestro mundo de Minecraft. Estas se generan aleatoriamente por el mundo, garantizando muchas aventuras y desafíos a quienes tengan el valor de entrar a una de ellas."
    }
        {
        id: "openblock-elevator",
        name: "OpenBlocks Elevator",
        description: "OpenBlocks Elevator  es un mod que permite crear ascensores, o elevadores, de forma sencilla, lo único que necesitaremos es craftear un bloque específico para cada piso."
    }
        {
        id: "enchantment-descriptions",
        name: "Enchantment Descriptions",
        description: "Enchantment Descriptions es Mod que añade descripciones detalladas sobre los encantamientos de las herramientas en los libros encantados en Minecraft."
    }
        {
        id: "evilcraft",
        name: "EvilCraft",
        description: "EvilCraft Mod mágico/técnico que se basa en cosas algo malas. Durante el juego descubrirás una antigua fuente de maldad. Estos poderes pueden ser utilizados en varios avances tecnológicos para iniciar una segunda era de maldad."
    }
        {
        id: "fabled-weaponry",
        name: "Fabled Weaponry",
        description: "Fabled Weaponry Mod agrega un montón de nuevas armas, escudos, hachas, arcos, mazos y más, además todas tienen una pasiva única. Estas pasivas varían dependiendo el arma y están diseñadas para ofrecer variedad y dinamismo a los combates."
    }
        {
        id: "fallingtree",
        name: "FallingTree",
        description: "FallingTree Mod. Talar arboles se puede hacer bastante aburrido en especial con los arboles de selva, siempre necesitamos madera y perdemos tiempo rompiendo cada tronco del árbol, entonces este mod nos ayudará con eso ahora solo necesitar romper el tronco inferior del árbol y este caerá junto con sus hojas dejándonos varios Saplings para volver a plantar."
    }
        {
        id: "the-farlanders",
        name: "The Farlanders",
        description: "The Farlanders Mod agrega 13 nuevas criaturas Ender a mundo de Minecraft. Estos Ender harán tu Survival más complicado a la hora de estar bagando por el mundo."
    }
        {
        id: "goblin-traders",
        name: "Goblin Traders",
        description: "Goblin Traders Mod agrega pequeños duendes con los que podremos comerciar, los encontraremos bajo tierra, en las cuevas y aleatoriamente en el Nether. Estos nuevos comerciantes nos ofrecerán artículos raros y especiales que normalmente no podrías obtener por nuestra cuenta, al igual que los aldeanos necesitamos esmeraldas para comerciar con ellos."
    }
        {
        id: "gravestone",
        name: "GraveStone",
        description: "GraveStone Mod añade una tumba/lápida a tu mundo de Minecraft; cuando mueras, la lápida será colocada en las coordenadas de tu muerte y el nombre del jugador se mostrará en ella. Al momento de romper la lápida, caerán los elementos de tu inventario."
    }    
        {
        id: "guard-villagers",
        name: "Guard Villagers",
        description: "Guard Villagers Mod añade aldeanos que protegerán su aldea de enemigos que quieran atacarla. este mod agrega aldeanos guardianes que llevan con ellos espadas, escudos y ballestas para acabar con cualquier amenaza que se topen incluso con un jugador."
    }
        {
        id: "hwyla",
        name: "Hwyla",
        description: "Hwyla Mod es muy parecido a WAILA pero este es un poco más avanzado con funciones extras."
    }
        {
        id: "ice-and-fire",
        name: "Ice And Fire",
        description: "Ice and Fire Mod actualmente añade dos tipos de Dragones: Hielo y Fuego. Dragones del fuego respira fuego y deambulan por la mayor parte del mundo habitable, mientras que los dragones de hielo habitan en los lugares más fríos conocidos por el hombre y la congelación de sus presas a la muerte."
    }
        {
        id: "just-enough-items",
        name: "Just Enough Items (JEI)",
        description: "Just Enough Items es un mod que permite consultar todas las recetas de cualquiera de los diversos bloques y objetos que aparecen en el juego. Además de los de vanilla, también podremos conocer las recetas de los objetos añadidos por la gran mayoría de mods de Minecraft."
    }
        {
        id: "journeymap",
        name: "JourneyMap",
        description: "JourneyMap Mod es un mod cliente que mapea el mundo Minecraft en tiempo real a medida que explora."
    }
        {
        id: "macaws-bridges",
        name: "Macaw’s Bridges",
        description: "Macaw’s Bridges Mod nos permite crear unos puentes de forma fácil y sencillas tanto para decorar nuestras zonas como también para mejorar la movilidad en lugares de difícil acceso y sin tener que trabajar el doble, los puentes se pueden hacer con la mayoría de materiales vanilla de Minecraft."
    }
        {
        id: "mowzies-mobs",
        name: "Mowzie's Mobs",
        description: "Mowzie's Mobs agrega una variedad de criaturas ficticias a Minecraft, y se enorgullece de su IA única, su rica atmósfera y sus animaciones fluidas. Demuestra tu poder contra nuevos jefes y enemigos y reclama sus habilidades mágicas como tuyas."
    }
        {
        id: "not-just-sandiwhich",
        name: "Not Just Sandwich",
        description: "Not Just Sandwich Mod agrega variedad de emparedados y otros alimentos, estos son fabricados con objetos vanilla. Contamos con un total de 17 sándwiches diferentes para preparar, además de otras comidas como sushi, tocino, queso, jalea, huevo frito, y pasteles de frutas."
    }
        {
        id: "enlightend",
        name: "Enlightend",
        description: "Enlightend Mod se encarga de mejorar las aventuras del End al mismo tiempo que mantiene su estilo original. El mod expande la naturaleza del End al agregar nuevos biomas entre islas."
    }
        {
        id: "paragliders",
        name: "Paragliders",
        description: "Paragliders Mod trae un planeador.El parapente se puede confeccionar usando algunos cueros y palos. Mientras que el parapente está en su mano, reducirá su velocidad de caída y negará el daño por caídas."
    }
        {
        id: "plushie",
        name: "Plushie",
        description: "Plushie Mod añade una gran variedad de peluches de mobs de Minecraft a tu juego. Cada peluche es una versión miniatura de un mob de Minecraft"
    }
        {
        id: "relics",
        name: "Relics",
        description: "Relics Mod le da un cambio de jugabilidad a tu Minecraft. Este mod añade 28 reliquias con mecánicas únicas y complejas que te harán a pensar estratégicamente y explorar nuevas posibilidades."
    }
        {
        id: "saturn-mod",
        name: "Saturn Mod",
        description: "Saturn es un mod de rendimiento diseñado para optimizar al máximo el uso de memoria de Minecraft. Funciona en el cliente y en servidor, y solo necesita que alguno de los dos lo tenga instalado para que funcione."
    }
        {
        id: "supplementaries",
        name: "Supplementaries",
        description: "Supplementaries Mod agrega muchos nuevos objetos que nos complementarán la experiencia vanilla de Minecraft. Estos objetos son funcionales que nos ayudan en algunas tareas y otros podemos usarlos para decorar"
    }
        {
        id: "tinkers-construct",
        name: "Tinkers Construct",
        description: "Tinkers Construct es un mod que ofrece la posibilidad de personalizar la fabricación de equipo para nuestro personaje mediante la fundición de recursos minerales y la fabricación de moldes para cada una de las piezas que componen una espada, un hacha o cualquier otro objeto de equipo de personaje."
    }
        {
        id: "travelers-backpack",
        name: "Traveler’s Backpack",
        description: "Traveler’s Backpack Mod agrega mochilas que nos servirán para viajar largas distancias. Las mochilas contarán con gran capacidad para nuestros objetos, permite almacenar líquidos como el agua y la lava, una mesa de crafteo integrada y un saco de dormir."
    }
        {
        id: "the-twilight-forest",
        name: "The Twilight Forest",
        description: "Imagine pasar por un portal en un reino crepuscular, lleno de árboles tan lejos como pueda ver. Impresionantes vistas y sorprendentes descubrimientos te esperan en cada esquina. ¡Pero cuidado! No todos los habitantes del bosque responden a su intrusión a la ligera."
    }
        {
        id: "valhelsia-structures",
        name: "Valhelsia Structures",
        description: "Valhelsia Structures Mod agrega nuevas estructuras a Minecraft, como edificios abandonados, base de saqueadores y mazmorras. También reemplaza algunas estructuras propias del juego con alternativas añadidas por este mod."
    }
        {
        id: "vampirism",
        name: "Vampirism",
        description: "Vampirism Mod te permite convertirte en un vampiro con todos sus beneficios y desventajas. Después de ser mordido por un vampiro o inyectar manualmente sangre de vampiro que eventualmente te convierte en un vampiro."
    }
        {
        id: "alexs-mobs",
        name: "Alex’s Mobs",
        description: "Alex’s Mobs Mod añade 23 nuevos Mobs a Minecraft. Todas estas criaturas cumplen un propósito necesario, y tienen drops, mecánicas o funciones únicas, ya que no hay criaturas puramente estéticas."
    }
        {
        id: "waystones",
        name: "Waystones",
        description: "Waystones Mod nos permite teletransportarnos a través de las estructuras raras que tendremos que construir. Las estructuras funcionan como un checkpoint podremos ponerle un nombre para identificar cada estructura y saber hacia donde queremos ir."
    }
])
