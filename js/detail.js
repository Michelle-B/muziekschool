$(document).ready(function () {

  const artikelen = {
    1: {
      title: "Hoe mijn passie voor muziek begon",
      date: "12 oktober 2025",
      content: "Ik heb altijd al liefde voor muziek gehad. Wat begon als een hobby groeide uit tot een passie."
    },
    2: {
      title: "Waarom zingen voor kinderen goed is",
      date: "5 augustus 2025",
      content: "Zingen stimuleert taalgevoel en zelfvertrouwen."
    },
    3: {
      title: "Waarom groepslessen motiverender zijn",
      date: "23 juli 2025",
      content: "Samen leren zorgt voor motivatie en plezier."
    }
  };

  const id = new URLSearchParams(window.location.search).get("id");

  if (artikelen[id]) {
    $("#title").text(artikelen[id].title);
    $("#date").text(artikelen[id].date);
    $("#content").text(artikelen[id].content);
  } else {
    $("#blog-detail").text("Artikel niet gevonden");
  }

  $("#blog-detail").hide().fadeIn(2000);

});