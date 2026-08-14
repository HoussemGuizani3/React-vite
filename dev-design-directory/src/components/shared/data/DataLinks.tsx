interface LinkItem {
    id: number;
    name: string;
    path: string;
}


interface DataLinksType {
    navLinks: LinkItem[];
    footerLinks: LinkItem[];
}

export const DataLinks: DataLinksType = {
    "navLinks": [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Brows Developers', path: '/' },
        { id: 3, name: 'How It Works', path: '/' },
        { id: 4, name: 'Login/Register', path: '/' },
    ],
    "footerLinks" : [
        { id: 1, name: 'Site', path: '/' },
        { id: 2, name: 'Links', path: '/' },
        { id: 3, name: 'Brows Developers', path: '/' },
        { id: 4, name: 'How It Works', path: '/' },
        { id: 5, name: 'Login/Register', path: '/' },
    ]
};