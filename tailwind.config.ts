import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    // theme: {
    //     extend: {
    //         colors: {
    //             primary: colors.green
    //         }
    //     }
    // },
    darkMode: 'class',
    content: [
        './node_modules/preline/preline.js',
    ],
    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}