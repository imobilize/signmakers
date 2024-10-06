/*
By default, Klaro will load the config from a global 'klaroConfig' variable. You
can change this by specifying the 'data-klaro-config' attribute on your script:
<script src="klaro.js" data-klaro-config="myConfigVariableName"
*/

var klaroConfig = {
    /*
If 'mustConsent' is set to 'true', Klaro will directly display the consent
manager modal and not allow the user to close it before having actively
consented or declined the use of third-party services.
*/
    mustConsent: true,

    /*
    Setting 'acceptAll' to 'true' will show an "accept all" button in the notice and
    modal, which will enable all third-party services if the user clicks on it. If
    set to 'false', there will be an "accept" button that will only enable the
    services that are enabled in the consent modal.
    */
    acceptAll: true,
    translations: {

    },
    services: [
        {
            name: 'google-tag-manager',
            required: true,
            purposes: ['service-provision'],
            onAccept: `
                // we notify the tag manager about all services that were accepted. You can define
                // a custom event in GTM to load the service if consent was given.
                gtag('consent', 'update', {
                    'google-tag-manager': 'granted',
                });
                let eventName = 'klaro-google-tag-manager-accepted';
                dataLayer.push({'event': eventName});
            `,
            onInit: `
                // initialization code here (will be executed only once per page-load)
                window.dataLayer = window.dataLayer || [];
                window.gtag = function(){dataLayer.push(arguments)}
                gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied', 'ad_user_data': 'denied', 'ad_personalization': 'denied', 'fb_storage': 'denied', 'brevo_storage': 'denied'})
                gtag('set', 'ads_data_redaction', true)
            `,
        },
        {
            // In GTM, you should define a custom event trigger named `klaro-google-analytics-accepted` which should trigger the Google Analytics integration.
            name: 'google-analytics',
            default: true,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                /^_ga(_.*)?/ // we delete the Google Analytics cookies if the user declines its use
            ],
            onAccept: `
                // we grant analytics storage
                gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                });
                let eventName = 'klaro-google-analytics-accepted';
                dataLayer.push({'event': eventName});
            `,
            onDecline: `
                // we deny analytics storage
                gtag('consent', 'update', {
                    'analytics_storage': 'denied',
                })
            `,
        },
        {
            name: 'google-ads',
            default: true,
            tile: 'Google Ads',
            purposes: ['marketing'],
            cookies: [],
            onAccept: `
                // we grant ad storage and personalization
                gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted'
                });
                let eventName = 'klaro-google-ads-accepted';
                dataLayer.push({'event': eventName});
            `,
            onDecline: `
                // we decline ad storage and personalization
                gtag('consent', 'update', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied'
                })
            `,
        },
        {
            name: 'facebook',
            default: true,
            tile: 'Facebook',
            purposes: ['analytics'],
            cookies: ['_fbp', '_fbc'],
            onAccept: `
            // we grant ad storage and personalization
            gtag('consent', 'update', {
                'fb_storage': 'granted'
            });
            let eventName = 'klaro-facebook-accepted';
            dataLayer.push({'event': eventName});
        `,
            onDecline: `
            // we decline ad storage and personalization
            gtag('consent', 'update', {
                'fb_storage': 'denied'
            })
        `,
        },
        {
            name: 'brevo',
            default: true,
            tile: 'Brevo',
            purposes: ['analytics'],
            onAccept: `
            // we grant ad storage and personalization
            gtag('consent', 'update', {
                'brevo_storage': 'granted'
            });
            let eventName = 'klaro-brevo-accepted';
            dataLayer.push({'event': eventName});
        `,
            onDecline: `
            // we decline ad storage and personalization
            gtag('consent', 'update', {
                'brevo_storage': 'denied'
            })
        `,
        },
    ]
};
