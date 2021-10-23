import './App.css';
import SubscribeButton from './Suscribe';
import ShoppingList from './shoppingList';
import AsyncParagraph from './AsyncParagraph';
import List from './List';

const sampleItems = [
    {
      name: 'TV',
      id: 876234812
    }
  ];

function App() {
  return (
    <div>
      <SubscribeButton/>
      <ShoppingList items={sampleItems}/>
      <AsyncParagraph dataVersion="10"
        loadData={ 
                  () => {return new Promise((resolve, reject) => { resolve("Data!"); });} 
        }
      />
      <List items={["A", "B", "C"]}/>
    </div>
  );
}

export default App;
