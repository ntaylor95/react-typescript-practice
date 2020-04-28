interface WidgetA {
    firstName: string,
    lastName: string
}

interface Boilerplate {
    title: string,
    isHappy: boolean,
    i?: number,
    fn?: () => void,
    fnBook?: (title) => Book,
    myObj?: {
        fd1: string
    },
    widgetA?: WidgetA
}