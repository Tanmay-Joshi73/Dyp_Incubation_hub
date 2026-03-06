export interface Startup {
    id: string;
    name: string;
    email: string;
    address: string;
    phoneNo: string;
    foundingYear: string;
    logo: string;
    founder: string[]; // Changed to array
    founderPhotos: string[]; // Added array
    specialAchievement: string;
    media: string | null;
    description: string;
    industry: string;
    website: string | null;
    size: number; // radius or diameter in pixels
    top: string; // percentage or rem
    left: string; // percentage or rem
    color?: string;
}
