import React, { Component } from "react";
import CountryFactory from './countryFactory'


class CountryTable extends Component {
  constructor(){
    super();
    this._countryFactory = new CountryFactory()
    this.state = {
      _country: [],
      _labels: []
    }
    this.getCountry = this.getCountry.bind(this)
    this.getLabels = this.getLabels.bind(this)
    this.getCountry()
    this.getLabels()
  }


  getCountry(){
    this._countryFactory.getCountries((data) => {
      const _data = data
      this.setState({
        _country: _data
      })
    })
  }

  getLabels(){
    this._countryFactory.getLabels((data) => {
      const _data = data
      this.setState({
        _labels: _data
      })
    })
  }


  render() {
    const country = this.state._country.map((element) => {return element.name + " "})
    const label = this.state._labels.map((element) => {return element + " "})
    return (
      <table className="table">
        <thead>
          <tr><th>{label}</th></tr>
        </thead>
        
        <tbody>
         <tr>{country}</tr>
        </tbody>
      </table>
    );
  }
}
export default CountryTable;