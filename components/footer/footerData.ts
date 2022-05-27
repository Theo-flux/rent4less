export type TItem = string[]

export type TFooter = {
    name: string;
    items: TItem;
};

export const footerData: TFooter[] = [
    {
        name: 'Terms  & Condition',
        items: ['Tenancy Term', 'Privacy Policy']
    },

    {
        name: 'Property Type',
        items: ['Villa', 'Suite', 'Penthouse', 'Flats']
    },

    {
        name: 'Contact Info',
        items: ['6, Mobolaji Johnson Avenue, Ikoyi, Lagos.', 'Phone: 0700 25742 6323', 'Email: info@yourwebsite.com']
    }
]