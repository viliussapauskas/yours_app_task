import { getIssuesStateSelector } from './issuesSlice'
import { IssuesState } from './types'

describe('Issues slice test', () => {
    it('Should return correct value getIssuesStateSelector', () => {
        const response: IssuesState = {
            value: [
                {
                    id: 1,
                    number: 1,
                    title: 'title',
                    user: {
                        login: 'login',
                    },
                    createdAt: 'createdAt',
                    commentsCount: 2,
                },
            ],
            status: 'idle',
        }
        const result = getIssuesStateSelector({
            issues: response,
        })

        expect(result).toEqual(response)
    })
})
