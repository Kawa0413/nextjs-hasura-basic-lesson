import { render, screen, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handler'
process.env.NEXT_PUBLIC_HASURA_URL = 'https://kome-lesson-hasura.hasura.app/v1/graphql'

initTestHelpers()

const server = setupServer(...handlers)
beforeAll(() => {
    server.listen()
})
afterEach(() => {
    server.resetHandlers()
    cleanup()
})
afterAll(() => {
    server.close()
})

describe('Hasura fetch Test Cases', () => {
    it('Should render ther list of users by useQuery', async () => {
        const { page } = await getPage({
            route: '/hasura-main',
        }) 
        render(page)
        expect(await screen.findByText('Hasura main page')).toBeInTheDocument()
        expect(await screen.findByText('Test user A')).toBeInTheDocument()
        expect(await screen.findByText('Test user B')).toBeInTheDocument()
        expect(await screen.findByText('Test user C')).toBeInTheDocument()

    })
})