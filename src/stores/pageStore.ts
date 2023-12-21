// authStore.ts

import { defineStore } from 'pinia';

interface PageState {
    isLoading: boolean;
}

export const usePageStore = defineStore('page', {
    state: (): PageState => ({
        isLoading: false,
    }),

    actions: {
        setIsLoading(isLoading: boolean) {
            this.isLoading = isLoading;
        },
    },
});
