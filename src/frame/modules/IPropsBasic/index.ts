/** 组建的props接口 */
export default interface IPropsBasic {

    /**  */
    match?: {
        isExact: boolean,
        params: any,
        path: string,
        url: string,
    }

    /**  */
    history?: {
        action: string,
        block: () => void,
        go: (n) => void,
        goBack: () => void,
        goForward: () => void,
        location: ILocation,
        push: (path: any, state?: any) => void,
    }

    location?: ILocation
}

interface ILocation {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: any,
}