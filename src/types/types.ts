type TaskType = {
    id?: number,
    title?: string,
}

export type PredmetsDataType = {
    title: string,
    avg: number,
    hours: number,
    path: string,
    curatorName: string,
    img: string,
    description: string,
    tasks: TaskType[]
}
