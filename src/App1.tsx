
import Layout from "./components/Layout";
import Home from "./components/Home";
import Cities from "./components/Cities";
import BooksLayout from "./components/BooksLayout";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Theme from "./components/Theme";
import SlowComponent from "./components/SlowComponent";
import DataComponent from "./components/DataComponent";
import Missing from "./components/Missing";
import CustomHook from "./components/CustomHook";
import { Route, Routes } from "react-router-dom"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App1() {
  let items = [["New York", "USA"], ["Tokyo", "Japan"]];
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/city" element={ <Cities items={items} color='success'></Cities>}/>
            <Route path="/theme" element={ <Theme></Theme>}/>
            <Route path="/books" element={<BooksLayout />}>
              <Route index element={<BookList />} />
              <Route path=":id" element={<Book />} />
            </Route>
            <Route path="/slowComponent" element={<SlowComponent />} />
            <Route path="/customHook" element={<CustomHook />} />
            <Route path="/data" element={<DataComponent />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </QueryClientProvider> 
    </>
  );
}

export default App1;
