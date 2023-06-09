const mobileOpen = document.getElementById('open-menu');
const mobileShow = document.getElementById('navbar-item-mobile');
const mobileClose = document.getElementById('close-menu');
const menuItems = document.querySelectorAll('.nav-mobile');
const popupOpen = document.querySelectorAll('.card-btn');
const inputName = document.getElementById('user_name');
const inputEmail = document.getElementById('user_email');
const sumbitMessage = document.getElementById('sumbit-action');
const errorMessage = document.getElementById('error');
mobileOpen.addEventListener('click', () => {
  if (mobileShow.style.display === 'block') {
    mobileShow.style.display = 'none';
  } else {
    mobileShow.style.display = 'block';
  }
});
mobileClose.addEventListener('click', () => {
  if (mobileShow.style.display === 'none') {
    mobileShow.style.display = 'block';
  } else {
    mobileShow.style.display = 'none';
  }
});
for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    mobileShow.style.display = 'none';
  });
}

const projectsFullDatiel = [
  {
    name: 'Tonic',
    projectInformation: { org: 'CANOPY', type: 'Back End Dev', year: '2015' },
    projectImage: 'image/disk-card3.svg',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    projectLanguages: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectLiveLink: 'https://sadaf-daneshgar.github.io/First-Project-Microverse/',
    projectSourceCode: 'https://github.com/sadaf-Daneshgar/First-Project-Microverse',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
  {
    name: 'Multi-Post Stories',
    projectInformation: { org: 'FACEBOOK', type: 'Full Stack Dev', year: '2015' },
    projectImage: 'image/disk-card4.svg',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    projectLanguages: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectLiveLink: 'https://sadaf-daneshgar.github.io/First-Project-Microverse/',
    projectSourceCode: 'https://github.com/sadaf-Daneshgar/First-Project-Microverse',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
  {
    name: 'Facebook 360',
    projectInformation: { org: 'FACEBOOK', type: 'Full Stack Dev', year: '2015' },
    projectImage: 'image/disk-card2.svg',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    projectLanguages: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectLiveLink: 'https://sadaf-daneshgar.github.io/First-Project-Microverse/',
    projectSourceCode: 'https://github.com/sadaf-Daneshgar/First-Project-Microverse',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },

  {
    name: 'Uber Navigation',
    projectInformation: { org: 'Uber', type: 'Lead Developer', year: '2018' },
    projectImage: 'image/mobile-card4.svg',
    projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    projectLanguages: ['HTML', 'CSS', 'JAVASCRIPT'],
    projectLiveLink: 'https://sadaf-daneshgar.github.io/First-Project-Microverse/',
    projectSourceCode: 'https://github.com/sadaf-Daneshgar/First-Project-Microverse',
    PorjectLiveSource: '<i class="fa-brands fa-github"></i>',
    ProjectLiveIcons: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    ProjectLiveText: 'See Live',
    ProjectSourceText: 'See Source',
  },
];

for (let i = 0; i < popupOpen.length; i += 1) {
  popupOpen[i].addEventListener('click', () => {
    const popupContainer = document.createElement('div');
    popupContainer.innerHTML = `
 <div class="cover-container">
 <div class="popup-container">
 <h1 class="popup-name">${projectsFullDatiel[i].name}</h1>
 <img src="image/close_popup.png" alt="Close Popup" id="popup-close">
 <ul class="info-tags'>
<li class="info-tag">${projectsFullDatiel[i].projectInformation.org}</li>
<li class="info-tag">${projectsFullDatiel[i].projectInformation.type}</li>
<li class="info-tag">${projectsFullDatiel[i].projectInformation.year}</li>
 </ul>
 <img src=${projectsFullDatiel[i].projectImage} alt=${projectsFullDatiel[i].name} class="project-image">
 <div class="bottom-container">
 <p class="project-des">${projectsFullDatiel[i].projectDescription}</p>

 <div class="second-container">
 <ul class="languages-list">
<li class="language-item">${projectsFullDatiel[i].projectLanguages[0]}<li>
<li class="language-item">${projectsFullDatiel[i].projectLanguages[1]}<li>
<li class="language-item">${projectsFullDatiel[i].projectLanguages[2]}<li>
 </ul>
 <div class="popup-button">
 <div class="link-button"><a href=${projectsFullDatiel[i].projectLiveLink} class="link-a">${projectsFullDatiel[0].ProjectLiveText} ${projectsFullDatiel[0].ProjectLiveIcons}</a></div>
 <div class="link-button"><a href=${projectsFullDatiel[i].projectSourceCode} class="link-a">${projectsFullDatiel[0].ProjectSourceText} ${projectsFullDatiel[0].PorjectLiveSource}</a></div>
 </.div>
 </div>
 </div>
 </div>
 </div>`;

    window.scrollTo(0, 540);
    document.body.appendChild(popupContainer);
    const popupClose = document.getElementById('popup-close');

    popupClose.addEventListener('click', () => {
      document.body.removeChild(popupContainer);
    });
  });
}

const storeData = JSON.parse(localStorage.getItem('data'));
if (storeData != null) {
  inputName.value = storeData[0].name;
  inputEmail.value = storeData[0].email;
}

inputName.addEventListener('keyup', () => {
  const dataContainer = [];
  dataContainer.push({ name: inputName.value });
  localStorage.setItem('data', JSON.stringify(dataContainer));

  inputEmail.addEventListener('keyup', () => {
    const emailValue = inputEmail.value;
    dataContainer[0].email = emailValue;
    localStorage.setItem('data', JSON.stringify(dataContainer));
  });
});

sumbitMessage.addEventListener('click', (event) => {
  const emailVerify = /[A-Z]/.test(inputEmail.value);
  if (emailVerify === true) {
    errorMessage.innerText = 'All letters in the email should be lowercase';
    event.preventDefault();
  } else {
    errorMessage.innerText = '';
  }
});