﻿
const model = {
    app: {
        currentpage: 'feedback'
    },

    linksTopages: [{
            //unicode facebook &#xf082;
            name: "facebook",
            SOME: href = "https://www.facebook.com/therese.nordnes.58/"
        },
        {
            name: "Github",
            SOME: href = "https://github.com/ThereseCamK",
        },
    ],


    pagesContent: {
        aboutPage: {
            header: "Therese Camilla Kjær",
            infoContent: "",
        },
        feedbackPage: [
            {
                id: 0,
                comment: "heterrr",
                name: "therese",
                rating: 3,
            },
            {
                id: 1,
                comment: " veldig bra ",
                name: "  tessa",
                rating: 1,
            },
        ],
        blogInput: {
            headLine: "",
            content: "",
            picture: "",
            date: "",
        },
        blogPage: [{
                headLine: "first",
            content: "test",
                picture: "",
                date: "18.01.21",

        },
            {
                headLine: "second",
                content: "dfdf",
                picture: "",
                date: "18.01.21",

            },
        ],
        projectInput: {
            title: "",
            description: "",
            linkToPage: href = "",
        },
        projectPage: [{
                title: "Event",
                description: "Det er en side hvor man kan lage eventer",
                linkToPage: href = "",
            },
            {
                title: "rekorder",
                description: "side hvor det listet opp rekorder til brukeren",
                linkToPage: href = "",
            },
            {
                title: "test3",
                description: "ingenting",
                linkToPage: href = "www.facebook.no",
            },
        ]

    },

    footer: {
        name: "Therese Camilla Kjær",
        town: "Larvik",
        phone: "413 77 965",
        email: "therese@getacademy.no",
    }
}