import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 12,
    },
    profileImage: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

//hash the password before saving user into db
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//compare pssword function
userSchema.methods.comparePassword = async function (userPassword) {
  return await bcrypt.compare(String(userPassword), this.password);
};

const User = mongoose.model("User", userSchema);
export default User;
