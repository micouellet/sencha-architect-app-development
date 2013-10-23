/*
 * File: app/store/Tweets.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Tweets', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Tweet'
    ],

    config: {
        model: 'MyApp.model.Tweet',
        storeId: 'Tweets',
        proxy: {
            type: 'ajax',
            url: 'http://localhost/sencha-architect/TouchTwitterSearch/php/search-twitter.php',
            reader: {
                type: 'json',
                rootProperty: 'results'
            }
        }
    }
});