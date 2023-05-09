import React from 'react'
import Home from "./components/Home";
import Cities from "./components/Cities";
import BookList from "./components/BookList";
import Theme from "./components/Theme";
import SlowComponent from "./components/SlowComponent";
import DataComponent from "./components/DataComponent";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

const App1 = () => {
  let items = [["New York", "USA"], ["Tokyo", "Japan"]];
  return (
    // <Home></Home>
    // <Cities items={items} color='success'></Cities>
    // <BookList />
    // <Theme></Theme>
    // <SlowComponent />
    // <QueryClientProvider client={queryClient}>
    //   <DataComponent />
    // </QueryClientProvider> 
  )
}

export default App1