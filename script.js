

  document.getElementById("year").textContent = new Date().getFullYear();


    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    hiddenElements.forEach((el) => observer.observe(el));
 
  function openProject(title, image, desc, link){

    document.getElementById("modalTitle").textContent = title;

    document.getElementById("modalImage").src = image;

    document.getElementById("modalDesc").textContent = desc;

    document.getElementById("projectLink").href = link;

    document.getElementById("projectModal").classList.add("active");
  }

  function closeProject(){
    document.getElementById("projectModal").classList.remove("active");
  }
