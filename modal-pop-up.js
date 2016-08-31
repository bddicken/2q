
scriptures = {
  "James 2:10" : "For whoever keeps the whole law and yet stumbles in one point, he has become guilty of all.",
  "Titus 3:5" : "He saved us, not on the basis of deeds which we have done in righteousness, but according to His mercy, by the washing of regeneration and renewing by the Holy Spirit,",
  "James 2:19" : "You believe that [fn]God is one. You do well; the demons also believe, and shudder.",
  "Romans 3:12" : "ALL HAVE TURNED ASIDE, TOGETHER THEY HAVE BECOME USELESS; THERE IS NONE WHO DOES GOOD, THERE IS NOT EVEN ONE.",
  "Matthew 5:48" : "Therefore you are to be perfect, as your heavenly Father is perfect.",
  "Matthew 5:21-22" : "\"You have heard that the ancients were told, ‘YOU SHALL NOT COMMIT MURDER’ and ‘Whoever commits murder shall be liable to the court.<br/>' But I say to you that everyone who is angry with his brother shall be guilty before the court; and whoever says to his brother, ‘You good-for-nothing,’ shall be guilty before the supreme court; and whoever says, ‘You fool,’ shall be guilty enough to go into the fiery hell.",
  "1 John 5:13" : "These things I have written to you who believe in the name of the Son of God, so that you may know that you have eternal life."
}

function showModal(modal_id) {
  console.log(modal_id);
  var modal = document.getElementById("scripture-modal");
  document.getElementById("scripture-modal-body").innerHTML = scriptures[modal_id];
  document.getElementById("scripture-modal-header").innerHTML = modal_id;
  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  document.body.addEventListener('touchstart', function(e){
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }, false);
}

var maxPage = 3;
var currentPage = 1;

function goRight() {
  if (currentPage != maxPage) {
    var nav_left = document.getElementById("nav-left");
    nav_left.style.display = "block";

    var cp = document.getElementById("2q-page-" + currentPage);
    var np = document.getElementById("2q-page-" + (currentPage+1));
    cp.style.display = "none";
    np.style.display = "block";
    currentPage++;
    if (currentPage == maxPage) {
      var nav_right = document.getElementById("nav-right");
      nav_right.style.display = "none";
    }
  }
}

function goLeft() {
  if (currentPage != 1) {
    var nav_right = document.getElementById("nav-right");
    nav_right.style.display = "block";

    var cp = document.getElementById("2q-page-" + currentPage);
    var np = document.getElementById("2q-page-" + (currentPage-1));
    cp.style.display = "none";
    np.style.display = "block";
    currentPage--;
    
    if (currentPage == 1) {
      var nav_left = document.getElementById("nav-left");
      nav_left.style.display = "none";
    }
  }
}

