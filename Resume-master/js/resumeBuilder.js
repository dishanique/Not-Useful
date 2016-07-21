var bio = {
    "name": "Di'Shanique Al-Malik",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "267-257-0939",
        "email": "dishanique.almalika@gmail.com",
        "github": "dishanique",
        "linkedin": "dishanique",
        "location": "Philadelphia, PA"
    },
    "welcomeMessage": "Welcome to my resume page!",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "Dry Humor"],
    "biopic": "file:///Users/Di_Al-Malik1/Desktop/19805033.jpg"
};

// function that displays information from the bio object on the page
bio.display = function() {

// Basic header info- name, title, image
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var headerName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(headerName);
    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);


    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(email.replace("#", bio.contacts.email));

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills:last").append(formattedSkill);
    }

    var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomeMessage);
    $("#footerContacts").append(HTMLgitHub.replace("#", bio.contacts.github));
    $("#footerContacts").append(HTMLlinkedIn.replace("#", bio.contacts.linkedin));

};

bio.display();

// projects object- project information
var projects = {
    "projects": [{
        "title": "Portfolio",
        "url": "https://github.com/dishanique/Udacity_FEND_P3",
        "dates": "6/2016",
        "description": "Built a responsive portfolio utilizing HTML, CSS, JavaScript, and JQuery. I even got a little fancy with using Bootstrap!",
        "images": ["file:///Users/Di_Al-Malik1/Desktop/Life-Front-End-Developer-Feature_1290x688_KL.jpg"]
    }, {
        "title": "Animal Trading Card",
        "url": "https://github.com/dishanique/Udacity_FEND_P2",
        "dates": "6/2016",
        "description": "Converted a design prototype of an animal trading card into a functional webpage using HTML and CSS.",
        "images": ["file:///Users/Di_Al-Malik1/Desktop/indian-peafowl-tail-spread-closeup.jpg"]
    }, 
        {
        "title": "Blog Mockup",
        "url": "https://github.com/dishanique/Udacity_FEND_P1",
        "dates": "6/2016",
        "description": "Built a Blog Mockup from PDF format using basic HMTL elements.",
        "images": ["file:///Users/Di_Al-Malik1/Desktop/1469033915585.png"]
    ]
};


// function that displays info from the projects object on the page
projects.display = function() {

    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(projectTitle.replace("#", projects.projects[i].url));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
    }
};

projects.display();

// education object- school and course information
var education = {
    "schools": [{
        "name": "Temple University",
        "location": "Philadelphia, PA",
        "degree": "Bachelors of Arts",
        "majors": ["Strategic Communications", "Public Relations"],
        "dates": "8/2011 - 12/2014",
        "url": "http://www.auburn.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Developer Nanodegree",
        "school": "Udacity",
        "dates": "6/2016 - 9/2016",
        "url": "http://www.udacity.com"
    }]
};

// function that displays college and online course info from education object on the page
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {

        var schoolNameDegree = HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry").append(schoolNameDegree.replace("#", education.schools[i].url));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

    $("#onlineClasses").append(HTMLclassesStart);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var classTitleSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".class-entry").append(classTitleSchool.replace("#", education.onlineCourses[i].url));

        $(".class-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
    }
};

education.display();

// work object- job information
var work = {
    "jobs": [{
        "employer": "Self-Employed",
        "title": "Freelance Web Developer",
        "location": "Philadelphia, PA",
        "dates": "06/2016 - present",
        "description": "Developing and designing beautiful, fun, and clean web experiences while simplifying complex systems in the most creative ways possible."
    },
    }, {
        "employer": "Net-a-Porter",
        "title": "Sales and Customer Care Consultant",
        "location": "Mahwah, NJ",
        "dates": "4/2015 - 6/2015",
        "description": "Achieved sales performance of exceeding monthly goals while maintaining a book of clientele providing sales of luxury clothing, shoes, and accessories."
    }, {
        "employer": "Apple",
        "title": "Specialist",
        "location": "Ardmore, PA",
        "dates": "9/2014 - 2/2015",
        "description": "Achieved outstanding performance if becoming a Certified Apple Technician, trained and mentored employees within Apple retail store, performed technical troubleshooting abilities and repairs of Apple devices, and organized team building activities and events."
    }]
    }

    ]
};

// function that displays info from the work object on the page
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// Interactive map and twitter feeds
$("#mapDiv").append(googleMap);

