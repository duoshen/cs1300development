var React                   = require('react');
var ReactDOM                = require('react-dom');
var ColorComponent 		 	= require("./components/ColorComponent.jsx");
var FilterableTable         = require("./components/FilterableTable.jsx");

var items =
    [{
        manufacturer: 'Porsche',
        model: '911',
        year: 2011,
        price: 135000,
        color: 'red',
        img: 'porsche_911_red.jpg'
    },{
        manufacturer: 'Porsche',
        model: 'Cayenne',
        year: 2013,
        price: 78000,
        color: 'blue',
        img: 'porsche_cayenne_blue.jpg'
    },{
        manufacturer: 'Porsche',
        model: 'Boxster',
        year: 2015,
        price: 60000,
        color: 'white',
        img: 'porsche_boxster_white.jpg'
    },{
        manufacturer: 'BMW',
        model: 'M3',
        year: 2011,
        price: 35000,
        color: 'black',
        img: 'BMW_M3_black.jpg'
    },{
        manufacturer: 'BMW',
        model: 'X5',
        year: 2016,
        price: 60000,
        color: 'white',
        img: 'BMW_X5_white.jpg'
    },{
        manufacturer: 'BMW',
        model: 'i8',
        year: 2013,
        price: 140000,
        color: 'black',
        img: 'BMW_i8_black.jpg'
    },{
        manufacturer: 'Lexus',
        model: 'ES',
        year: 2014,
        price: 25000,
        color: 'grey',
        img: 'Lexus_ES_grey.jpg'
    },{
        manufacturer: 'Lexus',
        model: 'IS',
        year: 2015,
        price: 30000,
        color: 'white',
        img: 'Lexus_IS_white.jpg'
    },{
        manufacturer: 'Lexus',
        model: 'RC',
        year: 2016,
        price: 44000,
        color: 'red',
        img: 'Lexus_RC_red.jpg'
    },{
        manufacturer: 'Lexus',
        model: 'RX',
        year: 2012,
        price: 22000,
        color: 'black',
        img: 'Lexus_RX_black.jpg'
    },{
        manufacturer: 'Audi',
        model: 'A6',
        year: 2015,
        price: 50000,
        color: 'white',
        img: 'Audi_A6_white.jpg'
    },{
        manufacturer: 'Audi',
        model: 'Q5',
        year: 2016,
        price: 45000,
        color: 'blue',
        img: 'Audi_Q5_blue.jpg'
    },{
        manufacturer: 'Audi',
        model: 'TT',
        year: 2013,
        price: 25000,
        color: 'black',
        img: 'Audi_TT_black.jpg'
    },{
        manufacturer: 'Audi',
        model: 'A4',
        year: 2011,
        price: 15000,
        color: 'white',
        img: 'Audi_A4_white.jpg'
    },{
        manufacturer: 'Benz',
        model: 'E',
        year: 2015,
        price: 50000,
        color: 'grey',
        img: 'Benz_E_grey.jpg'
    },{
        manufacturer: 'Benz',
        model: 'CLS',
        year: 2012,
        price: 28000,
        color: 'black',
        img: 'Benz_CLS_black.jpg'
    },{
        manufacturer: 'Benz',
        model: 'CLS',
        year: 2014,
        price: 29000,
        color: 'black',
        img: 'Benz_CLS_black.jpg'
    },{
        manufacturer: 'Benz',
        model: 'SL',
        year: 2015,
        price: 115000,
        color: 'grey',
        img: 'Benz_SL_grey.jpg'
    },{
        manufacturer: 'Benz',
        model: 'B',
        year: 2016,
        price: 32000,
        color: 'white',
        img: 'Benz_B_white.jpg'
    },{
        manufacturer: 'Nissan',
        model: 'Teana',
        year: 2013,
        price: 15000,
        color: 'blue',
        img: 'Nissan_Teana_blue.jpg'
    },{
        manufacturer: 'Nissan',
        model: 'GT-R',
        year: 2016,
        price: 106000,
        color: 'orange',
        img: 'Nissan_GT-R_orange.jpg'
    },{
        manufacturer: 'Nissan',
        model: 'Tiida',
        year: 2015,
        price: 13000,
        color: 'yellow',
        img: 'Nissan_Tiida_yellow.jpg'
    },{
        manufacturer: 'Nissan',
        model: 'Sylphy',
        year: 2013,
        price: 11000,
        color: 'black',
        img: 'Nissan_Sylphy_black.jpg'
    },{
        manufacturer: 'Nissan',
        model: 'Livina',
        year: 2014,
        price: 14000,
        color: 'white',
        img: 'Nissan_Livina_white.jpg'
    },{
        manufacturer: 'Nissan',
        model: 'Sentra',
        year: 2015,
        price: 20000,
        color: 'grey',
        img: 'Nissan_Sentra_grey.jpg'
    }];


ReactDOM.render(
    <FilterableTable
        items={items}
        itemsLength={items.length}
        filePathPrefix="./img/"
        filterText="ass"/>, // not html!!
    document.getElementById('container')
);