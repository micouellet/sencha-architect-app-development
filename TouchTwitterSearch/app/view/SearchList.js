/*
 * File: app/view/SearchList.js
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

Ext.define('MyApp.view.SearchList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.searchlist',

    config: {
        disableSelection: true,
        store: 'Tweets',
        itemTpl: [
            '<div class="tweet_data">',
            '<div class="tweet_avatar">',
            '<img width="30" height="30" src="{profile_image_url}"/>',
            '</div>',
            '<div class="tweet_content">',
            '<a class="user" href="http://twitter.com/{from_user}">{from_user}</a>&nbsp;',
            '{text}',
            '</div>',
            '<div class="clear"></div></div>'
        ],
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 50,
                title: 'Touch Twitter Search'
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'textfield',
                        flex: 4,
                        label: '',
                        name: 'textQuery'
                    },
                    {
                        xtype: 'button',
                        action: 'search',
                        flex: 2,
                        ui: 'round',
                        text: 'Search'
                    }
                ]
            }
        ]
    }

});