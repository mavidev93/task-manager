const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

// const me = new User({
//   name: "abdoreza",
//   password: "     qas      ",
//   age: 22,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => console.log(err));

// xbox
//   .save()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
