export const colors = {
    mainWhite: `#fff`,
    mainBlack: `#262626`,
    mainYellow: `#d2aa5c`,
}

export const textSlanted = `font-family: 'Caveat', sans-serif`;

export const transDefault = 'transition: all 0.5s ease-in-out'

export const transFunction = (
    property= 'all',
    time = '0.5s',
    type = 'linear'
) => {
    return `transition: ${property} ${time} ${type}`
}

export const transObject = ({
    property = 'all',
    time = '0.5s',
    type= 'ease-in-out'
})=>{
    return `transition: ${property} ${time} ${type}`
}

export const border = ({
    width= '0.15rem',
    type = 'solid',
    color = 'white'
}) => {
    return `border:${width} ${type} ${color}`
}