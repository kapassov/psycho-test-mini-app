// telegram.d.ts

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: any; // можно уточнить типы позже
        version: string;
        platform: string;
        colorScheme: 'light' | 'dark';
        themeParams: any;
        isExpanded: boolean;
        viewportHeight: number;
        viewportStableHeight: number;
        headerHeight: number;
        isClosingConfirmationEnabled: boolean;
        BackButton: any;
        MainButton: any;
        HapticFeedback: any;
        CloudStorage: any;
        BiometricManager: any;
        ready: () => void;
        expand: () => void;
        close: () => void;
        // добавь другие методы по мере использования
      };
    };
  }
}

export {};  // делает файл модулем, чтобы декларация применилась глобальноnpm run build