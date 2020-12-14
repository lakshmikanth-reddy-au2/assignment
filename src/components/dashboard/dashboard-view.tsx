import React from 'react';
import { getCurrencyList } from '../../services/currency-api';
import { CurrencyModel } from '../models/currency-model';
import Blazer from '../images/Blazer.jpg';
import Shoes from '../images/Shoes.jpg';
import Watch from '../images/Watch.jpg';

class DashboardView extends React.Component<{}, CurrencyState> {
   
   constructor(props: {}) {
      super(props);

      this.loadData = this.loadData.bind(this);
      this.handleDropDown = this.handleDropDown.bind(this);
   }

   componentDidMount() {
      this.state = { currencies: [], currencyValue: 0 };
      this.loadData();
   }

   render() {
      return (
         <div>
            <h1
               style={{ textAlign: 'center' }}
            >Products
         </h1>
            <div
               style={{ textAlign: 'right', marginRight: '100px' }}
            >
               <label>Currency: </label>
               <select 
                  onChange={(e) => this.handleDropDown(e)}
               >
                  <option value="">--Select--</option>
                  {this.state && this.state.currencies && this.state.currencies.length > 0
                     && this.state.currencies.map((info, index) => {
                        return <option
                                 key={index}
                                 value={info.value}
                        >{info.type}
                        </option>;
                     })
                  }
               </select>
            </div>
            <div className="panel">
               <div 
                  className="row"
                  style={{display: 'flex', marginLeft: '400px', marginTop: '50px'}}
               >
                  <div style={{textAlign: 'center'}}>
                     <img
                        style={{ width: '200px', height: '180px' }}
                        src={Watch} alt="Logo"
                     />
                     <br /><span>Watch</span>
                     <br /><span>Price: {300 * (this.state && this.state.currencyValue > 0 ? this.state.currencyValue : 1)}</span>
                  </div>
                  <div 
                     style={{marginLeft: '150px', textAlign: 'center'}}
                  >
                     <img
                        style={{ width: '200px', height: '180px'}}
                        src={Shoes} alt="Logo"
                     />
                     <br /><span>Shoes</span>
                     <br /><span>Price: {150 * (this.state && this.state.currencyValue > 0 ? this.state.currencyValue : 1)}</span>
                  </div>
                  <div
                     style={{ marginLeft: '150px', textAlign: 'center' }}
                  >
                     <img
                        style={{ width: '200px', height: '180px' }}
                        src={Blazer} alt="Logo"
                     />
                     <br /><span>Blazer</span>
                     <br /><span>Price: {400 * (this.state && this.state.currencyValue > 0 ? this.state.currencyValue : 1)}</span>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   private async loadData() {

      let currency : any;
      currency = [];
      let data = await getCurrencyList();
      let { rates } = data.data;

      if (rates) {
         Object.keys(rates).map((value: any) => {
            // let data = Object.keys(rates).findIndex((item) => item === value);
            let amount =  rates[value];
            currency.push({ type: value, value: amount });
            
         });

        this.setState({ currencies: currency });

      }
   }

   private handleDropDown(e: any) {
      // alert(e.target.key);
      this.setState({ currencyValue: e.target.value });
   }
}

interface CurrencyState {
   currencies: CurrencyModel[];
   currencyValue: number;
}

export default DashboardView;