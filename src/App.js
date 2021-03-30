import './App.css';
import Profile from './Component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg from './me.jpg'
function App() {
  const displayname =(name) => {
    alert(`the name is ${name}`);
  };
    var Listprof = [
    {
      fullName: 'Zahra',
      bio: "This me",
      profession:" Jr Developper",
      }
];
  return (
    <>
    <Profile Listprof={Listprof} displayname={displayname}>
    {myImg}
    </Profile>
    </>
  );
}
export default App;
