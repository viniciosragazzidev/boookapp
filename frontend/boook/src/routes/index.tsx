import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {

    return (
        <>
            <h1 className=''>
                <span>Boook App</span>
            </h1>
        </>
    )
}

