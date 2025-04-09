import User from '../models/userModel.js';

export const generateCodeVerify = async () => {
    let codeVerify = Math.floor(100000 + Math.random() * 900000).toString();
    while (await User.findOne({ codeVerify: codeVerify })) {
        codeVerify = Math.floor(100000 + Math.random() * 900000).toString();
    }
    return codeVerify;
};