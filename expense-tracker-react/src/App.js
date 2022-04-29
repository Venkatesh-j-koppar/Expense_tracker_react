import { Header}  from './components/header';
import { Balance }  from './components/Balance';
import { IncomeExpenses }  from './components/incomeExpenses';
import { TransactionList }  from './components/TransactionList';
import { AddTransaction }  from './components/AddTransaction';
import './App.css';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className='conatiner'>
      <Balance></Balance>
      <IncomeExpenses></IncomeExpenses>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
