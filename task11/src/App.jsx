import Title from './Title';
import MyInput from './MyInput';
import Paragraph from './Paragraph';

export default function App() {
  const myNumber = 2026;
  const myStr = "გამარჯობა, მე ვსწავლობ React-ს!";
  const myArr = ["ვაშლი", "მსხალი", "ატამი"];
  
  // ობიექტი
  const myObj = { name: "ანა", age: 25 };
  
  // ფუნქცია
  const myFnc = () => {
    return "ეს ტექსტი დაბრუნებულია ფუნქციიდან!";
  };

  return (
    <div style={{ padding: '20px' }}>
    
      <Title />
      <MyInput />
      <Paragraph />

      <hr />

      <h2>მონაცემების ტიპები:</h2>
      <ul>
        <li><b>Number:</b> {myNumber}</li>
        
        <li><b>String:</b> {myStr}</li>
        
        <li><b>Array:</b> {myArr.join(', ')}</li>
        
        <li><b>Function:</b> {myFnc()}</li>
        
        
        <li><b>Object (ველები):</b> სახელი - {myObj.name}, ასაკი - {myObj.age}</li>
        <li><b>Object (მთლიანი):</b> {JSON.stringify(myObj)}</li>
      </ul>
    </div>
  );
}