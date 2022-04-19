let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//  Model

const auth = require("../middleware/auth");
let admin = require("../Models/admin");
let customer = require("../Models/customer");
const userArea = require("../Models/userArea");
var nodemailer = require("nodemailer");
const areaShedule = require("../Models/areaShedule");
const electricityAccount = require("../Models/electricityAccount");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aarav101221@gmail.com",
    pass: "bfttjpazovxroosz",
  },
});

router.route("/register").post(async (req, res) => {
  try {
    const { firstName, lastName, email, password, checkpassword } = req.body;

    let Role = email.includes("@admin.com");

    if (password !== checkpassword)
      return res.status(400).json({ msg: `password not match  ` });

    if (Role) {
      const existingUser = await admin.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ msg: `user alreay exists  ` });
      }
      const salt = await bcrypt.genSalt();

      const passwordhash = await bcrypt.hash(password, salt);
      console.log(passwordhash);

      let NewUser = new admin({
        firstName,
        lastName,
        email,
        role: "admin",
        password: passwordhash,
      });

      const saveUser = await NewUser.save();

      res.json(saveUser);
      console.log(saveUser);
    } else {
      const existingUser = await customer.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ msg: `user alreay exists  ` });
      }
      const salt = await bcrypt.genSalt();

      const passwordhash = await bcrypt.hash(password, salt);
      console.log(passwordhash);

      let NewUser = new customer({
        firstName,
        lastName,
        email,
        role: "customer",
        password: passwordhash,
      });

      const saveUser = await NewUser.save();

      res.json(saveUser);
      console.log(saveUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { email, password } = req.body;

    let Role = email.includes("@admin.com");

    if (Role) {
      const user = await admin.findOne({ email: email });
      if (!user) {
        return res.status(400).json({ msg: `No user existing in this email ` });
      }
      const ismatch = await bcrypt.compare(password, user.password);
      if (!ismatch) {
        return res.status(400).json({ msg: "email or password invalid " });
      }

      const token = jwt.sign({ id: user._id }, "#123");
      res.json({
        token,
        user: {
          id: user._id,
          role: user.role,
        },
      });
    } else {
      const user = await customer.findOne({ email: email });
      console.log(user.role);
      if (!user) {
        return res.status(400).json({ msg: `No User existing in this email ` });
      }
      const ismatch = await bcrypt.compare(password, user.password);
      if (!ismatch) {
        return res.status(400).json({ msg: "email or password invalid " });
      }

      const token = jwt.sign({ id: user._id }, "#123");
      return res.json({
        token,
        user: {
          id: user._id,
          role: "customer",
        },
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.route("/cm").post(auth, async (req, res) => {
  try {
    const { area, mobile, message, powerTime } = req.body;
    const user = await customer.findById({ _id: req.user });

    if (!area && !message && !mobile && !powerTime)
      return res.status(400).json({ msg: `please enter valid details ` });

    const date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Colombo",
    });

    let complain = new userArea({
      area,
      mobile,
      message,
      powerTime,
      customerName: user.firstName,
      customerId: req.user,
      customerEmail: user.email,
      dateTime: date,
    });

    const complained = await complain.save();

    res.json(complained);

    console.log(req.user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//power cut area shedule time

router.route("/area").post(async (req, res) => {
  try {
    const { area, sheduleTime } = req.body;

    if (!area && !sheduleTime)
      return res.status(400).json({ msg: `please enter valid details ` });

    let areaSheduleTime = new areaShedule({
      area,
      sheduleTime,
    });

    const sheduleResponse = await areaSheduleTime.save();

    res.json(sheduleResponse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//power cut area active shedule time

router.route("/area/act").put(async (req, res) => {
  try {
    const { area, sheduleTime, activeTIme } = req.body;

    if (!area && !sheduleTime)
      return res.status(400).json({ msg: `please enter valid details ` });

    const sheduleResponse = await areaShedule.findOneAndUpdate(
      { area: area },
      { $set: { activeTIme: activeTIme } },
      { new: true }
    );

    res.json(sheduleResponse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//customer complain

router.route("/notification").get(auth, async (req, res) => {
  try {
    const user = await userArea.findOne({ customerId: req.user });

    console.log("user", user);

    if (!user) return res.status(400).json({ msg: `no  request  ` });

    let findrequest = await userArea.find({ customerId: req.user });

    console.log(findrequest);
    return res.status(200).json(findrequest);
  } catch (err) {
    res.status(500).json(err);
  }
});

//replay complain
router.route("/notification/admin").get((req, res) => {
  try {
    userArea.find((err, data) => {
      if (err) console.log(err);
      else return res.json(data);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all customer complain requset

router.route("/cmr").get(auth, async (req, res) => {
  try {
    userArea.find((err, data) => {
      if (err) {
        return next(err);
      } else {
        res.json(data);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//admin reply

router.route("/up/cm").put(auth, async (req, res) => {
  try {
    const { id, sheduleTime, replyMessage, customerEmail } = req.body;
    console.log(id);

    if (!sheduleTime && !replyMessage)
      return res.status(400).json({ msg: `please enter valid details ` });

    const updateData = await userArea.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          sheduleTime: sheduleTime,
          replyMessage: replyMessage,
          adminId: req.user,
        },
      },
      { new: true }
    );

    console.log(customerEmail);

    let mailOptions = {
      from: "aarav101221@gmail.com",
      to: customerEmail,
      subject: "power recover time",
      text: `  ${replyMessage}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return await res.send(updateData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//register elect

router.route("/reg/acc").post(auth, async (req, res) => {
  try {
    const { AreaOffice, accountNo, mobileNo, billUpload } = req.body;
    const user = await customer.findById({ _id: req.user });

    if (!AreaOffice && !accountNo)
      return res.status(400).json({ msg: `please enter valid details ` });

    const date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Colombo",
    });

    console.log(date);

    let saveAcc = new electricityAccount({
      AreaOffice,
      accountNo,
      mobileNo,
      billUpload,
      customerId: req.user,
      customerEmail: user.email,
      dateTime: date,
    });

    const savedAcc = await saveAcc.save();

    res.json(savedAcc);

    console.log(req.user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/account", upload.single("images"), auth, async (req, res) => {
  try {
    // Upload image to cloudinary
    const { AreaOffice, accountNo, mobileNo } = req.body;
    const user = await customer.findById({ _id: req.user });

    const result = await cloudinary.uploader.upload(req.file.path);

    const checkAcc = await electricityAccount.findOne({ accountNo: accountNo });
    if (checkAcc) return res.status(400).json({ msg: `already exsist ` });

    let saveAcc = new electricityAccount({
      AreaOffice,
      accountNo,
      mobileNo,
      customerEmail: user.email,
      customerId: req.user,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });

    let regiserAcc = await saveAcc.save();
    res.json(regiserAcc);
    console.log(regiserAcc);
  } catch (err) {
    console.log(err);
  }
});

router.route("/getAll").get(auth, (req, res) => {
  try {
    electricityAccount.find((err, data) => {
      if (err) {
        return next(err);
      } else {
        res.json(data);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.route("/delete/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const resData = await electricityAccount.findByIdAndDelete({ _id: id });

    console.log(resData);
    res.json(resData);

    var mailOptions = {
      from: "aarav101221@gmail.com",
      to: customerEmail,
      subject: "dear customer",
      text: "Please enter Valid information and Bill ",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.route("/send/notifacation").post(async (req, res) => {
  try {
    const { customerEmail } = req.body;

    console.log("mail", customerEmail);
    var mailOptions = {
      from: "aarav101221@gmail.com",
      to: customerEmail,
      subject: "dear customer",
      text: "Please pay your electricity bill ",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.route("/profile").post(auth, async (req, res) => {
  try {
    const { role } = req.body;
    if (role === "customer") {
      let user = await customer.findById(req.user);

      res.json(user);
      console.log(user);
    } else if (role === "admin") {
      let user = await admin.findById(req.user);

      res.json(user);

      console.log(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.route("/item").put(auth, async (req, res) => {
  try {
    const { firstName, lastName, email, role } = req.body;

    if (role === "customer") {
      let user = await customer.findByIdAndUpdate(
        { _id: req.user },
        {
          $set: req.body,
        }
      );

      res.json(role);
      console.log(user);
    } else if (role === "admin") {
      let user = await admin.findByIdAndUpdate(
        { _id: req.user },
        {
          $set: req.body,
        }
      );
      res.json(user);

      console.log(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
