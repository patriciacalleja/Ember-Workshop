// En app/components/nav-menu.js
//  * Variable isMenuOpened para controlar el estado abierto/cerrado

import Ember from 'ember';

export default Ember.Component.extend({

    isMenuOpened: false,

    actions: {
        toggleMenu(){
            this.toggleProperty('isMenuOpened');
        }
    }
});
