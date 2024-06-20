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
])