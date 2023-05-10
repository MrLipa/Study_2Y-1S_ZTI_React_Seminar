import React from 'react'
import Home from "./components/Home";
import Cities from "./components/Cities";
import BookList from "./components/BookList";
import Theme from "./components/Theme";
import CustomHook from "./components/CustomHook";
import SlowComponent from "./components/SlowComponent";
import DataComponent from "./components/DataComponent";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  let items = [["New York", "USA"], ["Tokyo", "Japan"]];
  return (
    <h1>Hello World!</h1>
    // <Home></Home>
    // <Cities items={items} color='success'></Cities>
    // <BookList />
    // <Theme></Theme>
    // <SlowComponent />
    // <CustomHook />
    // <QueryClientProvider client={queryClient}>
    //   <DataComponent />
    // </QueryClientProvider> 
  )
}

export default App
