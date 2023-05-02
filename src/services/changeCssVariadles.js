export const changeCssVariadles = (theme) => {
    const root = document.querySelector(':root')

    const cssVariables = ['header', 'bgImage']

    cssVariables.forEach(el => {
        root.style.setProperty(
            `--theme-default-${el}`,
            `var(--theme-${theme}-${el})`
        )
    })
}