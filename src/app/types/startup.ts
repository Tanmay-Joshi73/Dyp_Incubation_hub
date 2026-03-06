export interface Startup {
    id: string;
    name: string;
    logo: string;
    description: string;
    industry: string;
    website: string;
    size: number; // radius or diameter in pixels
    top: string; // percentage or rem
    left: string; // percentage or rem
    color?: string;
}
