// En app/controllers/application.js ponemos los datos que le pasaremos al componente nav-menu:
//  * Nombre de nuestra aplicación
//  * Lista de enlaces para el menú

import Ember from 'ember';

export default Ember.Controller.extend({

  i18n: Ember.inject.service(),

  appName: 'FoodMe',

  menuLinks: [{
    name: 'restaurants',
    url: 'restaurants'
  },
  {
   name: 'about',
   url: 'about'
 }
 ]

});
