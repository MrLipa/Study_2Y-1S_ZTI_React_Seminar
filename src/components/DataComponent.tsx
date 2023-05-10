import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';
import {
    useQuery,
    useMutation,
  } from '@tanstack/react-query'

const DataComponent = () => {
    const query_cats = useQuery({
        queryKey: ['catsData'],
        queryFn: () =>
        fetch('https://catfact.ninja/fact').then(
            (res) => res.json(),
        ),
    })
    const { isLoading, error, data } = useQuery({
        queryKey: ['apiData'],
        queryFn: () =>
        fetch('https://api.publicapis.org/entries').then(
            (res) => res.json(),
        ),
    })

    if (isLoading || query_cats.isLoading) {
        return (
            <Container className="text-center">
                <div className="text-primary">Loading...</div>
            </Container>
        );
    }
    
    if (error || query_cats.isError) {
        return (
            <Container className="text-center">
                <div className="text-primary">An error</div>
            </Container>
        );
    }

    return (
        <>
            <Container className="text-center mb-4">
                <div className="text-primary">{query_cats.data.fact}</div>
            </Container>
            <Container className="text-center">
                <ListGroup>
                    {data.entries.slice(0, 500).map((entry: any, index: number) => (
                        <ListGroup.Item key={index} className="text-primary">
                            {entry.API}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Container>
        </>
    );    
}

export default DataComponent;
