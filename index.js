var upcomingMatchesRes = ($.get('http://localhost:3000/api', function(data, status) {
  console.log(status);
  console.log(data);

  $("#match-attr-team1").text(upcomingMatchesRes.responseJSON[2].opponents[0].opponent.name);
  $("#match-attr-team2").text(upcomingMatchesRes.responseJSON[2].opponents[1].opponent.name);

}));
