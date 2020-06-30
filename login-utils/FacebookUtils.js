import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

export function loginFB() {

    const useProxy = Platform.select({ web: false, default: true });

    const discovery = {
        authorizationEndpoint: 'https://www.facebook.com/v6.0/dialog/oauth',
        tokenEndpoint: 'https://graph.facebook.com/v6.0/oauth/access_token',
    };

    const FB_ID = 'fb1176587212675645';

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: FB_ID,
            scopes: ['public_profile', 'email', 'user_likes'],
            // For usage in managed apps using the proxy
            redirectUri: makeRedirectUri({
                useProxy,
                native: `${FB_ID}://authorize`,
            }),
            extraParams: {
                // Use `popup` on web for a better experience
                display: Platform.select({ web: 'popup' }),
                // Optionally you can use this to rerequest declined permissions
                auth_type: 'rerequest',
            },
        },
        discovery
    );

    WebBrowser.maybeCompleteAuthSession();

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
        }
    }, [response]);

    promptAsync({
        useProxy,
        windowFeatures: { width: 700, height: 600 }
    });
}