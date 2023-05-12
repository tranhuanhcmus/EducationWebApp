import crypto from "crypto";
import open from "open";
import https from "https";
import model from "../models/Model.js";

export const momo = async(req, res, next) => {
    const userId = req.body.id;
    const userName = req.body.name;
    const TotalAmount = req.body.price;

    var partnerCode = "MOMO";
    var accessKey = "F8BBA842ECF85";
    var secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
    var requestId = partnerCode + new Date().getTime();
    var orderId = requestId;
    var orderInfo = `${userName} pay with MoMo`;
    var redirectUrl = `http://localhost:4000/api/momo/${userId}/success`;
    var ipnUrl = "http://localhost:4000/api/momo/result";
    var amount = `${TotalAmount}000`;
    var requestType = "captureWallet";
    var extraData = ""; //pass empty value if your merchant does not have stores

    //before sign HMAC SHA256 with format
    //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
    var rawSignature =
        "accessKey=" +
        accessKey +
        "&amount=" +
        amount +
        "&extraData=" +
        extraData +
        "&ipnUrl=" +
        ipnUrl +
        "&orderId=" +
        orderId +
        "&orderInfo=" +
        orderInfo +
        "&partnerCode=" +
        partnerCode +
        "&redirectUrl=" +
        redirectUrl +
        "&requestId=" +
        requestId +
        "&requestType=" +
        requestType;
    //puts raw signature
    console.log("--------------------RAW SIGNATURE----------------");
    console.log(rawSignature);
    //signature

    var signature = crypto
        .createHmac("sha256", secretkey)
        .update(rawSignature)
        .digest("hex");
    console.log("--------------------SIGNATURE----------------");
    console.log(signature);

    //json object send to MoMo endpoint
    const requestBody = JSON.stringify({
        partnerCode: partnerCode,
        accessKey: accessKey,
        requestId: requestId,
        amount: amount,
        orderId: orderId,
        orderInfo: orderInfo,
        redirectUrl: redirectUrl,
        ipnUrl: ipnUrl,
        extraData: extraData,
        requestType: requestType,
        signature: signature,
        lang: "en",
    });

    //Create the HTTPS objects

    const options = {
        hostname: "test-payment.momo.vn",
        port: 443,
        path: "/v2/gateway/api/create",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(requestBody),
        },
    };
    //Send the request and get the response
    const request = https.request(options, (res) => {
        res.setEncoding("utf8");

        let response = "";

        res.on("data", (body) => {
            response += body;
        });

        res.on("end", async() => {
            const payUrl = await JSON.parse(response).payUrl;
            open(payUrl);
        });
    });

    request.on("error", (e) => {
        console.log(`problem with request: ${e.message}`);
    });
    // write data to request body
    console.log("Sending....");
    request.write(requestBody);
    request.end();
    return res.status(201).json({ message: signature });
};

export const result = async(req, res, next) => {
    console.log("result: " + req);
};

export const payment = async(req, res, next) => {
    const userId = req.params.userId;
    const array = await model.myCart(userId);

    if (!userId) {
        return res.status(404).json({ message: "No user found." });
    }
    if (!array) {
        return res.status(404).json({ userId, array });
    }
    if (req.query.resultCode == 0) {
        try {
            array.forEach(async(element) => {
                const Data = {
                    CourseID: element.CID,
                    UID: userId,
                };
                await model.enrollCourse(Data);
            });
        } catch (error) {
            console.log(error);
        }
    }
    console.log(req.query.resultCode);

    res.redirect(`http://localhost:3000/`);
};