import React from 'react'

export default class CountryFactory {

  constructor() {
    
    this.labels = [];
    this.countries = [""];
    this.getCountries = this.getCountries.bind(this)
    this.getLabels = this.getLabels.bind(this)
  }

  getLabels = (callback) => {
    fetch("http://localhost:3333/labels", { Method: 'GET' })
      .then((response) => { return response.json() })
      .then((data) => (callback(data)))
  }

  getCountries = (callback) => {
    fetch("http://localhost:3333/countries", { Method: 'GET' })
      .then((response) => { return response.json() })
      .then((data) => (callback(data)))
  }
}
