export interface Data {
    linkType: string
    groupType: string
    region: string
    name: string
    urlName: string
    linkID: string
    dateAdded: string
    lastLoaded: string
    devices: number
    pendingDevice: number 
}

export type Order = "desc" | "asc"