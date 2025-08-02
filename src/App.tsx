import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import SignUp from './pages/signUp/SignUp'
import Login from './pages/login/Login'
import { Dashboard } from './pages/dashboard/Dashboard'
import AddCustomer from './pages/addCustomer/AddCustomer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <div className="select-none" onContextMenu={() => {}}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<SignUp />} path="/sign-up" />
                        <Route element={<Login />} path="/login" />

                        <Route element={<Layout />} path="/">
                            <Route element={<Dashboard />} path="/" />
                            <Route element={<Dashboard />} path="/debtor" />
                            <Route element={<Dashboard />} path="/creditor" />
                            <Route element={<AddCustomer />} path="/add-new-customer" />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </QueryClientProvider>
    )
}

export default App
