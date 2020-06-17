import React from 'react';
import {Header} from './Components/header'
import {Balance} from './Components/Balance'
import {IncomeExpense} from './Components/IncomeExpense'
import {TransactionList} from './Components/TransactionList'
import {AddTransaction} from './Components/AddTransaction'
import {Footer} from './Components/footer'
import './App.css';
import Container from '@material-ui/core/Container';

import {GlobalProvider} from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Container maxWidth="sm">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
        <Footer/>
      </Container>
    </GlobalProvider>
  );
}

export default App;
