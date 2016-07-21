$("#main").append("Di'Shanique Al-Malik");
var bio = {
	"name": "Di'Shanique Al-Malik",
	"role": "Front End Developer",
	"contacts": {
		"mobile": "267-257-0939",
		"email": "dishanique.almalik@gmail.com",
		"github": "dishanique",
		"locations": "Philadelphia"
	},
	"welcomeMessage": "I'm pretty Awesome",
	"skills": [
	"developing", "designing", "dry humor"
	]
};

var education ={
	"schools": [
	{
		"name": "Temple University",
		"city": "Philadelphia",
		"degree": "Bachelors of Arts",
		"major": "Strategic Communications",
		"minor": "Public Relations",
		"dates": 2013,
		"url": "www.temple.edu"
	},
	],
		"onlineCourse": [
	{
		"title": "Front End Web Development Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
};

var work ={
	"jobs": [
	{
		"employer": "Freelance",
		"title": "Front End Web Developer",
		"dates": "June 2016 - Future",
		"description": "Developing and designing beautiful, fun, and clean web experiences while simplifying complex systems in the most creative ways possible."
	},
	{
		"employer": "Net-a-Porter",
		"title": "Sales and Customer Care Consultant",
		"dates": "April 2015 - June 2015",
		"description": "Achieved sales performance of exceeding monthly goals while maintaining a book of clientele providing sales of luxury clothing, shoes, and accessories."
},
{		"employer": "Apple",
		"title": "Specialist",
		"dates": "September 2014 - February 2015",
		"description": "Achieved outstanding performance if becoming a Certified Apple Technician, trained and mentored employees within Apple retail store, performed technical troubleshooting abilities and repairs of Apple devices, and organized team building activities and events."
	}
	]
};
var projects = {
	"projects": [
	{
		"title": "Portfolio",
		"dates": "2016",
		"description" : "Built a responsive portfolio utilizing HTML, CSS, JavaScript, and JQuery",
		"images" : ["file:///Users/Di_Al-Malik1/Desktop/Life-Front-End-Developer-Feature_1290x688_KL.jpg"
		]
	}
		[
		"title": "Animal Trading Card",
		"dates": "2016",
		"decription" : "Converted a design prototype of an animal trading card into a functional webpage using HTML and CSS.",
		"images" : ["file:///Users/Di_Al-Malik1/Desktop/indian-peafowl-tail-spread-closeup.jpg"
		]
	}
	{
		[
		"title": "Blog Mockup",
		"dates": "2016",
		"description": "Built a Blog Mockup from PDF format using basic HMTL elements.",
		"images" : ["file:///Users/Di_Al-Malik1/Desktop/1469033915585.png"
		]
	}
	]
};
projects.display = funtion() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%"), projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%"), projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%"), projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects [project].images.length > 0){
			for (images in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%"), projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);

			}
		}
	}
}