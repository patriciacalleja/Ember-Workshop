// En app/components/nav-menu.js
//  * Variable isMenuOpened para controlar el estado abierto/cerrado

import Ember from 'ember';

const languages = [{
  name: 'Español',
  code: 'es'
}, {
  name: 'English',
  code: 'en'
}];

export default Ember.Component.extend({

  i18n: Ember.inject.service(),

  languages,

  selectedLanguage: Ember.computed('i18n.locale', function() {
    const code = this.get('i18n.locale');
    return languages.findBy('code', code);
  }),

  languageObserver: Ember.observer('selectedLanguage', function() {
    this.set('i18n.locale', this.get('selectedLanguage.code'));
  }),

    isMenuOpened: false,

    actions: {
        toggleMenu(){
            this.toggleProperty('isMenuOpened');
        }
    }
});
