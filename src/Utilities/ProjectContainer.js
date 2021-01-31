import examarticle from'./markdown/sample.md';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../Images/ExamPortal-Images/', false, /\.PNG/));



const projects = [
    {
        
        title:'Online Exam Portal',
        desc: examarticle,
        technology:['JavaScript'],
        progress:100,
        cardImage:'Images/ExamPortal-Images/Dashboard.PNG',
        link: 'https://courses.learncodeonline.in/learn/home/Full-Stack-MERN-Bootcamp/section/73695/lesson/380493'                   
    },
    {
        
        title:'E-Commerce Website',
        desc:examarticle,
        technology:['HTML','CSS','JavaScript','PHP'],
        progress:40,
        cardImage:'Images/ExamPortal-Images/Dashboard.PNG',
        link: 'https://www.w3schools.com/cssref/pr_pos_z-index.asp'                      
    },
    {
        
        title:'E-Commerce Website',
        desc:examarticle,
        technology:['HTML','CSS','JavaScript','PHP'],
        progress:40,
        cardImage:'Images/ExamPortal-Images/Dashboard.PNG',
        link: ''                      
    },
    {
        
        title:'E-Commerce Website',
        desc:examarticle,
        technology:['HTML','CSS','JavaScript','PHP'],
        progress:40,
        cardImage:'Images/ExamPortal-Images/Dashboard.PNG',
        link: ''                      
    }
];

export default projects;