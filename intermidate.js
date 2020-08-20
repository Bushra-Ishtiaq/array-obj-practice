// Students Names and Hobbies Data
let students = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];
students.forEach(element => {
    console.log("Hobbies of" + ' ' + element.name);

    element.hobbies.forEach((hobby, index) => {
        console.log((index + 1) + "." + hobby);
    });
    console.log("____________________________")
})


// Extensive Students Data
let person = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];

// ====================== solution for level: 1 ====================
// 1. Print each student in this format:
//   Name: Amna
//   Gender: Female
//   City: Karachi
//   Score: 56 marks
person.forEach(element => {
    console.log('Name:' + element.name);
    if (element.gender == "f") {
        console.log(
            "Gender: Female"
        )
    } else {
        console.log(
            "Gender: Male"
        )
    }
    console.log("City : " + element.address.city);
    console.log("Score : 56 marks");
})

// ====================== solution for level: 2 ====================
// 2. Print names of female students only.
person.forEach(element => {
    if (element.gender == "f") {
        console.log(element.name)
    }
})

// ====================== solution for level: 3 ====================
// 3. Print names of male students only.
person.forEach(element => {
    if (element.gender == "m") {
        console.log(element.name)
    }
})

// ====================== solution for level: 4 ====================
// 4. Print names of students who have passed the admission test. Passing marks are 50.
person.forEach(element => {
    if (element.admissionTestScore >= 50) {
        console.log(
            element.name
        )
    }
})

// ====================== solution for level: 5 ====================
// 5. Print names of eligible students only (students who have internet and live in Karachi are eligible)
person.forEach(element => {
    if (element.address.city = "karachi" && element.hasInternet == true) {
        console.log(
            element.name
        )
    }
})

// ====================== solution for level: 6 ====================
// 6. Print address of each student in this format:
// Amna's address:
// Gulistan-e-Johar in Karachi, Pakistan
person.forEach(element => {
    console.log(element.name + "'s address: "),
        console.log(element.address.ilaqa + " in " + element.address.city + "," + element.address.country)
})

// ====================== solution for level: 7 ====================
// 7. Print names and phone number of students who have Ufone.
person.forEach(element => {
    if (element.phoneNo.includes("0331") || element.phoneNo.includes("0332") || element.phoneNo.includes("0333")
        || element.phoneNo.includes("0334") || element.phoneNo.includes("0335")) {

        console.log("Name: " + element.name + ", " + "Phone Number: " + element.phoneNo);
    }
})

// ====================== solution for level: 8 ====================
// 8. Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
// Group A:  name1, name2
// Group B:  name3, name4, name5
person.forEach(element => {
    if (element.hasJob == true && element.hasSchoolBefore == true) {
        console.log("Group B." + element.name)

    } else {
        console.log("Group A." + element.name)
    }
})

// ====================== solution for level: 9 ====================
// 9. Print age of each student in the below format:
// Amna's age is 29 years
// let years = new
let year = new Date().getYear();
person.forEach(element => {
    console.log(element.name + "'s" + " " + "age" + " is " + (year - element.dob.getYear()) + " years")
})

// ====================== solution for level: 10 ====================
// 10. Print the name of the oldest student
var oldest = { age: 0 };
for (var i = 0; i < person.length; i++) {
    if (person[i].age > oldest.age) {
        oldest = person[i];
        console.log(person.name)
    }
}

// ========================Videos Data Task=======================================
let videos = [
    {
        title: "Photoshop tutorial",
        lengthInMinutes: 70,
        category: "Education",
        uploadDate: new Date("07-22-2019"),
        tags: "design, digital, photoshop, creativity",
        features: ["Live", "360°", "HDR"],
        viewCount: 4700,
        rating: 4.3
    },
    {
        title: "Episode # 01 - The Best Comedy Show",
        lengthInMinutes: 19,
        category: "Entertainment",
        uploadDate: new Date("07-03-2019"),
        tags: "comedy, funny",
        features: ["Subtitles/CC", "3D", "HD"],
        viewCount: 145615,
        rating: 3.9
    },
    {
        title: "How to use FOR EACH loop - tutorial by Tech Karo",
        lengthInMinutes: 6,
        category: "Education",
        uploadDate: new Date("11-10-2020"),
        tags: "javascript, loops, web development",
        features: ["Purchased", "HD"],
        viewCount: 9004,
        rating: 4.5
    },
    {
        title: "JavaScript video tutorial",
        lengthInMinutes: 7,
        category: "Coding",
        uploadDate: new Date("11-10-2018"),
        tags: "javascript, web development",
        features: ["Purchased", "HD"],
        viewCount: 4567,
        rating: 2
    },
    {
        title: "How to start freelancing",
        lengthInMinutes: 17,
        category: "work",
        uploadDate: new Date("23-12-2014"),
        tags: "html, css",
        features: ["3D", "HD", "2D"],
        viewCount: 7821,
        rating: 4
    },
    {
        title: "Why can't be we friends",
        lengthInMinutes: 2,
        category: "academic",
        uploadDate: new Date("3-5-2010"),
        tags: "music",
        features: ["3D", "HD", "2D"],
        viewCount: 6348,
        rating: 2
    },
    {
        title: "Make some food",
        lengthInMinutes: 50,
        category: "cooking",
        uploadDate: new Date("8-20-2020"),
        tags: "cook, food",
        features: ["3D", "HD", "live"],
        viewCount: 4673,
        rating: 3
    },
];
// ====================== solution for level: 1 ====================
// coded in array of object 

// ====================== solution for level: 2 ====================
// 2. Print each video in this format:
// Title: Photoshop tutorial
// Length: 70 minutes
// Category: Education
// Views: 4,700
// Uploaded On: 22-July-2019
// Rating: 
videos.forEach(element => {
    console.log(" Title :" + ' ' + element.title);
    console.log("Length :" + " " + element.lengthInMinutes);
    console.log("Category :" + " " + element.category);
    console.log("Views :" + " " + element.viewCount);
    console.log("Rating :" + " " + element.rating);
})

// ====================== solution for level: 3 ====================
// 3. Print titles of all short ( less than 3 minutes ) videos.
videos.forEach(element => {
    if (element.lengthInMinutes <= 3) {
        console.log(
            element.title
        )
    }
})

// ====================== solution for level: 4 ====================
//4. Print titles of all long ( greater than 20 minutes ) videos
videos.forEach(element => {
    if (element.lengthInMinutes >= 20) {
        console.log(
            element.title
        )
    }
})

// ====================== solution for level: 5 ====================
// 5. Print titles of all medium length videos.
videos.forEach(element => {
    if (element.lengthInMinutes >= 10 && element.lengthInMinutes <= 60) {
        console.log(
            element.title
        )
    }
})

// ====================== solution for level: 6 ====================
// 6. Print title of the longest video
videos.forEach(element => {
    if (element.lengthInMinutes >= 70) {
        console.log(
            element.title
        )
    }
})

// ====================== solution for level: 7 ====================
// 7. Print titles of all "Educational" videos
videos.forEach(element => {
    if (element.category == "Education") {
        console.log(
            element.title
        )
    }
})

// ====================== solution for level: 8 ====================
// 8. Print titles of all videos with tag "Javascript"
videos.forEach(element => {
    if (element.tags.includes("javascript")) {
        console.log(
            element.title
        )
    }
})

// ====================== solution for level: 9 ====================
// 9. Print titles of all videos with HD feature
videos.forEach(element => {
    if (element.features.includes("HD")) {
        console.log(
            element.title
        )
    }
})

// ====================== solution for level: 10 ====================
// 10. Print titles of all videos uploaded today
for (let i = 0; i < videos.length; i++) {
    if (videos[i].uploadDate.getDay() === new Date().getDay()) {
        console.log(videos[i].title);
    }
}

// ====================== solution for level: 11 ====================
// 11. Print titles of all videos uploaded this week
for (let i = 0; i < videos.length; i++) {
    if (videos[i].uploadDate.getDay() === new Date().getDay()) {
        console.log(videos[i].title);
    }
}

// ====================== solution for level: 12 ====================
// 12. Print titles of all videos uploaded this month
for (let i = 0; i < videos.length; i++) {
    if (videos[i].uploadDate.getMonth() === new Date().getMonth()) {
        console.log(videos[i].title);
    }
}

// ====================== solution for level: 13 ====================
// 13. Print titles of all videos uploaded this year
for (let i = 0; i < videos.length; i++) {
    if (videos[i].uploadDate.getFullYear() === new Date().getFullYear()) {
        console.log(videos[i].title);
    }
}

// ====================== solution for level: 14 ====================
// 14. Sort the array in ascending order of number of views and print the titles
videos.sort((a, b) => a - b);
console.log(videos.viewCount)

// ====================== solution for level: 15 ====================
// 15. Sort the array in ascending order of rating and print the titles
videos.sort((a, b) => a - b);
console.log(videos.rating)

// ====================== THK END INTERMIDATE LEVEL ====================
