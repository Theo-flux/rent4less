export type TStep = {
    id: number;
    no: string;
    title: string;
    text: string;
    title_icon: string;
    icon: string;
}

export const steps: TStep[] = [
    {
        id: 0,
        no: "01",
        title: "Search Property",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
        title_icon: "ri-search-line",
        icon: "ri-arrow-right-circle-fill",
    },

    {
        id: 1,
        no: "02",
        title: "Choose Property",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
        title_icon: "ri-drag-move-line",
        icon: "ri-arrow-right-circle-fill",
    },

    {
        id: 2,
        no: "03",
        title: "Make Your Home",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam",
        title_icon: "ri-home-4-line",
        icon: "ri-arrow-right-circle-fill",
    },
]