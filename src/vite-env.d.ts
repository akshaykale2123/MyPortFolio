// VITE_EMAILJS_SERVICE_ID=service_dtzsown
// VITE_EMAILJS_TEMPLATE_YOU_ID=template_rdq9p3u
// VITE_EMAILJS_TEMPLATE_USER_ID=template_2l3vi82
// VITE_EMAILJS_PUBLIC_KEY=rJhB7DjDPvbN7Za9r

//  <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string
    readonly VITE_EMAILJS_TEMPLATE_YOU_ID: string
    readonly VITE_EMAILJS_TEMPLATE_USER_ID: string
    readonly VITE_EMAILJS_PUBLIC_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
