import { JSX, lazy } from "react";
import { NoLazy } from "../01-lazyload/components/pages/NoLazy";
/* import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/components/pages"; */

interface Route {
    to: string;
    path:string;    
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

type JSXComponent = ()=> JSX.Element;

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */"../01-lazyload/layout/LazyLayout"));



export const Routes:Route[] = [
    {
        path:"/lazyload/*",
        to:"/lazyload/lazy1",
        Component: LazyLayout,
        name:"Lazy layout"
    },
    {
        to:"/no-Lazy",
        path:"no-Lazy",
        Component: NoLazy,
        name:"No lazy"
    }
]