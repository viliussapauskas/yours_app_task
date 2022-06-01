export interface Issue {
    id: number
    number: number
    title?: string
    user?: User
    createdAt: string
    commentsCount: number
}

interface User {
    login: string
}

export interface IssuesState {
    value?: Issue[]
    status: 'idle' | 'loading' | 'failed'
}

export interface IssuesPayload {
    username: string
    repository: string
}
