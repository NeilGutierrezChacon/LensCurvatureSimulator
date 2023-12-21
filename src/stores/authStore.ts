// authStore.ts

import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

interface AuthState {
    idToken: string | null;
}

const storedIdToken = Cookies.get('idToken');

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        idToken: (storedIdToken) ? storedIdToken : null,
    }),

    actions: {
        setIdToken(idToken: string) {
            this.idToken = idToken;
            Cookies.set('idToken', idToken, { expires: 1 });
        },

        clearIdToken() {
            this.idToken = null;
            Cookies.remove('idToken');
        },

        isAuthorized() {
            return !!this.idToken;
        }
    },
});
