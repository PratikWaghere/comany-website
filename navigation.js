document.addEventListener('DOMContentLoaded', function () {
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');

    function navigateSection(currentSectionId, targetSectionId) {
        document.getElementById(currentSectionId).style.display = 'none';
        document.getElementById(targetSectionId).style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentSection = this.closest('.docs-section').id;
            const nextSection = this.getAttribute('data-next');
            navigateSection(currentSection, nextSection);
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', function () {
            const currentSection = this.closest('.docs-section').id;
            const prevSection = this.getAttribute('data-prev');
            navigateSection(currentSection, prevSection);
        });
    });


    const navLinks = document.querySelectorAll('.nav-link.scrollto');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            
            document.querySelectorAll('.docs-section').forEach(section => {
                section.style.display = 'none';
            });
            
            document.getElementById(targetSection).style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.back-to-top');


    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    
    backToTopButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


document.addEventListener("DOMContentLoaded", function() {

    function getUsernameFromCookies() {
        const name = "username=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return ""; 
    }


    const username = getUsernameFromCookies();

  
    function saveStateToLocalStorage(key) {
        if (username) {
            const fullKey = username + '-' + key;
            localStorage.setItem(fullKey, 'true');
            const now = new Date();
            const expiry = now.getTime() + (30 * 24 * 60 * 60 * 1000); 
            localStorage.setItem(fullKey + '-expiry', expiry);
        }
    }

    function checkLocalStorageExpiry() {
        if (username) {
            const days = Array.from({ length: 21 }, (_, i) => i + 1); 
            days.forEach(function(day) {
                const fullKey = username + '-day-' + day;
                const expiry = localStorage.getItem(fullKey + '-expiry');
                if (expiry && new Date().getTime() > parseInt(expiry)) {
                    localStorage.removeItem(fullKey);
                    localStorage.removeItem(fullKey + '-expiry');
                }
            });

            const mcqKeys = ['mcq-1', 'mcq-2','mcq-3'];
            mcqKeys.forEach(function(mcqKey) {
                const fullKey = username + '-' + mcqKey;
                const expiry = localStorage.getItem(fullKey + '-expiry');
                if (expiry && new Date().getTime() > parseInt(expiry)) {
                    localStorage.removeItem(fullKey);
                    localStorage.removeItem(fullKey + '-expiry');
                }
            });
        }
    }

    
    if (username) {
        const days = Array.from({ length: 14 }, (_, i) => i + 1); // Days 1 to 14
        days.forEach(function(day) {
            const checkbox = document.getElementById('day-' + day);
            const fullKey = username + '-day-' + day;
            const storedValue = localStorage.getItem(fullKey);

            if (storedValue === 'true') {
                checkbox.checked = true;
                checkbox.disabled = false;
            }
        });


        const mcqKeys = ['mcq-1', 'mcq-2' , 'mcq-3'];
        mcqKeys.forEach(function(mcqKey) {
            const mcqCheckbox = document.getElementById(mcqKey);
            const fullKey = username + '-' + mcqKey;
            const storedValue = localStorage.getItem(fullKey);

            if (storedValue === 'true') {
                mcqCheckbox.checked = true;
                mcqCheckbox.disabled = false;
            }
        });
    }

    
    const days = Array.from({ length: 21 }, (_, i) => i + 1);
    days.forEach(function(day) {
        const button = document.getElementById('btn-day-' + day);
        const checkbox = document.getElementById('day-' + day);

        if (button && checkbox) {
            button.addEventListener('click', function() {
                checkbox.checked = true;
                checkbox.disabled = false;
                saveStateToLocalStorage('day-' + day);
            });
        }
    });

   
    const mcqKeys = ['mcq-1', 'mcq-2' , 'mcq-3'];
    mcqKeys.forEach(function(mcqKey) {
        const mcqButton = document.getElementById('btn-' + mcqKey);
        const mcqCheckbox = document.getElementById(mcqKey);

        if (mcqButton && mcqCheckbox) {
            mcqButton.addEventListener('click', function() {
                mcqCheckbox.checked = true;
                mcqCheckbox.disabled = false;
                saveStateToLocalStorage(mcqKey);
            });
        }
    });


    checkLocalStorageExpiry();
});


document.addEventListener('DOMContentLoaded', function () {

    function showSection() {
      const sections = ['section-1', 'section-2' , 'section-3']; 
      const hash = window.location.hash; 

      sections.forEach(id => {
        const section = document.getElementById(id);

        if ('#' + id === hash) {
          section.style.display = 'block';  

        } else {
          section.style.display = 'none';   
        }
      });
    }


    showSection();

    window.addEventListener('hashchange', showSection);
  });

  function relodePage(){
    window.location.reload();
  }

  window.addEventListener("load", function() {
    if (document.title === "404 Not Found" || document.body.innerText.includes("404")) {
      window.location.href = "/login.html";
    }
  });
  
  
  




