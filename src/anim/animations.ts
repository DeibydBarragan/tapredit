export const flyUp = {
    initial: {
        y: 50,
        opacity: 0,
    },
    whileInView: {
        y: 0,
        opacity: 1,
    },
}

export const flyRight = {
    initial: {
        x: -50,
        opacity: 0,
    },
    whileInView: {
        x: 0,
        opacity: 1,
    },
}

export const flyLeft = {
    initial: {
        x: 50,
        opacity: 0,
    },

    whileInView: {
        x: 0,
        opacity: 1,
    },
}

export const fadeIn = {
    initial: {  
        opacity: 0,
    },
    whileInView: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}