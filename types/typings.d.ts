export type TJumbotron = {
    description: string;
    tag: string;
    title: string;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    };
};

export type TAbout = {
    description: string;
    tag: string;
    title: string;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    }; 
};

export type TDownload = {
    tag: string;
    title: string;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    }; 
}

export type TSales = {
    tag: string;
    title: string;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    }; 
}

export type TStats = {
    tag: string;
    figure: number;
    image: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    };
}