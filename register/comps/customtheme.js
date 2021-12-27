import { extendTheme, theme as base, withDefaultVariant } from '@chakra-ui/react'
const theme = extendTheme({
    fonts: {
        heading: `, ${base.fonts?.heading}`,
        body: `, ${base.fonts?.body}`,
    }
},
withDefaultVariant({
    variant: 'filled',
    components: ['Input']

})
);
export default theme;