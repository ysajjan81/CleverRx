// import React from 'react';


import React, { Component } from 'react';
// import {AppProvider, Page} from '@shopify/polaris';
import DataTable from './VishTable';
// import './App.css';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




// function App(){
//   return (<h1>Vishwarajsinh Sodha is the king</h1>)
// }

// export default App;




class CardTable extends Component {
  render() {

    const headings1 = [
    //   'Card/Cust Solution',
    //   'Dist',
    //   'Med',
    //   'Cost',
    //   'Service',
    //   'Health',
    //   'Rel'
    'Cost List',
    'Card List',
    'Customer List',
    'Health List',
    'Inhaler List',
    'Insurance List',
    'Medication List',
    'Patients List',
    'Religion List',
    'Segment List',
    'Service List',
    'Transparencty List'
    ];

    const headings2 = [
    //   'Ins/Pot Solution',
    //   'Dist',
    //   'Med',
    //   'Cost',
    //   'Service',
    //   'Health',
    //   'Rel'
    'Cost List',
    'Card List',
    'Customer List',
    'Health List',
    'Inhaler List',
    'Insurance List',
    'Medication List',
    'Patients List',
    'Religion List',
    'Segment List',
    'Service List',
    'Transparencty List'
    ];

    const headings = [
    //   'Product name',
    //   'SKU',
    //   'Stock quantity',
    //   'Wholesale cost',
    //   'Sale price',
    //   'Quantity sold', 
    //   'Gross sales',
    //   'Net sales',
    //   'Notes',
    'Cost List',
    'Card List',
    'Customer List',
    'Health List',
    'Inhaler List',
    'Insurance List',
    'Medication List',
    'Patients List',
    'Religion List',
    'Segment List',
    'Service List',
    'Transparencty List'
    ];


    const rows = [
      [
        'Red and black plaid scarf with thin red stripes and thick black stripes',
        124689325,
        28,
        '$35.00',
        '$60.00',
        12,
        '$720.00',
        '$300.00',
        '',
        'asdf',
        'ewer',
        'asdaw'
      ],
      [
        'Yellow plaid scarf',
        124689389,
        0,
        '$35.00',
        '$60.00',
        20,
        '$1200.00',
        '$300.00',
        '',
        'asdf',
        'ewer',
        'asdaw'
        // '$500.00',
        // 'Currently on back order by the supplier. Do not place another order to restock.',
      ],
      [
        'Blue plaid scarf',
        124689332,
        30,
        '$35.00',
        '$60.00',
        10,
        '$600.00',
        '$300.00',
        '',
        'asdf',
        'ewer',
        'asdaw'
        // '$250.00',
        // '',
      ],
      [
        'Pink plaid scarf',
        124689376,
        16,
        '$35.00',
        '$60.00',
        4,
        '$240.00',
        '$300.00',
        '',
        'asdf',
        'ewer',
        'asdaw'
        // '$100.00',
        // '',
      ],
    ];

    return (
      <div className="card-st">
          <h3>Table 1</h3>
          <DataTable headings={headings1} rows={rows} />
          <br/>
          <br/>
          <br/>

          {/* <h3>Table 2</h3>
          <DataTable headings={headings2} rows={rows} /> */}
      </div>
    );
  }
}

export default CardTable;
