export interface PageSettings {
    name: string
    headline: string
    bodyText: string
    emailPlaceholder: string
    submitButtonText: string
    redirectUrl: string
    background: string | string[]
    disclaimer?: string
    captureName?: boolean;
    useCountdown?: boolean;
    countdownEndDate?: string;
}
