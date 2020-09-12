const express = require("express");
const categories = require("./routes/categories");
const listings = require("./routes/listings");
const listing = require("./routes/listing");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const my = require("./routes/my");
const messages = require("./routes/messages");
const expoPushTokens = require("./routes/expoPushTokens");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();



/////////provinces////
const Alabama = require("./routes/Alabama");
const Alaska = require("./routes/Alaska");
const Arizona = require("./routes/Arizona");
const California = require("./routes/California");
const Colorado = require("./routes/Colorado");
const Connecticut = require("./routes/Connecticut");
const Delaware = require("./routes/Delaware");
const Florida = require("./routes/Florida");
const Georgia = require("./routes/Georgia");
const Hawaii = require("./routes/Hawaii");

const Idaho = require("./routes/Idaho");
const Illinos = require("./routes/Illinos");
const Indiana = require("./routes/Indiana");
const lowa = require("./routes/lowa");
const kansas = require("./routes/kansas");
const Kentucky = require("./routes/Kentucky");
const Louisiana = require("./routes/Louisiana");
const Maine = require("./routes/Maine");
const Maryland = require("./routes/Maryland");
const Massachusetts = require("./routes/Massachusetts");

const Michigan = require("./routes/Michigan");
const Minnesota = require("./routes/Minnesota");
const Missouri = require("./routes/Missouri");
const Mississippi = require("./routes/Mississippi");
const Montana = require("./routes/Montana");
const Nebraska = require("./routes/Nebraska");
const Nevada = require("./routes/Nevada");
const Newhampshire = require("./routes/Newhampshire");
const Newjersey = require("./routes/Newjersey");
const Newmexico = require("./routes/Newmexico");
const Newyork = require("./routes/Newyork");

const Northcarolina = require("./routes/Northcarolina");
const Northdakota = require("./routes/Northdakota");
const Ohio = require("./routes/Ohio");
const Oklahoma = require("./routes/Oklahoma");
const Oregon = require("./routes/Oregon");
const PennyIvania = require("./routes/PennyIvania");
const Rhodeisland = require("./routes/Rhodeisland");
const Southcarolina = require("./routes/Southcarolina");
const Southdakota = require("./routes/Southdakota");

const Tennessee = require("./routes/Tennessee");
const Texas = require("./routes/Texas");
const Utah = require("./routes/Utah");
const Vermont = require("./routes/Vermont");
const Virginia = require("./routes/Virginia");
const Washington = require("./routes/Washington");
const Westvirginia = require("./routes/Westvirginia");
const Wisconsin = require("./routes/Wisconsin");
const Wyoming = require("./routes/Wyoming");


const Delete = require("./routes/delete");

///////////////////////////

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/categories", categories);
app.use("/api/listing", listing);
app.use("/api/listings", listings);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);


app.use("/api/delete", Delete);

//////////////////



app.use("/api/Alabama", Alabama);
app.use("/api/Alaska", Alaska);
app.use("/api/Arizona", Arizona);
app.use("/api/California", California);
app.use("/api/Colorado", Colorado);
app.use("/api/Connecticut", Connecticut);
app.use("/api/Delaware", Delaware);
app.use("/api/Florida", Florida);
app.use("/api/Georgia", Georgia);
app.use("/api/Hawaii", Hawaii);

app.use("/api/Idaho", Idaho);
app.use("/api/Illinos", Illinos);
app.use("/api/Indiana", Indiana);
app.use("/api/lowa", lowa);
app.use("/api/kansas", kansas);
app.use("/api/Kentucky", Kentucky);
app.use("/api/Louisiana", Louisiana);
app.use("/api/Maine", Maine);
app.use("/api/Maryland", Maryland);
app.use("/api/Massachusetts", Massachusetts);

app.use("/api/Michigan", Michigan);
app.use("/api/Minnesota", Minnesota);
app.use("/api/Mississippi", Mississippi);
app.use("/api/Missouri", Missouri);
app.use("/api/Montana", Montana);
app.use("/api/Nebraska", Nebraska);
app.use("/api/Nevada", Nevada);
app.use("/api/Newhampshire", Newhampshire);
app.use("/api/Newjersey", Newjersey);
app.use("/api/Newmexico", Newmexico);
app.use("/api/Newyork", Newyork);

app.use("/api/Northcarolina", Northcarolina);
app.use("/api/Northdakota", Northdakota);
app.use("/api/Ohio", Ohio);
app.use("/api/Oklahoma", Oklahoma);
app.use("/api/Oregon", Oregon);
app.use("/api/PennyIvania", PennyIvania);
app.use("/api/Rhodeisland", Rhodeisland);
app.use("/api/Southcarolina", Southcarolina);
app.use("/api/Southdakota", Southdakota);

app.use("/api/Tennessee", Tennessee);
app.use("/api/Texas", Texas);
app.use("/api/Utah", Utah);
app.use("/api/Vermont", Vermont);
app.use("/api/Virginia", Virginia);
app.use("/api/Washington", Washington);
app.use("/api/Westvirginia", Westvirginia);
app.use("/api/Wisconsin", Wisconsin);
app.use("/api/Wyoming", Wyoming);

//////////
//module.exports = { app };

module.exports = app;

const port = process.env.PORT || config.get("port");
app.listen(port, function() {
  console.log(`Server started on port ${port}...`);
});
