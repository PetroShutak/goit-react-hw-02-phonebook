import { ContactBook } from './ContactBook/ContactBook';

const name = 'Jack Lisowski';
export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
     <div>
      <ContactBook name={name}/>
    </div>
    </div>
  );
};
