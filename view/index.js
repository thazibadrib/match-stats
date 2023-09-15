function goToDetails(id) {
  localStorage.setItem("matchId", id);
  window.location.href = "matchDetails.html";
}

function onLogOut() {
  window.location.href = "index.html";
}

function onShowAllMatches() {
  window.location.href = "matchGrid.html";
}

$("matchDetails.html").ready(function () {
  const id = localStorage.getItem("matchId");
  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "/match/getOneMatch",
    data: JSON.stringify({ _id: id }),
    success: function (response) {
      console.log(response);
      $(".matches-details-card").empty();
      $(".matches-details-card").append(`
            
            <img
              src=${response.imageUrl}
              alt=""
              class="matches-details-img"
            />
            <div class="matches-details-text-container">
              <h2 class="matches-details-title">${response.title}</h2>
              <p class="matches-details-description">
                ${response.description}
              </p>
            </div>
            
            `);
      $(".matches-comment-list").empty();
      response.comments.forEach((c) => {
        $.ajax({
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify({ _id: c.userId }),
          url: "/user/getUserById",
          success: function (response) {
            console.log(response);
            $(".matches-comment-list").append(`

                            <div class="matches-comment-row">
                            <h3 class="matches-comment-username">${response.firstName} ${response.lastName}</h3>
                            <p class="matches-comment-text">
                              ${c.comment}
                            </p>
                         </div>

                            `);
          },
        });
      });
    },
  });
});

$("#form-sign-up").submit(function (e) {
  e.preventDefault();
  const newUser = {
    firstName: $("#sign-up-first-name").val(),
    lastName: $("#sign-up-last-name").val(),
    email: $("#sign-up-email").val(),
    password: $("#sign-up-password").val(),
  };

  $.ajax({
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(newUser),
    url: "/user/signUp",
    success: function (response) {
      console.log(response);
      $.ajax({
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ email: newUser.email }),
        url: "/user/getUser",
        success: function (response) {
          console.log(response);
          localStorage.setItem("userEmail", response.email);
          localStorage.setItem("userFirstName", response.firstName);
          localStorage.setItem("userLastName", response.lastName);
          localStorage.setItem("userId", response._id);
          window.location.href = "matchGrid.html";
          alert("Sign Up Successful");
        },
      });
    },
  });
});

$("#form-sign-in").submit(function (e) {
  e.preventDefault();
  const user = {
    email: $("#sign-in-email").val(),
    password: $("#sign-in-password").val(),
  };
  $.ajax({
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(user),
    url: "/user/signIn",
    success: function (response) {
      console.log(response);
      $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "/user/getUser",
        data: JSON.stringify({ email: user.email }),
        success: function (response) {
          console.log(response);
          localStorage.setItem("userEmail", response.email);
          localStorage.setItem("userFirstName", response.firstName);
          localStorage.setItem("userLastName", response.lastName);
          localStorage.setItem("userId", response._id);
          window.location.href = "matchGrid.html";
          alert("Sign In Successful");
        },
      });
    },
  });
});
$("matchGrid.html").ready(function () {
  $.ajax({
    method: "GET",
    url: "/match/getAllMatches",
    contentType: "application/json",
    success: function (response) {
      $(".matches-grid").empty();
      response.forEach((m) => {
        $(".matches-grid").append(`
                <div class="matches-grid-card" id=${m._id} onclick="goToDetails('${m._id}')">
                <img
                  src=${m.imageUrl}
                  alt=""
                />
                <div class="matches-grid-card-title">${m.title}</div>
              </div>
                
                `);
      });
    },
  });
});

$("#form-matches-comment").submit(function (e) {
  const matchId = localStorage.getItem("matchId");
  const userId = localStorage.getItem("userId");
  const comment = $("#matches-comment-text").val();
  $.ajax({
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({ matchId, userId, comment }),
    url: "/match/comment",
    success: function (response) {
      console.log(response);
      $.ajax({
        method: "POST",
        contentType: "application/json",
        url: "/match/getOneMatch",
        data: JSON.stringify({ _id: matchId }),
        success: function (response) {
          $(".matches-comment-list").empty();
          response.comments.forEach((c) => {
            $.ajax({
              method: "POST",
              contentType: "application/json",
              data: JSON.stringify({ _id: c.userId }),
              url: "/user/getUserById",
              success: function (response) {
                console.log(response);
                $(".matches-comment-list").append(`

                            <div class="matches-comment-row">
                            <h3 class="matches-comment-username">${response.firstName} ${response.lastName}</h3>
                            <p class="matches-comment-text">
                              ${c.comment}
                            </p>
                         </div>

                            `);
              },
            });
          });
          alert("Comment added");
        },
      });
    },
  });
  $("#form-matches-comment").trigger("reset");
  e.preventDefault();
});
