declare module '*.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare var process: any;
declare const __IS_DEV__: boolean;
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
